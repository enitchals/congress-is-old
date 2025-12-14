/**
 * Scrape current US House + Senate membership tables from Wikipedia.
 * 
 * Sources:
 * - https://en.wikipedia.org/wiki/List_of_current_United_States_representatives#List_of_representatives
 * - https://en.wikipedia.org/wiki/List_of_current_United_States_senators#List_of_senators
 * 
 * Output:
 * - congress-data.js (exports houseData + senateData)
 * 
 * Usage:
 *   node src/data/update-congress-data.js
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Normalize date text to MM/DD/YYYY format.
 * Handles various Wikipedia date formats.
 */
function normalizeDate(dateText) {
  const s = (dateText || "").replace(/\[[^\]]*]/g, "").trim(); // remove [1] footnotes
  if (!s) return "";

  // Case 1: YYYY-MM-DD (with or without parentheses)
  const iso = s.match(/\(?(\d{4})-(\d{2})-(\d{2})\)?/);
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

  // Case 3: M/D/YY or M/D/YYYY
  const mdySlash = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (mdySlash) {
    const [, month, day, year] = mdySlash;
    const mm = String(month).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    const yyyy = year.length === 2 ? `19${year}` : year;
    return `${mm}/${dd}/${yyyy}`;
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

/**
 * Normalize party text to standard format.
 * Removes footnotes and normalizes to Democratic, Republican, or Independent.
 */
function normalizeParty(partyText) {
  const s = (partyText || "").replace(/\[[^\]]*]/g, "").trim();
  if (!s) return "";
  // Handle variations like "Democratic\n(DFL)[p]"
  if (/Republican/i.test(s)) return "Republican";
  if (/Democratic/i.test(s)) return "Democratic";
  if (/Independent/i.test(s)) return "Independent";
  return s;
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
    "Wisconsin": "WI", "Wyoming": "WY", "District of Columbia": "DC",
    "American Samoa": "AS", "Guam": "GU", "Northern Mariana Islands": "MP",
    "Puerto Rico": "PR", "U.S. Virgin Islands": "VI"
  };
  return stateMap[stateName] || null;
}

/**
 * Normalize district text based on whether it's House or Senate.
 * For House: converts to "ST-XX" format (e.g., "AL-01", "CA-31", "DC-AL")
 * For Senate: keeps full state name (e.g., "Alabama")
 */
function normalizeDistrict(districtText, isHouse) {
  if (!districtText) return "";
  
  const cleaned = districtText.replace(/\s+/g, " ").trim();
  
  if (!isHouse) {
    // Senate: keep full state name
    return cleaned;
  }
  
  // House: normalize to "ST-XX" format
  // Handle formats like "Alabama 1", "AL 1", "DC", "DC-AL"
  
  // Already in correct format (e.g., "CA-31", "DC-AL")
  if (/^[A-Z]{2}-\d{2}$/.test(cleaned) || /^[A-Z]{2}-AL$/.test(cleaned)) {
    return cleaned;
  }
  
  // Format: "Alabama 1" -> "AL-01"
  const stateNameMatch = cleaned.match(/^([A-Za-z\s]+)\s+(\d+)$/);
  if (stateNameMatch) {
    const stateName = stateNameMatch[1].trim();
    const districtNum = stateNameMatch[2];
    const stateAbbrev = getStateAbbreviation(stateName);
    if (stateAbbrev) {
      return `${stateAbbrev}-${String(districtNum).padStart(2, "0")}`;
    }
  }
  
  // Format: "AL 1" -> "AL-01"
  const abbrevMatch = cleaned.match(/^([A-Z]{2})\s+(\d+)$/);
  if (abbrevMatch) {
    const [, stateAbbrev, districtNum] = abbrevMatch;
    return `${stateAbbrev}-${String(districtNum).padStart(2, "0")}`;
  }
  
  // At-large districts: "DC" -> "DC-AL", "Wyoming" -> "WY-AL"
  if (!cleaned.match(/\d/)) {
    const stateAbbrev = getStateAbbreviation(cleaned);
    if (stateAbbrev) {
      return `${stateAbbrev}-AL`;
    }
  }
  
  return cleaned;
}

/**
 * Normalize header text by removing footnote references and extra whitespace.
 */
