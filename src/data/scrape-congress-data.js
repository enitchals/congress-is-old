/**
 * Scrape current US House + Senate membership tables from Wikipedia via the MediaWiki Action API.
 *
 * Sources:
 * - https://en.wikipedia.org/wiki/List_of_current_United_States_representatives#List_of_representatives
 * - https://en.wikipedia.org/wiki/List_of_current_United_States_senators#List_of_senators
 *
 * Output:
 * - congress-data.js (exports houseData + senateData)
 *
 * Usage:
 *   npm i cheerio
 *   node scrape-congress.js
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIKI_API = "https://en.wikipedia.org/w/api.php";

function mmddyyyyFromAnyDateText(raw) {
  // Wikipedia often shows "YYYY-MM-DD" or "Month D, YYYY" or includes footnotes.
  const s = (raw || "").replace(/\[[^\]]*]/g, "").trim(); // remove [1] footnotes
  if (!s) return "";

  // Case 1: YYYY-MM-DD
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    const [, yyyy, mm, dd] = iso;
    return `${mm}/${dd}/${yyyy}`;
  }

  // Case 2: Month D, YYYY
  const mdy = s.match(
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/
  );
  if (mdy) {
    const [, monthName, day, year] = mdy;
    const months = {
      January: "01", February: "02", March: "03", April: "04",
      May: "05", June: "06", July: "07", August: "08",
      September: "09", October: "10", November: "11", December: "12",
    };
    const mm = months[monthName];
    const dd = String(day).padStart(2, "0");
    return `${mm}/${dd}/${year}`;
  }

  // Fallback: try Date.parse (best-effort)
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) {
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  return "";
}

function normalizeParty(partyText) {
  const s = (partyText || "").replace(/\[[^\]]*]/g, "").trim();
  if (!s) return "";
  // Wikipedia tables typically show "Republican" / "Democratic" / "Independent"
  // Sometimes "Democratic–Farmer–Labor" etc; keep exact if unknown.
  if (/Republican/i.test(s)) return "Republican";
  if (/Democratic/i.test(s)) return "Democratic";
  if (/Independent/i.test(s)) return "Independent";
  return s;
}

async function fetchParsedHtml(pageTitle) {
  const url =
    `${WIKI_API}?action=parse&format=json&origin=*` +
    `&page=${encodeURIComponent(pageTitle)}` +
    `&prop=text&formatversion=2`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${pageTitle}`);
  const json = await res.json();
  const html = json?.parse?.text;
  if (!html) throw new Error(`No HTML returned for ${pageTitle}`);
  return html;
}

/**
 * Normalize header text by removing footnote references like [4] and extra whitespace.
 */
