const congressData = [
  {
    "District": "CA-31",
    "Name": "Grace F. Napolitano",
    "Birthdate": "12/4/1936",
    "Party": "Democratic"
  },
  {
    "District": "DC-AL",
    "Name": "Eleanor Holmes Norton",
    "Birthdate": "6/13/1937",
    "Party": "Democratic"
  },
  {
    "District": "KY-05",
    "Name": "Harold Rogers",
    "Birthdate": "12/31/1937",
    "Party": "Republican"
  },
  {
    "District": "NJ-09",
    "Name": "Bill Pascrell Jr.",
    "Birthdate": "1/25/1937",
    "Party": "Democratic"
  },
  {
    "District": "CA-43",
    "Name": "Maxine Waters",
    "Birthdate": "8/15/1938",
    "Party": "Democratic"
  },
  {
    "District": "MD-05",
    "Name": "Steny H. Hoyer",
    "Birthdate": "6/14/1939",
    "Party": "Democratic"
  },
  {
    "District": "SC-06",
    "Name": "James E. Clyburn",
    "Birthdate": "7/21/1940",
    "Party": "Democratic"
  },
  {
    "District": "CA-11",
    "Name": "Nancy Pelosi",
    "Birthdate": "3/26/1940",
    "Party": "Democratic"
  },
  {
    "District": "IL-07",
    "Name": "Danny K. Davis",
    "Birthdate": "9/6/1941",
    "Party": "Democratic"
  },
  {
    "District": "TX-31",
    "Name": "John Carter",
    "Birthdate": "11/6/1941",
    "Party": "Republican"
  },
  {
    "District": "CA-16",
    "Name": "Anna G. Eshoo",
    "Birthdate": "12/13/1942",
    "Party": "Democratic"
  },
  {
    "District": "FL-24",
    "Name": "Frederica S. Wilson",
    "Birthdate": "11/5/1942",
    "Party": "Democratic"
  },
  {
    "District": "CT-03",
    "Name": "Rosa DeLauro",
    "Birthdate": "3/2/1943",
    "Party": "Democratic"
  },
  {
    "District": "NC-05",
    "Name": "Virginia Foxx",
    "Birthdate": "6/29/1943",
    "Party": "Republican"
  },
  {
    "District": "TX-12",
    "Name": "Kay Granger",
    "Birthdate": "1/18/1943",
    "Party": "Republican"
  },
  {
    "District": "CA-07",
    "Name": "Doris Matsui",
    "Birthdate": "9/25/1944",
    "Party": "Democratic"
  },
  {
    "District": "IL-09",
    "Name": "Jan Schakowsky",
    "Birthdate": "5/26/1944",
    "Party": "Democratic"
  },
  {
    "District": "MO-05",
    "Name": "Emanuel Cleaver II",
    "Birthdate": "10/26/1944",
    "Party": "Democratic"
  },
  {
    "District": "GA-13",
    "Name": "David Scott",
    "Birthdate": "6/27/1945",
    "Party": "Democratic"
  },
  {
    "District": "IN-04",
    "Name": "Jim Baird",
    "Birthdate": "6/4/1945",
    "Party": "Republican"
  },
  {
    "District": "NJ-12",
    "Name": "Bonnie Watson Coleman",
    "Birthdate": "2/6/1945",
    "Party": "Democratic"
  },
  {
    "District": "CA-08",
    "Name": "John Garamendi",
    "Birthdate": "1/24/1945",
    "Party": "Democratic"
  },
  {
    "District": "OH-09",
    "Name": "Marcy Kaptur",
    "Birthdate": "6/17/1946",
    "Party": "Democratic"
  },
  {
    "District": "TX-37",
    "Name": "Lloyd Doggett",
    "Birthdate": "10/6/1946",
    "Party": "Democratic"
  },
  {
    "District": "CA-12",
    "Name": "Barbara Lee",
    "Birthdate": "7/16/1946",
    "Party": "Democratic"
  },
  {
    "District": "NC-12",
    "Name": "Alma Adams",
    "Birthdate": "5/27/1946",
    "Party": "Democratic"
  },
  {
    "District": "MD-02",
    "Name": "C.A. Dutch Ruppersberger",
    "Birthdate": "1/31/1946",
    "Party": "Democratic"
  },
  {
    "District": "TX-09",
    "Name": "Al Green",
    "Birthdate": "9/1/1947",
    "Party": "Democratic"
  },
  {
    "District": "VA-03",
    "Name": "Robert C. Scott",
    "Birthdate": "4/30/1947",
    "Party": "Democratic"
  },
  {
    "District": "GA-02",
    "Name": "Sanford D. Bishop Jr.",
    "Birthdate": "2/4/1947",
    "Party": "Democratic"
  },
  {
    "District": "NY-12",
    "Name": "Jerrold Nadler",
    "Birthdate": "6/13/1947",
    "Party": "Democratic"
  },
  {
    "District": "CA-18",
    "Name": "Zoe Lofgren",
    "Birthdate": "12/21/1947",
    "Party": "Democratic"
  },
  {
    "District": "FL-08",
    "Name": "Bill Posey",
    "Birthdate": "12/18/1947",
    "Party": "Republican"
  },
  {
    "District": "AS-AL",
    "Name": "Aumua Amata Coleman Radewagen",
    "Birthdate": "12/29/1947",
    "Party": "Republican"
  },
  {
    "District": "SC-02",
    "Name": "Joe Wilson",
    "Birthdate": "7/31/1947",
    "Party": "Republican"
  },
  {
    "District": "MI-01",
    "Name": "Jack Bergman",
    "Birthdate": "2/2/1947",
    "Party": "Republican"
  },
  {
    "District": "FL-22",
    "Name": "Lois Frankel",
    "Birthdate": "5/16/1948",
    "Party": "Democratic"
  },
  {
    "District": "MS-02",
    "Name": "Bennie Thompson",
    "Birthdate": "1/28/1948",
    "Party": "Democratic"
  },
  {
    "District": "OR-03",
    "Name": "Earl Blumenauer",
    "Birthdate": "8/16/1948",
    "Party": "Democratic"
  },
  {
    "District": "CT-01",
    "Name": "John B. Larson",
    "Birthdate": "7/22/1948",
    "Party": "Democratic"
  },
  {
    "District": "AZ-07",
    "Name": "Raul M. Grijalva",
    "Birthdate": "2/19/1948",
    "Party": "Democratic"
  },
  {
    "District": "PA-16",
    "Name": "Mike Kelly",
    "Birthdate": "5/10/1948",
    "Party": "Republican"
  },
  {
    "District": "TX-36",
    "Name": "Brian Babin",
    "Birthdate": "3/23/1948",
    "Party": "Republican"
  },
  {
    "District": "MD-07",
    "Name": "Kweisi Mfume",
    "Birthdate": "10/24/1948",
    "Party": "Democratic"
  },
  {
    "District": "NY-20",
    "Name": "Paul Tonko",
    "Birthdate": "6/18/1949",
    "Party": "Democratic"
  },
  {
    "District": "TN-09",
    "Name": "Steve Cohen",
    "Birthdate": "5/24/1949",
    "Party": "Democratic"
  },
  {
    "District": "OK-04",
    "Name": "Tom Cole",
    "Birthdate": "4/28/1949",
    "Party": "Republican"
  },
  {
    "District": "TX-25",
    "Name": "Roger Williams",
    "Birthdate": "9/13/1949",
    "Party": "Republican"
  },
  {
    "District": "MA-01",
    "Name": "Richard E. Neal",
    "Birthdate": "2/14/1949",
    "Party": "Democratic"
  },
  {
    "District": "FL-11",
    "Name": "Daniel Webster",
    "Birthdate": "4/27/1949",
    "Party": "Republican"
  },
  {
    "District": "ID-02",
    "Name": "Mike Simpson",
    "Birthdate": "9/8/50",
    "Party": "Republican"
  },
  {
    "District": "TX-29",
    "Name": "Sylvia R. Garcia",
    "Birthdate": "9/6/50",
    "Party": "Democratic"
  },
  {
    "District": "NV-01",
    "Name": "Dina Titus",
    "Birthdate": "5/23/50",
    "Party": "Democratic"
  },
  {
    "District": "OH-03",
    "Name": "Joyce Beatty",
    "Birthdate": "3/12/50",
    "Party": "Democratic"
  },
  {
    "District": "VA-11",
    "Name": "Gerald E. Connolly",
    "Birthdate": "3/30/50",
    "Party": "Democratic"
  },
  {
    "District": "WV-01",
    "Name": "Carol Miller",
    "Birthdate": "11/4/50",
    "Party": "Republican"
  },
  {
    "District": "TX-18",
    "Name": "Sheila Jackson Lee",
    "Birthdate": "1/12/50",
    "Party": "Democratic"
  },
  {
    "District": "TX-26",
    "Name": "Michael C. Burgess",
    "Birthdate": "12/23/50",
    "Party": "Republican"
  },
  {
    "District": "VA-08",
    "Name": "Donald S. Beyer Jr.",
    "Birthdate": "6/20/50",
    "Party": "Democratic"
  },
  {
    "District": "FL-16",
    "Name": "Vern Buchanan",
    "Birthdate": "5/8/51",
    "Party": "Republican"
  },
  {
    "District": "CA-04",
    "Name": "Mike Thompson",
    "Birthdate": "1/24/51",
    "Party": "Democratic"
  },
  {
    "District": "NJ-06",
    "Name": "Frank Pallone Jr.",
    "Birthdate": "10/30/51",
    "Party": "Democratic"
  },
  {
    "District": "WI-04",
    "Name": "Gwen Moore",
    "Birthdate": "4/18/51",
    "Party": "Democratic"
  },
  {
    "District": "MI-05",
    "Name": "Tim Walberg",
    "Birthdate": "4/12/51",
    "Party": "Republican"
  },
  {
    "District": "GA-12",
    "Name": "Rick W. Allen",
    "Birthdate": "11/7/51",
    "Party": "Republican"
  },
  {
    "District": "UT-04",
    "Name": "Burgess Owens",
    "Birthdate": "8/2/51",
    "Party": "Republican"
  },
  {
    "District": "CA-21",
    "Name": "Jim Costa",
    "Birthdate": "4/13/52",
    "Party": "Democratic"
  },
  {
    "District": "MA-09",
    "Name": "William Keating",
    "Birthdate": "9/6/52",
    "Party": "Democratic"
  },
  {
    "District": "FL-05",
    "Name": "John Rutherford",
    "Birthdate": "9/2/52",
    "Party": "Republican"
  },
  {
    "District": "CA-26",
    "Name": "Julia Brownley",
    "Birthdate": "8/28/52",
    "Party": "Democratic"
  },
  {
    "District": "CA-10",
    "Name": "Mark DeSaulnier",
    "Birthdate": "3/31/52",
    "Party": "Democratic"
  },
  {
    "District": "OR-02",
    "Name": "Cliff Bentz",
    "Birthdate": "1/12/52",
    "Party": "Republican"
  },
  {
    "District": "MO-03",
    "Name": "Blaine Luetkemeyer",
    "Birthdate": "5/7/52",
    "Party": "Republican"
  },
  {
    "District": "HI-01",
    "Name": "Ed Case",
    "Birthdate": "9/27/52",
    "Party": "Democratic"
  },
  {
    "District": "MI-06",
    "Name": "Debbie Dingell",
    "Birthdate": "11/23/53",
    "Party": "Democratic"
  },
  {
    "District": "CA-28",
    "Name": "Judy Chu",
    "Birthdate": "7/7/53",
    "Party": "Democratic"
  },
  {
    "District": "CA-41",
    "Name": "Ken Calvert",
    "Birthdate": "6/8/53",
    "Party": "Republican"
  },
  {
    "District": "NY-07",
    "Name": "Nydia M. Velazquez",
    "Birthdate": "3/28/53",
    "Party": "Democratic"
  },
  {
    "District": "TX-03",
    "Name": "Keith Self",
    "Birthdate": "3/20/53",
    "Party": "Republican"
  },
  {
    "District": "CA-48",
    "Name": "Darrell Issa",
    "Birthdate": "11/1/53",
    "Party": "Republican"
  },
  {
    "District": "CT-02",
    "Name": "Joe Courtney",
    "Birthdate": "4/6/53",
    "Party": "Democratic"
  },
  {
    "District": "NJ-02",
    "Name": "Jeff Van Drew",
    "Birthdate": "2/23/53",
    "Party": "Republican"
  },
  {
    "District": "NY-05",
    "Name": "Gregory W. Meeks",
    "Birthdate": "9/25/53",
    "Party": "Democratic"
  },
  {
    "District": "TX-14",
    "Name": "Randy Weber",
    "Birthdate": "7/2/53",
    "Party": "Republican"
  },
  {
    "District": "FL-02",
    "Name": "Neal Dunn",
    "Birthdate": "2/16/53",
    "Party": "Republican"
  },
  {
    "District": "SC-05",
    "Name": "Ralph Norman",
    "Birthdate": "6/20/53",
    "Party": "Republican"
  },
  {
    "District": "NJ-04",
    "Name": "Christopher H. Smith",
    "Birthdate": "3/4/53",
    "Party": "Republican"
  },
  {
    "District": "PA-03",
    "Name": "Dwight Evans",
    "Birthdate": "5/16/54",
    "Party": "Democratic"
  },
  {
    "District": "MI-13",
    "Name": "Shri Thanedar",
    "Birthdate": "1/1/55",
    "Party": "Democratic"
  },
  {
    "District": "OR-01",
    "Name": "Suzanne Bonamici",
    "Birthdate": "10/14/54",
    "Party": "Democratic"
  },
  {
    "District": "GA-04",
    "Name": "Hank Johnson",
    "Birthdate": "10/2/54",
    "Party": "Democratic"
  },
  {
    "District": "NY-13",
    "Name": "Adriano Espaillat",
    "Birthdate": "9/27/54",
    "Party": "Democratic"
  },
  {
    "District": "MN-04",
    "Name": "Betty McCollum",
    "Birthdate": "7/12/54",
    "Party": "Democratic"
  },
  {
    "District": "CA-32",
    "Name": "Brad Sherman",
    "Birthdate": "10/24/54",
    "Party": "Democratic"
  },
  {
    "District": "AL-06",
    "Name": "Gary Palmer",
    "Birthdate": "5/14/54",
    "Party": "Republican"
  },
  {
    "District": "FL-28",
    "Name": "Carlos Gimenez",
    "Birthdate": "1/17/54",
    "Party": "Republican"
  },
  {
    "District": "OH-06",
    "Name": "Bill Johnson",
    "Birthdate": "11/10/54",
    "Party": "Republican"
  },
  {
    "District": "CO-05",
    "Name": "Doug Lamborn",
    "Birthdate": "5/24/54",
    "Party": "Republican"
  },
  {
    "District": "WI-06",
    "Name": "Glenn Grothman",
    "Birthdate": "7/3/55",
    "Party": "Republican"
  },
  {
    "District": "IL-11",
    "Name": "Bill Foster",
    "Birthdate": "10/7/55",
    "Party": "Democratic"
  },
  {
    "District": "TX-28",
    "Name": "Henry Cuellar",
    "Birthdate": "9/19/55",
    "Party": "Democratic"
  },
  {
    "District": "IA-01",
    "Name": "Mariannette Miller-Meeks",
    "Birthdate": "9/6/55",
    "Party": "Republican"
  },
  {
    "District": "WA-04",
    "Name": "Dan Newhouse",
    "Birthdate": "7/10/55",
    "Party": "Republican"
  },
  {
    "District": "CA-45",
    "Name": "Michelle Steel",
    "Birthdate": "6/21/55",
    "Party": "Republican"
  },
  {
    "District": "MA-08",
    "Name": "Stephen F. Lynch",
    "Birthdate": "3/31/55",
    "Party": "Democratic"
  },
  {
    "District": "TX-17",
    "Name": "Pete Sessions",
    "Birthdate": "3/22/55",
    "Party": "Republican"
  },
  {
    "District": "ME-01",
    "Name": "Chellie Pingree",
    "Birthdate": "4/2/55",
    "Party": "Democratic"
  },
  {
    "District": "MD-06",
    "Name": "David Trone",
    "Birthdate": "9/21/55",
    "Party": "Democratic"
  },
  {
    "District": "AR-02",
    "Name": "French Hill",
    "Birthdate": "12/5/56",
    "Party": "Republican"
  },
  {
    "District": "NH-02",
    "Name": "Ann McLane Kuster",
    "Birthdate": "9/5/56",
    "Party": "Democratic"
  },
  {
    "District": "CA-05",
    "Name": "Tom McClintock",
    "Birthdate": "7/10/56",
    "Party": "Republican"
  },
  {
    "District": "NC-04",
    "Name": "Valerie P. Foushee",
    "Birthdate": "5/7/56",
    "Party": "Democratic"
  },
  {
    "District": "IL-02",
    "Name": "Robin Kelly",
    "Birthdate": "4/30/56",
    "Party": "Democratic"
  },
  {
    "District": "OH-05",
    "Name": "Bob Latta",
    "Birthdate": "4/18/56",
    "Party": "Republican"
  },
  {
    "District": "NC-06",
    "Name": "Kathy Manning",
    "Birthdate": "12/3/56",
    "Party": "Democratic"
  },
  {
    "District": "KS-04",
    "Name": "Ron Estes",
    "Birthdate": "7/19/56",
    "Party": "Republican"
  },
  {
    "District": "IL-04",
    "Name": "Jesus \"Chuy\" Garcia",
    "Birthdate": "4/12/56",
    "Party": "Democratic"
  },
  {
    "District": "IN-06",
    "Name": "Greg Pence",
    "Birthdate": "11/14/56",
    "Party": "Republican"
  },
  {
    "District": "CO-01",
    "Name": "Diana DeGette",
    "Birthdate": "7/29/57",
    "Party": "Democratic"
  },
  {
    "District": "PA-07",
    "Name": "Susan Wild",
    "Birthdate": "6/7/57",
    "Party": "Democratic"
  },
  {
    "District": "WI-07",
    "Name": "Tom Tiffany",
    "Birthdate": "12/30/57",
    "Party": "Republican"
  },
  {
    "District": "GA-01",
    "Name": "Earl L. \"Buddy\" Carter",
    "Birthdate": "9/6/57",
    "Party": "Republican"
  },
  {
    "District": "NY-25",
    "Name": "Joseph D. Morelle",
    "Birthdate": "4/29/57",
    "Party": "Democratic"
  },
  {
    "District": "OH-14",
    "Name": "David Joyce",
    "Birthdate": "3/17/57",
    "Party": "Republican"
  },
  {
    "District": "AR-03",
    "Name": "Steve Womack",
    "Birthdate": "2/18/57",
    "Party": "Republican"
  },
  {
    "District": "PA-13",
    "Name": "John Joyce",
    "Birthdate": "2/8/57",
    "Party": "Republican"
  },
  {
    "District": "MD-01",
    "Name": "Andy Harris",
    "Birthdate": "1/25/57",
    "Party": "Republican"
  },
  {
    "District": "IL-05",
    "Name": "Mike Quigley",
    "Birthdate": "10/17/58",
    "Party": "Democratic"
  },
  {
    "District": "CA-50",
    "Name": "Scott Peters",
    "Birthdate": "6/17/58",
    "Party": "Democratic"
  },
  {
    "District": "OH-02",
    "Name": "Brad Wenstrup",
    "Birthdate": "6/17/58",
    "Party": "Republican"
  },
  {
    "District": "NV-02",
    "Name": "Mark Amodei",
    "Birthdate": "6/12/58",
    "Party": "Republican"
  },
  {
    "District": "NJ-10",
    "Name": "Donald M. Payne Jr.",
    "Birthdate": "12/17/58",
    "Party": "Democratic"
  },
  {
    "District": "NJ-01",
    "Name": "Donald Norcross",
    "Birthdate": "12/13/58",
    "Party": "Democratic"
  },
  {
    "District": "AZ-09",
    "Name": "Paul Gosar",
    "Birthdate": "11/27/58",
    "Party": "Republican"
  },
  {
    "District": "AZ-08",
    "Name": "Debbie Lesko",
    "Birthdate": "11/14/58",
    "Party": "Republican"
  },
  {
    "District": "MI-08",
    "Name": "Dan Kildee",
    "Birthdate": "8/11/58",
    "Party": "Democratic"
  },
  {
    "District": "AL-03",
    "Name": "Mike D. Rogers",
    "Birthdate": "7/16/58",
    "Party": "Republican"
  },
  {
    "District": "AL-01",
    "Name": "Jerry Carl",
    "Birthdate": "6/17/58",
    "Party": "Republican"
  },
  {
    "District": "VA-09",
    "Name": "Morgan Griffith",
    "Birthdate": "3/15/58",
    "Party": "Republican"
  },
  {
    "District": "CA-46",
    "Name": "Lou Correa",
    "Birthdate": "1/24/58",
    "Party": "Democratic"
  },
  {
    "District": "AZ-05",
    "Name": "Andy Biggs",
    "Birthdate": "11/7/58",
    "Party": "Republican"
  },
  {
    "District": "TN-01",
    "Name": "Diana Harshbarger",
    "Birthdate": "1/1/60",
    "Party": "Republican"
  },
  {
    "District": "MS-04",
    "Name": "Mike Ezell",
    "Birthdate": "4/6/59",
    "Party": "Republican"
  },
  {
    "District": "MA-02",
    "Name": "Jim McGovern",
    "Birthdate": "11/20/59",
    "Party": "Democratic"
  },
  {
    "District": "NY-26",
    "Name": "Brian Higgins",
    "Birthdate": "10/6/59",
    "Party": "Democratic"
  },
  {
    "District": "CO-04",
    "Name": "Ken Buck",
    "Birthdate": "2/16/59",
    "Party": "Republican"
  },
  {
    "District": "VA-01",
    "Name": "Rob Wittman",
    "Birthdate": "2/3/59",
    "Party": "Republican"
  },
  {
    "District": "PA-05",
    "Name": "Mary Gay Scanlon",
    "Birthdate": "8/30/59",
    "Party": "Democratic"
  },
  {
    "District": "PA-15",
    "Name": "Glenn \"GT\" Thompson",
    "Birthdate": "7/27/59",
    "Party": "Republican"
  },
  {
    "District": "NM-03",
    "Name": "Teresa Leger Fernandez",
    "Birthdate": "7/1/59",
    "Party": "Democratic"
  },
  {
    "District": "PA-04",
    "Name": "Madeleine Dean",
    "Birthdate": "6/6/59",
    "Party": "Democratic"
  },
  {
    "District": "IL-15",
    "Name": "Mary Miller",
    "Birthdate": "8/7/59",
    "Party": "Republican"
  },
  {
    "District": "CA-39",
    "Name": "Mark Takano",
    "Birthdate": "12/10/60",
    "Party": "Democratic"
  },
  {
    "District": "NC-11",
    "Name": "Chuck Edwards",
    "Birthdate": "9/13/60",
    "Party": "Republican"
  },
  {
    "District": "CA-30",
    "Name": "Adam B. Schiff",
    "Birthdate": "6/22/60",
    "Party": "Democratic"
  },
  {
    "District": "GA-07",
    "Name": "Lucy McBath",
    "Birthdate": "6/1/60",
    "Party": "Democratic"
  },
  {
    "District": "OH-10",
    "Name": "Michael R. Turner",
    "Birthdate": "1/11/60",
    "Party": "Republican"
  },
  {
    "District": "IL-12",
    "Name": "Mike Bost",
    "Birthdate": "12/30/60",
    "Party": "Republican"
  },
  {
    "District": "MT-02",
    "Name": "Matt Rosendale",
    "Birthdate": "7/7/60",
    "Party": "Republican"
  },
  {
    "District": "OK-03",
    "Name": "Frank D. Lucas",
    "Birthdate": "1/6/60",
    "Party": "Republican"
  },
  {
    "District": "CA-01",
    "Name": "Doug LaMalfa",
    "Birthdate": "7/2/60",
    "Party": "Republican"
  },
  {
    "District": "UT-02",
    "Name": "Chris Stewart",
    "Birthdate": "7/15/60",
    "Party": "Republican"
  },
  {
    "District": "UT-03",
    "Name": "John Curtis",
    "Birthdate": "5/10/60",
    "Party": "Republican"
  },
  {
    "District": "RI-01",
    "Name": "David Cicilline",
    "Birthdate": "7/15/61",
    "Party": "Democratic"
  },
  {
    "District": "FL-26",
    "Name": "Mario Diaz-Balart",
    "Birthdate": "9/25/61",
    "Party": "Republican"
  },
  {
    "District": "NY-24",
    "Name": "Claudia Tenney",
    "Birthdate": "2/4/61",
    "Party": "Republican"
  },
  {
    "District": "FL-27",
    "Name": "Maria Elvira Salazar",
    "Birthdate": "11/1/61",
    "Party": "Republican"
  },
  {
    "District": "IL-10",
    "Name": "Brad Schneider",
    "Birthdate": "8/20/61",
    "Party": "Democratic"
  },
  {
    "District": "PA-08",
    "Name": "Matt Cartwright",
    "Birthdate": "5/1/61",
    "Party": "Democratic"
  },
  {
    "District": "CA-52",
    "Name": "Juan C. Vargas",
    "Birthdate": "3/7/61",
    "Party": "Democratic"
  },
  {
    "District": "OK-01",
    "Name": "Kevin Hern",
    "Birthdate": "12/4/61",
    "Party": "Republican"
  },
  {
    "District": "MT-01",
    "Name": "Ryan Zinke",
    "Birthdate": "11/1/61",
    "Party": "Republican"
  },
  {
    "District": "LA-03",
    "Name": "Clay Higgins",
    "Birthdate": "8/24/61",
    "Party": "Republican"
  },
  {
    "District": "MI-02",
    "Name": "John Moolenaar",
    "Birthdate": "5/8/61",
    "Party": "Republican"
  },
  {
    "District": "MD-04",
    "Name": "Glenn F. Ivey",
    "Birthdate": "2/27/61",
    "Party": "Democratic"
  },
  {
    "District": "MN-06",
    "Name": "Tom Emmer",
    "Birthdate": "3/3/61",
    "Party": "Republican"
  },
  {
    "District": "WY-AL",
    "Name": "Harriet M. Hageman",
    "Birthdate": "10/18/62",
    "Party": "Republican"
  },
  {
    "District": "AZ-01",
    "Name": "David Schweikert",
    "Birthdate": "3/3/62",
    "Party": "Republican"
  },
  {
    "District": "OH-12",
    "Name": "Troy Balderson",
    "Birthdate": "1/16/62",
    "Party": "Republican"
  },
  {
    "District": "WA-10",
    "Name": "Marilyn Strickland",
    "Birthdate": "9/25/62",
    "Party": "Democratic"
  },
  {
    "District": "GU-AL",
    "Name": "James C. Moylan",
    "Birthdate": "7/18/62",
    "Party": "Republican"
  },
  {
    "District": "PA-10",
    "Name": "Scott Perry",
    "Birthdate": "5/27/62",
    "Party": "Republican"
  },
  {
    "District": "WA-01",
    "Name": "Suzan DelBene",
    "Birthdate": "2/17/62",
    "Party": "Democratic"
  },
  {
    "District": "DE-AL",
    "Name": "Lisa Blunt Rochester",
    "Birthdate": "2/10/62",
    "Party": "Democratic"
  },
  {
    "District": "MD-08",
    "Name": "Jamie Raskin",
    "Birthdate": "12/13/62",
    "Party": "Democratic"
  },
  {
    "District": "TN-03",
    "Name": "Chuck Fleischmann",
    "Birthdate": "10/11/62",
    "Party": "Republican"
  },
  {
    "District": "MO-02",
    "Name": "Ann Wagner",
    "Birthdate": "9/13/62",
    "Party": "Republican"
  },
  {
    "District": "MD-03",
    "Name": "John Sarbanes",
    "Birthdate": "5/22/62",
    "Party": "Democratic"
  },
  {
    "District": "ID-01",
    "Name": "Russ Fulcher",
    "Birthdate": "3/9/62",
    "Party": "Republican"
  },
  {
    "District": "CA-40",
    "Name": "Young Kim",
    "Birthdate": "10/18/62",
    "Party": "Republican"
  },
  {
    "District": "IN-08",
    "Name": "Larry Bucshon",
    "Birthdate": "5/31/62",
    "Party": "Republican"
  },
  {
    "District": "TX-10",
    "Name": "Michael McCaul",
    "Birthdate": "1/14/62",
    "Party": "Republican"
  },
  {
    "District": "GA-09",
    "Name": "Andrew Clyde",
    "Birthdate": "11/22/63",
    "Party": "Republican"
  },
  {
    "District": "NC-02",
    "Name": "Deborah K. Ross",
    "Birthdate": "6/20/63",
    "Party": "Democratic"
  },
  {
    "District": "LA-02",
    "Name": "Troy Carter",
    "Birthdate": "10/26/63",
    "Party": "Democratic"
  },
  {
    "District": "GA-11",
    "Name": "Barry Loudermilk",
    "Birthdate": "12/22/63",
    "Party": "Republican"
  },
  {
    "District": "WI-05",
    "Name": "Scott Fitzgerald",
    "Birthdate": "11/16/63",
    "Party": "Republican"
  },
  {
    "District": "MO-06",
    "Name": "Sam Graves",
    "Birthdate": "11/7/63",
    "Party": "Republican"
  },
  {
    "District": "MO-04",
    "Name": "Mark Alford",
    "Birthdate": "10/4/63",
    "Party": "Republican"
  },
  {
    "District": "MA-05",
    "Name": "Katherine M. Clark",
    "Birthdate": "7/17/63",
    "Party": "Democratic"
  },
  {
    "District": "NC-03",
    "Name": "Greg Murphy",
    "Birthdate": "3/5/63",
    "Party": "Republican"
  },
  {
    "District": "NE-02",
    "Name": "Don Bacon",
    "Birthdate": "8/16/63",
    "Party": "Republican"
  },
  {
    "District": "CA-29",
    "Name": "Tony Cardenas",
    "Birthdate": "3/31/63",
    "Party": "Democratic"
  },
  {
    "District": "FL-12",
    "Name": "Gus Bilirakis",
    "Birthdate": "2/8/63",
    "Party": "Republican"
  },
  {
    "District": "AL-07",
    "Name": "Terri A. Sewell",
    "Birthdate": "1/1/65",
    "Party": "Democratic"
  },
  {
    "District": "NY-09",
    "Name": "Yvette D. Clarke",
    "Birthdate": "11/21/64",
    "Party": "Democratic"
  },
  {
    "District": "WI-02",
    "Name": "Mark Pocan",
    "Birthdate": "8/14/64",
    "Party": "Democratic"
  },
  {
    "District": "TN-02",
    "Name": "Tim Burchett",
    "Birthdate": "8/25/64",
    "Party": "Republican"
  },
  {
    "District": "NC-08",
    "Name": "Dan Bishop",
    "Birthdate": "7/1/64",
    "Party": "Republican"
  },
  {
    "District": "CA-24",
    "Name": "Salud Carbajal",
    "Birthdate": "11/18/64",
    "Party": "Democratic"
  },
  {
    "District": "TN-07",
    "Name": "Mark E. Green",
    "Birthdate": "11/8/64",
    "Party": "Republican"
  },
  {
    "District": "CA-02",
    "Name": "Jared Huffman",
    "Birthdate": "2/18/64",
    "Party": "Democratic"
  },
  {
    "District": "OR-04",
    "Name": "Val Hoyle",
    "Birthdate": "2/14/64",
    "Party": "Democratic"
  },
  {
    "District": "FL-18",
    "Name": "Scott Franklin",
    "Birthdate": "8/23/64",
    "Party": "Republican"
  },
  {
    "District": "KY-02",
    "Name": "Brett Guthrie",
    "Birthdate": "2/18/64",
    "Party": "Republican"
  },
  {
    "District": "PA-09",
    "Name": "Dan Meuser",
    "Birthdate": "2/10/64",
    "Party": "Republican"
  },
  {
    "District": "PA-11",
    "Name": "Lloyd K. Smucker",
    "Birthdate": "1/23/64",
    "Party": "Republican"
  },
  {
    "District": "TN-04",
    "Name": "Scott DesJarlais",
    "Birthdate": "2/21/64",
    "Party": "Republican"
  },
  {
    "District": "OH-04",
    "Name": "Jim Jordan",
    "Birthdate": "2/17/64",
    "Party": "Republican"
  },
  {
    "District": "CA-06",
    "Name": "Ami Bera",
    "Birthdate": "3/2/65",
    "Party": "Democratic"
  },
  {
    "District": "MN-07",
    "Name": "Michelle Fischbach",
    "Birthdate": "11/3/65",
    "Party": "Republican"
  },
  {
    "District": "LA-01",
    "Name": "Steve Scalise",
    "Birthdate": "10/6/65",
    "Party": "Republican"
  },
  {
    "District": "WA-07",
    "Name": "Pramila Jayapal",
    "Birthdate": "9/21/65",
    "Party": "Democratic"
  },
  {
    "District": "AL-04",
    "Name": "Robert B. Aderholt",
    "Birthdate": "7/22/65",
    "Party": "Republican"
  },
  {
    "District": "WA-02",
    "Name": "Rick Larsen",
    "Birthdate": "6/15/65",
    "Party": "Democratic"
  },
  {
    "District": "WA-09",
    "Name": "Adam Smith",
    "Birthdate": "6/15/65",
    "Party": "Democratic"
  },
  {
    "District": "TN-06",
    "Name": "John W. Rose",
    "Birthdate": "2/23/65",
    "Party": "Republican"
  },
  {
    "District": "CA-20",
    "Name": "Kevin McCarthy",
    "Birthdate": "1/26/65",
    "Party": "Republican"
  },
  {
    "District": "VA-05",
    "Name": "Bob Good",
    "Birthdate": "9/11/65",
    "Party": "Republican"
  },
  {
    "District": "CA-35",
    "Name": "Norma J. Torres",
    "Birthdate": "4/23/65",
    "Party": "Democratic"
  },
  {
    "District": "NV-03",
    "Name": "Susie Lee",
    "Birthdate": "11/7/66",
    "Party": "Democratic"
  },
  {
    "District": "TN-08",
    "Name": "David Kustoff",
    "Birthdate": "10/8/66",
    "Party": "Republican"
  },
  {
    "District": "FL-14",
    "Name": "Kathy Castor",
    "Birthdate": "8/20/66",
    "Party": "Democratic"
  },
  {
    "District": "CT-04",
    "Name": "Jim Himes",
    "Birthdate": "7/5/66",
    "Party": "Democratic"
  },
  {
    "District": "AR-01",
    "Name": "Rick Crawford",
    "Birthdate": "1/22/66",
    "Party": "Republican"
  },
  {
    "District": "FL-25",
    "Name": "Debbie Wasserman Schultz",
    "Birthdate": "9/27/66",
    "Party": "Democratic"
  },
  {
    "District": "MS-01",
    "Name": "Trent Kelly",
    "Birthdate": "3/1/66",
    "Party": "Republican"
  },
  {
    "District": "IL-01",
    "Name": "Jonathan L. Jackson",
    "Birthdate": "1/7/66",
    "Party": "Democratic"
  },
  {
    "District": "SC-03",
    "Name": "Jeff Duncan",
    "Birthdate": "1/7/66",
    "Party": "Republican"
  },
  {
    "District": "AL-02",
    "Name": "Barry Moore",
    "Birthdate": "9/26/66",
    "Party": "Republican"
  },
  {
    "District": "MN-08",
    "Name": "Pete Stauber",
    "Birthdate": "5/10/66",
    "Party": "Republican"
  },
  {
    "District": "MI-09",
    "Name": "Lisa McClain",
    "Birthdate": "4/7/66",
    "Party": "Republican"
  },
  {
    "District": "CA-13",
    "Name": "John Duarte",
    "Birthdate": "9/9/66",
    "Party": "Republican"
  },
  {
    "District": "VI-AL",
    "Name": "Stacey Plaskett",
    "Birthdate": "5/13/66",
    "Party": "Democratic"
  },
  {
    "District": "GA-03",
    "Name": "Drew Ferguson",
    "Birthdate": "11/15/66",
    "Party": "Republican"
  },
  {
    "District": "TX-34",
    "Name": "Vicente Gonzalez",
    "Birthdate": "9/4/67",
    "Party": "Democratic"
  },
  {
    "District": "NY-22",
    "Name": "Brandon Williams",
    "Birthdate": "5/22/67",
    "Party": "Republican"
  },
  {
    "District": "TX-04",
    "Name": "Pat Fallon",
    "Birthdate": "12/19/67",
    "Party": "Republican"
  },
  {
    "District": "PA-06",
    "Name": "Chrissy Houlahan",
    "Birthdate": "6/5/67",
    "Party": "Democratic"
  },
  {
    "District": "GA-10",
    "Name": "Mike Collins",
    "Birthdate": "7/2/67",
    "Party": "Republican"
  },
  {
    "District": "TX-13",
    "Name": "Ronny Jackson",
    "Birthdate": "5/4/67",
    "Party": "Republican"
  },
  {
    "District": "FL-04",
    "Name": "Aaron Bean",
    "Birthdate": "1/25/67",
    "Party": "Republican"
  },
  {
    "District": "AR-04",
    "Name": "Bruce Westerman",
    "Birthdate": "11/18/67",
    "Party": "Republican"
  },
  {
    "District": "WA-08",
    "Name": "Kim Schrier",
    "Birthdate": "8/23/68",
    "Party": "Democratic"
  },
  {
    "District": "NJ-07",
    "Name": "Thomas H. Kean Jr.",
    "Birthdate": "9/5/68",
    "Party": "Republican"
  },
  {
    "District": "VA-10",
    "Name": "Jennifer Wexton",
    "Birthdate": "5/27/68",
    "Party": "Democratic"
  },
  {
    "District": "VT-AL",
    "Name": "Becca Balint",
    "Birthdate": "5/4/68",
    "Party": "Democratic"
  },
  {
    "District": "OR-05",
    "Name": "Lori Chavez-DeRemer",
    "Birthdate": "4/7/68",
    "Party": "Republican"
  },
  {
    "District": "IL-16",
    "Name": "Darin LaHood",
    "Birthdate": "7/5/68",
    "Party": "Republican"
  },
  {
    "District": "TX-22",
    "Name": "Troy Nehls",
    "Birthdate": "4/7/68",
    "Party": "Republican"
  },
  {
    "District": "GA-06",
    "Name": "Rich McCormick",
    "Birthdate": "10/7/68",
    "Party": "Republican"
  },
  {
    "District": "OR-06",
    "Name": "Andrea Salinas",
    "Birthdate": "12/6/69",
    "Party": "Democratic"
  },
  {
    "District": "CA-38",
    "Name": "Linda T. Sanchez",
    "Birthdate": "1/28/69",
    "Party": "Democratic"
  },
  {
    "District": "CA-19",
    "Name": "Jimmy Panetta",
    "Birthdate": "10/1/69",
    "Party": "Democratic"
  },
  {
    "District": "TX-16",
    "Name": "Veronica Escobar",
    "Birthdate": "9/15/69",
    "Party": "Democratic"
  },
  {
    "District": "IN-01",
    "Name": "Frank J. Mrvan",
    "Birthdate": "4/16/69",
    "Party": "Democratic"
  },
  {
    "District": "CA-36",
    "Name": "Ted Lieu",
    "Birthdate": "3/29/69",
    "Party": "Democratic"
  },
  {
    "District": "MN-03",
    "Name": "Dean Phillips",
    "Birthdate": "1/20/69",
    "Party": "Democratic"
  },
  {
    "District": "GA-08",
    "Name": "Austin Scott",
    "Birthdate": "12/10/69",
    "Party": "Republican"
  },
  {
    "District": "WA-05",
    "Name": "Cathy McMorris Rodgers",
    "Birthdate": "5/22/69",
    "Party": "Republican"
  },
  {
    "District": "WI-03",
    "Name": "Derrick Van Orden",
    "Birthdate": "9/15/69",
    "Party": "Republican"
  },
  {
    "District": "IA-04",
    "Name": "Randy Feenstra",
    "Birthdate": "1/14/69",
    "Party": "Republican"
  },
  {
    "District": "MI-04",
    "Name": "Bill Huizenga",
    "Birthdate": "1/31/69",
    "Party": "Republican"
  },
  {
    "District": "NE-03",
    "Name": "Adrian Smith",
    "Birthdate": "12/19/70",
    "Party": "Republican"
  },
  {
    "District": "TX-33",
    "Name": "Marc Veasey",
    "Birthdate": "1/3/71",
    "Party": "Democratic"
  },
  {
    "District": "TX-24",
    "Name": "Beth Van Duyne",
    "Birthdate": "11/16/70",
    "Party": "Republican"
  },
  {
    "District": "CA-23",
    "Name": "Jay Obernolte",
    "Birthdate": "8/18/70",
    "Party": "Republican"
  },
  {
    "District": "NY-08",
    "Name": "Hakeem Jeffries",
    "Birthdate": "8/4/70",
    "Party": "Democratic"
  },
  {
    "District": "CA-15",
    "Name": "Kevin Mullin",
    "Birthdate": "6/15/70",
    "Party": "Democratic"
  },
  {
    "District": "AL-05",
    "Name": "Dale Strong",
    "Birthdate": "5/8/70",
    "Party": "Republican"
  },
  {
    "District": "AZ-04",
    "Name": "Greg Stanton",
    "Birthdate": "3/8/70",
    "Party": "Democratic"
  },
  {
    "District": "OH-08",
    "Name": "Warren Davidson",
    "Birthdate": "3/1/70",
    "Party": "Republican"
  },
  {
    "District": "MS-03",
    "Name": "Michael Guest",
    "Birthdate": "2/4/70",
    "Party": "Republican"
  },
  {
    "District": "TX-06",
    "Name": "Jake Ellzey",
    "Birthdate": "1/24/70",
    "Party": "Republican"
  },
  {
    "District": "NC-09",
    "Name": "Richard Hudson",
    "Birthdate": "11/4/71",
    "Party": "Republican"
  },
  {
    "District": "IL-06",
    "Name": "Sean Casten",
    "Birthdate": "11/23/71",
    "Party": "Democratic"
  },
  {
    "District": "NC-01",
    "Name": "Don Davis",
    "Birthdate": "8/29/71",
    "Party": "Democratic"
  },
  {
    "District": "TN-05",
    "Name": "Andy Ogles",
    "Birthdate": "6/18/71",
    "Party": "Republican"
  },
  {
    "District": "WV-02",
    "Name": "Alex X. Mooney",
    "Birthdate": "6/7/71",
    "Party": "Republican"
  },
  {
    "District": "OH-15",
    "Name": "Mike Carey",
    "Birthdate": "3/13/71",
    "Party": "Republican"
  },
  {
    "District": "VA-02",
    "Name": "Jen Kiggans",
    "Birthdate": "6/18/71",
    "Party": "Republican"
  },
  {
    "District": "KY-04",
    "Name": "Thomas Massie",
    "Birthdate": "1/13/71",
    "Party": "Republican"
  },
  {
    "District": "NC-07",
    "Name": "David Rouzer",
    "Birthdate": "2/16/72",
    "Party": "Republican"
  },
  {
    "District": "CA-25",
    "Name": "Raul Ruiz",
    "Birthdate": "8/25/72",
    "Party": "Democratic"
  },
  {
    "District": "TX-21",
    "Name": "Chip Roy",
    "Birthdate": "8/7/72",
    "Party": "Republican"
  },
  {
    "District": "VA-06",
    "Name": "Ben Cline",
    "Birthdate": "2/29/72",
    "Party": "Republican"
  },
  {
    "District": "KY-01",
    "Name": "James R. Comer",
    "Birthdate": "8/19/72",
    "Party": "Republican"
  },
  {
    "District": "CA-37",
    "Name": "Sydney Kamlager",
    "Birthdate": "7/20/72",
    "Party": "Democratic"
  },
  {
    "District": "TX-19",
    "Name": "Jodey C. Arrington",
    "Birthdate": "3/9/72",
    "Party": "Republican"
  },
  {
    "District": "LA-06",
    "Name": "Garret Graves",
    "Birthdate": "1/31/72",
    "Party": "Republican"
  },
  {
    "District": "MN-02",
    "Name": "Angie Craig",
    "Birthdate": "2/14/72",
    "Party": "Democratic"
  },
  {
    "District": "LA-04",
    "Name": "Mike Johnson",
    "Birthdate": "1/30/72",
    "Party": "Republican"
  },
  {
    "District": "NJ-11",
    "Name": "Mikie Sherrill",
    "Birthdate": "1/19/72",
    "Party": "Democratic"
  },
  {
    "District": "PA-01",
    "Name": "Brian Fitzpatrick",
    "Birthdate": "12/17/73",
    "Party": "Republican"
  },
  {
    "District": "WA-06",
    "Name": "Derek Kilmer",
    "Birthdate": "1/1/74",
    "Party": "Democratic"
  },
  {
    "District": "OK-05",
    "Name": "Stephanie Bice",
    "Birthdate": "11/11/73",
    "Party": "Republican"
  },
  {
    "District": "MA-03",
    "Name": "Lori Trahan",
    "Birthdate": "10/27/73",
    "Party": "Democratic"
  },
  {
    "District": "KY-06",
    "Name": "Andy Barr",
    "Birthdate": "7/24/73",
    "Party": "Republican"
  },
  {
    "District": "CA-47",
    "Name": "Katie Porter",
    "Birthdate": "1/3/74",
    "Party": "Democratic"
  },
  {
    "District": "IL-08",
    "Name": "Raja Krishnamoorthi",
    "Birthdate": "7/19/73",
    "Party": "Democratic"
  },
  {
    "District": "NV-04",
    "Name": "Steven Horsford",
    "Birthdate": "4/29/73",
    "Party": "Democratic"
  },
  {
    "District": "AK-AL",
    "Name": "Mary Peltola",
    "Birthdate": "8/31/73",
    "Party": "Democratic"
  },
  {
    "District": "CT-05",
    "Name": "Jahana Hayes",
    "Birthdate": "3/8/73",
    "Party": "Democratic"
  },
  {
    "District": "CA-34",
    "Name": "Jimmy Gomez",
    "Birthdate": "11/25/74",
    "Party": "Democratic"
  },
  {
    "District": "MA-07",
    "Name": "Ayanna S. Pressley",
    "Birthdate": "2/3/74",
    "Party": "Democratic"
  },
  {
    "District": "IN-07",
    "Name": "Andre Carson",
    "Birthdate": "10/16/74",
    "Party": "Democratic"
  },
  {
    "District": "TX-15",
    "Name": "Monica De La Cruz",
    "Birthdate": "11/11/74",
    "Party": "Republican"
  },
  {
    "District": "FL-06",
    "Name": "Michael Waltz",
    "Birthdate": "1/31/74",
    "Party": "Republican"
  },
  {
    "District": "TX-20",
    "Name": "Joaquin Castro",
    "Birthdate": "9/16/74",
    "Party": "Democratic"
  },
  {
    "District": "GA-14",
    "Name": "Marjorie Taylor Greene",
    "Birthdate": "5/27/74",
    "Party": "Republican"
  },
  {
    "District": "FL-15",
    "Name": "Laurel Lee",
    "Birthdate": "3/26/74",
    "Party": "Republican"
  },
  {
    "District": "TX-01",
    "Name": "Nathaniel Moran",
    "Birthdate": "9/23/74",
    "Party": "Republican"
  },
  {
    "District": "OH-11",
    "Name": "Shontel Brown",
    "Birthdate": "6/24/75",
    "Party": "Democratic"
  },
  {
    "District": "TX-07",
    "Name": "Lizzie Fletcher",
    "Birthdate": "2/13/75",
    "Party": "Democratic"
  },
  {
    "District": "NC-13",
    "Name": "Wiley Nickel",
    "Birthdate": "11/23/75",
    "Party": "Democratic"
  },
  {
    "District": "TX-08",
    "Name": "Morgan Luttrell",
    "Birthdate": "11/7/75",
    "Party": "Republican"
  },
  {
    "District": "NC-10",
    "Name": "Patrick T. McHenry",
    "Birthdate": "10/22/75",
    "Party": "Republican"
  },
  {
    "District": "NY-06",
    "Name": "Grace Meng",
    "Birthdate": "10/1/75",
    "Party": "Democratic"
  },
  {
    "District": "NJ-05",
    "Name": "Josh Gottheimer",
    "Birthdate": "3/8/75",
    "Party": "Democratic"
  },
  {
    "District": "NE-01",
    "Name": "Mike Flood",
    "Birthdate": "2/23/75",
    "Party": "Republican"
  },
  {
    "District": "TX-27",
    "Name": "Michael Cloud",
    "Birthdate": "5/13/75",
    "Party": "Republican"
  },
  {
    "District": "NY-19",
    "Name": "Marc Molinaro",
    "Birthdate": "10/8/75",
    "Party": "Republican"
  },
  {
    "District": "CA-44",
    "Name": "Nanette Barragan",
    "Birthdate": "9/15/76",
    "Party": "Democratic"
  },
  {
    "District": "IL-17",
    "Name": "Eric Sorensen",
    "Birthdate": "3/18/76",
    "Party": "Democratic"
  },
  {
    "District": "OH-01",
    "Name": "Greg Landsman",
    "Birthdate": "12/4/76",
    "Party": "Democratic"
  },
  {
    "District": "ND-AL",
    "Name": "Kelly Armstrong",
    "Birthdate": "10/8/76",
    "Party": "Republican"
  },
  {
    "District": "MO-07",
    "Name": "Eric Burlison",
    "Birthdate": "10/2/76",
    "Party": "Republican"
  },
  {
    "District": "CA-17",
    "Name": "Ro Khanna",
    "Birthdate": "9/13/76",
    "Party": "Democratic"
  },
  {
    "District": "MI-12",
    "Name": "Rashida Tlaib",
    "Birthdate": "7/24/76",
    "Party": "Democratic"
  },
  {
    "District": "MO-01",
    "Name": "Cori Bush",
    "Birthdate": "7/21/76",
    "Party": "Democratic"
  },
  {
    "District": "MI-07",
    "Name": "Elissa Slotkin",
    "Birthdate": "7/10/76",
    "Party": "Democratic"
  },
  {
    "District": "CA-27",
    "Name": "Mike Garcia",
    "Birthdate": "4/24/76",
    "Party": "Republican"
  },
  {
    "District": "HI-02",
    "Name": "Jill N. Tokuda",
    "Birthdate": "3/3/76",
    "Party": "Democratic"
  },
  {
    "District": "SD-AL",
    "Name": "Dusty Johnson",
    "Birthdate": "9/30/76",
    "Party": "Republican"
  },
  {
    "District": "IN-09",
    "Name": "Erin Houchin",
    "Birthdate": "9/24/76",
    "Party": "Republican"
  },
  {
    "District": "NY-16",
    "Name": "Jamaal Bowman",
    "Birthdate": "4/1/76",
    "Party": "Democratic"
  },
  {
    "District": "KS-01",
    "Name": "Tracey Mann",
    "Birthdate": "12/17/76",
    "Party": "Republican"
  },
  {
    "District": "NY-10",
    "Name": "Dan Goldman",
    "Birthdate": "2/26/76",
    "Party": "Democratic"
  },
  {
    "District": "MN-01",
    "Name": "Brad Finstad",
    "Birthdate": "5/30/76",
    "Party": "Republican"
  },
  {
    "District": "CA-42",
    "Name": "Robert Garcia",
    "Birthdate": "12/2/77",
    "Party": "Democratic"
  },
  {
    "District": "IL-13",
    "Name": "Nikki Budzinski",
    "Birthdate": "3/11/77",
    "Party": "Democratic"
  },
  {
    "District": "PA-02",
    "Name": "Brendan F. Boyle",
    "Birthdate": "2/6/77",
    "Party": "Democratic"
  },
  {
    "District": "SC-01",
    "Name": "Nancy Mace",
    "Birthdate": "12/4/77",
    "Party": "Republican"
  },
  {
    "District": "TX-11",
    "Name": "August Pfluger",
    "Birthdate": "12/28/77",
    "Party": "Republican"
  },
  {
    "District": "CA-22",
    "Name": "David Valadao",
    "Birthdate": "4/14/77",
    "Party": "Republican"
  },
  {
    "District": "FL-09",
    "Name": "Darren Soto",
    "Birthdate": "2/25/78",
    "Party": "Democratic"
  },
  {
    "District": "GA-05",
    "Name": "Nikema Williams",
    "Birthdate": "7/30/78",
    "Party": "Democratic"
  },
  {
    "District": "FL-17",
    "Name": "Greg Steube",
    "Birthdate": "5/19/78",
    "Party": "Republican"
  },
  {
    "District": "MA-06",
    "Name": "Seth Moulton",
    "Birthdate": "10/24/78",
    "Party": "Democratic"
  },
  {
    "District": "CA-49",
    "Name": "Mike Levin",
    "Birthdate": "10/20/78",
    "Party": "Democratic"
  },
  {
    "District": "IN-05",
    "Name": "Victoria Spartz",
    "Birthdate": "10/6/78",
    "Party": "Republican"
  },
  {
    "District": "FL-19",
    "Name": "Byron Donalds",
    "Birthdate": "10/28/78",
    "Party": "Republican"
  },
  {
    "District": "NY-01",
    "Name": "Nick LaLota",
    "Birthdate": "6/23/78",
    "Party": "Republican"
  },
  {
    "District": "NM-01",
    "Name": "Melanie Stansbury",
    "Birthdate": "1/31/79",
    "Party": "Democratic"
  },
  {
    "District": "AZ-03",
    "Name": "Ruben Gallego",
    "Birthdate": "11/20/79",
    "Party": "Democratic"
  },
  {
    "District": "AZ-02",
    "Name": "Eli Crane",
    "Birthdate": "1/3/80",
    "Party": "Republican"
  },
  {
    "District": "CA-33",
    "Name": "Pete Aguilar",
    "Birthdate": "6/19/79",
    "Party": "Democratic"
  },
  {
    "District": "CO-06",
    "Name": "Jason Crow",
    "Birthdate": "3/15/79",
    "Party": "Democratic"
  },
  {
    "District": "FL-20",
    "Name": "Sheila Cherfilus-McCormick",
    "Birthdate": "1/25/79",
    "Party": "Democratic"
  },
  {
    "District": "KY-03",
    "Name": "Morgan McGarvey",
    "Birthdate": "12/23/79",
    "Party": "Democratic"
  },
  {
    "District": "VA-07",
    "Name": "Abigail Spanberger",
    "Birthdate": "8/7/79",
    "Party": "Democratic"
  },
  {
    "District": "IN-03",
    "Name": "Jim Banks",
    "Birthdate": "7/16/79",
    "Party": "Republican"
  },
  {
    "District": "OK-02",
    "Name": "Josh Brecheen",
    "Birthdate": "6/19/79",
    "Party": "Republican"
  },
  {
    "District": "IA-03",
    "Name": "Zach Nunn",
    "Birthdate": "5/4/79",
    "Party": "Republican"
  },
  {
    "District": "CO-08",
    "Name": "Yadira Caraveo",
    "Birthdate": "12/23/80",
    "Party": "Democratic"
  },
  {
    "District": "NY-11",
    "Name": "Nicole Malliotakis",
    "Birthdate": "11/11/80",
    "Party": "Republican"
  },
  {
    "District": "FL-07",
    "Name": "Cory Mills",
    "Birthdate": "7/13/80",
    "Party": "Republican"
  },
  {
    "District": "MO-08",
    "Name": "Jason Smith",
    "Birthdate": "6/16/80",
    "Party": "Republican"
  },
  {
    "District": "NH-01",
    "Name": "Chris Pappas",
    "Birthdate": "6/4/80",
    "Party": "Democratic"
  },
  {
    "District": "KS-03",
    "Name": "Sharice Davids",
    "Birthdate": "5/22/80",
    "Party": "Democratic"
  },
  {
    "District": "FL-23",
    "Name": "Jared Moskowitz",
    "Birthdate": "12/18/80",
    "Party": "Democratic"
  },
  {
    "District": "CA-14",
    "Name": "Eric Swalwell",
    "Birthdate": "11/16/80",
    "Party": "Democratic"
  },
  {
    "District": "FL-21",
    "Name": "Brian Mast",
    "Birthdate": "7/10/80",
    "Party": "Republican"
  },
  {
    "District": "UT-01",
    "Name": "Blake D. Moore",
    "Birthdate": "6/22/80",
    "Party": "Republican"
  },
  {
    "District": "TX-23",
    "Name": "Tony Gonzales",
    "Birthdate": "10/10/80",
    "Party": "Republican"
  },
  {
    "District": "TX-30",
    "Name": "Jasmine Crockett",
    "Birthdate": "3/29/81",
    "Party": "Democratic"
  },
  {
    "District": "WI-01",
    "Name": "Bryan Steil",
    "Birthdate": "3/3/81",
    "Party": "Republican"
  },
  {
    "District": "CO-07",
    "Name": "Brittany Pettersen",
    "Birthdate": "12/6/81",
    "Party": "Democratic"
  },
  {
    "District": "NY-23",
    "Name": "Nick Langworthy",
    "Birthdate": "2/27/81",
    "Party": "Republican"
  },
  {
    "District": "TX-38",
    "Name": "Wesley Hunt",
    "Birthdate": "11/13/81",
    "Party": "Republican"
  },
  {
    "District": "LA-05",
    "Name": "Julia Letlow",
    "Birthdate": "3/16/81",
    "Party": "Republican"
  },
  {
    "District": "MI-10",
    "Name": "John James",
    "Birthdate": "6/8/81",
    "Party": "Republican"
  },
  {
    "District": "ME-02",
    "Name": "Jared Golden",
    "Birthdate": "7/25/82",
    "Party": "Democratic"
  },
  {
    "District": "FL-01",
    "Name": "Matt Gaetz",
    "Birthdate": "5/7/82",
    "Party": "Republican"
  },
  {
    "District": "NY-04",
    "Name": "Anthony D'Esposito",
    "Birthdate": "2/22/82",
    "Party": "Republican"
  },
  {
    "District": "TX-05",
    "Name": "Lance Gooden",
    "Birthdate": "12/1/82",
    "Party": "Republican"
  },
  {
    "District": "NJ-03",
    "Name": "Andy Kim",
    "Birthdate": "7/12/82",
    "Party": "Democratic"
  },
  {
    "District": "NY-18",
    "Name": "Pat Ryan",
    "Birthdate": "3/28/82",
    "Party": "Democratic"
  },
  {
    "District": "MI-03",
    "Name": "Hillary Scholten",
    "Birthdate": "2/22/82",
    "Party": "Democratic"
  },
  {
    "District": "MN-05",
    "Name": "Ilhan Omar",
    "Birthdate": "10/4/82",
    "Party": "Democratic"
  },
  {
    "District": "NC-14",
    "Name": "Jeff Jackson",
    "Birthdate": "9/12/82",
    "Party": "Democratic"
  },
  {
    "District": "AZ-06",
    "Name": "Juan Ciscomani",
    "Birthdate": "8/31/82",
    "Party": "Republican"
  },
  {
    "District": "IL-03",
    "Name": "Delia Ramirez",
    "Birthdate": "7/2/83",
    "Party": "Democratic"
  },
  {
    "District": "MI-11",
    "Name": "Haley Stevens",
    "Birthdate": "6/24/83",
    "Party": "Democratic"
  },
  {
    "District": "PA-14",
    "Name": "Guy Reschenthaler",
    "Birthdate": "4/17/83",
    "Party": "Republican"
  },
  {
    "District": "RI-02",
    "Name": "Seth Magaziner",
    "Birthdate": "7/22/83",
    "Party": "Democratic"
  },
  {
    "District": "IA-02",
    "Name": "Ashley Hinson",
    "Birthdate": "6/27/83",
    "Party": "Republican"
  },
  {
    "District": "TX-32",
    "Name": "Colin Allred",
    "Birthdate": "4/15/83",
    "Party": "Democratic"
  },
  {
    "District": "NY-02",
    "Name": "Andrew Garbarino",
    "Birthdate": "9/27/84",
    "Party": "Republican"
  },
  {
    "District": "NM-02",
    "Name": "Gabe Vasquez",
    "Birthdate": "8/3/84",
    "Party": "Democratic"
  },
  {
    "District": "SC-04",
    "Name": "William R. Timmons IV",
    "Birthdate": "4/30/84",
    "Party": "Republican"
  },
  {
    "District": "TX-02",
    "Name": "Daniel Crenshaw",
    "Birthdate": "3/14/84",
    "Party": "Republican"
  },
  {
    "District": "NY-21",
    "Name": "Elise Stefanik",
    "Birthdate": "7/2/84",
    "Party": "Republican"
  },
  {
    "District": "CO-02",
    "Name": "Joe Neguse",
    "Birthdate": "5/13/84",
    "Party": "Democratic"
  },
  {
    "District": "WI-08",
    "Name": "Mike Gallagher",
    "Birthdate": "3/3/84",
    "Party": "Republican"
  },
  {
    "District": "PA-17",
    "Name": "Chris Deluzio",
    "Birthdate": "7/13/84",
    "Party": "Democratic"
  },
  {
    "District": "IN-02",
    "Name": "Rudy Yakym III",
    "Birthdate": "2/24/84",
    "Party": "Republican"
  },
  {
    "District": "CA-03",
    "Name": "Kevin Kiley",
    "Birthdate": "1/30/85",
    "Party": "Republican"
  },
  {
    "District": "SC-07",
    "Name": "Russell Fry",
    "Birthdate": "1/31/85",
    "Party": "Republican"
  },
  {
    "District": "NJ-08",
    "Name": "Rob Menendez",
    "Birthdate": "7/12/85",
    "Party": "Democratic"
  },
  {
    "District": "IL-14",
    "Name": "Lauren Underwood",
    "Birthdate": "10/4/86",
    "Party": "Democratic"
  },
  {
    "District": "OH-13",
    "Name": "Emilia Sykes",
    "Birthdate": "1/4/86",
    "Party": "Democratic"
  },
  {
    "District": "NY-17",
    "Name": "Mike Lawler",
    "Birthdate": "9/9/86",
    "Party": "Republican"
  },
  {
    "District": "CA-09",
    "Name": "Josh Harder",
    "Birthdate": "8/1/86",
    "Party": "Democratic"
  },
  {
    "District": "CO-03",
    "Name": "Lauren Boebert",
    "Birthdate": "12/19/86",
    "Party": "Republican"
  },
  {
    "District": "PA-12",
    "Name": "Summer Lee",
    "Birthdate": "11/26/87",
    "Party": "Democratic"
  },
  {
    "District": "OH-07",
    "Name": "Max Miller",
    "Birthdate": "11/13/88",
    "Party": "Republican"
  },
  {
    "District": "NY-03",
    "Name": "George Santos",
    "Birthdate": "7/22/88",
    "Party": "Republican"
  },
  {
    "District": "NY-15",
    "Name": "Ritchie Torres",
    "Birthdate": "3/12/88",
    "Party": "Democratic"
  },
  {
    "District": "FL-03",
    "Name": "Kat Cammack",
    "Birthdate": "2/16/88",
    "Party": "Republican"
  },
  {
    "District": "WA-03",
    "Name": "Marie Gluesenkamp Perez",
    "Birthdate": "6/4/88",
    "Party": "Democratic"
  },
  {
    "District": "MA-04",
    "Name": "Jake Auchincloss",
    "Birthdate": "1/29/88",
    "Party": "Democratic"
  },
  {
    "District": "KS-02",
    "Name": "Jake LaTurner",
    "Birthdate": "2/17/88",
    "Party": "Republican"
  },
  {
    "District": "NY-14",
    "Name": "Alexandria Ocasio-Cortez",
    "Birthdate": "10/13/89",
    "Party": "Democratic"
  },
  {
    "District": "FL-13",
    "Name": "Anna Paulina Luna",
    "Birthdate": "5/6/89",
    "Party": "Republican"
  },
  {
    "District": "TX-35",
    "Name": "Greg Casar",
    "Birthdate": "5/4/89",
    "Party": "Democratic"
  },
  {
    "District": "CA-51",
    "Name": "Sara Jacobs",
    "Birthdate": "2/1/89",
    "Party": "Democratic"
  },
  {
    "District": "FL-10",
    "Name": "Maxwell Alejandro Frost",
    "Birthdate": "1/17/97",
    "Party": "Democratic"
  }
]

const congressMemberNames = congressData.map(m => m.name)

const congressMemberAges = congressData.map(m => (Date.now() - Date.parse(m.Birthdate))/(1000*60*60*24*365.25))

const membersOfCongressPerAge = congressData.reduce((acc, cur) => {
  const age = Math.round((Date.now() - Date.parse(cur.Birthdate))/(1000*60*60*24*365.25));
  if (acc[age]){
    acc[age] = acc[age]+1
  } else {
    acc[age] = 1
  }
  return acc;
}, {})

// const partyAffiliations = congressData.reduce((acc, cur) => {
//   return acc.includes(cur.Party) ? acc : acc.concat([cur.Party])
// }, [])

console.log(membersOfCongressPerAge)

module.exports = {
  congressData,
  congressMemberAges,
  congressMemberNames,
  membersOfCongressPerAge
}