function normalizeHeaderText(text) {
  return text.replace(/\[\d+\]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Fetch HTML content from a Wikipedia URL.
 */
async function fetchWikipediaPage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} fetching ${url}`);
  }
  return await response.text();
}

/**
 * Find a table that comes after a specific section heading.
 * Uses the fragment identifier to locate the correct table.
 */
function findTableAfterSection($, sectionId) {
  // Find the heading by ID (from fragment identifier)
  // Wikipedia uses IDs like "List_of_senators" or "List_of_representatives"
  let heading = $(`#${sectionId}`);
  
  // If not found by ID, try finding by text content
  if (heading.length === 0) {
    const headings = $("h2, h3, h4").filter((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      const id = $(el).attr("id") || "";
      return text.includes(sectionId.toLowerCase().replace(/_/g, " ")) ||
             id.toLowerCase().includes(sectionId.toLowerCase());
    });
    if (headings.length > 0) {
      heading = headings.first();
    }
  }
  
  if (heading.length === 0) {
    console.log(`Warning: Could not find section heading for "${sectionId}"`);
    // Fallback: try to find any table with wikitable class
    const tables = $("table.wikitable");
    if (tables.length > 0) {
      console.log(`Fallback: Using first wikitable found (${tables.length} total)`);
      return tables.first();
    }
    return null;
  }
  
  console.log(`Found section heading: "${heading.text().trim()}"`);
  
  // Find all tables in the document
  const allTables = $("table.wikitable").toArray();
  if (allTables.length === 0) {
    console.log("Warning: No wikitable tables found");
    return null;
  }
  
  const headingElement = heading[0];
  const allElements = $("*").toArray();
  const headingIndex = allElements.indexOf(headingElement);
  
  if (headingIndex === -1) {
    console.log("Warning: Could not find heading in document elements");
    return allTables.length > 0 ? $(allTables[0]) : null;
  }
  
  // Find the first table after the heading
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
    
    // Skip if there's an intervening heading
    if (hasInterveningHeading) continue;
    
    // Found a table right after our section
    console.log(`Found table after section heading`);
    return $(tableEl);
  }
  
  // Fallback: return the first table after the heading (even if there's an intervening heading)
  console.log("Warning: No table found immediately after heading, using first table after heading");
  for (const tableEl of allTables) {
    const tableIndex = allElements.indexOf(tableEl);
    if (tableIndex > headingIndex) {
      return $(tableEl);
    }
  }
  
  // Last resort: return first table
  if (allTables.length > 0) {
    console.log("Fallback: Using first wikitable table");
    return $(allTables[0]);
  }
  
  return null;
}

/**
 * Parse House table to extract member data.
 */