function normalizeHeaderText(text) {
  return text.replace(/\[\d+\]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Convert full state name to two-letter abbreviation.
 */
function getStateAbbreviation(stateName) {
  const stateMap = {
    "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
    "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
    "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID",
    "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS",
    "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
    "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
    "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV",
    "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
    "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
    "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
    "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT",
    "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV",
    "Wisconsin": "WI", "Wyoming": "WY", "District of Columbia": "DC"
  };
  return stateMap[stateName] || null;
}

/**
 * Find a table that comes after a specific section heading.
 * This ensures we get the correct table from the specific section.
 * @param {CheerioAPI} $ - Cheerio instance
 * @param {string} sectionHeadingText - Text to find in heading (e.g., "List of senators")
 * @param {string[]} requiredHeaders - Required table headers to match
 */
function findTableAfterSection($, sectionHeadingText, requiredHeaders) {
  // Find the heading by text content (Wikipedia headings like "List of senators")
  const headings = $("h2, h3, h4").filter((i, el) => {
    const text = $(el).text().trim();
    return text.toLowerCase().includes(sectionHeadingText.toLowerCase());
  });
  
  if (headings.length === 0) {
    console.log(`Warning: Could not find section heading containing "${sectionHeadingText}"`);
    // Fall back to searching all tables
    return findTableByHeaders($, requiredHeaders);
  }

  const heading = headings.first();
  console.log(`Found section heading: "${heading.text().trim()}"`);
  
  // Find all tables in the document and check which ones come after our heading
  const allTables = $("table.wikitable").toArray();
  const headingElement = heading[0];
  const allHeaders = [];
  
  // Get all elements in document order
  const allElements = $("*").toArray();
  const headingIndex = allElements.indexOf(headingElement);
  
  for (const tableEl of allTables) {
    const tableIndex = allElements.indexOf(tableEl);
    
    // Only consider tables that come after the heading
    if (tableIndex <= headingIndex) continue;
    
    // Check if there's another major heading between the heading and this table
    let hasInterveningHeading = false;
    for (let i = headingIndex + 1; i < tableIndex; i++) {
      const el = allElements[i];
      if (el.tagName && ["H2", "H3", "H4"].includes(el.tagName)) {
        hasInterveningHeading = true;
        break;
      }
    }
    
    // Skip if there's an intervening heading (table is in a different section)
    if (hasInterveningHeading) continue;
    
    const t = $(tableEl);
    const headers = t
      .find("tr")
      .first()
      .find("th")
      .toArray()
      .map((th) => $(th).text().replace(/\s+/g, " ").trim());
    const normalizedHeaders = headers.map(normalizeHeaderText);

    allHeaders.push(headers);
    
    const hasAll = requiredHeaders.every((h) =>
      normalizedHeaders.some((x) => x === normalizeHeaderText(h))
    );
    if (hasAll) {
      console.log(`Found table after "${sectionHeadingText}" with headers: ${headers.join(" | ")}`);
      return t;
    }
  }
  
  // Debug: log what we found
  console.log(`Found ${allHeaders.length} table(s) after "${sectionHeadingText}". Looking for headers: ${requiredHeaders.join(", ")}`);
  allHeaders.forEach((headers, idx) => {
    console.log(`  Table ${idx + 1} headers: ${headers.join(" | ")}`);
  });
  
  // Fallback: try searching all tables if section-specific search failed
  return findTableByHeaders($, requiredHeaders);
}

/**
 * Find a table by headers (fallback method that searches all tables).
 */
function findTableByHeaders($, requiredHeaders) {
  const tables = $("table.wikitable");
  const allHeaders = [];
  
  for (const el of tables.toArray()) {
    const t = $(el);
    const headers = t
      .find("tr")
      .first()
      .find("th")
      .toArray()
      .map((th) => $(th).text().replace(/\s+/g, " ").trim());
    const normalizedHeaders = headers.map(normalizeHeaderText);

    allHeaders.push(headers);
    
    const hasAll = requiredHeaders.every((h) =>
      normalizedHeaders.some((x) => x === normalizeHeaderText(h))
    );
    if (hasAll) return t;
  }
  
  // Debug: log what we found
  console.log(`Found ${tables.length} wikitable(s). Looking for headers: ${requiredHeaders.join(", ")}`);
  allHeaders.forEach((headers, idx) => {
    console.log(`  Table ${idx + 1} headers: ${headers.join(" | ")}`);
  });
  
  return null;
}

function parseHouse($) {
  // House table headers we want: District | Member/Representative | Party | Born/Birth date
  // Target the specific section: "List of representatives"
  let table = findTableAfterSection($, "List of representatives", ["District", "Member", "Party", "Born"]);
  if (!table) {
    table = findTableAfterSection($, "List of representatives", ["District", "Representative", "Party", "Born"]);
  }
  if (!table) {
    table = findTableAfterSection($, "List of representatives", ["District", "Member", "Party", "Birth date"]);
  }
  if (!table) {
    table = findTableAfterSection($, "List of representatives", ["District", "Representative", "Party", "Birth date"]);
  }
  if (!table) {
    throw new Error("Could not find House table with headers District/Member/Party/Born in section 'List of representatives'");
  }

  const headerRow = table.find("tr").first();
  const headerCells = headerRow.find("th").toArray();
  
  // Build header index accounting for colspan
  const headerIndex = {};
  let dataCellIndex = 0;
  headerCells.forEach((th) => {
    const key = normalizeHeaderText($(th).text());
    const colspan = parseInt($(th).attr("colspan") || "1", 10);
    headerIndex[key] = dataCellIndex;
    dataCellIndex += colspan; // Move index forward by colspan amount
  });

  // Debug: log header index
  console.log("House header index:", JSON.stringify(headerIndex, null, 2));

  // Find the actual data rows (skip header row)
  const allRows = table.find("tr").toArray();
  const rows = allRows.slice(1); // Skip first row (header)
  const out = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = $(row).find("td").toArray();
    if (!cells.length) {
      continue;
    }

    const districtIdx = headerIndex["district"];
    const memberIdx = headerIndex["member"];
    const partyIdx = headerIndex["party"];
    const bornIdx = headerIndex["born"];

    if (districtIdx === undefined || memberIdx === undefined || partyIdx === undefined || bornIdx === undefined) {
      continue;
    }

    // Debug: show all cells in first row
    if (i === 0) {
      console.log(`House row 0: ${cells.length} cells`);
      cells.forEach((cell, idx) => {
        const text = $(cell).text().replace(/\s+/g, " ").trim().substring(0, 40);
        console.log(`  Cell ${idx}: "${text}"`);
      });
    }

    // The header index accounts for colspan, but data cells don't have colspan
    // So we need to map header indices to actual cell positions
    // Since Party has colspan=2 in header, born index (4) should actually be cell 3 in data
    // Let's use the actual cell positions directly
    const district = $(cells[0]).text().replace(/\s+/g, " ").trim();
    const member = $(cells[1]).text().replace(/\s+/g, " ").trim();
    const party = normalizeParty($(cells[2]).text());
    // Born is at index 3 in data (not 4, because Party doesn't span 2 cells in data rows)
    const bornRaw = $(cells[3]).text().replace(/\s+/g, " ").trim();
    const birthdate = mmddyyyyFromAnyDateText(bornRaw);

    // Debug first few rows
    if (i < 3) {
      console.log(`House row ${i}: district="${district.substring(0, 30)}", member="${member.substring(0, 30)}"`);
    }

    // Skip rows where district or member is missing
    if (!district || !member) {
      continue;
    }
    
    // District should be in format like "Alabama 1" or "AL 1"
    // If it looks like a name instead, skip it
    if (district && !district.match(/\d+/) && district.split(" ").length > 1) {
      continue;
    }
    
    if (i < 3) console.log(`House row ${i}: district="${district}", member="${member}", party="${party}", born="${bornRaw}"`);

    // Convert district format to "ST-XX" style
    // Wikipedia uses formats like "Alabama 1" or "AL 1"
    // Normalize to "AL-01" format
    let normDistrict = district;
    
    // Try full state name format: "Alabama 1" -> "AL-01"
    const stateNameMatch = district.match(/^([A-Za-z\s]+)\s+(\d+)$/);
    if (stateNameMatch) {
      const stateName = stateNameMatch[1].trim();
      const districtNum = stateNameMatch[2];
      // Convert state name to abbreviation (basic mapping)
      const stateAbbrev = getStateAbbreviation(stateName);
      if (stateAbbrev) {
        normDistrict = `${stateAbbrev}-${String(districtNum).padStart(2, "0")}`;
      }
    } else {
      // Try abbreviation format: "AL 1" -> "AL-01"
      normDistrict = district.replace(/^([A-Z]{2})\s+(\d+)$/, (_, st, n) => {
        return `${st}-${String(n).padStart(2, "0")}`;
      });
    }
    
    normDistrict = normDistrict.replace(/\s+/g, " ").trim();

    out.push({
      District: normDistrict,
      Name: member,
      Birthdate: birthdate,
      Party: party,
    });
  }

  return out;
}

function parseSenate($) {
  // Senate table headers we want: State | Senator | Party | Born/Birth date
  // Target the specific section: "List of senators"
  let table = findTableAfterSection($, "List of senators", ["State", "Senator", "Party", "Born"]);
  if (!table) {
    table = findTableAfterSection($, "List of senators", ["State", "Senator", "Party", "Birth date"]);
  }
  if (!table) {
    throw new Error("Could not find Senate table with headers State/Senator/Party/Born in section 'List of senators'");
  }

  const headerRow = table.find("tr").first();
  const headerCells = headerRow.find("th").toArray();
  
  // Build header index accounting for colspan
  const headerIndex = {};
  let dataCellIndex = 0;
  headerCells.forEach((th) => {
    const key = normalizeHeaderText($(th).text());
    const colspan = parseInt($(th).attr("colspan") || "1", 10);
    headerIndex[key] = dataCellIndex;
    dataCellIndex += colspan; // Move index forward by colspan amount
  });

  // Debug: log header index
  console.log("Senate header index:", JSON.stringify(headerIndex, null, 2));

  const rows = table.find("tr").slice(1).toArray();
  const out = [];

  for (const row of rows) {
    const cells = $(row).find("td").toArray();
    if (!cells.length) {
      continue;
    }

    const stateIdx = headerIndex["state"];
    const senatorIdx = headerIndex["senator"];
    const partyIdx = headerIndex["party"];
    const bornIdx = headerIndex["born"];

    if (stateIdx === undefined || senatorIdx === undefined || partyIdx === undefined || bornIdx === undefined) {
      continue;
    }

    const stateName = $(cells[stateIdx] || cells[0]).text().replace(/\s+/g, " ").trim();
    const senator = $(cells[senatorIdx] || cells[2]).text().replace(/\s+/g, " ").trim();
    const party = normalizeParty($(cells[partyIdx] || cells[3]).text());
    const bornRaw = $(cells[bornIdx] || cells[5]).text().replace(/\s+/g, " ").trim();
    const birthdate = mmddyyyyFromAnyDateText(bornRaw);

    if (!stateName || !senator) {
      continue;
    }
    
    out.push({
      District: stateName,
      Name: senator,
      Birthdate: birthdate,
      Party: party,
    });
  }

  return out;
}

async function main() {
  const repsHtml = await fetchParsedHtml("List_of_current_United_States_representatives");
  const sensHtml = await fetchParsedHtml("List_of_current_United_States_senators");

  const $reps = cheerio.load(repsHtml);
  const $sens = cheerio.load(sensHtml);

  const houseData = parseHouse($reps);
  const senateData = parseSenate($sens);

  const outJs =
`// Generated from Wikipedia via MediaWiki Action API.
// Representatives: https://en.wikipedia.org/wiki/List_of_current_United_States_representatives#List_of_representatives
// Senators: https://en.wikipedia.org/wiki/List_of_current_United_States_senators#List_of_senators
export const houseData = ${JSON.stringify(houseData, null, 2)};
export const senateData = ${JSON.stringify(senateData, null, 2)};
`;

  const outputPath = path.join(__dirname, "congress-data.js");
  fs.writeFileSync(outputPath, outJs, "utf8");
  console.log(`Wrote ${outputPath} with ${houseData.length} House rows and ${senateData.length} Senate rows.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
