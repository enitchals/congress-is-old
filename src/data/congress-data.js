const houseData = [
  {
    "District": "AL-01",
    "Name": "Barry Moore",
    "Birthdate": "09/26/1966",
    "Party": "Republican"
  },
  {
    "District": "AL-02",
    "Name": "Shomari Figures",
    "Birthdate": "09/03/1985",
    "Party": "Democratic"
  },
  {
    "District": "AL-03",
    "Name": "Mike Rogers",
    "Birthdate": "07/16/1958",
    "Party": "Republican"
  },
  {
    "District": "AL-04",
    "Name": "Robert Aderholt",
    "Birthdate": "07/22/1965",
    "Party": "Republican"
  },
  {
    "District": "AL-05",
    "Name": "Dale Strong",
    "Birthdate": "05/08/1970",
    "Party": "Republican"
  },
  {
    "District": "AL-06",
    "Name": "Gary Palmer",
    "Birthdate": "05/14/1954",
    "Party": "Republican"
  },
  {
    "District": "AL-07",
    "Name": "Terri Sewell",
    "Birthdate": "01/01/1965",
    "Party": "Democratic"
  },
  {
    "District": "Alaska at-large",
    "Name": "Nick Begich III",
    "Birthdate": "10/27/1977",
    "Party": "Republican"
  },
  {
    "District": "AZ-01",
    "Name": "David Schweikert",
    "Birthdate": "03/03/1962",
    "Party": "Republican"
  },
  {
    "District": "AZ-02",
    "Name": "Eli Crane",
    "Birthdate": "01/03/1980",
    "Party": "Republican"
  },
  {
    "District": "AZ-03",
    "Name": "Yassamin Ansari",
    "Birthdate": "04/07/1992",
    "Party": "Democratic"
  },
  {
    "District": "AZ-04",
    "Name": "Greg Stanton",
    "Birthdate": "03/08/1970",
    "Party": "Democratic"
  },
  {
    "District": "AZ-05",
    "Name": "Andy Biggs",
    "Birthdate": "11/07/1958",
    "Party": "Republican"
  },
  {
    "District": "AZ-06",
    "Name": "Juan Ciscomani",
    "Birthdate": "08/31/1982",
    "Party": "Republican"
  },
  {
    "District": "AZ-07",
    "Name": "Adelita Grijalva",
    "Birthdate": "10/30/1970",
    "Party": "Democratic"
  },
  {
    "District": "AZ-08",
    "Name": "Abraham Hamadeh",
    "Birthdate": "05/15/1991",
    "Party": "Republican"
  },
  {
    "District": "AZ-09",
    "Name": "Paul Gosar",
    "Birthdate": "11/27/1958",
    "Party": "Republican"
  },
  {
    "District": "AR-01",
    "Name": "Rick Crawford",
    "Birthdate": "01/22/1966",
    "Party": "Republican"
  },
  {
    "District": "AR-02",
    "Name": "French Hill",
    "Birthdate": "12/05/1956",
    "Party": "Republican"
  },
  {
    "District": "AR-03",
    "Name": "Steve Womack",
    "Birthdate": "02/18/1957",
    "Party": "Republican"
  },
  {
    "District": "AR-04",
    "Name": "Bruce Westerman",
    "Birthdate": "11/18/1967",
    "Party": "Republican"
  },
  {
    "District": "CA-01",
    "Name": "Doug LaMalfa",
    "Birthdate": "07/02/1960",
    "Party": "Republican"
  },
  {
    "District": "CA-02",
    "Name": "Jared Huffman",
    "Birthdate": "02/18/1964",
    "Party": "Democratic"
  },
  {
    "District": "CA-03",
    "Name": "Kevin Kiley",
    "Birthdate": "01/30/1985",
    "Party": "Republican"
  },
  {
    "District": "CA-04",
    "Name": "Mike Thompson",
    "Birthdate": "01/24/1951",
    "Party": "Democratic"
  },
  {
    "District": "CA-05",
    "Name": "Tom McClintock",
    "Birthdate": "07/10/1956",
    "Party": "Republican"
  },
  {
    "District": "CA-06",
    "Name": "Ami Bera",
    "Birthdate": "03/02/1965",
    "Party": "Democratic"
  },
  {
    "District": "CA-07",
    "Name": "Doris Matsui",
    "Birthdate": "09/25/1944",
    "Party": "Democratic"
  },
  {
    "District": "CA-08",
    "Name": "John Garamendi",
    "Birthdate": "01/24/1945",
    "Party": "Democratic"
  },
  {
    "District": "CA-09",
    "Name": "Josh Harder",
    "Birthdate": "08/01/1986",
    "Party": "Democratic"
  },
  {
    "District": "CA-10",
    "Name": "Mark DeSaulnier",
    "Birthdate": "03/31/1952",
    "Party": "Democratic"
  },
  {
    "District": "CA-11",
    "Name": "Nancy Pelosi",
    "Birthdate": "03/26/1940",
    "Party": "Democratic"
  },
  {
    "District": "CA-12",
    "Name": "Lateefah Simon",
    "Birthdate": "01/29/1977",
    "Party": "Democratic"
  },
  {
    "District": "CA-13",
    "Name": "Adam Gray",
    "Birthdate": "09/23/1977",
    "Party": "Democratic"
  },
  {
    "District": "CA-14",
    "Name": "Eric Swalwell",
    "Birthdate": "11/16/1980",
    "Party": "Democratic"
  },
  {
    "District": "CA-15",
    "Name": "Kevin Mullin",
    "Birthdate": "06/15/1970",
    "Party": "Democratic"
  },
  {
    "District": "CA-16",
    "Name": "Sam Liccardo",
    "Birthdate": "04/16/1970",
    "Party": "Democratic"
  },
  {
    "District": "CA-17",
    "Name": "Ro Khanna",
    "Birthdate": "09/13/1976",
    "Party": "Democratic"
  },
  {
    "District": "CA-18",
    "Name": "Zoe Lofgren",
    "Birthdate": "12/21/1947",
    "Party": "Democratic"
  },
  {
    "District": "CA-19",
    "Name": "Jimmy Panetta",
    "Birthdate": "10/01/1969",
    "Party": "Democratic"
  },
  {
    "District": "CA-20",
    "Name": "Vince Fong",
    "Birthdate": "10/24/1979",
    "Party": "Republican"
  },
  {
    "District": "CA-21",
    "Name": "Jim Costa",
    "Birthdate": "04/13/1952",
    "Party": "Democratic"
  },
  {
    "District": "CA-22",
    "Name": "David Valadao",
    "Birthdate": "04/14/1977",
    "Party": "Republican"
  },
  {
    "District": "CA-23",
    "Name": "Jay Obernolte",
    "Birthdate": "08/18/1970",
    "Party": "Republican"
  },
  {
    "District": "CA-24",
    "Name": "Salud Carbajal",
    "Birthdate": "11/18/1964",
    "Party": "Democratic"
  },
  {
    "District": "CA-25",
    "Name": "Raul Ruiz",
    "Birthdate": "08/25/1972",
    "Party": "Democratic"
  },
  {
    "District": "CA-26",
    "Name": "Julia Brownley",
    "Birthdate": "08/28/1952",
    "Party": "Democratic"
  },
  {
    "District": "CA-27",
    "Name": "George Whitesides",
    "Birthdate": "03/03/1974",
    "Party": "Democratic"
  },
  {
    "District": "CA-28",
    "Name": "Judy Chu",
    "Birthdate": "07/07/1953",
    "Party": "Democratic"
  },
  {
    "District": "CA-29",
    "Name": "Luz Rivas",
    "Birthdate": "02/06/1974",
    "Party": "Democratic"
  },
  {
    "District": "CA-30",
    "Name": "Laura Friedman",
    "Birthdate": "12/03/1966",
    "Party": "Democratic"
  },
  {
    "District": "CA-31",
    "Name": "Gil Cisneros",
    "Birthdate": "02/12/1971",
    "Party": "Democratic"
  },
  {
    "District": "CA-32",
    "Name": "Brad Sherman",
    "Birthdate": "10/24/1954",
    "Party": "Democratic"
  },
  {
    "District": "CA-33",
    "Name": "Pete Aguilar",
    "Birthdate": "06/19/1979",
    "Party": "Democratic"
  },
  {
    "District": "CA-34",
    "Name": "Jimmy Gomez",
    "Birthdate": "11/25/1974",
    "Party": "Democratic"
  },
  {
    "District": "CA-35",
    "Name": "Norma Torres",
    "Birthdate": "04/04/1965",
    "Party": "Democratic"
  },
  {
    "District": "CA-36",
    "Name": "Ted Lieu",
    "Birthdate": "03/29/1969",
    "Party": "Democratic"
  },
  {
    "District": "CA-37",
    "Name": "Sydney Kamlager-Dove",
    "Birthdate": "07/20/1972",
    "Party": "Democratic"
  },
  {
    "District": "CA-38",
    "Name": "Linda Sánchez",
    "Birthdate": "01/28/1969",
    "Party": "Democratic"
  },
  {
    "District": "CA-39",
    "Name": "Mark Takano",
    "Birthdate": "12/10/1960",
    "Party": "Democratic"
  },
  {
    "District": "CA-40",
    "Name": "Young Kim",
    "Birthdate": "10/18/1962",
    "Party": "Republican"
  },
  {
    "District": "CA-41",
    "Name": "Ken Calvert",
    "Birthdate": "06/08/1953",
    "Party": "Republican"
  },
  {
    "District": "CA-42",
    "Name": "Robert Garcia",
    "Birthdate": "12/02/1977",
    "Party": "Democratic"
  },
  {
    "District": "CA-43",
    "Name": "Maxine Waters",
    "Birthdate": "08/15/1938",
    "Party": "Democratic"
  },
  {
    "District": "CA-44",
    "Name": "Nanette Barragán",
    "Birthdate": "09/15/1976",
    "Party": "Democratic"
  },
  {
    "District": "CA-45",
    "Name": "Derek Tran",
    "Birthdate": "12/22/1980",
    "Party": "Democratic"
  },
  {
    "District": "CA-46",
    "Name": "Lou Correa",
    "Birthdate": "01/24/1958",
    "Party": "Democratic"
  },
  {
    "District": "CA-47",
    "Name": "Dave Min",
    "Birthdate": "03/05/1976",
    "Party": "Democratic"
  },
  {
    "District": "CA-48",
    "Name": "Darrell Issa",
    "Birthdate": "11/01/1953",
    "Party": "Republican"
  },
  {
    "District": "CA-49",
    "Name": "Mike Levin",
    "Birthdate": "10/20/1978",
    "Party": "Democratic"
  },
  {
    "District": "CA-50",
    "Name": "Scott Peters",
    "Birthdate": "06/17/1958",
    "Party": "Democratic"
  },
  {
    "District": "CA-51",
    "Name": "Sara Jacobs",
    "Birthdate": "02/01/1989",
    "Party": "Democratic"
  },
  {
    "District": "CA-52",
    "Name": "Juan Vargas",
    "Birthdate": "03/07/1961",
    "Party": "Democratic"
  },
  {
    "District": "CO-01",
    "Name": "Diana DeGette",
    "Birthdate": "07/29/1957",
    "Party": "Democratic"
  },
  {
    "District": "CO-02",
    "Name": "Joe Neguse",
    "Birthdate": "05/13/1984",
    "Party": "Democratic"
  },
  {
    "District": "CO-03",
    "Name": "Jeff Hurd",
    "Birthdate": "08/15/1979",
    "Party": "Republican"
  },
  {
    "District": "CO-04",
    "Name": "Lauren Boebert",
    "Birthdate": "12/15/1986",
    "Party": "Republican"
  },
  {
    "District": "CO-05",
    "Name": "Jeff Crank",
    "Birthdate": "01/28/1967",
    "Party": "Republican"
  },
  {
    "District": "CO-06",
    "Name": "Jason Crow",
    "Birthdate": "03/15/1979",
    "Party": "Democratic"
  },
  {
    "District": "CO-07",
    "Name": "Brittany Pettersen",
    "Birthdate": "12/06/1981",
    "Party": "Democratic"
  },
  {
    "District": "CO-08",
    "Name": "Gabe Evans",
    "Birthdate": "07/28/1986",
    "Party": "Republican"
  },
  {
    "District": "CT-01",
    "Name": "John B. Larson",
    "Birthdate": "07/22/1948",
    "Party": "Democratic"
  },
  {
    "District": "CT-02",
    "Name": "Joe Courtney",
    "Birthdate": "04/06/1953",
    "Party": "Democratic"
  },
  {
    "District": "CT-03",
    "Name": "Rosa DeLauro",
    "Birthdate": "03/02/1943",
    "Party": "Democratic"
  },
  {
    "District": "CT-04",
    "Name": "Jim Himes",
    "Birthdate": "07/05/1966",
    "Party": "Democratic"
  },
  {
    "District": "CT-05",
    "Name": "Jahana Hayes",
    "Birthdate": "03/08/1973",
    "Party": "Democratic"
  },
  {
    "District": "Delaware at-large",
    "Name": "Sarah McBride",
    "Birthdate": "08/09/1990",
    "Party": "Democratic"
  },
  {
    "District": "FL-01",
    "Name": "Jimmy Patronis",
    "Birthdate": "04/13/1972",
    "Party": "Republican"
  },
  {
    "District": "FL-02",
    "Name": "Neal Dunn",
    "Birthdate": "02/16/1953",
    "Party": "Republican"
  },
  {
    "District": "FL-03",
    "Name": "Kat Cammack",
    "Birthdate": "02/16/1988",
    "Party": "Republican"
  },
  {
    "District": "FL-04",
    "Name": "Aaron Bean",
    "Birthdate": "01/25/1967",
    "Party": "Republican"
  },
  {
    "District": "FL-05",
    "Name": "John Rutherford",
    "Birthdate": "09/02/1952",
    "Party": "Republican"
  },
  {
    "District": "FL-06",
    "Name": "Randy Fine",
    "Birthdate": "04/20/1974",
    "Party": "Republican"
  },
  {
    "District": "FL-07",
    "Name": "Cory Mills",
    "Birthdate": "07/13/1980",
    "Party": "Republican"
  },
  {
    "District": "FL-08",
    "Name": "Mike Haridopolos",
    "Birthdate": "03/15/1970",
    "Party": "Republican"
  },
  {
    "District": "FL-09",
    "Name": "Darren Soto",
    "Birthdate": "02/25/1978",
    "Party": "Democratic"
  },
  {
    "District": "FL-10",
    "Name": "Maxwell Frost",
    "Birthdate": "01/17/1997",
    "Party": "Democratic"
  },
  {
    "District": "FL-11",
    "Name": "Daniel Webster",
    "Birthdate": "04/27/1949",
    "Party": "Republican"
  },
  {
    "District": "FL-12",
    "Name": "Gus Bilirakis",
    "Birthdate": "02/08/1963",
    "Party": "Republican"
  },
  {
    "District": "FL-13",
    "Name": "Anna Paulina Luna",
    "Birthdate": "05/06/1989",
    "Party": "Republican"
  },
  {
    "District": "FL-14",
    "Name": "Kathy Castor",
    "Birthdate": "08/20/1966",
    "Party": "Democratic"
  },
  {
    "District": "FL-15",
    "Name": "Laurel Lee",
    "Birthdate": "03/26/1974",
    "Party": "Republican"
  },
  {
    "District": "FL-16",
    "Name": "Vern Buchanan",
    "Birthdate": "05/08/1951",
    "Party": "Republican"
  },
  {
    "District": "FL-17",
    "Name": "Greg Steube",
    "Birthdate": "05/19/1978",
    "Party": "Republican"
  },
  {
    "District": "FL-18",
    "Name": "Scott Franklin",
    "Birthdate": "08/23/1964",
    "Party": "Republican"
  },
  {
    "District": "FL-19",
    "Name": "Byron Donalds",
    "Birthdate": "10/28/1978",
    "Party": "Republican"
  },
  {
    "District": "FL-20",
    "Name": "Sheila Cherfilus-McCormick",
    "Birthdate": "01/25/1979",
    "Party": "Democratic"
  },
  {
    "District": "FL-21",
    "Name": "Brian Mast",
    "Birthdate": "07/10/1980",
    "Party": "Republican"
  },
  {
    "District": "FL-22",
    "Name": "Lois Frankel",
    "Birthdate": "05/16/1948",
    "Party": "Democratic"
  },
  {
    "District": "FL-23",
    "Name": "Jared Moskowitz",
    "Birthdate": "12/18/1980",
    "Party": "Democratic"
  },
  {
    "District": "FL-24",
    "Name": "Frederica Wilson",
    "Birthdate": "11/05/1942",
    "Party": "Democratic"
  },
  {
    "District": "FL-25",
    "Name": "Debbie Wasserman Schultz",
    "Birthdate": "09/27/1966",
    "Party": "Democratic"
  },
  {
    "District": "FL-26",
    "Name": "Mario Díaz-Balart",
    "Birthdate": "09/25/1961",
    "Party": "Republican"
  },
  {
    "District": "FL-27",
    "Name": "María Elvira Salazar",
    "Birthdate": "11/01/1961",
    "Party": "Republican"
  },
  {
    "District": "FL-28",
    "Name": "Carlos Giménez",
    "Birthdate": "01/17/1954",
    "Party": "Republican"
  },
  {
    "District": "GA-01",
    "Name": "Buddy Carter",
    "Birthdate": "09/06/1957",
    "Party": "Republican"
  },
  {
    "District": "GA-02",
    "Name": "Sanford Bishop",
    "Birthdate": "02/04/1947",
    "Party": "Democratic"
  },
  {
    "District": "GA-03",
    "Name": "Brian Jack",
    "Birthdate": "02/17/1988",
    "Party": "Republican"
  },
  {
    "District": "GA-04",
    "Name": "Hank Johnson",
    "Birthdate": "10/02/1954",
    "Party": "Democratic"
  },
  {
    "District": "GA-05",
    "Name": "Nikema Williams",
    "Birthdate": "07/30/1978",
    "Party": "Democratic"
  },
  {
    "District": "GA-06",
    "Name": "Lucy McBath",
    "Birthdate": "06/01/1960",
    "Party": "Democratic"
  },
  {
    "District": "GA-07",
    "Name": "Rich McCormick",
    "Birthdate": "10/07/1968",
    "Party": "Republican"
  },
  {
    "District": "GA-08",
    "Name": "Austin Scott",
    "Birthdate": "12/10/1969",
    "Party": "Republican"
  },
  {
    "District": "GA-09",
    "Name": "Andrew Clyde",
    "Birthdate": "11/22/1963",
    "Party": "Republican"
  },
  {
    "District": "GA-10",
    "Name": "Mike Collins",
    "Birthdate": "07/02/1967",
    "Party": "Republican"
  },
  {
    "District": "GA-11",
    "Name": "Barry Loudermilk",
    "Birthdate": "12/22/1963",
    "Party": "Republican"
  },
  {
    "District": "GA-12",
    "Name": "Rick Allen",
    "Birthdate": "11/07/1951",
    "Party": "Republican"
  },
  {
    "District": "GA-13",
    "Name": "David Scott",
    "Birthdate": "06/27/1945",
    "Party": "Democratic"
  },
  {
    "District": "GA-14",
    "Name": "Marjorie Taylor Greene",
    "Birthdate": "05/27/1974",
    "Party": "Republican"
  },
  {
    "District": "HI-01",
    "Name": "Ed Case",
    "Birthdate": "09/27/1952",
    "Party": "Democratic"
  },
  {
    "District": "HI-02",
    "Name": "Jill Tokuda",
    "Birthdate": "03/03/1976",
    "Party": "Democratic"
  },
  {
    "District": "ID-01",
    "Name": "Russ Fulcher",
    "Birthdate": "03/09/1962",
    "Party": "Republican"
  },
  {
    "District": "ID-02",
    "Name": "Mike Simpson",
    "Birthdate": "09/08/1950",
    "Party": "Republican"
  },
  {
    "District": "IL-01",
    "Name": "Jonathan Jackson",
    "Birthdate": "01/07/1966",
    "Party": "Democratic"
  },
  {
    "District": "IL-02",
    "Name": "Robin Kelly",
    "Birthdate": "04/30/1956",
    "Party": "Democratic"
  },
  {
    "District": "IL-03",
    "Name": "Delia Ramirez",
    "Birthdate": "06/02/1983",
    "Party": "Democratic"
  },
  {
    "District": "IL-04",
    "Name": "Chuy García",
    "Birthdate": "04/12/1956",
    "Party": "Democratic"
  },
  {
    "District": "IL-05",
    "Name": "Mike Quigley",
    "Birthdate": "10/17/1958",
    "Party": "Democratic"
  },
  {
    "District": "IL-06",
    "Name": "Sean Casten",
    "Birthdate": "11/23/1971",
    "Party": "Democratic"
  },
  {
    "District": "IL-07",
    "Name": "Danny Davis",
    "Birthdate": "09/06/1941",
    "Party": "Democratic"
  },
  {
    "District": "IL-08",
    "Name": "Raja Krishnamoorthi",
    "Birthdate": "07/19/1973",
    "Party": "Democratic"
  },
  {
    "District": "IL-09",
    "Name": "Jan Schakowsky",
    "Birthdate": "05/26/1944",
    "Party": "Democratic"
  },
  {
    "District": "IL-10",
    "Name": "Brad Schneider",
    "Birthdate": "08/20/1961",
    "Party": "Democratic"
  },
  {
    "District": "IL-11",
    "Name": "Bill Foster",
    "Birthdate": "10/07/1955",
    "Party": "Democratic"
  },
  {
    "District": "IL-12",
    "Name": "Mike Bost",
    "Birthdate": "12/30/1960",
    "Party": "Republican"
  },
  {
    "District": "IL-13",
    "Name": "Nikki Budzinski",
    "Birthdate": "03/11/1977",
    "Party": "Democratic"
  },
  {
    "District": "IL-14",
    "Name": "Lauren Underwood",
    "Birthdate": "10/04/1986",
    "Party": "Democratic"
  },
  {
    "District": "IL-15",
    "Name": "Mary Miller",
    "Birthdate": "08/27/1959",
    "Party": "Republican"
  },
  {
    "District": "IL-16",
    "Name": "Darin LaHood",
    "Birthdate": "07/05/1968",
    "Party": "Republican"
  },
  {
    "District": "IL-17",
    "Name": "Eric Sorensen",
    "Birthdate": "03/18/1976",
    "Party": "Democratic"
  },
  {
    "District": "IN-01",
    "Name": "Frank J. Mrvan",
    "Birthdate": "04/16/1969",
    "Party": "Democratic"
  },
  {
    "District": "IN-02",
    "Name": "Rudy Yakym",
    "Birthdate": "02/24/1984",
    "Party": "Republican"
  },
  {
    "District": "IN-03",
    "Name": "Marlin Stutzman",
    "Birthdate": "08/31/1976",
    "Party": "Republican"
  },
  {
    "District": "IN-04",
    "Name": "Jim Baird",
    "Birthdate": "06/04/1945",
    "Party": "Republican"
  },
  {
    "District": "IN-05",
    "Name": "Victoria Spartz",
    "Birthdate": "10/06/1978",
    "Party": "Republican"
  },
  {
    "District": "IN-06",
    "Name": "Jefferson Shreve",
    "Birthdate": "09/24/1965",
    "Party": "Republican"
  },
  {
    "District": "IN-07",
    "Name": "André Carson",
    "Birthdate": "10/16/1974",
    "Party": "Democratic"
  },
  {
    "District": "IN-08",
    "Name": "Mark Messmer",
    "Birthdate": "12/16/1967",
    "Party": "Republican"
  },
  {
    "District": "IN-09",
    "Name": "Erin Houchin",
    "Birthdate": "09/24/1976",
    "Party": "Republican"
  },
  {
    "District": "IA-01",
    "Name": "Mariannette Miller-Meeks",
    "Birthdate": "09/06/1955",
    "Party": "Republican"
  },
  {
    "District": "IA-02",
    "Name": "Ashley Hinson",
    "Birthdate": "06/27/1983",
    "Party": "Republican"
  },
  {
    "District": "IA-03",
    "Name": "Zach Nunn",
    "Birthdate": "05/04/1979",
    "Party": "Republican"
  },
  {
    "District": "IA-04",
    "Name": "Randy Feenstra",
    "Birthdate": "01/14/1969",
    "Party": "Republican"
  },
  {
    "District": "KS-01",
    "Name": "Tracey Mann",
    "Birthdate": "12/17/1976",
    "Party": "Republican"
  },
  {
    "District": "KS-02",
    "Name": "Derek Schmidt",
    "Birthdate": "01/23/1968",
    "Party": "Republican"
  },
  {
    "District": "KS-03",
    "Name": "Sharice Davids",
    "Birthdate": "05/22/1980",
    "Party": "Democratic"
  },
  {
    "District": "KS-04",
    "Name": "Ron Estes",
    "Birthdate": "07/19/1956",
    "Party": "Republican"
  },
  {
    "District": "KY-01",
    "Name": "James Comer",
    "Birthdate": "08/19/1972",
    "Party": "Republican"
  },
  {
    "District": "KY-02",
    "Name": "Brett Guthrie",
    "Birthdate": "02/18/1964",
    "Party": "Republican"
  },
  {
    "District": "KY-03",
    "Name": "Morgan McGarvey",
    "Birthdate": "12/23/1979",
    "Party": "Democratic"
  },
  {
    "District": "KY-04",
    "Name": "Thomas Massie",
    "Birthdate": "01/13/1971",
    "Party": "Republican"
  },
  {
    "District": "KY-05",
    "Name": "Hal Rogers",
    "Birthdate": "12/31/1937",
    "Party": "Republican"
  },
  {
    "District": "KY-06",
    "Name": "Andy Barr",
    "Birthdate": "07/24/1973",
    "Party": "Republican"
  },
  {
    "District": "LA-01",
    "Name": "Steve Scalise",
    "Birthdate": "10/06/1965",
    "Party": "Republican"
  },
  {
    "District": "LA-02",
    "Name": "Troy Carter",
    "Birthdate": "10/26/1963",
    "Party": "Democratic"
  },
  {
    "District": "LA-03",
    "Name": "Clay Higgins",
    "Birthdate": "08/24/1961",
    "Party": "Republican"
  },
  {
    "District": "LA-04",
    "Name": "Mike Johnson",
    "Birthdate": "01/30/1972",
    "Party": "Republican"
  },
  {
    "District": "LA-05",
    "Name": "Julia Letlow",
    "Birthdate": "03/16/1981",
    "Party": "Republican"
  },
  {
    "District": "LA-06",
    "Name": "Cleo Fields",
    "Birthdate": "11/22/1962",
    "Party": "Democratic"
  },
  {
    "District": "ME-01",
    "Name": "Chellie Pingree",
    "Birthdate": "04/02/1955",
    "Party": "Democratic"
  },
  {
    "District": "ME-02",
    "Name": "Jared Golden",
    "Birthdate": "07/25/1982",
    "Party": "Democratic"
  },
  {
    "District": "MD-01",
    "Name": "Andy Harris",
    "Birthdate": "01/25/1957",
    "Party": "Republican"
  },
  {
    "District": "MD-02",
    "Name": "Johnny Olszewski",
    "Birthdate": "09/10/1982",
    "Party": "Democratic"
  },
  {
    "District": "MD-03",
    "Name": "Sarah Elfreth",
    "Birthdate": "09/09/1988",
    "Party": "Democratic"
  },
  {
    "District": "MD-04",
    "Name": "Glenn Ivey",
    "Birthdate": "02/27/1961",
    "Party": "Democratic"
  },
  {
    "District": "MD-05",
    "Name": "Steny Hoyer",
    "Birthdate": "06/14/1939",
    "Party": "Democratic"
  },
  {
    "District": "MD-06",
    "Name": "April McClain Delaney",
    "Birthdate": "05/28/1964",
    "Party": "Democratic"
  },
  {
    "District": "MD-07",
    "Name": "Kweisi Mfume",
    "Birthdate": "10/24/1948",
    "Party": "Democratic"
  },
  {
    "District": "MD-08",
    "Name": "Jamie Raskin",
    "Birthdate": "12/13/1962",
    "Party": "Democratic"
  },
  {
    "District": "MA-01",
    "Name": "Richard Neal",
    "Birthdate": "02/14/1949",
    "Party": "Democratic"
  },
  {
    "District": "MA-02",
    "Name": "Jim McGovern",
    "Birthdate": "11/20/1959",
    "Party": "Democratic"
  },
  {
    "District": "MA-03",
    "Name": "Lori Trahan",
    "Birthdate": "10/27/1973",
    "Party": "Democratic"
  },
  {
    "District": "MA-04",
    "Name": "Jake Auchincloss",
    "Birthdate": "01/29/1988",
    "Party": "Democratic"
  },
  {
    "District": "MA-05",
    "Name": "Katherine Clark",
    "Birthdate": "07/17/1963",
    "Party": "Democratic"
  },
  {
    "District": "MA-06",
    "Name": "Seth Moulton",
    "Birthdate": "10/24/1978",
    "Party": "Democratic"
  },
  {
    "District": "MA-07",
    "Name": "Ayanna Pressley",
    "Birthdate": "02/03/1974",
    "Party": "Democratic"
  },
  {
    "District": "MA-08",
    "Name": "Stephen F. Lynch",
    "Birthdate": "03/31/1955",
    "Party": "Democratic"
  },
  {
    "District": "MA-09",
    "Name": "Bill Keating",
    "Birthdate": "09/06/1952",
    "Party": "Democratic"
  },
  {
    "District": "MI-01",
    "Name": "Jack Bergman",
    "Birthdate": "02/02/1947",
    "Party": "Republican"
  },
  {
    "District": "MI-02",
    "Name": "John Moolenaar",
    "Birthdate": "05/08/1961",
    "Party": "Republican"
  },
  {
    "District": "MI-03",
    "Name": "Hillary Scholten",
    "Birthdate": "02/22/1982",
    "Party": "Democratic"
  },
  {
    "District": "MI-04",
    "Name": "Bill Huizenga",
    "Birthdate": "01/31/1969",
    "Party": "Republican"
  },
  {
    "District": "MI-05",
    "Name": "Tim Walberg",
    "Birthdate": "04/12/1951",
    "Party": "Republican"
  },
  {
    "District": "MI-06",
    "Name": "Debbie Dingell",
    "Birthdate": "11/23/1953",
    "Party": "Democratic"
  },
  {
    "District": "MI-07",
    "Name": "Tom Barrett",
    "Birthdate": "04/30/1981",
    "Party": "Republican"
  },
  {
    "District": "MI-08",
    "Name": "Kristen McDonald Rivet",
    "Birthdate": "07/11/1970",
    "Party": "Democratic"
  },
  {
    "District": "MI-09",
    "Name": "Lisa McClain",
    "Birthdate": "04/07/1966",
    "Party": "Republican"
  },
  {
    "District": "MI-10",
    "Name": "John James",
    "Birthdate": "06/08/1981",
    "Party": "Republican"
  },
  {
    "District": "MI-11",
    "Name": "Haley Stevens",
    "Birthdate": "06/24/1983",
    "Party": "Democratic"
  },
  {
    "District": "MI-12",
    "Name": "Rashida Tlaib",
    "Birthdate": "07/24/1976",
    "Party": "Democratic"
  },
  {
    "District": "MI-13",
    "Name": "Shri Thanedar",
    "Birthdate": "02/22/1955",
    "Party": "Democratic"
  },
  {
    "District": "MN-01",
    "Name": "Brad Finstad",
    "Birthdate": "05/30/1976",
    "Party": "Republican"
  },
  {
    "District": "MN-02",
    "Name": "Angie Craig",
    "Birthdate": "02/14/1972",
    "Party": "Democratic"
  },
  {
    "District": "MN-03",
    "Name": "Kelly Morrison",
    "Birthdate": "02/02/1969",
    "Party": "Democratic"
  },
  {
    "District": "MN-04",
    "Name": "Betty McCollum",
    "Birthdate": "07/12/1954",
    "Party": "Democratic"
  },
  {
    "District": "MN-05",
    "Name": "Ilhan Omar",
    "Birthdate": "10/04/1982",
    "Party": "Democratic"
  },
  {
    "District": "MN-06",
    "Name": "Tom Emmer",
    "Birthdate": "03/03/1961",
    "Party": "Republican"
  },
  {
    "District": "MN-07",
    "Name": "Michelle Fischbach",
    "Birthdate": "11/03/1965",
    "Party": "Republican"
  },
  {
    "District": "MN-08",
    "Name": "Pete Stauber",
    "Birthdate": "05/10/1966",
    "Party": "Republican"
  },
  {
    "District": "MS-01",
    "Name": "Trent Kelly",
    "Birthdate": "03/01/1966",
    "Party": "Republican"
  },
  {
    "District": "MS-02",
    "Name": "Bennie Thompson",
    "Birthdate": "01/28/1948",
    "Party": "Democratic"
  },
  {
    "District": "MS-03",
    "Name": "Michael Guest",
    "Birthdate": "02/04/1970",
    "Party": "Republican"
  },
  {
    "District": "MS-04",
    "Name": "Mike Ezell",
    "Birthdate": "04/06/1959",
    "Party": "Republican"
  },
  {
    "District": "MO-01",
    "Name": "Wesley Bell",
    "Birthdate": "11/05/1974",
    "Party": "Democratic"
  },
  {
    "District": "MO-02",
    "Name": "Ann Wagner",
    "Birthdate": "09/13/1962",
    "Party": "Republican"
  },
  {
    "District": "MO-03",
    "Name": "Bob Onder",
    "Birthdate": "01/06/1962",
    "Party": "Republican"
  },
  {
    "District": "MO-04",
    "Name": "Mark Alford",
    "Birthdate": "10/04/1963",
    "Party": "Republican"
  },
  {
    "District": "MO-05",
    "Name": "Emanuel Cleaver",
    "Birthdate": "10/26/1944",
    "Party": "Democratic"
  },
  {
    "District": "MO-06",
    "Name": "Sam Graves",
    "Birthdate": "11/07/1963",
    "Party": "Republican"
  },
  {
    "District": "MO-07",
    "Name": "Eric Burlison",
    "Birthdate": "10/02/1976",
    "Party": "Republican"
  },
  {
    "District": "MO-08",
    "Name": "Jason Smith",
    "Birthdate": "06/16/1980",
    "Party": "Republican"
  },
  {
    "District": "MT-01",
    "Name": "Ryan Zinke",
    "Birthdate": "11/01/1961",
    "Party": "Republican"
  },
  {
    "District": "MT-02",
    "Name": "Troy Downing",
    "Birthdate": "03/04/1967",
    "Party": "Republican"
  },
  {
    "District": "NE-01",
    "Name": "Mike Flood",
    "Birthdate": "02/23/1975",
    "Party": "Republican"
  },
  {
    "District": "NE-02",
    "Name": "Don Bacon",
    "Birthdate": "08/16/1963",
    "Party": "Republican"
  },
  {
    "District": "NE-03",
    "Name": "Adrian Smith",
    "Birthdate": "12/19/1970",
    "Party": "Republican"
  },
  {
    "District": "NV-01",
    "Name": "Dina Titus",
    "Birthdate": "05/23/1950",
    "Party": "Democratic"
  },
  {
    "District": "NV-02",
    "Name": "Mark Amodei",
    "Birthdate": "06/12/1958",
    "Party": "Republican"
  },
  {
    "District": "NV-03",
    "Name": "Susie Lee",
    "Birthdate": "11/07/1966",
    "Party": "Democratic"
  },
  {
    "District": "NV-04",
    "Name": "Steven Horsford",
    "Birthdate": "04/29/1973",
    "Party": "Democratic"
  },
  {
    "District": "NH-01",
    "Name": "Chris Pappas",
    "Birthdate": "06/04/1980",
    "Party": "Democratic"
  },
  {
    "District": "NH-02",
    "Name": "Maggie Goodlander",
    "Birthdate": "11/04/1986",
    "Party": "Democratic"
  },
  {
    "District": "NJ-01",
    "Name": "Donald Norcross",
    "Birthdate": "12/13/1958",
    "Party": "Democratic"
  },
  {
    "District": "NJ-02",
    "Name": "Jeff Van Drew",
    "Birthdate": "02/23/1953",
    "Party": "Republican"
  },
  {
    "District": "NJ-03",
    "Name": "Herb Conaway",
    "Birthdate": "01/30/1963",
    "Party": "Democratic"
  },
  {
    "District": "NJ-04",
    "Name": "Chris Smith",
    "Birthdate": "03/04/1953",
    "Party": "Republican"
  },
  {
    "District": "NJ-05",
    "Name": "Josh Gottheimer",
    "Birthdate": "03/08/1975",
    "Party": "Democratic"
  },
  {
    "District": "NJ-06",
    "Name": "Frank Pallone",
    "Birthdate": "10/30/1951",
    "Party": "Democratic"
  },
  {
    "District": "NJ-07",
    "Name": "Thomas Kean Jr.",
    "Birthdate": "09/05/1968",
    "Party": "Republican"
  },
  {
    "District": "NJ-08",
    "Name": "Rob Menendez",
    "Birthdate": "07/12/1985",
    "Party": "Democratic"
  },
  {
    "District": "NJ-09",
    "Name": "Nellie Pou",
    "Birthdate": "05/20/1956",
    "Party": "Democratic"
  },
  {
    "District": "NJ-10",
    "Name": "LaMonica McIver",
    "Birthdate": "06/20/1986",
    "Party": "Democratic"
  },
  {
    "District": "NJ-11",
    "Name": "Vacant",
    "Birthdate": "",
    "Party": ""
  },
  {
    "District": "NJ-12",
    "Name": "Bonnie Watson Coleman",
    "Birthdate": "02/06/1945",
    "Party": "Democratic"
  },
  {
    "District": "NM-01",
    "Name": "Melanie Stansbury",
    "Birthdate": "01/31/1979",
    "Party": "Democratic"
  },
  {
    "District": "NM-02",
    "Name": "Gabe Vasquez",
    "Birthdate": "08/03/1984",
    "Party": "Democratic"
  },
  {
    "District": "NM-03",
    "Name": "Teresa Leger Fernandez",
    "Birthdate": "07/01/1959",
    "Party": "Democratic"
  },
  {
    "District": "NY-01",
    "Name": "Nick LaLota",
    "Birthdate": "06/23/1978",
    "Party": "Republican"
  },
  {
    "District": "NY-02",
    "Name": "Andrew Garbarino",
    "Birthdate": "09/27/1984",
    "Party": "Republican"
  },
  {
    "District": "NY-03",
    "Name": "Tom Suozzi",
    "Birthdate": "08/31/1962",
    "Party": "Democratic"
  },
  {
    "District": "NY-04",
    "Name": "Laura Gillen",
    "Birthdate": "07/10/1969",
    "Party": "Democratic"
  },
  {
    "District": "NY-05",
    "Name": "Gregory Meeks",
    "Birthdate": "09/25/1953",
    "Party": "Democratic"
  },
  {
    "District": "NY-06",
    "Name": "Grace Meng",
    "Birthdate": "10/01/1975",
    "Party": "Democratic"
  },
  {
    "District": "NY-07",
    "Name": "Nydia Velázquez",
    "Birthdate": "03/28/1953",
    "Party": "Democratic"
  },
  {
    "District": "NY-08",
    "Name": "Hakeem Jeffries",
    "Birthdate": "08/04/1970",
    "Party": "Democratic"
  },
  {
    "District": "NY-09",
    "Name": "Yvette Clarke",
    "Birthdate": "11/21/1964",
    "Party": "Democratic"
  },
  {
    "District": "NY-10",
    "Name": "Dan Goldman",
    "Birthdate": "02/26/1976",
    "Party": "Democratic"
  },
  {
    "District": "NY-11",
    "Name": "Nicole Malliotakis",
    "Birthdate": "11/11/1980",
    "Party": "Republican"
  },
  {
    "District": "NY-12",
    "Name": "Jerry Nadler",
    "Birthdate": "06/13/1947",
    "Party": "Democratic"
  },
  {
    "District": "NY-13",
    "Name": "Adriano Espaillat",
    "Birthdate": "09/27/1954",
    "Party": "Democratic"
  },
  {
    "District": "NY-14",
    "Name": "Alexandria Ocasio-Cortez",
    "Birthdate": "10/13/1989",
    "Party": "Democratic"
  },
  {
    "District": "NY-15",
    "Name": "Ritchie Torres",
    "Birthdate": "03/12/1988",
    "Party": "Democratic"
  },
  {
    "District": "NY-16",
    "Name": "George Latimer",
    "Birthdate": "11/22/1953",
    "Party": "Democratic"
  },
  {
    "District": "NY-17",
    "Name": "Mike Lawler",
    "Birthdate": "09/09/1986",
    "Party": "Republican"
  },
  {
    "District": "NY-18",
    "Name": "Pat Ryan",
    "Birthdate": "03/28/1982",
    "Party": "Democratic"
  },
  {
    "District": "NY-19",
    "Name": "Josh Riley",
    "Birthdate": "01/21/1981",
    "Party": "Democratic"
  },
  {
    "District": "NY-20",
    "Name": "Paul Tonko",
    "Birthdate": "06/18/1949",
    "Party": "Democratic"
  },
  {
    "District": "NY-21",
    "Name": "Elise Stefanik",
    "Birthdate": "07/02/1984",
    "Party": "Republican"
  },
  {
    "District": "NY-22",
    "Name": "John Mannion",
    "Birthdate": "07/08/1968",
    "Party": "Democratic"
  },
  {
    "District": "NY-23",
    "Name": "Nick Langworthy",
    "Birthdate": "02/27/1981",
    "Party": "Republican"
  },
  {
    "District": "NY-24",
    "Name": "Claudia Tenney",
    "Birthdate": "02/04/1961",
    "Party": "Republican"
  },
  {
    "District": "NY-25",
    "Name": "Joseph Morelle",
    "Birthdate": "04/29/1957",
    "Party": "Democratic"
  },
  {
    "District": "NY-26",
    "Name": "Tim Kennedy",
    "Birthdate": "10/20/1976",
    "Party": "Democratic"
  },
  {
    "District": "NC-01",
    "Name": "Don Davis",
    "Birthdate": "08/29/1971",
    "Party": "Democratic"
  },
  {
    "District": "NC-02",
    "Name": "Deborah Ross",
    "Birthdate": "06/20/1963",
    "Party": "Democratic"
  },
  {
    "District": "NC-03",
    "Name": "Greg Murphy",
    "Birthdate": "03/05/1963",
    "Party": "Republican"
  },
  {
    "District": "NC-04",
    "Name": "Valerie Foushee",
    "Birthdate": "05/07/1956",
    "Party": "Democratic"
  },
  {
    "District": "NC-05",
    "Name": "Virginia Foxx",
    "Birthdate": "06/29/1943",
    "Party": "Republican"
  },
  {
    "District": "NC-06",
    "Name": "Addison McDowell",
    "Birthdate": "01/21/1994",
    "Party": "Republican"
  },
  {
    "District": "NC-07",
    "Name": "David Rouzer",
    "Birthdate": "02/16/1972",
    "Party": "Republican"
  },
  {
    "District": "NC-08",
    "Name": "Mark Harris",
    "Birthdate": "04/24/1966",
    "Party": "Republican"
  },
  {
    "District": "NC-09",
    "Name": "Richard Hudson",
    "Birthdate": "11/04/1971",
    "Party": "Republican"
  },
  {
    "District": "NC-10",
    "Name": "Pat Harrigan",
    "Birthdate": "06/21/1987",
    "Party": "Republican"
  },
  {
    "District": "NC-11",
    "Name": "Chuck Edwards",
    "Birthdate": "09/13/1960",
    "Party": "Republican"
  },
  {
    "District": "NC-12",
    "Name": "Alma Adams",
    "Birthdate": "05/27/1946",
    "Party": "Democratic"
  },
  {
    "District": "NC-13",
    "Name": "Brad Knott",
    "Birthdate": "04/17/1986",
    "Party": "Republican"
  },
  {
    "District": "NC-14",
    "Name": "Tim Moore",
    "Birthdate": "10/02/1970",
    "Party": "Republican"
  },
  {
    "District": "North Dakota at-large",
    "Name": "Julie Fedorchak",
    "Birthdate": "09/28/1968",
    "Party": "Republican"
  },
  {
    "District": "OH-01",
    "Name": "Greg Landsman",
    "Birthdate": "12/04/1976",
    "Party": "Democratic"
  },
  {
    "District": "OH-02",
    "Name": "David Taylor",
    "Birthdate": "11/16/1969",
    "Party": "Republican"
  },
  {
    "District": "OH-03",
    "Name": "Joyce Beatty",
    "Birthdate": "03/12/1950",
    "Party": "Democratic"
  },
  {
    "District": "OH-04",
    "Name": "Jim Jordan",
    "Birthdate": "02/17/1964",
    "Party": "Republican"
  },
  {
    "District": "OH-05",
    "Name": "Bob Latta",
    "Birthdate": "04/18/1956",
    "Party": "Republican"
  },
  {
    "District": "OH-06",
    "Name": "Michael Rulli",
    "Birthdate": "03/11/1969",
    "Party": "Republican"
  },
  {
    "District": "OH-07",
    "Name": "Max Miller",
    "Birthdate": "11/13/1988",
    "Party": "Republican"
  },
  {
    "District": "OH-08",
    "Name": "Warren Davidson",
    "Birthdate": "03/01/1970",
    "Party": "Republican"
  },
  {
    "District": "OH-09",
    "Name": "Marcy Kaptur",
    "Birthdate": "06/17/1946",
    "Party": "Democratic"
  },
  {
    "District": "OH-10",
    "Name": "Mike Turner",
    "Birthdate": "01/11/1960",
    "Party": "Republican"
  },
  {
    "District": "OH-11",
    "Name": "Shontel Brown",
    "Birthdate": "06/24/1975",
    "Party": "Democratic"
  },
  {
    "District": "OH-12",
    "Name": "Troy Balderson",
    "Birthdate": "01/16/1962",
    "Party": "Republican"
  },
  {
    "District": "OH-13",
    "Name": "Emilia Sykes",
    "Birthdate": "01/04/1986",
    "Party": "Democratic"
  },
  {
    "District": "OH-14",
    "Name": "David Joyce",
    "Birthdate": "03/17/1957",
    "Party": "Republican"
  },
  {
    "District": "OH-15",
    "Name": "Mike Carey",
    "Birthdate": "03/13/1971",
    "Party": "Republican"
  },
  {
    "District": "OK-01",
    "Name": "Kevin Hern",
    "Birthdate": "12/04/1961",
    "Party": "Republican"
  },
  {
    "District": "OK-02",
    "Name": "Josh Brecheen",
    "Birthdate": "06/19/1979",
    "Party": "Republican"
  },
  {
    "District": "OK-03",
    "Name": "Frank Lucas",
    "Birthdate": "01/06/1960",
    "Party": "Republican"
  },
  {
    "District": "OK-04",
    "Name": "Tom Cole",
    "Birthdate": "04/28/1949",
    "Party": "Republican"
  },
  {
    "District": "OK-05",
    "Name": "Stephanie Bice",
    "Birthdate": "11/11/1973",
    "Party": "Republican"
  },
  {
    "District": "OR-01",
    "Name": "Suzanne Bonamici",
    "Birthdate": "10/14/1954",
    "Party": "Democratic"
  },
  {
    "District": "OR-02",
    "Name": "Cliff Bentz",
    "Birthdate": "01/12/1952",
    "Party": "Republican"
  },
  {
    "District": "OR-03",
    "Name": "Maxine Dexter",
    "Birthdate": "12/05/1972",
    "Party": "Democratic"
  },
  {
    "District": "OR-04",
    "Name": "Val Hoyle",
    "Birthdate": "02/14/1964",
    "Party": "Democratic"
  },
  {
    "District": "OR-05",
    "Name": "Janelle Bynum",
    "Birthdate": "01/31/1975",
    "Party": "Democratic"
  },
  {
    "District": "OR-06",
    "Name": "Andrea Salinas",
    "Birthdate": "12/06/1969",
    "Party": "Democratic"
  },
  {
    "District": "PA-01",
    "Name": "Brian Fitzpatrick",
    "Birthdate": "12/17/1973",
    "Party": "Republican"
  },
  {
    "District": "PA-02",
    "Name": "Brendan Boyle",
    "Birthdate": "02/06/1977",
    "Party": "Democratic"
  },
  {
    "District": "PA-03",
    "Name": "Dwight Evans",
    "Birthdate": "05/16/1954",
    "Party": "Democratic"
  },
  {
    "District": "PA-04",
    "Name": "Madeleine Dean",
    "Birthdate": "06/06/1959",
    "Party": "Democratic"
  },
  {
    "District": "PA-05",
    "Name": "Mary Gay Scanlon",
    "Birthdate": "08/30/1959",
    "Party": "Democratic"
  },
  {
    "District": "PA-06",
    "Name": "Chrissy Houlahan",
    "Birthdate": "06/05/1967",
    "Party": "Democratic"
  },
  {
    "District": "PA-07",
    "Name": "Ryan Mackenzie",
    "Birthdate": "08/03/1982",
    "Party": "Republican"
  },
  {
    "District": "PA-08",
    "Name": "Rob Bresnahan",
    "Birthdate": "04/22/1990",
    "Party": "Republican"
  },
  {
    "District": "PA-09",
    "Name": "Dan Meuser",
    "Birthdate": "02/10/1964",
    "Party": "Republican"
  },
  {
    "District": "PA-10",
    "Name": "Scott Perry",
    "Birthdate": "05/27/1962",
    "Party": "Republican"
  },
  {
    "District": "PA-11",
    "Name": "Lloyd Smucker",
    "Birthdate": "01/23/1964",
    "Party": "Republican"
  },
  {
    "District": "PA-12",
    "Name": "Summer Lee",
    "Birthdate": "11/26/1987",
    "Party": "Democratic"
  },
  {
    "District": "PA-13",
    "Name": "John Joyce",
    "Birthdate": "02/08/1957",
    "Party": "Republican"
  },
  {
    "District": "PA-14",
    "Name": "Guy Reschenthaler",
    "Birthdate": "04/17/1983",
    "Party": "Republican"
  },
  {
    "District": "PA-15",
    "Name": "Glenn Thompson",
    "Birthdate": "07/27/1959",
    "Party": "Republican"
  },
  {
    "District": "PA-16",
    "Name": "Mike Kelly",
    "Birthdate": "05/10/1948",
    "Party": "Republican"
  },
  {
    "District": "PA-17",
    "Name": "Chris Deluzio",
    "Birthdate": "07/13/1984",
    "Party": "Democratic"
  },
  {
    "District": "RI-01",
    "Name": "Gabe Amo",
    "Birthdate": "12/11/1987",
    "Party": "Democratic"
  },
  {
    "District": "RI-02",
    "Name": "Seth Magaziner",
    "Birthdate": "07/22/1983",
    "Party": "Democratic"
  },
  {
    "District": "SC-01",
    "Name": "Nancy Mace",
    "Birthdate": "12/04/1977",
    "Party": "Republican"
  },
  {
    "District": "SC-02",
    "Name": "Joe Wilson",
    "Birthdate": "07/31/1947",
    "Party": "Republican"
  },
  {
    "District": "SC-03",
    "Name": "Sheri Biggs",
    "Birthdate": "03/28/1970",
    "Party": "Republican"
  },
  {
    "District": "SC-04",
    "Name": "William Timmons",
    "Birthdate": "04/30/1984",
    "Party": "Republican"
  },
  {
    "District": "SC-05",
    "Name": "Ralph Norman",
    "Birthdate": "06/20/1953",
    "Party": "Republican"
  },
  {
    "District": "SC-06",
    "Name": "Jim Clyburn",
    "Birthdate": "07/21/1940",
    "Party": "Democratic"
  },
  {
    "District": "SC-07",
    "Name": "Russell Fry",
    "Birthdate": "01/31/1985",
    "Party": "Republican"
  },
  {
    "District": "South Dakota at-large",
    "Name": "Dusty Johnson",
    "Birthdate": "09/30/1976",
    "Party": "Republican"
  },
  {
    "District": "TN-01",
    "Name": "Diana Harshbarger",
    "Birthdate": "01/01/1960",
    "Party": "Republican"
  },
  {
    "District": "TN-02",
    "Name": "Tim Burchett",
    "Birthdate": "08/25/1964",
    "Party": "Republican"
  },
  {
    "District": "TN-03",
    "Name": "Chuck Fleischmann",
    "Birthdate": "10/11/1962",
    "Party": "Republican"
  },
  {
    "District": "TN-04",
    "Name": "Scott DesJarlais",
    "Birthdate": "02/21/1964",
    "Party": "Republican"
  },
  {
    "District": "TN-05",
    "Name": "Andy Ogles",
    "Birthdate": "06/18/1971",
    "Party": "Republican"
  },
  {
    "District": "TN-06",
    "Name": "John Rose",
    "Birthdate": "02/23/1965",
    "Party": "Republican"
  },
  {
    "District": "TN-07",
    "Name": "Matt Van Epps",
    "Birthdate": "03/29/1983",
    "Party": "Republican"
  },
  {
    "District": "TN-08",
    "Name": "David Kustoff",
    "Birthdate": "10/08/1966",
    "Party": "Republican"
  },
  {
    "District": "TN-09",
    "Name": "Steve Cohen",
    "Birthdate": "05/24/1949",
    "Party": "Democratic"
  },
  {
    "District": "TX-01",
    "Name": "Nathaniel Moran",
    "Birthdate": "09/23/1974",
    "Party": "Republican"
  },
  {
    "District": "TX-02",
    "Name": "Dan Crenshaw",
    "Birthdate": "03/14/1984",
    "Party": "Republican"
  },
  {
    "District": "TX-03",
    "Name": "Keith Self",
    "Birthdate": "03/20/1953",
    "Party": "Republican"
  },
  {
    "District": "TX-04",
    "Name": "Pat Fallon",
    "Birthdate": "12/19/1967",
    "Party": "Republican"
  },
  {
    "District": "TX-05",
    "Name": "Lance Gooden",
    "Birthdate": "12/01/1982",
    "Party": "Republican"
  },
  {
    "District": "TX-06",
    "Name": "Jake Ellzey",
    "Birthdate": "01/24/1970",
    "Party": "Republican"
  },
  {
    "District": "TX-07",
    "Name": "Lizzie Fletcher",
    "Birthdate": "02/13/1975",
    "Party": "Democratic"
  },
  {
    "District": "TX-08",
    "Name": "Morgan Luttrell",
    "Birthdate": "11/07/1975",
    "Party": "Republican"
  },
  {
    "District": "TX-09",
    "Name": "Al Green",
    "Birthdate": "09/01/1947",
    "Party": "Democratic"
  },
  {
    "District": "TX-10",
    "Name": "Michael McCaul",
    "Birthdate": "01/14/1962",
    "Party": "Republican"
  },
  {
    "District": "TX-11",
    "Name": "August Pfluger",
    "Birthdate": "12/28/1978",
    "Party": "Republican"
  },
  {
    "District": "TX-12",
    "Name": "Craig Goldman",
    "Birthdate": "10/03/1968",
    "Party": "Republican"
  },
  {
    "District": "TX-13",
    "Name": "Ronny Jackson",
    "Birthdate": "05/04/1967",
    "Party": "Republican"
  },
  {
    "District": "TX-14",
    "Name": "Randy Weber",
    "Birthdate": "07/02/1953",
    "Party": "Republican"
  },
  {
    "District": "TX-15",
    "Name": "Monica De La Cruz",
    "Birthdate": "11/11/1974",
    "Party": "Republican"
  },
  {
    "District": "TX-16",
    "Name": "Veronica Escobar",
    "Birthdate": "09/15/1969",
    "Party": "Democratic"
  },
  {
    "District": "TX-17",
    "Name": "Pete Sessions",
    "Birthdate": "03/22/1955",
    "Party": "Republican"
  },
  {
    "District": "TX-18",
    "Name": "Vacant",
    "Birthdate": "",
    "Party": ""
  },
  {
    "District": "TX-19",
    "Name": "Jodey Arrington",
    "Birthdate": "03/09/1972",
    "Party": "Republican"
  },
  {
    "District": "TX-20",
    "Name": "Joaquin Castro",
    "Birthdate": "09/16/1974",
    "Party": "Democratic"
  },
  {
    "District": "TX-21",
    "Name": "Chip Roy",
    "Birthdate": "08/07/1972",
    "Party": "Republican"
  },
  {
    "District": "TX-22",
    "Name": "Troy Nehls",
    "Birthdate": "04/07/1968",
    "Party": "Republican"
  },
  {
    "District": "TX-23",
    "Name": "Tony Gonzales",
    "Birthdate": "10/10/1980",
    "Party": "Republican"
  },
  {
    "District": "TX-24",
    "Name": "Beth Van Duyne",
    "Birthdate": "11/16/1970",
    "Party": "Republican"
  },
  {
    "District": "TX-25",
    "Name": "Roger Williams",
    "Birthdate": "09/13/1949",
    "Party": "Republican"
  },
  {
    "District": "TX-26",
    "Name": "Brandon Gill",
    "Birthdate": "02/26/1994",
    "Party": "Republican"
  },
  {
    "District": "TX-27",
    "Name": "Michael Cloud",
    "Birthdate": "05/13/1975",
    "Party": "Republican"
  },
  {
    "District": "TX-28",
    "Name": "Henry Cuellar",
    "Birthdate": "09/19/1955",
    "Party": "Democratic"
  },
  {
    "District": "TX-29",
    "Name": "Sylvia Garcia",
    "Birthdate": "09/06/1950",
    "Party": "Democratic"
  },
  {
    "District": "TX-30",
    "Name": "Jasmine Crockett",
    "Birthdate": "03/29/1981",
    "Party": "Democratic"
  },
  {
    "District": "TX-31",
    "Name": "John Carter",
    "Birthdate": "11/06/1941",
    "Party": "Republican"
  },
  {
    "District": "TX-32",
    "Name": "Julie Johnson",
    "Birthdate": "05/02/1966",
    "Party": "Democratic"
  },
  {
    "District": "TX-33",
    "Name": "Marc Veasey",
    "Birthdate": "01/03/1971",
    "Party": "Democratic"
  },
  {
    "District": "TX-34",
    "Name": "Vicente Gonzalez",
    "Birthdate": "09/04/1967",
    "Party": "Democratic"
  },
  {
    "District": "TX-35",
    "Name": "Greg Casar",
    "Birthdate": "05/04/1989",
    "Party": "Democratic"
  },
  {
    "District": "TX-36",
    "Name": "Brian Babin",
    "Birthdate": "03/23/1948",
    "Party": "Republican"
  },
  {
    "District": "TX-37",
    "Name": "Lloyd Doggett",
    "Birthdate": "10/06/1946",
    "Party": "Democratic"
  },
  {
    "District": "TX-38",
    "Name": "Wesley Hunt",
    "Birthdate": "11/13/1981",
    "Party": "Republican"
  },
  {
    "District": "UT-01",
    "Name": "Blake Moore",
    "Birthdate": "06/22/1980",
    "Party": "Republican"
  },
  {
    "District": "UT-02",
    "Name": "Celeste Maloy",
    "Birthdate": "05/22/1981",
    "Party": "Republican"
  },
  {
    "District": "UT-03",
    "Name": "Mike Kennedy",
    "Birthdate": "02/02/1969",
    "Party": "Republican"
  },
  {
    "District": "UT-04",
    "Name": "Burgess Owens",
    "Birthdate": "08/02/1951",
    "Party": "Republican"
  },
  {
    "District": "Vermont at-large",
    "Name": "Becca Balint",
    "Birthdate": "05/04/1968",
    "Party": "Democratic"
  },
  {
    "District": "VA-01",
    "Name": "Rob Wittman",
    "Birthdate": "02/03/1959",
    "Party": "Republican"
  },
  {
    "District": "VA-02",
    "Name": "Jen Kiggans",
    "Birthdate": "06/18/1971",
    "Party": "Republican"
  },
  {
    "District": "VA-03",
    "Name": "Bobby Scott",
    "Birthdate": "04/30/1947",
    "Party": "Democratic"
  },
  {
    "District": "VA-04",
    "Name": "Jennifer McClellan",
    "Birthdate": "12/28/1972",
    "Party": "Democratic"
  },
  {
    "District": "VA-05",
    "Name": "John McGuire",
    "Birthdate": "08/24/1968",
    "Party": "Republican"
  },
  {
    "District": "VA-06",
    "Name": "Ben Cline",
    "Birthdate": "02/29/1972",
    "Party": "Republican"
  },
  {
    "District": "VA-07",
    "Name": "Eugene Vindman",
    "Birthdate": "06/06/1975",
    "Party": "Democratic"
  },
  {
    "District": "VA-08",
    "Name": "Don Beyer",
    "Birthdate": "06/20/1950",
    "Party": "Democratic"
  },
  {
    "District": "VA-09",
    "Name": "Morgan Griffith",
    "Birthdate": "03/15/1958",
    "Party": "Republican"
  },
  {
    "District": "VA-10",
    "Name": "Suhas Subramanyam",
    "Birthdate": "09/26/1986",
    "Party": "Democratic"
  },
  {
    "District": "VA-11",
    "Name": "James Walkinshaw",
    "Birthdate": "10/02/1982",
    "Party": "Democratic"
  },
  {
    "District": "WA-01",
    "Name": "Suzan DelBene",
    "Birthdate": "02/17/1962",
    "Party": "Democratic"
  },
  {
    "District": "WA-02",
    "Name": "Rick Larsen",
    "Birthdate": "06/15/1965",
    "Party": "Democratic"
  },
  {
    "District": "WA-03",
    "Name": "Marie Gluesenkamp Perez",
    "Birthdate": "06/06/1988",
    "Party": "Democratic"
  },
  {
    "District": "WA-04",
    "Name": "Dan Newhouse",
    "Birthdate": "07/10/1955",
    "Party": "Republican"
  },
  {
    "District": "WA-05",
    "Name": "Michael Baumgartner",
    "Birthdate": "12/13/1975",
    "Party": "Republican"
  },
  {
    "District": "WA-06",
    "Name": "Emily Randall",
    "Birthdate": "10/03/1985",
    "Party": "Democratic"
  },
  {
    "District": "WA-07",
    "Name": "Pramila Jayapal",
    "Birthdate": "09/21/1965",
    "Party": "Democratic"
  },
  {
    "District": "WA-08",
    "Name": "Kim Schrier",
    "Birthdate": "08/23/1968",
    "Party": "Democratic"
  },
  {
    "District": "WA-09",
    "Name": "Adam Smith",
    "Birthdate": "06/15/1965",
    "Party": "Democratic"
  },
  {
    "District": "WA-10",
    "Name": "Marilyn Strickland",
    "Birthdate": "09/25/1962",
    "Party": "Democratic"
  },
  {
    "District": "WV-01",
    "Name": "Carol Miller",
    "Birthdate": "11/04/1950",
    "Party": "Republican"
  },
  {
    "District": "WV-02",
    "Name": "Riley Moore",
    "Birthdate": "07/01/1980",
    "Party": "Republican"
  },
  {
    "District": "WI-01",
    "Name": "Bryan Steil",
    "Birthdate": "03/03/1981",
    "Party": "Republican"
  },
  {
    "District": "WI-02",
    "Name": "Mark Pocan",
    "Birthdate": "08/14/1964",
    "Party": "Democratic"
  },
  {
    "District": "WI-03",
    "Name": "Derrick Van Orden",
    "Birthdate": "09/15/1969",
    "Party": "Republican"
  },
  {
    "District": "WI-04",
    "Name": "Gwen Moore",
    "Birthdate": "04/18/1951",
    "Party": "Democratic"
  },
  {
    "District": "WI-05",
    "Name": "Scott Fitzgerald",
    "Birthdate": "11/16/1963",
    "Party": "Republican"
  },
  {
    "District": "WI-06",
    "Name": "Glenn Grothman",
    "Birthdate": "07/03/1955",
    "Party": "Republican"
  },
  {
    "District": "WI-07",
    "Name": "Tom Tiffany",
    "Birthdate": "12/30/1957",
    "Party": "Republican"
  },
  {
    "District": "WI-08",
    "Name": "Tony Wied",
    "Birthdate": "05/03/1976",
    "Party": "Republican"
  },
  {
    "District": "Wyoming at-large",
    "Name": "Harriet Hageman",
    "Birthdate": "10/18/1962",
    "Party": "Republican"
  }
]