function parseHouseTable($, table) {
  if (!table || table.length === 0) {
    throw new Error("House table not found");
  }
  
  const headerRow = table.find("tr").first();
  const headerCells = headerRow.find("th").toArray();
  
  if (headerCells.length === 0) {
    console.log("Warning: No header cells found, trying td cells");
    const headerCellsTd = headerRow.find("td").toArray();
    if (headerCellsTd.length > 0) {
      headerCells = headerCellsTd;
    } else {
      throw new Error("No header cells found in House table");
    }
  }
  
  // Build header index map
  const headerIndex = {};
  let dataCellIndex = 0;
  headerCells.forEach((th) => {
    const key = normalizeHeaderText($(th).text());
    const colspan = parseInt($(th).attr("colspan") || "1", 10);
    headerIndex[key] = dataCellIndex;
    dataCellIndex += colspan;
  });
  
  console.log("House header index:", headerIndex);
  
  // Find column indices (flexible matching)
  const districtIdx = headerIndex["district"] ?? headerIndex["district/state"];
  const memberIdx = headerIndex["member"] ?? headerIndex["representative"] ?? headerIndex["name"];
  const partyIdx = headerIndex["party"];
  const bornIdx = headerIndex["born"] ?? headerIndex["birth date"] ?? headerIndex["birthdate"];
  
  if (districtIdx === undefined || memberIdx === undefined || partyIdx === undefined || bornIdx === undefined) {
    console.log("House header index:", headerIndex);
    throw new Error("Could not find required columns in House table");
  }
  
  // Extract data rows
  // Note: Wikipedia uses sub-header rows with district info (e.g., "Alabama 1")
  // These are <th> rows, not <td> rows
  const allRows = table.find("tr").toArray();
  const out = [];
  
  console.log(`Found ${allRows.length} total rows in House table`);
  
  let currentDistrict = "";
  
  // Track active rowspans: map of column index -> { value, remainingRows }
  const activeRowspans = new Map();
  
  for (let i = 1; i < allRows.length; i++) { // Start from row 1 (skip main header)
    const row = $(allRows[i]);
    
    // Check if this is a sub-header row (district header like "Alabama 1")
    // Sub-header rows have a th in the first column with district info, plus td elements
    // These rows ARE data rows - they contain both the district (in th) and member data (in td)
    const subHeader = row.find("th").first();
    let isSubHeaderRow = false;
    if (subHeader.length > 0 && row.find("th").length === 1) {
      const subHeaderText = subHeader.text().replace(/\s+/g, " ").trim();
      // Check if it looks like a district (has state name and number, or "at-large")
      if (subHeaderText.match(/\d+|at-large|At-large/) || getStateAbbreviation(subHeaderText.split(/\s+/)[0])) {
        // This is a district sub-header row - it's also a data row!
        currentDistrict = subHeaderText;
        isSubHeaderRow = true;
        // Only log first few to avoid spam
        if (out.length < 5) {
          console.log(`Found district sub-header at row ${i}: "${currentDistrict}"`);
        }
      }
    }
    
    // This is a data row (either a sub-header row or a regular data row)
    let cells = row.find("td").toArray();
    if (!cells.length) continue;
    
    // Reconstruct full row accounting for rowspans from previous rows
    // When a cell has rowspan, it doesn't appear in subsequent rows, so we need to insert it
    const fullRowCells = [];
    let cellIndex = 0;
    
    for (let col = 0; col < 10; col++) { // Assume max 10 columns
      if (activeRowspans.has(col)) {
        const rowspanData = activeRowspans.get(col);
        fullRowCells.push({ text: rowspanData.value, isRowspan: true });
        rowspanData.remaining--;
        if (rowspanData.remaining === 0) {
          activeRowspans.delete(col);
        }
      } else if (cellIndex < cells.length) {
        const cell = cells[cellIndex];
        const rowspan = parseInt($(cell).attr("rowspan") || "1", 10);
        const cellText = $(cell).text().replace(/\s+/g, " ").trim();
        
        fullRowCells.push({ text: cellText, isRowspan: false });
        
        if (rowspan > 1) {
          activeRowspans.set(col, { value: cellText, remaining: rowspan - 1 });
        }
        cellIndex++;
      } else {
        break;
      }
    }
    
    // Debug first few rows
    if (i < 3) {
      console.log(`House row ${i} (reconstructed):`);
      fullRowCells.forEach((cell, idx) => {
        console.log(`  Cell ${idx}: "${cell.text.substring(0, 50)}"${cell.isRowspan ? " [from rowspan]" : ""}`);
      });
    }
    
    // Now extract data using the reconstructed row
    // District comes from currentDistrict (set by sub-header rows)
    // When we have a sub-header, ALWAYS use it - don't try to get from cells
    let district = currentDistrict || "";
    // Only fall back to cells if we don't have currentDistrict
    if (!district && fullRowCells[districtIdx]) {
      district = fullRowCells[districtIdx].text;
    }
    let member = "";
    
    // For sub-header rows, the structure is: th[district], td[member], td[party], etc.
    // So member is in cells[0] (first td), which maps to fullRowCells[0] after accounting for the th
    // For regular rows after sub-headers, member is also in cell 0
    // Check cell 0 first, then fall back to memberIdx
    if (fullRowCells[0] && fullRowCells[0].text && !fullRowCells[0].isRowspan) {
      // Cell 0 is the member name
      member = fullRowCells[0].text;
    } else if (fullRowCells[memberIdx] && fullRowCells[memberIdx].text) {
      member = fullRowCells[memberIdx].text;
    }
    
    // For sub-header rows, the td cells are: [member, empty, party, birthdate, ...]
    // So indices are: member=0, party=2, birthdate=3
    // The header indices account for colspan, but data cells don't have colspan
    const party = fullRowCells[2] ? normalizeParty(fullRowCells[2].text) : 
                  (fullRowCells[partyIdx] ? normalizeParty(fullRowCells[partyIdx].text) : "");
    const bornRaw = fullRowCells[3] ? fullRowCells[3].text : 
                    (fullRowCells[bornIdx] ? fullRowCells[bornIdx].text : "");
    const birthdate = normalizeDate(bornRaw);
    
    // If we have currentDistrict from sub-header, always use it (trust the sub-header)
    if (currentDistrict) {
      district = currentDistrict;
    }
    
    // Skip rows with missing required fields
    if (!district || !member) {
      // Only log first few skips to avoid spam
      if (out.length < 10) {
        console.log(`Skipping row ${i}: district="${district}", member="${member}", currentDistrict="${currentDistrict}"`);
      }
      continue;
    }
    
    // Only validate district pattern if we don't have currentDistrict from sub-header
    // (sub-headers are trusted, but cell-extracted districts need validation)
    if (!currentDistrict && district && !district.match(/\d+/) && district.split(" ").length > 1 && !district.match(/^[A-Z]{2}$/) && !getStateAbbreviation(district)) {
      if (out.length < 10) {
        console.log(`Skipping row ${i}: district doesn't match pattern: "${district}"`);
      }
      continue;
    }
    
    const normDistrict = normalizeDistrict(district, true);
    
    // Only log first few successful extractions
    if (out.length < 5) {
      console.log(`House row ${i}: district="${normDistrict}", member="${member.substring(0, 30)}", party="${party}", birthdate="${birthdate}"`);
    }
    
    out.push({
      District: normDistrict,
      Name: member,
      Birthdate: birthdate,
      Party: party,
    });
  }
  
  return out;
}

/**
 * Parse Senate table to extract member data.
 */
function parseSenateTable($, table) {
  if (!table || table.length === 0) {
    throw new Error("Senate table not found");
  }
  
  const headerRow = table.find("tr").first();
  let headerCells = headerRow.find("th").toArray();
  
  if (headerCells.length === 0) {
    console.log("Warning: No header cells found, trying td cells");
    const headerCellsTd = headerRow.find("td").toArray();
    if (headerCellsTd.length > 0) {
      headerCells = headerCellsTd;
    } else {
      throw new Error("No header cells found in Senate table");
    }
  }
  
  // Build header index map
  const headerIndex = {};
  let dataCellIndex = 0;
  headerCells.forEach((th) => {
    const key = normalizeHeaderText($(th).text());
    const colspan = parseInt($(th).attr("colspan") || "1", 10);
    headerIndex[key] = dataCellIndex;
    dataCellIndex += colspan;
  });
  
  console.log("Senate header index:", headerIndex);
  
  // Find column indices (flexible matching)
  const stateIdx = headerIndex["state"];
  const senatorIdx = headerIndex["senator"] ?? headerIndex["name"];
  const partyIdx = headerIndex["party"];
  const bornIdx = headerIndex["born"] ?? headerIndex["birth date"] ?? headerIndex["birthdate"];
  
  if (stateIdx === undefined || senatorIdx === undefined || partyIdx === undefined || bornIdx === undefined) {
    console.log("Senate header index:", headerIndex);
    throw new Error("Could not find required columns in Senate table");
  }
  
  // Extract data rows
  const rows = table.find("tr").slice(1).toArray();
  const out = [];
  
  console.log(`Found ${rows.length} data rows in Senate table`);
  
  // Track active rowspans: map of column index -> { value, remainingRows }
  const activeRowspans = new Map();
  
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let cells = $(row).find("td").toArray();
    if (!cells.length) continue;
    
    // Reconstruct full row accounting for rowspans from previous rows
    const fullRowCells = [];
    let cellIndex = 0;
    
    for (let col = 0; col < 15; col++) { // Assume max 15 columns for Senate
      if (activeRowspans.has(col)) {
        const rowspanData = activeRowspans.get(col);
        fullRowCells.push({ text: rowspanData.value, isRowspan: true });
        rowspanData.remaining--;
        if (rowspanData.remaining === 0) {
          activeRowspans.delete(col);
        }
      } else if (cellIndex < cells.length) {
        const cell = cells[cellIndex];
        const rowspan = parseInt($(cell).attr("rowspan") || "1", 10);
        const cellText = $(cell).text().replace(/\s+/g, " ").trim();
        
        fullRowCells.push({ text: cellText, isRowspan: false });
        
        if (rowspan > 1) {
          activeRowspans.set(col, { value: cellText, remaining: rowspan - 1 });
        }
        cellIndex++;
      } else {
        break;
      }
    }
    
    // Debug first few rows
    if (i < 3) {
      console.log(`Senate row ${i} (reconstructed):`);
      fullRowCells.forEach((cell, idx) => {
        console.log(`  Cell ${idx}: "${cell.text.substring(0, 50)}"${cell.isRowspan ? " [from rowspan]" : ""}`);
      });
    }
    
    // Use reconstructed row to get correct cells
    const stateName = fullRowCells[stateIdx] ? fullRowCells[stateIdx].text : "";
    
    // Senator name extraction - simplify and be less restrictive
    // Senator names are usually in links, often in the senator column or nearby
    // For some rows, the senator name is in a th element, not a td
    // Check th elements FIRST (more reliable), then fall back to cells
    let senator = "";
    
    // First check th elements in the row (some senator names are in th, not td)
    // row is a DOM element, so wrap it with $()
    const thElements = $(row).find("th");
    thElements.each((j, th) => {
      const thText = $(th).text().trim();
      // Skip if it's the state name (already have that)
      if (thText === stateName) return;
      const links = $(th).find("a");
      links.each((k, link) => {
        const linkText = $(link).text().trim();
        const href = $(link).attr("href") || "";
        // Look for person name links
        // Exclude party names, file links, education, and single words
        // Also exclude state names
        const isPartyName = /^(Republican|Democratic|Independent)$/i.test(linkText);
        const isStateName = linkText === stateName || getStateAbbreviation(linkText);
        if (linkText && 
            href.match(/^\/wiki\/[A-Z]/) && 
            !linkText.match(/File:|jpg|png|Republican|Democratic|Independent|University|College|School|^None$/i) &&
            linkText.split(" ").length >= 2 &&
            linkText.split(" ").length <= 4 &&
            !isPartyName &&
            !isStateName) {
          senator = linkText;
          return false; // break
        }
      });
      if (senator) return false; // break outer loop
    });
    
    // If not found in th, try the actual cell at senatorIdx (might have links)
    if (!senator && cells[senatorIdx]) {
      const cell = $(cells[senatorIdx]);
      // Check for links first (senator names are usually in links)
      const links = cell.find("a");
      if (links.length > 0) {
        links.each((j, link) => {
          const linkText = $(link).text().trim();
          const href = $(link).attr("href") || "";
          // Less restrictive: just exclude obvious non-name links
          // Exclude party names, file links, and single words
          const isPartyName = /^(Republican|Democratic|Independent)$/i.test(linkText);
          if (linkText && 
              !linkText.match(/File:|jpg|png|Republican|Democratic|Independent|^None$/i) &&
              linkText.split(" ").length >= 2 &&
              !isPartyName) {
            senator = linkText;
            return false; // break
          }
        });
      }
      if (!senator) {
        senator = cell.text().replace(/\s+/g, " ").trim();
      }
    }
    
    // If still not found, search all td cells (broader search)
    // Skip the party cell to avoid picking up party names
    // Also skip cells that are clearly not name cells (like occupation, education, etc.)
    if (!senator) {
      for (let j = 0; j < cells.length; j++) {
        // Skip party cell (partyIdx) to avoid picking up party names
        if (j === partyIdx) continue;
        // Skip cells that are likely not name cells (indices after party are usually not names)
        if (j > partyIdx && j !== senatorIdx) {
          // Only check cells that might contain names (before party or at senatorIdx)
          continue;
        }
        
        const cell = $(cells[j]);
        const links = cell.find("a");
        links.each((k, link) => {
          const linkText = $(link).text().trim();
          const href = $(link).attr("href") || "";
          // Look for person name links (2-4 words, not education/party/state)
          // Exclude party names more aggressively
          const isPartyName = /^(Republican|Democratic|Independent)$/i.test(linkText);
          const isStateName = linkText === stateName || getStateAbbreviation(linkText);
          if (linkText && 
              href.match(/^\/wiki\/[A-Z]/) && 
              !linkText.match(/File:|jpg|png|Republican|Democratic|Independent|University|College|School|^None$/i) &&
              linkText.split(" ").length >= 2 &&
              linkText.split(" ").length <= 4 &&
              !isPartyName &&
              !isStateName) {
            senator = linkText;
            return false; // break
          }
        });
        if (senator) break;
      }
    }
    
    const party = fullRowCells[partyIdx] ? normalizeParty(fullRowCells[partyIdx].text) : "";
    // For Senate, birthdate is typically in cell 4 (after state, portrait, senator, party)
    // But bornIdx from header accounts for colspan, so it might be 5
    // Try both indices - the actual data cell is usually at index 4
    // Also check the actual cells array directly since fullRowCells might have indexing issues
    let bornRaw = "";
    // First try cell 4 (typical position in data rows)
    if (cells[4]) {
      const cell4Text = $(cells[4]).text().replace(/\s+/g, " ").trim();
      if (cell4Text.match(/\(?\d{4}-\d{2}-\d{2}\)?/)) {
        bornRaw = cell4Text;
      }
    }
    // Fallback to fullRowCells indices
    if (!bornRaw && fullRowCells[4] && fullRowCells[4].text.match(/\(?\d{4}-\d{2}-\d{2}\)?/)) {
      bornRaw = fullRowCells[4].text;
    } else if (!bornRaw && fullRowCells[bornIdx]) {
      bornRaw = fullRowCells[bornIdx].text;
    }
    const birthdate = normalizeDate(bornRaw);
    
    // Skip rows with missing required fields
    if (!stateName || !senator) {
      // Log all skipped rows to find the missing 4
      console.log(`Skipping Senate row ${i}: state="${stateName}", senator="${senator}"`);
      continue;
    }
    
    const normDistrict = normalizeDistrict(stateName, false);
    
    if (i < 3) {
      console.log(`Senate row ${i}: state="${normDistrict}", senator="${senator.substring(0, 30)}", party="${party}", birthdate="${birthdate}"`);
    }
    
    out.push({
      District: normDistrict,
      Name: senator,
      Birthdate: birthdate,
      Party: party,
    });
  }
  
  return out;
}