const senateData = [
  {
    "District": "Alabama",
    "Name": "Tommy Tuberville",
    "Birthdate": "09/18/1954",
    "Party": "Republican"
  },
  {
    "District": "Alabama",
    "Name": "Katie Britt",
    "Birthdate": "02/02/1982",
    "Party": "Republican"
  },
  {
    "District": "Alaska",
    "Name": "Lisa Murkowski",
    "Birthdate": "05/22/1957",
    "Party": "Republican"
  },
  {
    "District": "Alaska",
    "Name": "Dan Sullivan",
    "Birthdate": "11/13/1964",
    "Party": "Republican"
  },
  {
    "District": "Arizona",
    "Name": "Mark Kelly",
    "Birthdate": "02/21/1964",
    "Party": "Democratic"
  },
  {
    "District": "Arizona",
    "Name": "Ruben Gallego",
    "Birthdate": "11/20/1979",
    "Party": "Democratic"
  },
  {
    "District": "Arkansas",
    "Name": "John Boozman",
    "Birthdate": "12/10/1950",
    "Party": "Republican"
  },
  {
    "District": "Arkansas",
    "Name": "Tom Cotton",
    "Birthdate": "05/13/1977",
    "Party": "Republican"
  },
  {
    "District": "California",
    "Name": "Alex Padilla",
    "Birthdate": "03/22/1973",
    "Party": "Democratic"
  },
  {
    "District": "California",
    "Name": "Adam Schiff",
    "Birthdate": "06/22/1960",
    "Party": "Democratic"
  },
  {
    "District": "Colorado",
    "Name": "Michael Bennet",
    "Birthdate": "11/28/1964",
    "Party": "Democratic"
  },
  {
    "District": "Colorado",
    "Name": "John Hickenlooper",
    "Birthdate": "02/07/1952",
    "Party": "Democratic"
  },
  {
    "District": "Connecticut",
    "Name": "Richard Blumenthal",
    "Birthdate": "02/13/1946",
    "Party": "Democratic"
  },
  {
    "District": "Connecticut",
    "Name": "Chris Murphy",
    "Birthdate": "08/03/1973",
    "Party": "Democratic"
  },
  {
    "District": "Delaware",
    "Name": "Chris Coons",
    "Birthdate": "09/09/1963",
    "Party": "Democratic"
  },
  {
    "District": "Delaware",
    "Name": "Lisa Blunt Rochester",
    "Birthdate": "02/10/1962",
    "Party": "Democratic"
  },
  {
    "District": "Florida",
    "Name": "Rick Scott",
    "Birthdate": "12/01/1952",
    "Party": "Republican"
  },
  {
    "District": "Florida",
    "Name": "Ashley Moody",
    "Birthdate": "03/28/1975",
    "Party": "Republican"
  },
  {
    "District": "Georgia",
    "Name": "Jon Ossoff",
    "Birthdate": "02/16/1987",
    "Party": "Democratic"
  },
  {
    "District": "Georgia",
    "Name": "Raphael Warnock",
    "Birthdate": "07/23/1969",
    "Party": "Democratic"
  },
  {
    "District": "Hawaii",
    "Name": "Brian Schatz",
    "Birthdate": "10/20/1972",
    "Party": "Democratic"
  },
  {
    "District": "Hawaii",
    "Name": "Mazie Hirono",
    "Birthdate": "11/03/1947",
    "Party": "Democratic"
  },
  {
    "District": "Idaho",
    "Name": "Mike Crapo",
    "Birthdate": "05/20/1951",
    "Party": "Republican"
  },
  {
    "District": "Idaho",
    "Name": "Jim Risch",
    "Birthdate": "05/03/1943",
    "Party": "Republican"
  },
  {
    "District": "Illinois",
    "Name": "Dick Durbin",
    "Birthdate": "11/21/1944",
    "Party": "Democratic"
  },
  {
    "District": "Illinois",
    "Name": "Tammy Duckworth",
    "Birthdate": "03/12/1968",
    "Party": "Democratic"
  },
  {
    "District": "Indiana",
    "Name": "Todd Young",
    "Birthdate": "08/24/1972",
    "Party": "Republican"
  },
  {
    "District": "Indiana",
    "Name": "Jim Banks",
    "Birthdate": "07/16/1979",
    "Party": "Republican"
  },
  {
    "District": "Iowa",
    "Name": "Chuck Grassley",
    "Birthdate": "09/17/1933",
    "Party": "Republican"
  },
  {
    "District": "Iowa",
    "Name": "Joni Ernst",
    "Birthdate": "07/01/1970",
    "Party": "Republican"
  },
  {
    "District": "Kansas",
    "Name": "Jerry Moran",
    "Birthdate": "05/29/1954",
    "Party": "Republican"
  },
  {
    "District": "Kansas",
    "Name": "Roger Marshall",
    "Birthdate": "08/09/1960",
    "Party": "Republican"
  },
  {
    "District": "Kentucky",
    "Name": "Mitch McConnell",
    "Birthdate": "02/20/1942",
    "Party": "Republican"
  },
  {
    "District": "Kentucky",
    "Name": "Rand Paul",
    "Birthdate": "01/07/1963",
    "Party": "Republican"
  },
  {
    "District": "Louisiana",
    "Name": "Bill Cassidy",
    "Birthdate": "09/28/1957",
    "Party": "Republican"
  },
  {
    "District": "Louisiana",
    "Name": "John Kennedy",
    "Birthdate": "11/21/1951",
    "Party": "Republican"
  },
  {
    "District": "Maine",
    "Name": "Susan Collins",
    "Birthdate": "12/07/1952",
    "Party": "Republican"
  },
  {
    "District": "Maine",
    "Name": "Angus King",
    "Birthdate": "03/31/1944",
    "Party": "Independent"
  },
  {
    "District": "Maryland",
    "Name": "Chris Van Hollen",
    "Birthdate": "01/10/1959",
    "Party": "Democratic"
  },
  {
    "District": "Maryland",
    "Name": "Angela Alsobrooks",
    "Birthdate": "02/23/1971",
    "Party": "Democratic"
  },
  {
    "District": "Massachusetts",
    "Name": "Elizabeth Warren",
    "Birthdate": "06/22/1949",
    "Party": "Democratic"
  },
  {
    "District": "Massachusetts",
    "Name": "Ed Markey",
    "Birthdate": "07/11/1946",
    "Party": "Democratic"
  },
  {
    "District": "Michigan",
    "Name": "Gary Peters",
    "Birthdate": "12/01/1958",
    "Party": "Democratic"
  },
  {
    "District": "Michigan",
    "Name": "Elissa Slotkin",
    "Birthdate": "07/10/1976",
    "Party": "Democratic"
  },
  {
    "District": "Minnesota",
    "Name": "Amy Klobuchar",
    "Birthdate": "05/25/1960",
    "Party": "Democratic"
  },
  {
    "District": "Minnesota",
    "Name": "Tina Smith",
    "Birthdate": "03/04/1958",
    "Party": "Democratic"
  },
  {
    "District": "Mississippi",
    "Name": "Roger Wicker",
    "Birthdate": "07/05/1951",
    "Party": "Republican"
  },
  {
    "District": "Mississippi",
    "Name": "Cindy Hyde-Smith",
    "Birthdate": "05/10/1959",
    "Party": "Republican"
  },
  {
    "District": "Missouri",
    "Name": "Josh Hawley",
    "Birthdate": "12/31/1979",
    "Party": "Republican"
  },
  {
    "District": "Missouri",
    "Name": "Eric Schmitt",
    "Birthdate": "06/20/1975",
    "Party": "Republican"
  },
  {
    "District": "Montana",
    "Name": "Steve Daines",
    "Birthdate": "08/20/1962",
    "Party": "Republican"
  },
  {
    "District": "Montana",
    "Name": "Tim Sheehy",
    "Birthdate": "11/18/1985",
    "Party": "Republican"
  },
  {
    "District": "Nebraska",
    "Name": "Deb Fischer",
    "Birthdate": "03/01/1951",
    "Party": "Republican"
  },
  {
    "District": "Nebraska",
    "Name": "Pete Ricketts",
    "Birthdate": "08/19/1964",
    "Party": "Republican"
  },
  {
    "District": "Nevada",
    "Name": "Catherine Cortez Masto",
    "Birthdate": "03/29/1964",
    "Party": "Democratic"
  },
  {
    "District": "Nevada",
    "Name": "Jacky Rosen",
    "Birthdate": "08/02/1957",
    "Party": "Democratic"
  },
  {
    "District": "New Hampshire",
    "Name": "Jeanne Shaheen",
    "Birthdate": "01/28/1947",
    "Party": "Democratic"
  },
  {
    "District": "New Hampshire",
    "Name": "Maggie Hassan",
    "Birthdate": "02/27/1958",
    "Party": "Democratic"
  },
  {
    "District": "New Jersey",
    "Name": "Cory Booker",
    "Birthdate": "04/27/1969",
    "Party": "Democratic"
  },
  {
    "District": "New Jersey",
    "Name": "Andy Kim",
    "Birthdate": "07/12/1982",
    "Party": "Democratic"
  },
  {
    "District": "New Mexico",
    "Name": "Martin Heinrich",
    "Birthdate": "10/17/1971",
    "Party": "Democratic"
  },
  {
    "District": "New Mexico",
    "Name": "Ben Ray Luján",
    "Birthdate": "06/07/1972",
    "Party": "Democratic"
  },
  {
    "District": "New York",
    "Name": "Chuck Schumer",
    "Birthdate": "11/23/1950",
    "Party": "Democratic"
  },
  {
    "District": "New York",
    "Name": "Kirsten Gillibrand",
    "Birthdate": "12/09/1966",
    "Party": "Democratic"
  },
  {
    "District": "North Carolina",
    "Name": "Thom Tillis",
    "Birthdate": "08/30/1960",
    "Party": "Republican"
  },
  {
    "District": "North Carolina",
    "Name": "Ted Budd",
    "Birthdate": "10/21/1971",
    "Party": "Republican"
  },
  {
    "District": "North Dakota",
    "Name": "John Hoeven",
    "Birthdate": "03/13/1957",
    "Party": "Republican"
  },
  {
    "District": "North Dakota",
    "Name": "Kevin Cramer",
    "Birthdate": "01/21/1961",
    "Party": "Republican"
  },
  {
    "District": "Ohio",
    "Name": "Bernie Moreno",
    "Birthdate": "02/14/1967",
    "Party": "Republican"
  },
  {
    "District": "Ohio",
    "Name": "Jon Husted",
    "Birthdate": "08/25/1967",
    "Party": "Republican"
  },
  {
    "District": "Oklahoma",
    "Name": "James Lankford",
    "Birthdate": "03/04/1968",
    "Party": "Republican"
  },
  {
    "District": "Oklahoma",
    "Name": "Markwayne Mullin",
    "Birthdate": "07/26/1977",
    "Party": "Republican"
  },
  {
    "District": "Oregon",
    "Name": "Ron Wyden",
    "Birthdate": "05/03/1949",
    "Party": "Democratic"
  },
  {
    "District": "Oregon",
    "Name": "Jeff Merkley",
    "Birthdate": "10/24/1956",
    "Party": "Democratic"
  },
  {
    "District": "Pennsylvania",
    "Name": "John Fetterman",
    "Birthdate": "08/15/1969",
    "Party": "Democratic"
  },
  {
    "District": "Pennsylvania",
    "Name": "Dave McCormick",
    "Birthdate": "08/17/1965",
    "Party": "Republican"
  },
  {
    "District": "Rhode Island",
    "Name": "Jack Reed",
    "Birthdate": "11/12/1949",
    "Party": "Democratic"
  },
  {
    "District": "Rhode Island",
    "Name": "Sheldon Whitehouse",
    "Birthdate": "10/20/1955",
    "Party": "Democratic"
  },
  {
    "District": "South Carolina",
    "Name": "Lindsey Graham",
    "Birthdate": "07/09/1955",
    "Party": "Republican"
  },
  {
    "District": "South Carolina",
    "Name": "Tim Scott",
    "Birthdate": "09/19/1965",
    "Party": "Republican"
  },
  {
    "District": "South Dakota",
    "Name": "John Thune",
    "Birthdate": "01/07/1961",
    "Party": "Republican"
  },
  {
    "District": "South Dakota",
    "Name": "Mike Rounds",
    "Birthdate": "10/24/1954",
    "Party": "Republican"
  },
  {
    "District": "Tennessee",
    "Name": "Marsha Blackburn",
    "Birthdate": "06/06/1952",
    "Party": "Republican"
  },
  {
    "District": "Tennessee",
    "Name": "Bill Hagerty",
    "Birthdate": "08/14/1959",
    "Party": "Republican"
  },
  {
    "District": "Texas",
    "Name": "John Cornyn",
    "Birthdate": "02/02/1952",
    "Party": "Republican"
  },
  {
    "District": "Texas",
    "Name": "Ted Cruz",
    "Birthdate": "12/22/1970",
    "Party": "Republican"
  },
  {
    "District": "Utah",
    "Name": "Mike Lee",
    "Birthdate": "06/04/1971",
    "Party": "Republican"
  },
  {
    "District": "Utah",
    "Name": "John Curtis",
    "Birthdate": "05/10/1960",
    "Party": "Republican"
  },
  {
    "District": "Vermont",
    "Name": "Bernie Sanders",
    "Birthdate": "09/08/1941",
    "Party": "Independent"
  },
  {
    "District": "Vermont",
    "Name": "Peter Welch",
    "Birthdate": "05/02/1947",
    "Party": "Democratic"
  },
  {
    "District": "Virginia",
    "Name": "Mark Warner",
    "Birthdate": "12/15/1954",
    "Party": "Democratic"
  },
  {
    "District": "Virginia",
    "Name": "Tim Kaine",
    "Birthdate": "02/26/1958",
    "Party": "Democratic"
  },
  {
    "District": "Washington",
    "Name": "Patty Murray",
    "Birthdate": "10/11/1950",
    "Party": "Democratic"
  },
  {
    "District": "Washington",
    "Name": "Maria Cantwell",
    "Birthdate": "10/13/1958",
    "Party": "Democratic"
  },
  {
    "District": "West Virginia",
    "Name": "Shelley Moore Capito",
    "Birthdate": "11/26/1953",
    "Party": "Republican"
  },
  {
    "District": "West Virginia",
    "Name": "Jim Justice",
    "Birthdate": "04/27/1951",
    "Party": "Republican"
  },
  {
    "District": "Wisconsin",
    "Name": "Ron Johnson",
    "Birthdate": "04/08/1955",
    "Party": "Republican"
  },
  {
    "District": "Wisconsin",
    "Name": "Tammy Baldwin",
    "Birthdate": "02/11/1962",
    "Party": "Democratic"
  },
  {
    "District": "Wyoming",
    "Name": "John Barrasso",
    "Birthdate": "07/21/1952",
    "Party": "Republican"
  },
  {
    "District": "Wyoming",
    "Name": "Cynthia Lummis",
    "Birthdate": "09/10/1954",
    "Party": "Republican"
  }
]

const membersOfCongressPerAge = (data) => data.reduce((acc, cur) => {
  const age = Math.round((Date.now() - Date.parse(cur.Birthdate))/(1000*60*60*24*365.25));
  if (acc[age]){
    acc[age] = acc[age]+1
  } else {
    acc[age] = 1
  }
  return acc;
}, {})

console.log(membersOfCongressPerAge(senateData))

const congressData = houseData.concat(senateData);

export {
  houseData,
  senateData,
  congressData,
  membersOfCongressPerAge
}