/**
 * Write congressional data to congress-data.js file.
 */
function writeCongressData(houseData, senateData) {
  const membersOfCongressPerAge = `(data) => data.reduce((acc, cur) => {
  const age = Math.round((Date.now() - Date.parse(cur.Birthdate))/(1000*60*60*24*365.25));
  if (acc[age]){
    acc[age] = acc[age]+1
  } else {
    acc[age] = 1
  }
  return acc;
}, {})`;

  const content = `const houseData = ${JSON.stringify(houseData, null, 2)}

const senateData = ${JSON.stringify(senateData, null, 2)}

const membersOfCongressPerAge = ${membersOfCongressPerAge}

console.log(membersOfCongressPerAge(senateData))

const congressData = houseData.concat(senateData);

module.exports = {
  houseData,
  senateData,
  congressData,
  membersOfCongressPerAge
}
`;

  const outputPath = path.join(__dirname, "congress-data.js");
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Wrote ${outputPath} with ${houseData.length} House rows and ${senateData.length} Senate rows.`);
}

/**
 * Main function to orchestrate fetching, parsing, and writing.
 */
async function main() {
  try {
    console.log("Fetching House data...");
    const houseUrl = "https://en.wikipedia.org/wiki/List_of_current_United_States_representatives#List_of_representatives";
    const houseHtml = await fetchWikipediaPage(houseUrl);
    const $house = cheerio.load(houseHtml);
    
    console.log("Finding House table...");
    const houseTable = findTableAfterSection($house, "List_of_representatives");
    const houseData = parseHouseTable($house, houseTable);
    console.log(`Parsed ${houseData.length} House members`);
    
    console.log("Fetching Senate data...");
    const senateUrl = "https://en.wikipedia.org/wiki/List_of_current_United_States_senators#List_of_senators";
    const senateHtml = await fetchWikipediaPage(senateUrl);
    const $senate = cheerio.load(senateHtml);
    
    console.log("Finding Senate table...");
    const senateTable = findTableAfterSection($senate, "List_of_senators");
    const senateData = parseSenateTable($senate, senateTable);
    console.log(`Parsed ${senateData.length} Senate members`);
    
    console.log("Writing data to congress-data.js...");
    writeCongressData(houseData, senateData);
    
    console.log("Done!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
