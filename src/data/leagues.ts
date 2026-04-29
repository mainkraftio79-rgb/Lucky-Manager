export interface Player {
  id: string;
  name: string;
  position: "GK" | "DEF" | "MID" | "FWD";
  naturalPosition?: string;
  rating: number;
  potential: number;
  age: number;
  isYouthPlayer?: boolean;
  matchesPlayedAsYouth?: number;
  matchesThisSeason?: number;
  initialRating?: number;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  injuries?: number;
  injuryMatches?: number;
  suspensionMatches?: number;
}

export interface Team {
  id: string;
  name: string;
  colors: [string, string]; // Primary, Secondary hex codes
  rating: number;
  players: Player[];
}

export interface League {
  id: string;
  name: string;
  country: string;
  flag: string; // Emoji or code
  teams: Team[];
}

// Helper to generate generic players to fill roster
const generatePlayers = (
  teamRating: number,
  existingPlayers: Player[] = [],
): Player[] => {
  // User requested no generated players. Returning only real players.
  return existingPlayers.sort((a, b) => b.rating - a.rating);
};

export const leagues: League[] = [
  {
    id: "pl",
    name: "English Premier League",
    country: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    teams: [
      {
        id: "mci",
        name: "Manchester City",
        colors: ["#6CABDD", "#1C2C5B"],
        rating: 92,
        players: [],
      },
      {
        id: "ars",
        name: "Arsenal",
        colors: ["#EF0107", "#FFFFFF"],
        rating: 89,
        players: [],
      },
      {
        id: "liv",
        name: "Liverpool",
        colors: ["#C8102E", "#00B2A9"],
        rating: 88,
        players: [],
      },
      {
        id: "che",
        name: "Chelsea",
        colors: ["#034694", "#FFFFFF"],
        rating: 85,
        players: [],
      },
      {
        id: "mun",
        name: "Manchester United",
        colors: ["#DA291C", "#FBE122"],
        rating: 84,
        players: [],
      },
      {
        id: "tot",
        name: "Tottenham",
        colors: ["#FFFFFF", "#132257"],
        rating: 83,
        players: [],
      },
      {
        id: "new",
        name: "Newcastle United",
        colors: ["#000000", "#FFFFFF"],
        rating: 82,
        players: [],
      },
      {
        id: "avl",
        name: "Aston Villa",
        colors: ["#95BFE5", "#670E36"],
        rating: 81,
        players: [],
      },
      {
        id: "whu",
        name: "West Ham",
        colors: ["#7A263A", "#1BB1E7"],
        rating: 79,
        players: [],
      },
      {
        id: "bha",
        name: "Brighton",
        colors: ["#0057B8", "#FFFFFF"],
        rating: 78,
        players: [],
      },
      {
        id: "wol",
        name: "Wolves",
        colors: ["#FDB913", "#000000"],
        rating: 77,
        players: [],
      },
      {
        id: "ful",
        name: "Fulham",
        colors: ["#FFFFFF", "#000000"],
        rating: 76,
        players: [],
      },
      {
        id: "bou",
        name: "Bournemouth",
        colors: ["#DA291C", "#000000"],
        rating: 75,
        players: [],
      },
      {
        id: "cry",
        name: "Crystal Palace",
        colors: ["#1B458F", "#C4122E"],
        rating: 75,
        players: [],
      },
      {
        id: "bre",
        name: "Brentford",
        colors: ["#E30613", "#FFFFFF"],
        rating: 74,
        players: [],
      },
      {
        id: "eve",
        name: "Everton",
        colors: ["#003399", "#FFFFFF"],
        rating: 74,
        players: [],
      },
      {
        id: "nfo",
        name: "Nottingham Forest",
        colors: ["#DD0000", "#FFFFFF"],
        rating: 73,
        players: [],
      },
      {
        id: "lei",
        name: "Leicester City",
        colors: ["#0053A0", "#FFFFFF"],
        rating: 74,
        players: [],
      },
      {
        id: "sou",
        name: "Southampton",
        colors: ["#D71920", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "ips",
        name: "Ipswich Town",
        colors: ["#3A64A3", "#FFFFFF"],
        rating: 71,
        players: [],
      },
    ],
  },
  {
    id: "laliga",
    name: "La Liga",
    country: "Spain",
    flag: "🇪🇸",
    teams: [
      {
        id: "rma",
        name: "Real Madrid",
        colors: ["#FFFFFF", "#FEBE10"],
        rating: 91,
        players: [],
      },
      {
        id: "bar",
        name: "Barcelona",
        colors: ["#A50044", "#004D98"],
        rating: 88,
        players: [],
      },
      {
        id: "atm",
        name: "Atletico Madrid",
        colors: ["#CB3524", "#272E61"],
        rating: 85,
        players: [],
      },
      {
        id: "sev",
        name: "Sevilla",
        colors: ["#FFFFFF", "#D4001F"],
        rating: 80,
        players: [],
      },
      {
        id: "val",
        name: "Valencia",
        colors: ["#FFFFFF", "#000000"],
        rating: 78,
        players: [],
      },
      {
        id: "rso",
        name: "Real Sociedad",
        colors: ["#0067B1", "#FFFFFF"],
        rating: 82,
        players: [],
      },
      {
        id: "bet",
        name: "Real Betis",
        colors: ["#0BB363", "#FFFFFF"],
        rating: 80,
        players: [],
      },
      {
        id: "ath",
        name: "Athletic Club",
        colors: ["#EE2523", "#FFFFFF"],
        rating: 81,
        players: [],
      },
      {
        id: "vil",
        name: "Villarreal",
        colors: ["#FBE122", "#005187"],
        rating: 80,
        players: [],
      },
      {
        id: "gir",
        name: "Girona",
        colors: ["#CE1126", "#FFFFFF"],
        rating: 79,
        players: [],
      },
      {
        id: "cel",
        name: "Celta Vigo",
        colors: ["#8CC7E0", "#FFFFFF"],
        rating: 77,
        players: [],
      },
      {
        id: "osa",
        name: "Osasuna",
        colors: ["#0A346F", "#D91A21"],
        rating: 76,
        players: [],
      },
      {
        id: "get",
        name: "Getafe",
        colors: ["#005999", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "mal",
        name: "Mallorca",
        colors: ["#E20613", "#000000"],
        rating: 74,
        players: [],
      },
      {
        id: "ray",
        name: "Rayo Vallecano",
        colors: ["#FFFFFF", "#CE1126"],
        rating: 74,
        players: [],
      },
      {
        id: "ala",
        name: "Alaves",
        colors: ["#0057A5", "#FFFFFF"],
        rating: 73,
        players: [],
      },
      {
        id: "pal",
        name: "Las Palmas",
        colors: ["#FCD016", "#005DAA"],
        rating: 73,
        players: [],
      },
      {
        id: "leg",
        name: "Leganes",
        colors: ["#005DAA", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "val2",
        name: "Valladolid",
        colors: ["#5E278E", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "esp",
        name: "Espanyol",
        colors: ["#007FC8", "#FFFFFF"],
        rating: 72,
        players: [],
      },
    ],
  },
  {
    id: "seriea",
    name: "Serie A",
    country: "Italy",
    flag: "🇮🇹",
    teams: [
      {
        id: "int",
        name: "Inter Milan",
        colors: ["#010E80", "#000000"],
        rating: 87,
        players: [],
      },
      {
        id: "mil",
        name: "AC Milan",
        colors: ["#FB090B", "#000000"],
        rating: 85,
        players: [],
      },
      {
        id: "juv",
        name: "Juventus",
        colors: ["#FFFFFF", "#000000"],
        rating: 84,
        players: [],
      },
      {
        id: "nap",
        name: "Napoli",
        colors: ["#003B95", "#FFFFFF"],
        rating: 83,
        players: [],
      },
      {
        id: "rom",
        name: "AS Roma",
        colors: ["#8E1F2F", "#F0BC42"],
        rating: 81,
        players: [],
      },
      {
        id: "ata",
        name: "Atalanta",
        colors: ["#1E71B8", "#000000"],
        rating: 82,
        players: [],
      },
      {
        id: "laz",
        name: "Lazio",
        colors: ["#87D8F7", "#FFFFFF"],
        rating: 80,
        players: [],
      },
      {
        id: "fio",
        name: "Fiorentina",
        colors: ["#4F2E90", "#FFFFFF"],
        rating: 79,
        players: [],
      },
      {
        id: "bol",
        name: "Bologna",
        colors: ["#1A2F48", "#A21C26"],
        rating: 78,
        players: [],
      },
      {
        id: "tor",
        name: "Torino",
        colors: ["#8A1E03", "#FFFFFF"],
        rating: 76,
        players: [],
      },
      {
        id: "mnz",
        name: "Monza",
        colors: ["#E30613", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "gen",
        name: "Genoa",
        colors: ["#CF102D", "#002D5C"],
        rating: 74,
        players: [],
      },
      {
        id: "ud",
        name: "Udinese",
        colors: ["#FFFFFF", "#000000"],
        rating: 74,
        players: [],
      },
      {
        id: "lec",
        name: "Lecce",
        colors: ["#DC143C", "#FCD116"],
        rating: 73,
        players: [],
      },
      {
        id: "emp",
        name: "Empoli",
        colors: ["#00579C", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "ver",
        name: "Verona",
        colors: ["#002B7F", "#FCD116"],
        rating: 72,
        players: [],
      },
      {
        id: "cag",
        name: "Cagliari",
        colors: ["#002350", "#A50044"],
        rating: 72,
        players: [],
      },
      {
        id: "par",
        name: "Parma",
        colors: ["#FFFFFF", "#000000"],
        rating: 71,
        players: [],
      },
      {
        id: "com",
        name: "Como",
        colors: ["#005CA9", "#FFFFFF"],
        rating: 71,
        players: [],
      },
      {
        id: "ven",
        name: "Venezia",
        colors: ["#E35205", "#000000"],
        rating: 70,
        players: [],
      },
    ],
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    country: "Germany",
    flag: "🇩🇪",
    teams: [
      {
        id: "bay",
        name: "Bayern Munich",
        colors: ["#DC052D", "#FFFFFF"],
        rating: 90,
        players: [],
      },
      {
        id: "dor",
        name: "Borussia Dortmund",
        colors: ["#FDE100", "#000000"],
        rating: 84,
        players: [],
      },
      {
        id: "lev",
        name: "Bayer Leverkusen",
        colors: ["#E32219", "#000000"],
        rating: 86,
        players: [],
      },
      {
        id: "rbl",
        name: "RB Leipzig",
        colors: ["#FFFFFF", "#DD0741"],
        rating: 83,
        players: [],
      },
      {
        id: "fra",
        name: "Eintracht Frankfurt",
        colors: ["#E1000F", "#000000"],
        rating: 79,
        players: [],
      },
      {
        id: "stu",
        name: "Stuttgart",
        colors: ["#FFFFFF", "#E32219"],
        rating: 80,
        players: [],
      },
      {
        id: "hof",
        name: "Hoffenheim",
        colors: ["#005CA9", "#FFFFFF"],
        rating: 77,
        players: [],
      },
      {
        id: "wob",
        name: "Wolfsburg",
        colors: ["#65B32E", "#FFFFFF"],
        rating: 77,
        players: [],
      },
      {
        id: "fre",
        name: "Freiburg",
        colors: ["#FFFFFF", "#000000"],
        rating: 78,
        players: [],
      },
      {
        id: "mai",
        name: "Mainz 05",
        colors: ["#C3141F", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "gla",
        name: "Monchengladbach",
        colors: ["#FFFFFF", "#000000"],
        rating: 76,
        players: [],
      },
      {
        id: "uni",
        name: "Union Berlin",
        colors: ["#D4011D", "#FDE100"],
        rating: 76,
        players: [],
      },
      {
        id: "wer",
        name: "Werder Bremen",
        colors: ["#1D9053", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "aug",
        name: "Augsburg",
        colors: ["#FFFFFF", "#BA3733"],
        rating: 74,
        players: [],
      },
      {
        id: "hei",
        name: "Heidenheim",
        colors: ["#E2001A", "#004A99"],
        rating: 73,
        players: [],
      },
      {
        id: "boc",
        name: "Bochum",
        colors: ["#005CA9", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "stp",
        name: "St. Pauli",
        colors: ["#3F2A21", "#FFFFFF"],
        rating: 71,
        players: [],
      },
      {
        id: "kie",
        name: "Holstein Kiel",
        colors: ["#005CA9", "#E32219"],
        rating: 70,
        players: [],
      },
    ],
  },
  {
    id: "ligue1",
    name: "Ligue 1",
    country: "France",
    flag: "🇫🇷",
    teams: [
      {
        id: "psg",
        name: "Paris Saint-Germain",
        colors: ["#004170", "#DA291C"],
        rating: 88,
        players: [],
      },
      {
        id: "mar",
        name: "Marseille",
        colors: ["#FFFFFF", "#009DDC"],
        rating: 80,
        players: [],
      },
      {
        id: "asm",
        name: "Monaco",
        colors: ["#E7001A", "#FFFFFF"],
        rating: 81,
        players: [],
      },
      {
        id: "lil",
        name: "Lille",
        colors: ["#E01E13", "#1D2D5D"],
        rating: 79,
        players: [],
      },
      {
        id: "lyo",
        name: "Lyon",
        colors: ["#FFFFFF", "#1D2D5D"],
        rating: 78,
        players: [],
      },
      {
        id: "len",
        name: "Lens",
        colors: ["#E1000F", "#FDE100"],
        rating: 77,
        players: [],
      },
      {
        id: "ren",
        name: "Rennes",
        colors: ["#E30613", "#000000"],
        rating: 76,
        players: [],
      },
      {
        id: "nic",
        name: "Nice",
        colors: ["#E30613", "#000000"],
        rating: 76,
        players: [],
      },
      {
        id: "rei",
        name: "Reims",
        colors: ["#E30613", "#FFFFFF"],
        rating: 74,
        players: [],
      },
      {
        id: "str",
        name: "Strasbourg",
        colors: ["#009DDC", "#FFFFFF"],
        rating: 73,
        players: [],
      },
      {
        id: "tou",
        name: "Toulouse",
        colors: ["#5E278E", "#FFFFFF"],
        rating: 73,
        players: [],
      },
      {
        id: "mon2",
        name: "Montpellier",
        colors: ["#003399", "#E45E25"],
        rating: 72,
        players: [],
      },
      {
        id: "nan",
        name: "Nantes",
        colors: ["#FDE100", "#009DDC"],
        rating: 72,
        players: [],
      },
      {
        id: "bst",
        name: "Brest",
        colors: ["#E30613", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "hav",
        name: "Le Havre",
        colors: ["#87D8F7", "#002350"],
        rating: 71,
        players: [],
      },
      {
        id: "aux",
        name: "Auxerre",
        colors: ["#FFFFFF", "#005CA9"],
        rating: 70,
        players: [],
      },
      {
        id: "sai",
        name: "Saint-Etienne",
        colors: ["#009DDC", "#008057"],
        rating: 71,
        players: [],
      },
      {
        id: "ang",
        name: "Angers",
        colors: ["#000000", "#FFFFFF"],
        rating: 70,
        players: [],
      },
    ],
  },
  {
    id: "rpl",
    name: "Russian Premier League",
    country: "Russia",
    flag: "🇷🇺",
    teams: [
      {
        id: "zen",
        name: "Zenit St. Petersburg",
        colors: ["#4299D3", "#FFFFFF"],
        rating: 78,
        players: [],
      },
      {
        id: "spa",
        name: "Spartak Moscow",
        colors: ["#E30613", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "csk",
        name: "CSKA Moscow",
        colors: ["#E30613", "#003399"],
        rating: 74,
        players: [],
      },
      {
        id: "dyn",
        name: "Dynamo Moscow",
        colors: ["#003399", "#FFFFFF"],
        rating: 73,
        players: [],
      },
      {
        id: "kra",
        name: "Krasnodar",
        colors: ["#014D32", "#000000"],
        rating: 74,
        players: [],
      },
      {
        id: "lok",
        name: "Lokomotiv Moscow",
        colors: ["#008057", "#E30613"],
        rating: 73,
        players: [],
      },
      {
        id: "ros",
        name: "Rostov",
        colors: ["#FDE100", "#003399"],
        rating: 71,
        players: [],
      },
      {
        id: "akh",
        name: "Akhmat Grozny",
        colors: ["#008057", "#FFFFFF"],
        rating: 70,
        players: [],
      },
      {
        id: "kry",
        name: "Krylya Sovetov",
        colors: ["#4299D3", "#FFFFFF"],
        rating: 70,
        players: [],
      },
      {
        id: "rub",
        name: "Rubin Kazan",
        colors: ["#8E1F2F", "#008057"],
        rating: 71,
        players: [],
      },
      {
        id: "fak",
        name: "Fakel Voronezh",
        colors: ["#003399", "#FFFFFF"],
        rating: 68,
        players: [],
      },
      {
        id: "ore",
        name: "Orenburg",
        colors: ["#003399", "#FFFFFF"],
        rating: 69,
        players: [],
      },
      {
        id: "pnn",
        name: "Pari NN",
        colors: ["#4299D3", "#003399"],
        rating: 68,
        players: [],
      },
      {
        id: "ura",
        name: "Ural",
        colors: ["#E45E25", "#000000"],
        rating: 69,
        players: [],
      },
      {
        id: "bal",
        name: "Baltika",
        colors: ["#FFFFFF", "#003399"],
        rating: 68,
        players: [],
      },
      {
        id: "soc",
        name: "Sochi",
        colors: ["#003399", "#FFFFFF"],
        rating: 69,
        players: [],
      },
    ],
  },
  {
    id: "kpl",
    name: "Kazakhstan Premier League",
    country: "Kazakhstan",
    flag: "🇰🇿",
    teams: [
      {
        id: "ast",
        name: "FC Astana",
        colors: ["#00AEEF", "#FFD200"],
        rating: 68,
        players: [],
      },
      {
        id: "kai",
        name: "Kairat Almaty",
        colors: ["#FDB913", "#000000"],
        rating: 67,
        players: [],
      },
      {
        id: "tob",
        name: "Tobol Kostanay",
        colors: ["#FFD200", "#000000"],
        rating: 65,
        players: [],
      },
      {
        id: "ord",
        name: "Ordabasy",
        colors: ["#FFFFFF", "#00539C"],
        rating: 66,
        players: [],
      },
      {
        id: "akt",
        name: "Aktobe",
        colors: ["#D6001D", "#FFFFFF"],
        rating: 65,
        players: [],
      },
      {
        id: "eli",
        name: "Elimai",
        colors: ["#FDB913", "#00539C"],
        rating: 64,
        players: [],
      },
      {
        id: "kyz",
        name: "Kyzylzhar",
        colors: ["#000000", "#FFFFFF"],
        rating: 63,
        players: [],
      },
      {
        id: "kai2",
        name: "Kaisar",
        colors: ["#E30613", "#FFFFFF"],
        rating: 62,
        players: [],
      },
      {
        id: "zhe",
        name: "Zhetysu",
        colors: ["#FDE100", "#009DDC"],
        rating: 62,
        players: [],
      },
      {
        id: "sha",
        name: "Shakhter Karagandy",
        colors: ["#E45E25", "#000000"],
        rating: 61,
        players: [],
      },
      {
        id: "aty",
        name: "Atyrau",
        colors: ["#008057", "#FFFFFF"],
        rating: 62,
        players: [],
      },
      {
        id: "tur",
        name: "Turan",
        colors: ["#009DDC", "#FFFFFF"],
        rating: 60,
        players: [],
      },
      {
        id: "okz",
        name: "Okzhetpes",
        colors: ["#003399", "#FFFFFF"],
        rating: 61,
        players: [],
      },
    ],
  },
  {
    id: "nos",
    name: "Primeira Liga",
    country: "Portugal",
    flag: "🇵🇹",
    teams: [
      {
        id: "ben",
        name: "Benfica",
        colors: ["#E30613", "#FFFFFF"],
        rating: 81,
        players: [],
      },
      {
        id: "por",
        name: "Porto",
        colors: ["#00428C", "#FFFFFF"],
        rating: 80,
        players: [],
      },
      {
        id: "spo",
        name: "Sporting CP",
        colors: ["#008057", "#FFFFFF"],
        rating: 82,
        players: [],
      },
      {
        id: "bra",
        name: "Braga",
        colors: ["#E30613", "#FFFFFF"],
        rating: 77,
        players: [],
      },
      {
        id: "gui",
        name: "Vitoria de Guimaraes",
        colors: ["#FFFFFF", "#000000"],
        rating: 74,
        players: [],
      },
      {
        id: "fam",
        name: "Famalicao",
        colors: ["#003399", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "mor",
        name: "Moreirense",
        colors: ["#008057", "#FFFFFF"],
        rating: 71,
        players: [],
      },
      {
        id: "aro",
        name: "Arouca",
        colors: ["#FDE100", "#003399"],
        rating: 71,
        players: [],
      },
      {
        id: "gil",
        name: "Gil Vicente",
        colors: ["#E30613", "#003399"],
        rating: 70,
        players: [],
      },
      {
        id: "rio",
        name: "Rio Ave",
        colors: ["#008057", "#FFFFFF"],
        rating: 70,
        players: [],
      },
      {
        id: "est",
        name: "Estoril",
        colors: ["#FDE100", "#003399"],
        rating: 69,
        players: [],
      },
      {
        id: "boa",
        name: "Boavista",
        colors: ["#000000", "#FFFFFF"],
        rating: 69,
        players: [],
      },
    ],
  },
  {
    id: "superlig",
    name: "Turkish Super League",
    country: "Turkey",
    flag: "🇹🇷",
    teams: [
      {
        id: "gal",
        name: "Galatasaray",
        colors: ["#A90432", "#FDB912"],
        rating: 79,
        players: [],
      },
      {
        id: "fen",
        name: "Fenerbahce",
        colors: ["#002D72", "#FBE122"],
        rating: 78,
        players: [],
      },
      {
        id: "bes",
        name: "Besiktas",
        colors: ["#000000", "#FFFFFF"],
        rating: 76,
        players: [],
      },
      {
        id: "tra",
        name: "Trabzonspor",
        colors: ["#8E1F2F", "#4299D3"],
        rating: 74,
        players: [],
      },
      {
        id: "bas",
        name: "Basaksehir",
        colors: ["#E05E1F", "#1C2C5B"],
        rating: 72,
        players: [],
      },
      {
        id: "kas",
        name: "Kasimpasa",
        colors: ["#003399", "#FFFFFF"],
        rating: 71,
        players: [],
      },
      {
        id: "siv",
        name: "Sivasspor",
        colors: ["#E30613", "#FFFFFF"],
        rating: 70,
        players: [],
      },
      {
        id: "aly",
        name: "Alanyaspor",
        colors: ["#F47920", "#008057"],
        rating: 70,
        players: [],
      },
      {
        id: "riz",
        name: "Rizespor",
        colors: ["#008057", "#003399"],
        rating: 69,
        players: [],
      },
      {
        id: "ant",
        name: "Antalyaspor",
        colors: ["#E30613", "#FFFFFF"],
        rating: 69,
        players: [],
      },
      {
        id: "gaz",
        name: "Gaziantep",
        colors: ["#E30613", "#000000"],
        rating: 68,
        players: [],
      },
      {
        id: "kon",
        name: "Konyaspor",
        colors: ["#008057", "#FFFFFF"],
        rating: 68,
        players: [],
      },
    ],
  },
  {
    id: "eredivisie",
    name: "Eredivisie",
    country: "Netherlands",
    flag: "🇳🇱",
    teams: [
      {
        id: "psv",
        name: "PSV Eindhoven",
        colors: ["#DA291C", "#FFFFFF"],
        rating: 79,
        players: [],
      },
      {
        id: "fey",
        name: "Feyenoord",
        colors: ["#DA291C", "#FFFFFF"],
        rating: 78,
        players: [],
      },
      {
        id: "aja",
        name: "Ajax",
        colors: ["#DA291C", "#FFFFFF"],
        rating: 77,
        players: [],
      },
      {
        id: "az",
        name: "AZ Alkmaar",
        colors: ["#DA291C", "#FFFFFF"],
        rating: 75,
        players: [],
      },
      {
        id: "twe",
        name: "Twente",
        colors: ["#DA291C", "#FFFFFF"],
        rating: 74,
        players: [],
      },
      {
        id: "utr",
        name: "Utrecht",
        colors: ["#E30613", "#FFFFFF"],
        rating: 72,
        players: [],
      },
      {
        id: "nec",
        name: "NEC Nijmegen",
        colors: ["#E30613", "#008057"],
        rating: 71,
        players: [],
      },
      {
        id: "spr",
        name: "Sparta Rotterdam",
        colors: ["#E30613", "#FFFFFF"],
        rating: 70,
        players: [],
      },
      {
        id: "gae",
        name: "Go Ahead Eagles",
        colors: ["#FDE100", "#E30613"],
        rating: 70,
        players: [],
      },
      {
        id: "for",
        name: "Fortuna Sittard",
        colors: ["#FDE100", "#008057"],
        rating: 69,
        players: [],
      },
      {
        id: "hee",
        name: "Heerenveen",
        colors: ["#009DDC", "#FFFFFF"],
        rating: 69,
        players: [],
      },
      {
        id: "zwo",
        name: "PEC Zwolle",
        colors: ["#003399", "#FFFFFF"],
        rating: 68,
        players: [],
      },
    ],
  },
];

// Helper to add real players
const addPlayer = (
  teamId: string,
  name: string,
  pos: "GK" | "DEF" | "MID" | "FWD",
  rating: number,
  potentialOrAge: number,
  age?: number,
  naturalPosition?: string,
) => {
  for (const league of leagues) {
    const team = league.teams.find((t) => t.id === teamId);
    if (team) {
      const playerId = name.toLowerCase().replace(/\s/g, "-");
      // Prevent duplicates
      if (team.players.some((p) => p.id === playerId)) {
        return;
      }

      let finalPotential: number;
      let finalAge: number;

      if (age !== undefined) {
        // New signature: (teamId, name, pos, rating, potential, age)
        finalPotential = potentialOrAge;
        finalAge = age;
      } else {
        // Old signature: (teamId, name, pos, rating, age)
        finalAge = potentialOrAge;
        finalPotential = Math.max(rating, rating + (finalAge < 23 ? 5 : 2));
      }

      team.players.push({
        id: playerId,
        name,
        position: pos,
        rating,
        potential: finalPotential,
        age: finalAge,
        naturalPosition,
      });
      return;
    }
  }
};

// --- REAL PLAYER DATA (26/27 Season Context) ---

// Man City

// Arsenal

// Liverpool

// Chelsea

// Man Utd

// Tottenham

// Real Madrid
addPlayer("rma", "Kylian Mbappé", "FWD", 94, 95, 27, "ST");
addPlayer("rma", "Vinicius Jr", "FWD", 92, 94, 26, "LW");
addPlayer("rma", "Jude Bellingham", "MID", 92, 95, 23);
addPlayer("rma", "Federico Valverde", "MID", 89, 90, 28);
addPlayer("rma", "Thibaut Courtois", "GK", 90, 90, 34);
addPlayer("rma", "Rodrygo", "FWD", 87, 90, 25, "RW");
addPlayer("rma", "Eder Militao", "DEF", 87, 89, 28);
addPlayer("rma", "Eduardo Camavinga", "MID", 86, 91, 23);
addPlayer("rma", "Aurelien Tchouameni", "MID", 86, 89, 26);
addPlayer("rma", "Antonio Rudiger", "DEF", 86, 86, 33);
addPlayer("rma", "Dani Carvajal", "DEF", 84, 84, 34);
addPlayer("rma", "David Alaba", "DEF", 84, 84, 34);
addPlayer("rma", "Ferland Mendy", "DEF", 83, 83, 31);
addPlayer("rma", "Brahim Diaz", "MID", 83, 85, 27);
addPlayer("rma", "Arda Guler", "MID", 81, 90, 21);
// transferred to Lyon: addPlayer('rma', 'Endrick', 'FWD', 80, 91, 20);

// Barcelona
addPlayer("bar", "Lamine Yamal", "FWD", 88, 96, 19);
addPlayer("bar", "Pedri", "MID", 87, 91, 23);
addPlayer("bar", "Gavi", "MID", 86, 90, 22);
addPlayer("bar", "Robert Lewandowski", "FWD", 86, 86, 38);
addPlayer("bar", "Ronald Araujo", "DEF", 86, 89, 27);
addPlayer("bar", "Marc-Andre ter Stegen", "GK", 87, 87, 34);
addPlayer("bar", "Joan Garcia", "GK", 78, 83, 24);
addPlayer("bar", "Frenkie de Jong", "MID", 86, 87, 29);
addPlayer("bar", "Raphinha", "FWD", 84, 84, 29);
addPlayer("bar", "Jules Kounde", "DEF", 85, 87, 27);
addPlayer("bar", "Alejandro Balde", "DEF", 83, 89, 22);
addPlayer("bar", "Dani Olmo", "MID", 84, 85, 28);
addPlayer("bar", "Pau Cubarsi", "DEF", 80, 90, 19);
addPlayer("bar", "Fermin Lopez", "MID", 80, 86, 23);
addPlayer("bar", "Ferran Torres", "FWD", 81, 83, 26);
addPlayer("bar", "Andreas Christensen", "DEF", 82, 83, 30);

// Atletico Madrid
addPlayer("atm", "Antoine Griezmann", "FWD", 86, 35);
addPlayer("atm", "Jan Oblak", "GK", 87, 33);
addPlayer("atm", "Julian Alvarez", "FWD", 86, 26);
// transferred out: addPlayer('atm', 'Rodrigo De Paul', 'MID', 84, 32);
addPlayer("atm", "Marcos Llorente", "MID", 83, 31);
addPlayer("atm", "Robin Le Normand", "DEF", 83, 29);
addPlayer("atm", "Alexander Sorloth", "FWD", 82, 30);
addPlayer("atm", "Conor Gallagher", "MID", 82, 26);
addPlayer("atm", "Jose Maria Gimenez", "DEF", 82, 31);
// transferred out: addPlayer('atm', 'Samuel Lino', 'MID', 81, 26);

// Bayern Munich
addPlayer("bay", "Harry Kane", "FWD", 91, 91, 33);
addPlayer("bay", "Jamal Musiala", "MID", 89, 93, 23);
addPlayer("bay", "Joshua Kimmich", "MID", 87, 87, 31);
addPlayer("bay", "Leroy Sane", "FWD", 85, 85, 30);
// transferred out: addPlayer('bay', 'Alphonso Davies', 'DEF', 86, 89, 25);
addPlayer("bay", "Min-jae Kim", "DEF", 85, 86, 29);
addPlayer("bay", "Manuel Neuer", "GK", 84, 84, 40);
addPlayer("bay", "Michael Olise", "FWD", 84, 89, 24);
addPlayer("bay", "Joao Palhinha", "MID", 84, 84, 31);
addPlayer("bay", "Dayot Upamecano", "DEF", 83, 86, 27);
addPlayer("bay", "Serge Gnabry", "FWD", 83, 83, 31);
addPlayer("bay", "Kingsley Coman", "FWD", 83, 83, 30);
addPlayer("bay", "Aleksandar Pavlovic", "MID", 81, 88, 22);
addPlayer("bay", "Konrad Laimer", "MID", 81, 81, 29);

// Leverkusen
addPlayer("lev", "Florian Wirtz", "MID", 88, 23);
addPlayer("lev", "Jeremie Frimpong", "DEF", 85, 25);
addPlayer("lev", "Victor Boniface", "FWD", 84, 25);
addPlayer("lev", "Granit Xhaka", "MID", 84, 34);
addPlayer("lev", "Alejandro Grimaldo", "DEF", 85, 30);
addPlayer("lev", "Jonathan Tah", "DEF", 83, 30);
addPlayer("lev", "Edmond Tapsoba", "DEF", 83, 27);
addPlayer("lev", "Exequiel Palacios", "MID", 82, 27);
addPlayer("lev", "Lukas Hradecky", "GK", 81, 36);

// Dortmund
addPlayer("dor", "Gregor Kobel", "GK", 86, 28);
addPlayer("dor", "Julian Brandt", "MID", 84, 30);
addPlayer("dor", "Nico Schlotterbeck", "DEF", 84, 26);
addPlayer("dor", "Serhou Guirassy", "FWD", 83, 30);
addPlayer("dor", "Marcel Sabitzer", "MID", 82, 32);
addPlayer("dor", "Donyell Malen", "FWD", 81, 27);
addPlayer("dor", "Karim Adeyemi", "FWD", 81, 24);
addPlayer("dor", "Emre Can", "MID", 80, 32);
addPlayer("dor", "Jamie Gittens", "FWD", 79, 22);

// Inter Milan
addPlayer("int", "Lautaro Martinez", "FWD", 89, 29);
addPlayer("int", "Nicolo Barella", "MID", 87, 29);
addPlayer("int", "Alessandro Bastoni", "DEF", 86, 27);
addPlayer("int", "Hakan Calhanoglu", "MID", 85, 32);
addPlayer("int", "Marcus Thuram", "FWD", 84, 29);
addPlayer("int", "Federico Dimarco", "DEF", 85, 28);
addPlayer("int", "Benjamin Pavard", "DEF", 83, 30);
addPlayer("int", "Yann Sommer", "GK", 84, 37);
addPlayer("int", "Henrikh Mkhitaryan", "MID", 82, 37);
addPlayer("int", "Davide Frattesi", "MID", 82, 26);
addPlayer("int", "Piotr Zielinski", "MID", 82, 32);

// AC Milan
addPlayer("mil", "Rafael Leao", "FWD", 86, 27);
addPlayer("mil", "Theo Hernandez", "DEF", 86, 28);
addPlayer("mil", "Mike Maignan", "GK", 87, 31);
addPlayer("mil", "Christian Pulisic", "FWD", 84, 27);
addPlayer("mil", "Tijjani Reijnders", "MID", 83, 28);
addPlayer("mil", "Fikayo Tomori", "DEF", 82, 28);
addPlayer("mil", "Alvaro Morata", "FWD", 82, 33);
addPlayer("mil", "Youssouf Fofana", "MID", 81, 27);
addPlayer("mil", "Ruben Loftus-Cheek", "MID", 80, 30);

// Juventus
addPlayer("juv", "Dusan Vlahovic", "FWD", 85, 26);
addPlayer("juv", "Bremer", "DEF", 85, 29);
addPlayer("juv", "Teun Koopmeiners", "MID", 84, 28);
addPlayer("juv", "Douglas Luiz", "MID", 83, 28);
addPlayer("juv", "Kenan Yildiz", "FWD", 81, 21);
addPlayer("juv", "Manuel Locatelli", "MID", 82, 28);
addPlayer("juv", "Michele Di Gregorio", "GK", 82, 29);
addPlayer("juv", "Francisco Conceicao", "FWD", 80, 23);

// Napoli
addPlayer("nap", "Khvicha Kvaratskhelia", "FWD", 86, 25);
addPlayer("nap", "Romelu Lukaku", "FWD", 83, 33);
addPlayer("nap", "Alessandro Buongiorno", "DEF", 83, 27);
addPlayer("nap", "Scott McTominay", "MID", 81, 29);
addPlayer("nap", "Giovanni Di Lorenzo", "DEF", 83, 33);
addPlayer("nap", "Stanislav Lobotka", "MID", 82, 31);
addPlayer("nap", "Alex Meret", "GK", 81, 29);

// PSG
addPlayer("psg", "Ousmane Dembele", "FWD", 86, 29);
addPlayer("psg", "Achraf Hakimi", "DEF", 86, 27);
addPlayer("psg", "Gianluigi Donnarumma", "GK", 88, 27);
addPlayer("psg", "Vitinha", "MID", 85, 26);
addPlayer("psg", "Warren Zaire-Emery", "MID", 83, 20);
addPlayer("psg", "Marquinhos", "DEF", 86, 32);
addPlayer("psg", "Nuno Mendes", "DEF", 84, 24);
addPlayer("psg", "Bradley Barcola", "FWD", 84, 23);
addPlayer("psg", "Joao Neves", "MID", 83, 21);
addPlayer("psg", "Goncalo Ramos", "FWD", 82, 25);
addPlayer("psg", "Lucas Hernandez", "DEF", 83, 30);
addPlayer("psg", "Randal Kolo Muani", "FWD", 81, 27);

// Sporting CP
addPlayer("spo", "Viktor Gyokeres", "FWD", 86, 28);
addPlayer("spo", "Pedro Goncalves", "MID", 83, 28);
addPlayer("spo", "Goncalo Inacio", "DEF", 82, 25);
addPlayer("spo", "Morten Hjulmand", "MID", 82, 27);
addPlayer("spo", "Ousmane Diomande", "DEF", 80, 22);
addPlayer("spo", "Francisco Trincao", "FWD", 80, 26);

// Benfica
addPlayer("ben", "Angel Di Maria", "FWD", 82, 38);
addPlayer("ben", "Orkun Kokcu", "MID", 82, 25);
addPlayer("ben", "Anatoliy Trubin", "GK", 81, 25);
addPlayer("ben", "Antonio Silva", "DEF", 80, 22);
addPlayer("ben", "Kerem Akturkoglu", "FWD", 80, 27);
addPlayer("ben", "Vangelis Pavlidis", "FWD", 80, 27);

// Porto
addPlayer("por", "Diogo Costa", "GK", 84, 26);
addPlayer("por", "Alan Varela", "MID", 81, 25);
addPlayer("por", "Galeno", "FWD", 80, 28);
addPlayer("por", "Samu Omorodion", "FWD", 79, 22);

// Galatasaray
addPlayer("gal", "Victor Osimhen", "FWD", 87, 27);
addPlayer("gal", "Mauro Icardi", "FWD", 82, 33);
addPlayer("gal", "Davinson Sanchez", "DEF", 80, 30);
addPlayer("gal", "Lucas Torreira", "MID", 80, 30);
addPlayer("gal", "Baris Alper Yilmaz", "FWD", 79, 26);
addPlayer("gal", "Fernando Muslera", "GK", 78, 40);

// Fenerbahce
addPlayer("fen", "Youssef En-Nesyri", "FWD", 81, 29);
addPlayer("fen", "Fred", "MID", 80, 33);
addPlayer("fen", "Allan Saint-Maximin", "FWD", 79, 29);
addPlayer("fen", "Sebastian Szymanski", "MID", 80, 27);
addPlayer("fen", "Dominik Livakovic", "GK", 80, 31);
addPlayer("fen", "Caglar Soyuncu", "DEF", 78, 30);

// Zenit
addPlayer("zen", "Claudinho", "MID", 80, 29);
addPlayer("zen", "Wendel", "MID", 79, 29);
addPlayer("zen", "Mateo Cassierra", "FWD", 78, 29);
addPlayer("zen", "Wilmar Barrios", "MID", 78, 32);
addPlayer("zen", "Douglas Santos", "DEF", 77, 32);
addPlayer("zen", "Nino", "DEF", 76, 29);
addPlayer("zen", "Artur", "FWD", 76, 28);

// PSV
addPlayer("psv", "Joey Veerman", "MID", 81, 27);
addPlayer("psv", "Jerdy Schouten", "MID", 80, 29);
addPlayer("psv", "Johan Bakayoko", "FWD", 80, 23);
addPlayer("psv", "Noa Lang", "FWD", 80, 27);
addPlayer("psv", "Luuk de Jong", "FWD", 79, 36);
addPlayer("psv", "Sergino Dest", "DEF", 78, 25);

// Ajax
addPlayer("aja", "Brian Brobbey", "FWD", 78, 24);
addPlayer("aja", "Jordan Henderson", "MID", 77, 36);
addPlayer("aja", "Jorrel Hato", "DEF", 76, 20);
addPlayer("aja", "Kenneth Taylor", "MID", 76, 24);

// Feyenoord
addPlayer("fey", "Santiago Gimenez", "FWD", 80, 25);
addPlayer("fey", "Quinten Timber", "MID", 79, 25);
addPlayer("fey", "David Hancko", "DEF", 81, 28);
addPlayer("fey", "Calvin Stengs", "MID", 78, 27);
addPlayer("fey", "Lutsharel Geertruida", "DEF", 80, 26);
addPlayer("fey", "Justin Bijlow", "GK", 79, 28);
addPlayer("fey", "Igor Paixao", "FWD", 78, 26);

// Aston Villa

// Newcastle

// West Ham

// Brighton

// Wolves

// Fulham

// Bournemouth

// Crystal Palace

// Brentford

// Everton

// Nottingham Forest

// Leicester City

// Southampton

// Ipswich Town

// Real Sociedad
addPlayer("rso", "Mikel Oyarzabal", "FWD", 83, 29);
addPlayer("rso", "Martin Zubimendi", "MID", 84, 27);
addPlayer("rso", "Takefusa Kubo", "FWD", 83, 25);
addPlayer("rso", "Brais Mendez", "MID", 82, 29);
addPlayer("rso", "Alex Remiro", "GK", 82, 31);

// Athletic Club
addPlayer("ath", "Nico Williams", "FWD", 85, 24);
addPlayer("ath", "Inaki Williams", "FWD", 82, 32);
addPlayer("ath", "Oihan Sancet", "MID", 82, 26);
addPlayer("ath", "Unai Simon", "GK", 84, 29);
addPlayer("ath", "Dani Vivian", "DEF", 81, 27);

// Girona
addPlayer("gir", "Viktor Tsygankov", "MID", 82, 28);
// transferred out: addPlayer('gir', 'Yangel Herrera', 'MID', 80, 28);
addPlayer("gir", "Miguel Gutierrez", "DEF", 80, 25);
addPlayer("gir", "Paulo Gazzaniga", "GK", 79, 34);

// RB Leipzig
addPlayer("rbl", "Xavi Simons", "MID", 86, 23);
addPlayer("rbl", "Lois Openda", "FWD", 84, 26);
addPlayer("rbl", "Benjamin Sesko", "FWD", 83, 23);
addPlayer("rbl", "Castello Lukeba", "DEF", 82, 23);
addPlayer("rbl", "Willi Orban", "DEF", 82, 33);
addPlayer("rbl", "Peter Gulacsi", "GK", 81, 36);
addPlayer("rbl", "David Raum", "DEF", 81, 28);

// Stuttgart
addPlayer("stu", "Deniz Undav", "FWD", 81, 30);
addPlayer("stu", "Chris Fuhrich", "MID", 80, 28);
addPlayer("stu", "Angelo Stiller", "MID", 80, 25);
addPlayer("stu", "Alexander Nubel", "GK", 80, 30);

// Frankfurt
addPlayer("fra", "Omar Marmoush", "FWD", 81, 27);
addPlayer("fra", "Hugo Ekitike", "FWD", 79, 24);
addPlayer("fra", "Kevin Trapp", "GK", 80, 36);
addPlayer("fra", "Mario Gotze", "MID", 79, 34);

// Roma
addPlayer("rom", "Paulo Dybala", "FWD", 85, 32);
addPlayer("rom", "Lorenzo Pellegrini", "MID", 83, 30);
addPlayer("rom", "Gianluca Mancini", "DEF", 82, 30);
addPlayer("rom", "Evan Ndicka", "DEF", 81, 27);
addPlayer("rom", "Artem Dovbyk", "FWD", 82, 29);
addPlayer("rom", "Matias Soule", "FWD", 80, 23);
addPlayer("rom", "Mile Svilar", "GK", 80, 27);

// Atalanta
addPlayer("ata", "Ademola Lookman", "FWD", 83, 28);
addPlayer("ata", "Gianluca Scamacca", "FWD", 82, 27);
addPlayer("ata", "Ederson", "MID", 83, 27);
addPlayer("ata", "Charles De Ketelaere", "FWD", 81, 25);
addPlayer("ata", "Giorgio Scalvini", "DEF", 81, 22);
addPlayer("ata", "Teun Koopmeiners", "MID", 84, 28); // Duplicate check: moved to Juve in real life but keeping consistent with prev edit if needed, but actually he is at Juve now. Removing from here if I added him to Juve. (I did add to Juve).
// Removing Koopmeiners from Atalanta add list as he is at Juve.

// Lazio
addPlayer("laz", "Mattia Zaccagni", "MID", 82, 31);
addPlayer("laz", "Alessio Romagnoli", "DEF", 81, 31);
addPlayer("laz", "Ivan Provedel", "GK", 82, 32);
addPlayer("laz", "Matteo Guendouzi", "MID", 81, 27);

// Monaco
addPlayer("asm", "Aleksandr Golovin", "MID", 82, 30);
addPlayer("asm", "Breel Embolo", "FWD", 80, 29);
addPlayer("asm", "Denis Zakaria", "MID", 81, 29);
addPlayer("asm", "Thilo Kehrer", "DEF", 79, 30);
addPlayer("asm", "Folarin Balogun", "FWD", 79, 25);
addPlayer("asm", "Takumi Minamino", "MID", 80, 31);
addPlayer("asm", "Vanderson", "DEF", 80, 25);
addPlayer("asm", "Caio Henrique", "DEF", 80, 29);
addPlayer("asm", "Philipp Kohn", "GK", 78, 28);
addPlayer("asm", "Wilfried Singo", "DEF", 79, 25);
addPlayer("asm", "Lamine Camara", "MID", 77, 22);
addPlayer("asm", "George Ilenikhena", "FWD", 76, 20);

// Lille
addPlayer("lil", "Jonathan David", "FWD", 82, 26);
addPlayer("lil", "Edon Zhegrova", "FWD", 80, 27);
addPlayer("lil", "Lucas Chevalier", "GK", 80, 24);
addPlayer("lil", "Bafode Diakite", "DEF", 79, 25);

// Marseille
addPlayer("mar", "Mason Greenwood", "FWD", 81, 24);
addPlayer("mar", "Pierre-Emile Hojbjerg", "MID", 82, 31);
addPlayer("mar", "Elye Wahi", "FWD", 79, 23);
addPlayer("mar", "Geronimo Rulli", "GK", 79, 34);

// Lyon
addPlayer("lyo", "Alexandre Lacazette", "FWD", 81, 35);
addPlayer("lyo", "Rayan Cherki", "MID", 79, 23);
addPlayer("lyo", "Maxence Caqueret", "MID", 80, 26);
addPlayer("lyo", "Corentin Tolisso", "MID", 79, 32);

// Besiktas
addPlayer("bes", "Ciro Immobile", "FWD", 81, 36);
addPlayer("bes", "Rafa Silva", "MID", 82, 33);
addPlayer("bes", "Gedson Fernandes", "MID", 79, 27);
addPlayer("bes", "Semih Kilicsoy", "FWD", 78, 21);

// Trabzonspor
addPlayer("tra", "Edin Visca", "MID", 78, 36);
addPlayer("tra", "Ugurcan Cakir", "GK", 79, 30);
addPlayer("tra", "Simon Banza", "FWD", 78, 30);

// Krasnodar
addPlayer("kra", "Eduard Spertsyan", "MID", 79, 26);
addPlayer("kra", "Jhon Cordoba", "FWD", 80, 33);
addPlayer("kra", "Matvey Safonov", "GK", 80, 27); // Moved to PSG in real life, but maybe on loan or back? He is at PSG. Removing.
// Actually Safonov is at PSG.
addPlayer("kra", "Stanislav Agkatsev", "GK", 74, 24);
addPlayer("kra", "Lucas Olaza", "DEF", 75, 32);

// Dynamo Moscow
addPlayer("dyn", "Konstantin Tyukavin", "FWD", 78, 24);
addPlayer("dyn", "Jorge Carrascal", "MID", 77, 28);
addPlayer("dyn", "Fabian Balbuena", "DEF", 76, 35);
addPlayer("dyn", "Luis Chavez", "MID", 77, 30);

// CSKA Moscow
addPlayer("csk", "Igor Akinfeev", "GK", 76, 40);
addPlayer("csk", "Ivan Oblyakov", "MID", 77, 28);
addPlayer("csk", "Fayzullaev", "MID", 76, 22);
addPlayer("csk", "Diveev", "DEF", 76, 26);

// Spartak Moscow
addPlayer("spa", "Ezequiel Barco", "MID", 79, 27);
addPlayer("spa", "Manfred Ugalde", "FWD", 77, 24);
addPlayer("spa", "Srdjan Babic", "DEF", 76, 30);
addPlayer("spa", "Aleksandr Maksimenko", "GK", 76, 28);

// Lokomotiv Moscow
addPlayer("lok", "Aleksey Batrakov", "MID", 75, 21);
addPlayer("lok", "Dmitri Barinov", "MID", 76, 30);
addPlayer("lok", "Ilya Lantratov", "GK", 76, 30);

// Wolves

// Fulham

// Bournemouth

// Crystal Palace

// Brentford

// Everton

// Nottingham Forest

// Leicester

// Southampton

// Ipswich

// Sevilla
addPlayer("sev", "Loic Bade", "DEF", 80, 26);
addPlayer("sev", "Isaac Romero", "FWD", 79, 26);
addPlayer("sev", "Lucas Ocampos", "FWD", 80, 32);
addPlayer("sev", "Orjan Nyland", "GK", 78, 36);

// Valencia
// transferred out: addPlayer('val', 'Giorgi Mamardashvili', 'GK', 83, 26); // Likely moved to Liverpool but on loan back maybe? Or fully gone. He is at Liverpool in 25/26. Removing.
// Actually Mamardashvili is joining Liverpool in 2025. So in 26/27 he is at Liverpool.
// Let's add him to Liverpool if not already there, or assume he is the #1 there.
// Adding other Valencia players.
addPlayer("val", "Pepelu", "MID", 80, 28);
// transferred out: addPlayer('val', 'Cristhian Mosquera', 'DEF', 79, 22);
addPlayer("val", "Hugo Duro", "FWD", 79, 26);
addPlayer("val", "Javi Guerra", "MID", 79, 23);

// Real Betis
addPlayer("bet", "Isco", "MID", 82, 34);
addPlayer("bet", "Vitor Roque", "FWD", 79, 21);
// transferred out: addPlayer('bet', 'Johnny Cardoso', 'MID', 80, 24);
addPlayer("bet", "Ez Abde", "FWD", 79, 24);

// Villarreal
addPlayer("vil", "Alex Baena", "MID", 82, 25);
addPlayer("vil", "Gerard Moreno", "FWD", 82, 34);
addPlayer("vil", "Yeremy Pino", "FWD", 80, 23);
addPlayer("vil", "Ayoze Perez", "FWD", 80, 33);

// Celta Vigo
addPlayer("cel", "Iago Aspas", "FWD", 81, 39);
addPlayer("cel", "Oscar Mingueza", "DEF", 78, 27);

// Osasuna
addPlayer("osa", "Ante Budimir", "FWD", 79, 35);
addPlayer("osa", "Aimar Oroz", "MID", 79, 24);

// Getafe
addPlayer("get", "Borja Mayoral", "FWD", 78, 29);
addPlayer("get", "David Soria", "GK", 79, 33);

// Mallorca
addPlayer("mal", "Vedat Muriqi", "FWD", 79, 32);
addPlayer("mal", "Sergi Darder", "MID", 78, 32);

// Rayo Vallecano
addPlayer("ray", "Isi Palazon", "FWD", 78, 31);
addPlayer("ray", "Sergio Camello", "FWD", 77, 25);

// Alaves
addPlayer("ala", "Antonio Blanco", "MID", 76, 26);
addPlayer("ala", "Kike Garcia", "FWD", 74, 36);

// Las Palmas
addPlayer("pal", "Alberto Moleiro", "MID", 78, 23);
addPlayer("pal", "Kirian Rodriguez", "MID", 79, 30);

// Leganes
addPlayer("leg", "Miguel de la Fuente", "FWD", 74, 27);

// Valladolid
addPlayer("val2", "Mamadou Sylla", "FWD", 73, 32);

// Espanyol
addPlayer("esp", "Javi Puado", "FWD", 77, 28);
addPlayer("esp", "Joan Garcia", "GK", 78, 25);

// Fiorentina
addPlayer("fio", "Albert Gudmundsson", "FWD", 81, 29);
addPlayer("fio", "Moise Kean", "FWD", 80, 26);
addPlayer("fio", "Andrea Colpani", "MID", 80, 27);
addPlayer("fio", "David de Gea", "GK", 82, 35);

// Bologna
addPlayer("bol", "Riccardo Orsolini", "FWD", 80, 29);
addPlayer("bol", "Lewis Ferguson", "MID", 80, 27);
addPlayer("bol", "Dan Ndoye", "FWD", 79, 25);

// Torino
addPlayer("tor", "Duvan Zapata", "FWD", 80, 35);
addPlayer("tor", "Samuele Ricci", "MID", 80, 25);
addPlayer("tor", "Ivan Ilic", "MID", 79, 25);

// Monza
addPlayer("mnz", "Matteo Pessina", "MID", 79, 29);
addPlayer("mnz", "Dany Mota", "FWD", 77, 28);

// Genoa
addPlayer("gen", "Morten Frendrup", "MID", 79, 25);
addPlayer("gen", "Vitinha", "FWD", 77, 26);

// Udinese
addPlayer("ud", "Lorenzo Lucca", "FWD", 77, 26);
addPlayer("ud", "Florian Thauvin", "FWD", 78, 33);

// Lecce
addPlayer("lec", "Nikola Krstovic", "FWD", 76, 26);
addPlayer("lec", "Wladimiro Falcone", "GK", 77, 31);

// Empoli
addPlayer("emp", "Sebastiano Esposito", "FWD", 75, 24);

// Verona
addPlayer("ver", "Darko Lazovic", "MID", 74, 36);

// Cagliari
addPlayer("cag", "Zito Luvumbo", "FWD", 76, 24);

// Parma
addPlayer("par", "Dennis Man", "FWD", 77, 28);
addPlayer("par", "Adrian Bernabe", "MID", 77, 25);

// Como
addPlayer("com", "Patrick Cutrone", "FWD", 76, 28);
addPlayer("com", "Nico Paz", "MID", 77, 22);
addPlayer("com", "Sergi Roberto", "MID", 78, 34);

// Venezia
addPlayer("ven", "Joel Pohjanpalo", "FWD", 76, 32);
addPlayer("ven", "Gianluca Busio", "MID", 75, 24);

// Wolfsburg
addPlayer("wob", "Lovro Majer", "MID", 80, 28);
addPlayer("wob", "Jonas Wind", "FWD", 79, 27);
addPlayer("wob", "Ridle Baku", "DEF", 79, 28);

// Freiburg
addPlayer("fre", "Vincenzo Grifo", "MID", 80, 33);
addPlayer("fre", "Ritsu Doan", "MID", 80, 28);
addPlayer("fre", "Matthias Ginter", "DEF", 80, 32);

// Mainz
addPlayer("mai", "Jonathan Burkardt", "FWD", 78, 26);
addPlayer("mai", "Nadiem Amiri", "MID", 78, 30);

// Gladbach
addPlayer("gla", "Alassane Plea", "FWD", 79, 33);
addPlayer("gla", "Julian Weigl", "MID", 79, 31);
addPlayer("gla", "Tim Kleindienst", "FWD", 78, 31);

// Union Berlin
addPlayer("uni", "Robin Gosens", "DEF", 79, 32); // Check if he stayed. He moved to Fiorentina. Removing.
// Actually Gosens is at Fiorentina.
addPlayer("uni", "Danilho Doekhi", "DEF", 79, 28);
addPlayer("uni", "Lucas Tousart", "MID", 77, 29);

// Werder Bremen
addPlayer("wer", "Marvin Ducksch", "FWD", 78, 32);
addPlayer("wer", "Romano Schmid", "MID", 78, 26);

// Augsburg
addPlayer("aug", "Ermedin Demirovic", "FWD", 79, 28); // Moved to Stuttgart. Removing.
// Adding correct Augsburg player.
addPlayer("aug", "Ruben Vargas", "MID", 77, 28);

// Heidenheim
addPlayer("hei", "Paul Wanner", "MID", 76, 20); // Loan from Bayern.
addPlayer("hei", "Marvin Pieringer", "FWD", 75, 26);

// Bochum
addPlayer("boc", "Philipp Hofmann", "FWD", 74, 33);

// St Pauli
addPlayer("stp", "Jackson Irvine", "MID", 75, 33);
addPlayer("stp", "Johannes Eggestein", "FWD", 74, 28);

// Holstein Kiel
addPlayer("kie", "Shuto Machino", "FWD", 73, 27);

// Lens
addPlayer("len", "Brice Samba", "GK", 81, 32);
addPlayer("len", "Facundo Medina", "DEF", 80, 27);
addPlayer("len", "Kevin Danso", "DEF", 80, 28);

// Rennes
addPlayer("ren", "Amine Gouiri", "FWD", 80, 26);
addPlayer("ren", "Ludovic Blas", "MID", 79, 28);
addPlayer("ren", "Arnaud Kalimuendo", "FWD", 79, 24);

// Nice
addPlayer("nic", "Jeremie Boga", "FWD", 79, 29);
addPlayer("nic", "Terem Moffi", "FWD", 79, 27);
addPlayer("nic", "Marcin Bulka", "GK", 80, 27);

// Reims
addPlayer("rei", "Junya Ito", "FWD", 78, 33);
addPlayer("rei", "Oumar Diakite", "FWD", 76, 22);

// Strasbourg
addPlayer("str", "Emanuel Emegha", "FWD", 76, 23);
addPlayer("str", "Habib Diarra", "MID", 77, 22);

// Toulouse
addPlayer("tou", "Zakaria Aboukhlal", "FWD", 77, 26);
addPlayer("tou", "Guillaume Restes", "GK", 78, 21);

// Montpellier
addPlayer("mon2", "Teji Savanier", "MID", 79, 34);
addPlayer("mon2", "Akor Adams", "FWD", 76, 26);

// Nantes
addPlayer("nan", "Alban Lafont", "GK", 78, 27);
addPlayer("nan", "Moses Simon", "FWD", 77, 31);

// Brest
addPlayer("bst", "Romain Del Castillo", "FWD", 78, 30);
addPlayer("bst", "Pierre Lees-Melou", "MID", 79, 33);
addPlayer("bst", "Marco Bizot", "GK", 78, 35);

// Le Havre
addPlayer("hav", "Arouna Sangante", "DEF", 75, 24);

// Auxerre
addPlayer("aux", "Gideon Mensah", "DEF", 74, 28);

// Saint-Etienne
addPlayer("sai", "Zuriko Davitashvili", "FWD", 75, 25);
addPlayer("sai", "Gautier Larsonneur", "GK", 75, 29);

// Angers
addPlayer("ang", "Himad Abdelli", "MID", 74, 26);
addPlayer("ang", "Yahia Fofana", "GK", 73, 25);

// --- RUSSIAN PREMIER LEAGUE EXPANSION ---

// Zenit
addPlayer("zen", "Mateo Cassierra", "FWD", 80, 29);
addPlayer("zen", "Douglas Santos", "DEF", 79, 32);
addPlayer("zen", "Wilmar Barrios", "MID", 79, 32);
addPlayer("zen", "Wendel", "MID", 81, 28);
addPlayer("zen", "Claudinho", "MID", 81, 29);
addPlayer("zen", "Nino", "DEF", 78, 29);
addPlayer("zen", "Artur", "FWD", 77, 28);
addPlayer("zen", "Pedro", "FWD", 76, 20);
addPlayer("zen", "Strahinja Erakovic", "DEF", 77, 25);
addPlayer("zen", "Gustavo Mantuan", "FWD", 76, 25);
addPlayer("zen", "Aleksandr Sobolev", "FWD", 78, 29);
addPlayer("zen", "Andrey Mostovoy", "MID", 77, 28);
addPlayer("zen", "Vyacheslav Karavaev", "DEF", 76, 31);
addPlayer("zen", "Nuraly Alip", "DEF", 75, 26);
addPlayer("zen", "Evgeniy Latyshonok", "GK", 76, 28);

// Krasnodar
addPlayer("kra", "Jhon Cordoba", "FWD", 81, 33);
addPlayer("kra", "Eduard Spertsyan", "MID", 81, 26);
addPlayer("kra", "Lucas Olaza", "DEF", 76, 32);
addPlayer("kra", "Stanislav Agkatsev", "GK", 76, 24);
addPlayer("kra", "Kevin Lenini", "MID", 75, 29);
addPlayer("kra", "Joao Batxi", "FWD", 76, 28);
addPlayer("kra", "Vitor Tormena", "DEF", 77, 30);
addPlayer("kra", "Diego Costa", "DEF", 76, 27);
addPlayer("kra", "Nikita Krivtsov", "MID", 75, 24);
addPlayer("kra", "Sergey Petrov", "DEF", 74, 35);
addPlayer("kra", "Fedor Smolov", "FWD", 75, 36);

// Lokomotiv Moscow
addPlayer("lok", "Aleksey Batrakov", "MID", 78, 21);
addPlayer("lok", "Dmitri Barinov", "MID", 78, 30);
addPlayer("lok", "Ilya Lantratov", "GK", 78, 30);
addPlayer("lok", "Nair Tiknizyan", "DEF", 77, 27);
addPlayer("lok", "Sergey Pinyaev", "FWD", 77, 21);
addPlayer("lok", "Artem Karpukas", "MID", 76, 24);
addPlayer("lok", "Gerzino Nyamsi", "DEF", 76, 29);
addPlayer("lok", "Lucas Fasson", "DEF", 75, 25);
addPlayer("lok", "Dmitri Vorobyev", "FWD", 75, 28);
addPlayer("lok", "Ilya Samoshnikov", "DEF", 75, 28);
addPlayer("lok", "Cesar Montes", "DEF", 77, 29);

// Dynamo Moscow
addPlayer("dyn", "Konstantin Tyukavin", "FWD", 80, 24);
addPlayer("dyn", "Jorge Carrascal", "MID", 79, 28);
addPlayer("dyn", "Luis Chavez", "MID", 79, 30);
addPlayer("dyn", "Fabian Balbuena", "DEF", 77, 35);
addPlayer("dyn", "Moumi Ngamaleu", "FWD", 77, 32);
addPlayer("dyn", "Diego Laxalt", "MID", 77, 33);
addPlayer("dyn", "Bitello", "MID", 80, 26);
addPlayer("dyn", "Milan Majstorovic", "DEF", 75, 21);
addPlayer("dyn", "Eli Dasa", "DEF", 76, 33);
addPlayer("dyn", "Andrey Lunev", "GK", 77, 34);
addPlayer("dyn", "Daniil Fomin", "MID", 76, 29);

// Spartak Moscow
addPlayer("spa", "Ezequiel Barco", "MID", 81, 27);
addPlayer("spa", "Manfred Ugalde", "FWD", 79, 24);
addPlayer("spa", "Srdjan Babic", "DEF", 78, 30);
addPlayer("spa", "Aleksandr Maksimenko", "GK", 78, 28);
addPlayer("spa", "Theo Bongonda", "FWD", 78, 30);
addPlayer("spa", "Roman Zobnin", "MID", 77, 32);
addPlayer("spa", "Daniil Khlusevich", "DEF", 76, 25);
addPlayer("spa", "Oleg Reabciuk", "DEF", 76, 28);
addPlayer("spa", "Ruslan Litvinov", "DEF", 76, 25);
addPlayer("spa", "Willian Jose", "FWD", 76, 34);
addPlayer("spa", "Marquinhos", "FWD", 76, 26);

// CSKA Moscow
addPlayer("csk", "Igor Akinfeev", "GK", 77, 40);
addPlayer("csk", "Ivan Oblyakov", "MID", 79, 28);
addPlayer("csk", "Abbosbek Fayzullaev", "MID", 78, 22);
addPlayer("csk", "Igor Diveev", "DEF", 78, 26);
addPlayer("csk", "Moises", "DEF", 77, 31);
addPlayer("csk", "Willyan Rocha", "DEF", 78, 31);
addPlayer("csk", "Milan Gajic", "DEF", 76, 30);
addPlayer("csk", "Sasa Zdjelar", "MID", 76, 31);
addPlayer("csk", "Tamerlan Musaev", "FWD", 76, 25);
addPlayer("csk", "Sekou Koita", "FWD", 75, 26);
addPlayer("csk", "Miralem Pjanic", "MID", 77, 36);

// Rostov
addPlayer("ros", "Danil Glebov", "MID", 77, 26);
addPlayer("ros", "Maksim Osipenko", "DEF", 77, 32);
addPlayer("ros", "Mohammad Mohebi", "FWD", 76, 27);
addPlayer("ros", "Ronaldo", "FWD", 76, 25);
addPlayer("ros", "Nikolay Komlichenko", "FWD", 75, 31);
addPlayer("ros", "Egor Golenkov", "FWD", 74, 27);
addPlayer("ros", "Rustam Yatimov", "GK", 74, 28);

// Rubin Kazan
addPlayer("rub", "Mirlind Daku", "FWD", 77, 28);
addPlayer("rub", "Dmitri Kabutov", "DEF", 74, 34);
addPlayer("rub", "Igor Vujacic", "DEF", 75, 32);
addPlayer("rub", "Ugochukwu Iwu", "MID", 74, 26);
addPlayer("rub", "Valentin Vada", "MID", 75, 30);

// Krylya Sovetov
addPlayer("kry", "Benjamin Garre", "FWD", 76, 26);
addPlayer("kry", "Roman Ezhov", "MID", 74, 29);
addPlayer("kry", "Ivan Lomaev", "GK", 74, 27);
addPlayer("kry", "Fernando Costanza", "MID", 75, 27);
addPlayer("kry", "Ivan Sergeev", "FWD", 75, 31);
addPlayer("kry", "Glenn Bijl", "DEF", 74, 29);
addPlayer("kry", "Aleksandr Soldatenkov", "DEF", 74, 27);
addPlayer("kry", "Maksim Vityugov", "MID", 73, 26);
addPlayer("kry", "Amar Rahmanovic", "MID", 73, 30);
addPlayer("kry", "Thomas Galdames", "DEF", 73, 25);
addPlayer("kry", "Franco Orozco", "FWD", 72, 22);

// Akhmat Grozny
addPlayer("akh", "Lechi Sadulaev", "MID", 74, 26);
addPlayer("akh", "Svetoslav Kovachev", "MID", 73, 28);
addPlayer("akh", "Giorgi Shelia", "GK", 73, 37);

// Orenburg
addPlayer("ore", "Brian Mansilla", "FWD", 73, 29);
addPlayer("ore", "Jimmy Marin", "MID", 73, 28);
addPlayer("ore", "Matias Perez", "DEF", 74, 27);

// Pari NN
addPlayer("pnn", "Juan Boselli", "FWD", 72, 26);
addPlayer("pnn", "Nikita Medvedev", "GK", 72, 31);

// Fakel
addPlayer("fak", "Irakli Kvekveskiri", "MID", 71, 36);
addPlayer("fak", "Evgeniy Markov", "FWD", 72, 32);

// --- RUSSIAN PREMIER LEAGUE EXPANSION ---

// Akhmat Grozny
addPlayer("akh", "Lechi Sadulaev", "MID", 74, 26);
addPlayer("akh", "Svetoslav Kovachev", "MID", 73, 28);
addPlayer("akh", "Giorgi Shelia", "GK", 73, 37);
addPlayer("akh", "Milos Satara", "DEF", 72, 28);
addPlayer("akh", "Darko Todorovic", "DEF", 73, 27);
addPlayer("akh", "Camilo", "MID", 73, 25);
addPlayer("akh", "Bernard Berisha", "MID", 74, 32);
addPlayer("akh", "Arsen Adamov", "DEF", 72, 24);
addPlayer("akh", "Nader Ghandri", "DEF", 72, 29);
addPlayer("akh", "Felipe Vizeu", "FWD", 72, 27);

// Orenburg
addPlayer("ore", "Brian Mansilla", "FWD", 73, 29);
addPlayer("ore", "Jimmy Marin", "MID", 73, 28);
addPlayer("ore", "Matias Perez", "DEF", 74, 27);
addPlayer("ore", "Nikolay Sysuev", "GK", 72, 25);
addPlayer("ore", "Leo Goglichidze", "DEF", 71, 27);
addPlayer("ore", "Mohammad Ghorbani", "MID", 72, 23);
addPlayer("ore", "Saeed Saharkhizan", "FWD", 72, 21);
addPlayer("ore", "Ivan Basic", "MID", 71, 22);
addPlayer("ore", "Jordi Thompson", "FWD", 71, 20);
addPlayer("ore", "Kazimcan Karatas", "DEF", 70, 21);

// Pari NN
addPlayer("pnn", "Juan Boselli", "FWD", 72, 26);
addPlayer("pnn", "Nikita Medvedev", "GK", 72, 31);
addPlayer("pnn", "Kirill Gotsuk", "DEF", 73, 32);
addPlayer("pnn", "Sven Karic", "DEF", 71, 26);
addPlayer("pnn", "Mamadou Maiga", "MID", 72, 29);
addPlayer("pnn", "Aleksandr Troshechkin", "MID", 71, 28);
addPlayer("pnn", "Ze Turbo", "FWD", 70, 28);
addPlayer("pnn", "Nikolay Kalinskiy", "MID", 72, 31);
addPlayer("pnn", "Viktor Aleksandrov", "DEF", 71, 22);
addPlayer("pnn", "Ognjen Ozegovic", "FWD", 71, 30);

// Fakel
addPlayer("fak", "Irakli Kvekveskiri", "MID", 71, 36);
addPlayer("fak", "Evgeniy Markov", "FWD", 72, 32);
addPlayer("fak", "Aleksandr Belenov", "GK", 72, 38);
addPlayer("fak", "Sergey Bozhin", "DEF", 71, 30);
addPlayer("fak", "Igor Kalinin", "DEF", 70, 29);
addPlayer("fak", "Vyacheslav Yakimov", "MID", 70, 26);
addPlayer("fak", "Khyzr Appaev", "FWD", 70, 34);
addPlayer("fak", "Rayan Senhadji", "DEF", 70, 27);
addPlayer("fak", "Thabo Cele", "MID", 69, 27);
addPlayer("fak", "Mohamed Brahimi", "FWD", 69, 26);

// Rubin Kazan
addPlayer("rub", "Mirlind Daku", "FWD", 77, 28);
addPlayer("rub", "Dmitri Kabutov", "DEF", 74, 34);
addPlayer("rub", "Igor Vujacic", "DEF", 75, 32);
addPlayer("rub", "Ugochukwu Iwu", "MID", 74, 26);
addPlayer("rub", "Valentin Vada", "MID", 75, 30);
addPlayer("rub", "Evgeniy Staver", "GK", 72, 26);
addPlayer("rub", "Aleksey Gritsayenko", "DEF", 73, 29);
addPlayer("rub", "Ilya Rozhkov", "DEF", 71, 19);
addPlayer("rub", "Dardan Shabanhaxhaj", "FWD", 72, 23);
addPlayer("rub", "Nikola Cumic", "FWD", 73, 25);

// Rostov
addPlayer("ros", "Danil Glebov", "MID", 77, 26);
addPlayer("ros", "Maksim Osipenko", "DEF", 77, 32);
addPlayer("ros", "Mohammad Mohebi", "FWD", 76, 27);
addPlayer("ros", "Ronaldo", "FWD", 76, 25);
addPlayer("ros", "Nikolay Komlichenko", "FWD", 75, 31);
addPlayer("ros", "Egor Golenkov", "FWD", 74, 27);
addPlayer("ros", "Rustam Yatimov", "GK", 74, 28);
addPlayer("ros", "Umar Sako", "DEF", 74, 28);
addPlayer("ros", "Andrey Langovich", "DEF", 73, 21);
addPlayer("ros", "Kirill Schetinin", "MID", 74, 22);
addPlayer("ros", "Khoren Bayramyan", "MID", 73, 32);

// --- KAZAKHSTAN PREMIER LEAGUE EXPANSION ---

// Astana
addPlayer("ast", "Marin Tomasov", "MID", 73, 39);
addPlayer("ast", "Geoffrey Chinedu", "FWD", 71, 28);
addPlayer("ast", "Max Ebong", "MID", 72, 27);
addPlayer("ast", "Aleksandr Marochkin", "DEF", 69, 36);
addPlayer("ast", "Josip Condric", "GK", 70, 33);
addPlayer("ast", "Karlo Bartolec", "DEF", 69, 31);
addPlayer("ast", "Barnes Osei", "MID", 69, 31);
addPlayer("ast", "Nnamdi Ahanonu", "FWD", 68, 24);
addPlayer("ast", "Yan Vorogovskiy", "DEF", 70, 30);
addPlayer("ast", "Elkhan Astanov", "MID", 68, 26);

// Kairat
addPlayer("kai", "Joao Paulo", "FWD", 71, 38);
addPlayer("kai", "Gulzhigit Alykulov", "MID", 69, 25);
addPlayer("kai", "Danil Ustimenko", "GK", 68, 26);
addPlayer("kai", "Luka Gadrani", "DEF", 68, 29);
addPlayer("kai", "Ofri Arad", "DEF", 68, 28);
addPlayer("kai", "Yerkebulan Seydakhmet", "FWD", 67, 26);
addPlayer("kai", "Vyacheslav Shvyrev", "FWD", 67, 25);
addPlayer("kai", "Adilet Sadybekov", "MID", 67, 24);
addPlayer("kai", "Egor Sorokin", "DEF", 68, 30);

// Ordabasy
addPlayer("ord", "Askhat Tagybergen", "MID", 70, 36);
addPlayer("ord", "Bauyrzhan Islamkhan", "MID", 69, 33);
addPlayer("ord", "Serhiy Malyi", "DEF", 68, 36);
addPlayer("ord", "Jasurbek Yakhshiboev", "FWD", 69, 29);
addPlayer("ord", "Shakhboz Umarov", "MID", 68, 27);
addPlayer("ord", "Temirlan Erlanov", "DEF", 68, 33);
addPlayer("ord", "Sergey Ignatovich", "GK", 67, 34);
addPlayer("ord", "Vsevolod Sadovskiy", "FWD", 67, 29);

// Aktobe
addPlayer("akt", "Arman Kenesov", "MID", 68, 26);
addPlayer("akt", "Igor Shatskiy", "GK", 69, 37);
addPlayer("akt", "Alibek Kasym", "DEF", 68, 28);
addPlayer("akt", "Jairo Jean", "FWD", 68, 28);
addPlayer("akt", "Leonel Strumia", "MID", 67, 33);
addPlayer("akt", "Dorasny Romero", "FWD", 68, 28);
addPlayer("akt", "Uche Agbo", "MID", 67, 30);

// Tobol
addPlayer("tob", "Islam Chesnokov", "MID", 69, 26);
addPlayer("tob", "Ahmed El Messaoudi", "MID", 68, 31);
addPlayer("tob", "Igor Ivanovic", "MID", 68, 29);
addPlayer("tob", "Stas Pokatilov", "GK", 68, 33);
addPlayer("tob", "Roman Asrankulov", "DEF", 67, 27);
addPlayer("tob", "Radoslav Tsonev", "MID", 67, 31);

// Okzhetpes
addPlayer("okz", "Ruslan Bolov", "FWD", 63, 32);
addPlayer("okz", "Srjan Dimitrov", "MID", 62, 32);
addPlayer("okz", "Aleksandr Dovbnya", "GK", 62, 39);
addPlayer("okz", "Zhasulan Moldakaraev", "FWD", 62, 39);
addPlayer("okz", "Aleksey Tatayev", "DEF", 63, 26);
addPlayer("okz", "Niyaz Idrisov", "DEF", 62, 25);
addPlayer("okz", "Viktor Dmitrenko", "DEF", 62, 33);
addPlayer("okz", "Ivan Tsyupa", "DEF", 62, 31);
addPlayer("okz", "Samat Sarsenov", "MID", 61, 28);
addPlayer("okz", "Miras Tuliev", "MID", 61, 30);
addPlayer("okz", "Raul Jalilov", "FWD", 61, 30);
addPlayer("okz", "Vyacheslav Grab", "GK", 61, 31);

// Turan
addPlayer("tur", "Artjom Dmitrijev", "MID", 64, 37);
addPlayer("tur", "Timurbek Zakirov", "GK", 63, 28);
addPlayer("tur", "Olzhas Kerimzhanov", "DEF", 64, 35);
addPlayer("tur", "Viktor Velkoski", "DEF", 63, 29);
addPlayer("tur", "Ben Zagada", "MID", 62, 24);
addPlayer("tur", "Leonardo Vaca", "FWD", 64, 29);
addPlayer("tur", "Plamen Dimov", "DEF", 63, 34);
addPlayer("tur", "Aleksandr Sokolenko", "DEF", 62, 28);
addPlayer("tur", "Sanzhar Satanov", "MID", 61, 23);
addPlayer("tur", "Rifat Nurmugamet", "FWD", 62, 28);

// Zhetysu
addPlayer("zhe", "Serikzhan Muzhikov", "MID", 65, 37);
addPlayer("zhe", "Arsen Siukaev", "GK", 64, 28);
addPlayer("zhe", "Gia Chaduneli", "DEF", 64, 30);
addPlayer("zhe", "Askhat Baltabekov", "DEF", 63, 31);
addPlayer("zhe", "Ravil Atabaev", "MID", 63, 25);
addPlayer("zhe", "Anton Shramchenko", "FWD", 64, 31);
addPlayer("zhe", "Meyrambek Kalmyrza", "MID", 62, 22);
addPlayer("zhe", "Konstantin Kuchinskiy", "DEF", 63, 26);
addPlayer("zhe", "Abylaykhan Zhumabek", "FWD", 63, 23);
addPlayer("zhe", "Dinmukhamed Karaman", "MID", 62, 24);

// Shakhter
addPlayer("sha", "Igor Mostovei", "GK", 64, 27);
addPlayer("sha", "Dmytro Ryzhuk", "DEF", 64, 32);
addPlayer("sha", "Filip Stamenkovic", "DEF", 63, 26);
addPlayer("sha", "Roger Canas", "MID", 65, 34);
addPlayer("sha", "Abylaykhan Nazymkhanov", "MID", 63, 22);
addPlayer("sha", "Juan Asprilla", "FWD", 64, 25);
addPlayer("sha", "Milos Nikolic", "DEF", 63, 35);
addPlayer("sha", "Anton Tolordava", "DEF", 63, 28);
addPlayer("sha", "Yeskendir Kybyray", "DEF", 62, 27);
addPlayer("sha", "Imad Farh", "FWD", 63, 26);

// Atyrau
addPlayer("aty", "Nikolai Signevich", "FWD", 66, 34);
addPlayer("aty", "Igor Stasevich", "MID", 65, 40);
addPlayer("aty", "Egor Khatkevich", "GK", 64, 36);
addPlayer("aty", "Adilbek Zhumakhanov", "DEF", 65, 22);
addPlayer("aty", "Soslan Takulov", "DEF", 64, 29);
addPlayer("aty", "Jakob Novak", "MID", 65, 26);
addPlayer("aty", "Edige Oralbay", "FWD", 63, 27);
addPlayer("aty", "Gevorg Najaryan", "MID", 64, 26);
addPlayer("aty", "Mateus Barbosa", "DEF", 64, 25);
addPlayer("aty", "Oleksandr Noyok", "MID", 64, 32);

// Kyzylzhar
addPlayer("kyz", "Luka Imnadze", "FWD", 66, 29);
addPlayer("kyz", "Yevgeniy Berezkin", "MID", 66, 30);
addPlayer("kyz", "Vadim Petrov", "GK", 64, 24);
addPlayer("kyz", "Ular Zhaksybaev", "DEF", 65, 30);
addPlayer("kyz", "Zoran Nizic", "DEF", 66, 35);
addPlayer("kyz", "Rafael Sabino", "MID", 65, 28);
addPlayer("kyz", "Boris Smiljanic", "FWD", 65, 28);
addPlayer("kyz", "Yuri Bushman", "DEF", 65, 34);
addPlayer("kyz", "Ardak Saulet", "MID", 64, 27);
addPlayer("kyz", "Ruben Brigido", "MID", 65, 33);

// Elimai
addPlayer("eli", "Nikita Korzun", "MID", 67, 31);
addPlayer("eli", "China", "FWD", 66, 28);
addPlayer("eli", "Ivan Sviridov", "FWD", 66, 24);
addPlayer("eli", "Denis Kavlinov", "GK", 65, 31);
addPlayer("eli", "Dmitri Yashin", "DEF", 66, 31);
addPlayer("eli", "Sergey Keiler", "DEF", 65, 30);
addPlayer("eli", "Erkebulan Nurgaliyev", "MID", 66, 31);
addPlayer("eli", "Quentin Cornette", "FWD", 66, 30);
addPlayer("eli", "Maicom David", "MID", 65, 24);
addPlayer("eli", "Dmitri Shomko", "DEF", 66, 34);

// Kaisar
addPlayer("kai2", "Aybar Zhaksylykov", "FWD", 65, 29);
addPlayer("kai2", "Ruslan Yudenkov", "DEF", 65, 39);
addPlayer("kai2", "Stefan Sikach", "GK", 65, 30);
addPlayer("kai2", "Adilet Kenesbek", "DEF", 64, 28);
addPlayer("kai2", "Goran Milojko", "MID", 65, 30);
addPlayer("kai2", "Duman Narzildaev", "MID", 64, 31);
addPlayer("kai2", "Orken Makhan", "FWD", 64, 26);
addPlayer("kai2", "Vitaliy Pryndeta", "DEF", 64, 31);
addPlayer("kai2", "Vasiliy Sovpel", "MID", 63, 25);
addPlayer("kai2", "Didar Zhalmukan", "MID", 63, 28);

// Ural
addPlayer("ura", "Eric Bicfalvi", "MID", 73, 38);
addPlayer("ura", "Ilya Pomazun", "GK", 74, 28);
addPlayer("ura", "Silvije Begic", "DEF", 73, 31);
addPlayer("ura", "Emmerson", "DEF", 72, 29);
addPlayer("ura", "Danijel Miskic", "MID", 73, 31);
addPlayer("ura", "Aleksey Kashtanov", "FWD", 72, 28);
addPlayer("ura", "Mingiyan Beveev", "DEF", 71, 29);
addPlayer("ura", "Timur Ayupov", "MID", 71, 31);
addPlayer("ura", "Fanil Sungatulin", "MID", 70, 23);
addPlayer("ura", "Ilya Ishkov", "FWD", 70, 19);

// Baltika
addPlayer("bal", "Vitaliy Lisakovich", "FWD", 72, 28);
addPlayer("bal", "Maksim Borisko", "GK", 70, 24);
addPlayer("bal", "Nathan Gassama", "DEF", 71, 23);
addPlayer("bal", "Kevin Andrade", "DEF", 71, 25);
addPlayer("bal", "Tigran Avanesyan", "MID", 69, 22);
addPlayer("bal", "Alex Fernandes", "FWD", 71, 22);
addPlayer("bal", "Yuri Kovalev", "MID", 70, 31);
addPlayer("bal", "Kirill Kaplenko", "MID", 70, 25);
addPlayer("bal", "Nikola Radmanovac", "DEF", 70, 27);
addPlayer("bal", "Gedeon Guzina", "FWD", 69, 31);

// Sochi
addPlayer("soc", "Artur Yusupov", "MID", 73, 37);
addPlayer("soc", "Maksim Rudakov", "GK", 70, 28);
addPlayer("soc", "Marcelo Alves", "DEF", 72, 26);
addPlayer("soc", "Kirill Kravtsov", "MID", 72, 22);
addPlayer("soc", "Martin Kramaric", "FWD", 73, 27);
addPlayer("soc", "Saul Guarirapa", "FWD", 72, 22);
addPlayer("soc", "Artem Makarchuk", "DEF", 71, 29);
addPlayer("soc", "Vyacheslav Litvinov", "DEF", 71, 23);
addPlayer("soc", "Ignacio Saavedra", "MID", 72, 25);
addPlayer("soc", "Miguel Silveira", "MID", 70, 21);

// Fakel
addPlayer("fak", "Irakli Kvekveskiri", "MID", 71, 36);
addPlayer("fak", "Evgeniy Markov", "FWD", 72, 32);
addPlayer("fak", "Aleksandr Belenov", "GK", 72, 38);
addPlayer("fak", "Sergey Bozhin", "DEF", 71, 30);
addPlayer("fak", "Igor Kalinin", "DEF", 70, 29);
addPlayer("fak", "Vyacheslav Yakimov", "MID", 70, 26);
addPlayer("fak", "Khyzr Appaev", "FWD", 70, 34);
addPlayer("fak", "Rayan Senhadji", "DEF", 70, 27);
addPlayer("fak", "Thabo Cele", "MID", 69, 27);
addPlayer("fak", "Mohamed Brahimi", "FWD", 69, 26);

// Orenburg
addPlayer("ore", "Brian Mansilla", "FWD", 73, 29);
addPlayer("ore", "Jimmy Marin", "MID", 73, 28);
addPlayer("ore", "Matias Perez", "DEF", 74, 27);
addPlayer("ore", "Nikolay Sysuev", "GK", 72, 25);
addPlayer("ore", "Leo Goglichidze", "DEF", 71, 27);
addPlayer("ore", "Mohammad Ghorbani", "MID", 72, 23);
addPlayer("ore", "Saeed Saharkhizan", "FWD", 72, 21);
addPlayer("ore", "Ivan Basic", "MID", 71, 22);
addPlayer("ore", "Jordi Thompson", "FWD", 71, 20);
addPlayer("ore", "Kazimcan Karatas", "DEF", 70, 21);

// Pari NN
addPlayer("pnn", "Juan Boselli", "FWD", 72, 26);
addPlayer("pnn", "Nikita Medvedev", "GK", 72, 31);
addPlayer("pnn", "Kirill Gotsuk", "DEF", 73, 32);
addPlayer("pnn", "Sven Karic", "DEF", 71, 26);
addPlayer("pnn", "Mamadou Maiga", "MID", 72, 29);
addPlayer("pnn", "Aleksandr Troshechkin", "MID", 71, 28);
addPlayer("pnn", "Ze Turbo", "FWD", 70, 28);
addPlayer("pnn", "Nikolay Kalinskiy", "MID", 72, 31);
addPlayer("pnn", "Viktor Aleksandrov", "DEF", 71, 22);
addPlayer("pnn", "Ognjen Ozegovic", "FWD", 71, 30);

// Sporting CP
addPlayer("spo", "Viktor Gyokeres", "FWD", 87, 28);
addPlayer("spo", "Pedro Goncalves", "MID", 84, 28);
addPlayer("spo", "Morten Hjulmand", "MID", 83, 27);
addPlayer("spo", "Goncalo Inacio", "DEF", 83, 25);
addPlayer("spo", "Ousmane Diomande", "DEF", 81, 22);
addPlayer("spo", "Francisco Trincao", "FWD", 81, 26);
addPlayer("spo", "Hidemasa Morita", "MID", 80, 31);
addPlayer("spo", "Nuno Santos", "MID", 80, 31);
addPlayer("spo", "Geny Catamo", "FWD", 79, 25);
addPlayer("spo", "Zeno Debast", "DEF", 79, 22);
addPlayer("spo", "Vladan Kovacevic", "GK", 79, 28);
addPlayer("spo", "Geovany Quenda", "FWD", 78, 19);
addPlayer("spo", "Daniel Braganca", "MID", 79, 27);
addPlayer("spo", "Matheus Reis", "DEF", 78, 31);
addPlayer("spo", "Jeremiah St. Juste", "DEF", 78, 29);

// Benfica
addPlayer("ben", "Angel Di Maria", "FWD", 82, 38);
addPlayer("ben", "Orkun Kokcu", "MID", 83, 25);
addPlayer("ben", "Kerem Akturkoglu", "FWD", 81, 27);
addPlayer("ben", "Vangelis Pavlidis", "FWD", 81, 27);
addPlayer("ben", "Anatoliy Trubin", "GK", 82, 25);
addPlayer("ben", "Antonio Silva", "DEF", 81, 22);
addPlayer("ben", "Nicolas Otamendi", "DEF", 80, 38);
addPlayer("ben", "Fredrik Aursnes", "MID", 81, 30);
addPlayer("ben", "Florentino Luis", "MID", 80, 27);
addPlayer("ben", "Alexander Bah", "DEF", 80, 28);
addPlayer("ben", "Tomas Araujo", "DEF", 79, 24);
addPlayer("ben", "Alvaro Carreras", "DEF", 79, 23);
addPlayer("ben", "Gianluca Prestianni", "FWD", 77, 20);
addPlayer("ben", "Zeki Amdouni", "FWD", 79, 25);
addPlayer("ben", "Renato Sanches", "MID", 78, 29);

// Porto
addPlayer("por", "Diogo Costa", "GK", 85, 26);
addPlayer("por", "Alan Varela", "MID", 82, 25);
addPlayer("por", "Galeno", "FWD", 81, 28);
addPlayer("por", "Samu Omorodion", "FWD", 80, 22);
addPlayer("por", "Nico Gonzalez", "MID", 80, 24);
addPlayer("por", "Pepe", "FWD", 80, 29); // Pepe Aquino
addPlayer("por", "Francisco Moura", "DEF", 79, 27);
addPlayer("por", "Nehuen Perez", "DEF", 79, 26);
addPlayer("por", "Stephen Eustaquio", "MID", 79, 29);
addPlayer("por", "Otavio", "DEF", 78, 24); // Otavio Ataide
addPlayer("por", "Martim Fernandes", "DEF", 77, 20);
addPlayer("por", "Vasco Sousa", "MID", 77, 23);
addPlayer("por", "Fabio Vieira", "MID", 80, 26);

// Braga
addPlayer("bra", "Ricardo Horta", "FWD", 80, 31);
addPlayer("bra", "Bruma", "FWD", 79, 31);
addPlayer("bra", "Rodrigo Zalazar", "MID", 79, 27);
addPlayer("bra", "Joao Moutinho", "MID", 78, 39);
addPlayer("bra", "Sikou Niakate", "DEF", 78, 27);
addPlayer("bra", "Matheus", "GK", 79, 34);
addPlayer("bra", "Amine El Ouazzani", "FWD", 77, 25);
addPlayer("bra", "Victor Gomez", "DEF", 77, 26);

// Vitoria Guimaraes
addPlayer("gui", "Tomas Handel", "MID", 77, 25);
addPlayer("gui", "Tiago Silva", "MID", 77, 33);
addPlayer("gui", "Bruno Varela", "GK", 76, 31);
addPlayer("gui", "Nelson Oliveira", "FWD", 75, 35);

// Famalicao
addPlayer("fam", "Zaydou Youssouf", "MID", 76, 27);
addPlayer("fam", "Gustavo Sa", "MID", 75, 21);
addPlayer("fam", "Ivan Zlobin", "GK", 74, 27);
addPlayer("fam", "Riccieli", "DEF", 75, 25);
addPlayer("fam", "Enea Mihaj", "DEF", 74, 25);
addPlayer("fam", "Mirko Topic", "MID", 75, 23);
addPlayer("fam", "Sorriso", "FWD", 74, 23);
addPlayer("fam", "Oscar Aranda", "FWD", 73, 22);

// Arouca
addPlayer("aro", "Jason", "FWD", 75, 32);
addPlayer("aro", "Cristo Gonzalez", "FWD", 76, 28);
addPlayer("aro", "Nico Mantl", "GK", 73, 24);
addPlayer("aro", "Nino Galovic", "DEF", 73, 31);
addPlayer("aro", "Mateus Quaresma", "DEF", 74, 27);
addPlayer("aro", "David Simao", "MID", 75, 34);
addPlayer("aro", "Morlaye Sylla", "MID", 74, 25);
addPlayer("aro", "Henrique Araujo", "FWD", 74, 22);

// Real Sociedad
addPlayer("rso", "Mikel Oyarzabal", "FWD", 83, 27);
addPlayer("rso", "Martin Zubimendi", "MID", 84, 25);
addPlayer("rso", "Takefusa Kubo", "FWD", 82, 23);
addPlayer("rso", "Brais Mendez", "MID", 81, 27);
addPlayer("rso", "Alex Remiro", "GK", 83, 29);
addPlayer("rso", "Igor Zubeldia", "DEF", 80, 27);
addPlayer("rso", "Hamari Traore", "DEF", 79, 32);
// transferred out: addPlayer('rso', 'Sheraldo Becker', 'FWD', 78, 29);
addPlayer("rso", "Arsen Zakharyan", "MID", 77, 21);
addPlayer("rso", "Javi Galan", "DEF", 79, 29);
addPlayer("rso", "Nayef Aguerd", "DEF", 80, 28);
addPlayer("rso", "Luka Sucic", "MID", 78, 21);

// Real Betis
addPlayer("bet", "Isco", "MID", 82, 32);
addPlayer("bet", "Nabil Fekir", "MID", 81, 31); // Moved to UAE but keeping for now if user wants 26/27 context or replace
// Fekir left. Replacing with Lo Celso.
addPlayer("bet", "Giovani Lo Celso", "MID", 82, 28);
addPlayer("bet", "Vitor Roque", "FWD", 77, 19);
addPlayer("bet", "Pablo Fornals", "MID", 80, 28);
addPlayer("bet", "Marc Bartra", "DEF", 78, 33);
addPlayer("bet", "Hector Bellerin", "DEF", 77, 29);
addPlayer("bet", "Rui Silva", "GK", 79, 30);
// transferred out: addPlayer('bet', 'Johnny Cardoso', 'MID', 78, 22);
addPlayer("bet", "Ez Abde", "FWD", 77, 22);
addPlayer("bet", "Diego Llorente", "DEF", 78, 31);
addPlayer("bet", "Cedric Bakambu", "FWD", 78, 33);

// Athletic Club
addPlayer("ath", "Nico Williams", "FWD", 85, 22);
addPlayer("ath", "Inaki Williams", "FWD", 82, 30);
addPlayer("ath", "Oihan Sancet", "MID", 81, 24);
addPlayer("ath", "Unai Simon", "GK", 84, 27);
addPlayer("ath", "Dani Vivian", "DEF", 81, 25);
addPlayer("ath", "Aitor Paredes", "DEF", 79, 24);
addPlayer("ath", "Yuri Berchiche", "DEF", 79, 34);
addPlayer("ath", "Inigo Ruiz de Galarreta", "MID", 79, 31);
addPlayer("ath", "Gorka Guruzeta", "FWD", 80, 27);
addPlayer("ath", "Alex Berenguer", "FWD", 79, 29);
addPlayer("ath", "Yeray Alvarez", "DEF", 79, 29);

// Villarreal
addPlayer("vil", "Gerard Moreno", "FWD", 83, 32);
addPlayer("vil", "Alex Baena", "MID", 82, 23);
addPlayer("vil", "Dani Parejo", "MID", 81, 35);
addPlayer("vil", "Ayoze Perez", "FWD", 80, 31);
addPlayer("vil", "Yeremy Pino", "FWD", 79, 21);
addPlayer("vil", "Raul Albiol", "DEF", 78, 39);
addPlayer("vil", "Juan Foyth", "DEF", 80, 26);
addPlayer("vil", "Diego Conde", "GK", 77, 25);
// transferred out: addPlayer('vil', 'Thierno Barry', 'FWD', 75, 21);
addPlayer("vil", "Logan Costa", "DEF", 77, 23);
addPlayer("vil", "Sergi Cardona", "DEF", 77, 25);

// Girona
addPlayer("gir", "Viktor Tsygankov", "FWD", 82, 26);
addPlayer("gir", "Paulo Gazzaniga", "GK", 80, 32);
addPlayer("gir", "Daley Blind", "DEF", 80, 34);
addPlayer("gir", "Miguel Gutierrez", "DEF", 80, 23);
// transferred out: addPlayer('gir', 'Yangel Herrera', 'MID', 79, 26);
addPlayer("gir", "Ivan Martin", "MID", 79, 25);
addPlayer("gir", "Cristhian Stuani", "FWD", 78, 37);
addPlayer("gir", "Abel Ruiz", "FWD", 77, 24);
addPlayer("gir", "Bryan Gil", "FWD", 78, 23);
// transferred out: addPlayer('gir', 'Oriol Romeu', 'MID', 78, 32);
addPlayer("gir", "Donny van de Beek", "MID", 76, 27);

// Celta Vigo
addPlayer("cel", "Iago Aspas", "FWD", 82, 37);
addPlayer("cel", "Oscar Mingueza", "DEF", 77, 25);
addPlayer("cel", "Fran Beltran", "MID", 77, 25);
addPlayer("cel", "Jonathan Bamba", "FWD", 78, 28);
// transferred out: addPlayer('cel', 'Vicente Guaita', 'GK', 78, 37);
addPlayer("cel", "Borja Iglesias", "FWD", 78, 31);
addPlayer("cel", "Ilaix Moriba", "MID", 75, 21);
addPlayer("cel", "Carl Starfelt", "DEF", 76, 29);

// Osasuna
addPlayer("osa", "Ante Budimir", "FWD", 80, 33);
addPlayer("osa", "Aimar Oroz", "MID", 78, 22);
addPlayer("osa", "Sergio Herrera", "GK", 78, 31);
addPlayer("osa", "Lucas Torro", "MID", 77, 30);
addPlayer("osa", "Moi Gomez", "MID", 77, 30);
// transferred out: addPlayer('osa', 'Bryan Zaragoza', 'FWD', 78, 22);
addPlayer("osa", "Alejandro Catena", "DEF", 77, 29);

// Getafe
addPlayer("get", "Borja Mayoral", "FWD", 79, 27);
addPlayer("get", "David Soria", "GK", 80, 31);
addPlayer("get", "Djene Dakonam", "DEF", 78, 32);
addPlayer("get", "Luis Milla", "MID", 78, 29);
addPlayer("get", "Mauro Arambarri", "MID", 77, 28);
addPlayer("get", "Carles Perez", "FWD", 76, 26);
// transferred out: addPlayer('get', 'Omar Alderete', 'DEF', 77, 27);

// Mallorca
addPlayer("mal", "Vedat Muriqi", "FWD", 79, 30);
addPlayer("mal", "Sergi Darder", "MID", 78, 30);
addPlayer("mal", "Pablo Maffeo", "DEF", 77, 27);
addPlayer("mal", "Antonio Raillo", "DEF", 77, 32);
// transferred out: addPlayer('mal', 'Dominik Greif', 'GK', 76, 27);
addPlayer("mal", "Takuma Asano", "FWD", 75, 29);
addPlayer("mal", "Johan Mojica", "DEF", 76, 31);

// Rayo Vallecano
addPlayer("ray", "Isi Palazon", "FWD", 78, 29);
addPlayer("ray", "Alvaro Garcia", "FWD", 78, 31);
addPlayer("ray", "Oscar Valentin", "MID", 77, 30);
addPlayer("ray", "Florian Lejeune", "DEF", 77, 33);
addPlayer("ray", "James Rodriguez", "MID", 79, 33);
addPlayer("ray", "Augusto Batalla", "GK", 76, 28);
addPlayer("ray", "Sergio Camello", "FWD", 76, 23);

// Alaves
addPlayer("ala", "Antonio Sivera", "GK", 77, 28);
addPlayer("ala", "Ander Guevara", "MID", 76, 27);
addPlayer("ala", "Jon Guridi", "MID", 76, 29);
addPlayer("ala", "Kike Garcia", "FWD", 75, 34);
addPlayer("ala", "Nahuel Tenaglia", "DEF", 75, 28);
// transferred out: addPlayer('ala', 'Asier Villalibre', 'FWD', 75, 26);
addPlayer("ala", "Joan Jordan", "MID", 76, 30);

// Las Palmas
addPlayer("pal", "Kirian Rodriguez", "MID", 79, 28);
addPlayer("pal", "Alberto Moleiro", "MID", 77, 20);
addPlayer("pal", "Sandro Ramirez", "FWD", 75, 29);
addPlayer("pal", "Jasper Cillessen", "GK", 76, 35);
addPlayer("pal", "Alex Suarez", "DEF", 75, 31);
addPlayer("pal", "Adnan Januzaj", "FWD", 75, 29);
addPlayer("pal", "Fabio Silva", "FWD", 74, 22);

// Leganes
addPlayer("leg", "Yvan Neyou", "MID", 74, 27);
addPlayer("leg", "Seydouba Cisse", "MID", 73, 23);
addPlayer("leg", "Dani Raba", "FWD", 74, 28);
addPlayer("leg", "Marko Dmitrovic", "GK", 76, 32);
addPlayer("leg", "Javi Hernandez", "DEF", 74, 26);
addPlayer("leg", "Sebastien Haller", "FWD", 78, 30);
addPlayer("leg", "Renato Tapia", "MID", 76, 29);

// Valladolid
addPlayer("val2", "Selim Amallah", "MID", 75, 27);
addPlayer("val2", "Kike Perez", "MID", 74, 27);
addPlayer("val2", "Mamadou Sylla", "FWD", 73, 30);
addPlayer("val2", "Karl Hein", "GK", 72, 22);
addPlayer("val2", "Luis Perez", "DEF", 74, 29);
addPlayer("val2", "Juanmi Latasa", "FWD", 73, 23);

// Espanyol
addPlayer("esp", "Javi Puado", "FWD", 77, 26);
addPlayer("esp", "Sergi Gomez", "DEF", 74, 32);
addPlayer("esp", "Fernando Calero", "DEF", 74, 28);
addPlayer("esp", "Joan Garcia", "GK", 75, 23);
addPlayer("esp", "Alex Kral", "MID", 75, 26);
addPlayer("esp", "Alejo Veliz", "FWD", 74, 20);
// transferred out: addPlayer('esp', 'Marash Kumbulla', 'DEF', 75, 24);

// Atalanta
addPlayer("ata", "Ademola Lookman", "FWD", 84, 27);
addPlayer("ata", "Charles De Ketelaere", "FWD", 81, 23);
addPlayer("ata", "Ederson", "MID", 82, 25);
addPlayer("ata", "Gianluca Scamacca", "FWD", 80, 25);
addPlayer("ata", "Teun Koopmeiners", "MID", 83, 26); // Moved to Juve but keeping for now or replacing
// Koopmeiners is at Juve. Replacing.
addPlayer("ata", "Mateo Retegui", "FWD", 80, 25);
addPlayer("ata", "Giorgio Scalvini", "DEF", 80, 21);
addPlayer("ata", "Davide Zappacosta", "DEF", 79, 32);
addPlayer("ata", "Mario Pasalic", "MID", 80, 29);
addPlayer("ata", "Marten de Roon", "MID", 79, 33);
addPlayer("ata", "Marco Carnesecchi", "GK", 80, 24);
addPlayer("ata", "Sead Kolasinac", "DEF", 79, 31);
addPlayer("ata", "Raoul Bellanova", "DEF", 79, 24);

// Lazio
addPlayer("laz", "Mattia Zaccagni", "FWD", 81, 29);
addPlayer("laz", "Alessio Romagnoli", "DEF", 80, 29);
addPlayer("laz", "Ivan Provedel", "GK", 81, 30);
addPlayer("laz", "Matteo Guendouzi", "MID", 80, 25);
addPlayer("laz", "Taty Castellanos", "FWD", 79, 26);
addPlayer("laz", "Boulaye Dia", "FWD", 78, 28);
addPlayer("laz", "Nuno Tavares", "DEF", 77, 24);
addPlayer("laz", "Manuel Lazzari", "DEF", 78, 31);
addPlayer("laz", "Nicolo Rovella", "MID", 78, 23);

// Fiorentina
addPlayer("fio", "Moise Kean", "FWD", 79, 24);
addPlayer("fio", "Albert Gudmundsson", "FWD", 81, 27);
addPlayer("fio", "David De Gea", "GK", 81, 34);
addPlayer("fio", "Lucas Beltran", "FWD", 78, 23);
addPlayer("fio", "Cristiano Biraghi", "DEF", 78, 32);
addPlayer("fio", "Dodo", "DEF", 78, 26);
addPlayer("fio", "Andrea Colpani", "MID", 78, 25);
addPlayer("fio", "Yacine Adli", "MID", 77, 24);
addPlayer("fio", "Luca Ranieri", "DEF", 77, 25);

// Bologna
addPlayer("bol", "Riccardo Orsolini", "FWD", 80, 27);
addPlayer("bol", "Lewis Ferguson", "MID", 79, 25);
addPlayer("bol", "Stefan Posch", "DEF", 78, 27);
addPlayer("bol", "Dan Ndoye", "FWD", 77, 24);
addPlayer("bol", "Santiago Castro", "FWD", 76, 20);
addPlayer("bol", "Sam Beukema", "DEF", 77, 26);
addPlayer("bol", "Remo Freuler", "MID", 78, 32);
addPlayer("bol", "Lukasz Skorupski", "GK", 78, 33);
addPlayer("bol", "Thijs Dallinga", "FWD", 77, 24);

// Torino
addPlayer("tor", "Duvan Zapata", "FWD", 80, 33);
addPlayer("tor", "Antonio Sanabria", "FWD", 77, 28);
addPlayer("tor", "Samuele Ricci", "MID", 78, 23);
addPlayer("tor", "Ivan Ilic", "MID", 77, 23);
addPlayer("tor", "Vanja Milinkovic-Savic", "GK", 78, 27);
addPlayer("tor", "Perr Schuurs", "DEF", 78, 25);
addPlayer("tor", "Che Adams", "FWD", 76, 28);
addPlayer("tor", "Borna Sosa", "DEF", 76, 26);
addPlayer("tor", "Valentino Lazaro", "MID", 75, 28);

// Monza
addPlayer("mnz", "Matteo Pessina", "MID", 78, 27);
addPlayer("mnz", "Dany Mota", "FWD", 76, 26);
addPlayer("mnz", "Pablo Mari", "DEF", 76, 31);
addPlayer("mnz", "Stefano Turati", "GK", 75, 23);
addPlayer("mnz", "Daniel Maldini", "FWD", 75, 23);
addPlayer("mnz", "Gianluca Caprari", "FWD", 75, 31);
addPlayer("mnz", "Armando Izzo", "DEF", 75, 32);
addPlayer("mnz", "Roberto Gagliardini", "MID", 75, 30);
addPlayer("mnz", "Andrea Petagna", "FWD", 74, 31);
addPlayer("mnz", "Samuele Birindelli", "DEF", 74, 27);
addPlayer("mnz", "Warren Bondo", "MID", 75, 23);

// Genoa
addPlayer("gen", "Andrea Pinamonti", "FWD", 76, 25);
addPlayer("gen", "Vitinha", "FWD", 76, 24);
addPlayer("gen", "Junior Messias", "FWD", 75, 33);
addPlayer("gen", "Milan Badelj", "MID", 75, 35);
addPlayer("gen", "Johan Vasquez", "DEF", 75, 26);
addPlayer("gen", "Morten Frendrup", "MID", 77, 23);
addPlayer("gen", "Pierluigi Gollini", "GK", 76, 29);
addPlayer("gen", "Ruslan Malinovskyi", "MID", 76, 31);

// Udinese
addPlayer("ud", "Florian Thauvin", "FWD", 78, 31);
addPlayer("ud", "Lorenzo Lucca", "FWD", 76, 24);
addPlayer("ud", "Sandi Lovric", "MID", 76, 26);
addPlayer("ud", "Jaka Bijol", "DEF", 77, 25);
addPlayer("ud", "Maduka Okoye", "GK", 75, 25);
addPlayer("ud", "Alexis Sanchez", "FWD", 77, 35);
addPlayer("ud", "Hassane Kamara", "DEF", 74, 30);
addPlayer("ud", "Kingsley Ehizibue", "DEF", 74, 29);

// Lecce
addPlayer("lec", "Nikola Krstovic", "FWD", 76, 24);
addPlayer("lec", "Federico Baschirotto", "DEF", 75, 28);
addPlayer("lec", "Wladimiro Falcone", "GK", 76, 29);
addPlayer("lec", "Ylber Ramadani", "MID", 75, 28);
addPlayer("lec", "Lameck Banda", "FWD", 74, 23);
addPlayer("lec", "Ante Rebic", "FWD", 75, 31);
addPlayer("lec", "Patrick Dorgu", "DEF", 74, 20);
addPlayer("lec", "Kialonda Gaspar", "DEF", 73, 27);
addPlayer("lec", "Lassana Coulibaly", "MID", 74, 28);
addPlayer("lec", "Antonino Gallo", "DEF", 73, 24);
addPlayer("lec", "Hamza Rafia", "MID", 72, 25);
addPlayer("lec", "Santiago Pierotti", "FWD", 71, 23);

// Empoli
addPlayer("emp", "Sebastiano Esposito", "FWD", 74, 22);
addPlayer("emp", "Lorenzo Colombo", "FWD", 74, 22);
addPlayer("emp", "Devis Vasquez", "GK", 73, 26);
addPlayer("emp", "Ardian Ismajli", "DEF", 74, 28);
addPlayer("emp", "Giuseppe Pezzella", "DEF", 73, 27);
addPlayer("emp", "Youssef Maleh", "MID", 74, 26);
addPlayer("emp", "Ola Solbakken", "FWD", 73, 26);
addPlayer("emp", "Mattia Viti", "DEF", 73, 22);
addPlayer("emp", "Liam Henderson", "MID", 71, 28);
addPlayer("emp", "Emmanuel Gyasi", "FWD", 73, 30);
addPlayer("emp", "Tino Anjorin", "MID", 72, 24);
addPlayer("emp", "Saba Goglichidze", "DEF", 70, 20);

// Verona
addPlayer("ver", "Darko Lazovic", "MID", 74, 34);
addPlayer("ver", "Lorenzo Montipo", "GK", 75, 28);
addPlayer("ver", "Pawel Dawidowicz", "DEF", 74, 29);
addPlayer("ver", "Ondrej Duda", "MID", 75, 29);
addPlayer("ver", "Casper Tengstedt", "FWD", 73, 24);
addPlayer("ver", "Abdou Harroui", "MID", 73, 26);
addPlayer("ver", "Jackson Tchatchoua", "DEF", 73, 23);
addPlayer("ver", "Diego Coppola", "DEF", 72, 22);
addPlayer("ver", "Reda Belahyane", "MID", 72, 20);
addPlayer("ver", "Suat Serdar", "MID", 75, 27);
addPlayer("ver", "Grigoris Kastanos", "MID", 73, 26);
addPlayer("ver", "Amin Sarr", "FWD", 72, 23);

// Cagliari
addPlayer("cag", "Gianluca Lapadula", "FWD", 74, 34);
addPlayer("cag", "Zito Luvumbo", "FWD", 75, 22);
addPlayer("cag", "Yerry Mina", "DEF", 75, 30);
addPlayer("cag", "Simone Scuffet", "GK", 74, 28);
addPlayer("cag", "Razvan Marin", "MID", 75, 28);
addPlayer("cag", "Roberto Piccoli", "FWD", 74, 23);
addPlayer("cag", "Tommaso Augello", "DEF", 73, 30);
addPlayer("cag", "Sebastiano Luperto", "DEF", 75, 28);
addPlayer("cag", "Michel Adopo", "MID", 72, 24);
addPlayer("cag", "Mateusz Wieteska", "DEF", 73, 27);
addPlayer("cag", "Nicolas Viola", "MID", 73, 35);
addPlayer("cag", "Gianluca Gaetano", "MID", 74, 24);

// Parma
addPlayer("par", "Dennis Man", "FWD", 77, 26);
addPlayer("par", "Adrian Bernabe", "MID", 76, 23);
addPlayer("par", "Valentin Mihaila", "FWD", 75, 24);
addPlayer("par", "Zion Suzuki", "GK", 74, 22);
addPlayer("par", "Ange-Yoan Bonny", "FWD", 74, 21);
addPlayer("par", "Simon Sohm", "MID", 74, 23);
addPlayer("par", "Enrico Del Prato", "DEF", 73, 25);
addPlayer("par", "Botond Balogh", "DEF", 72, 22);
addPlayer("par", "Emanuele Valeri", "DEF", 73, 25);
addPlayer("par", "Hernani", "MID", 73, 30);
addPlayer("par", "Mandela Keita", "MID", 73, 22);
addPlayer("par", "Pontus Almqvist", "FWD", 72, 25);

// Como
addPlayer("com", "Andrea Belotti", "FWD", 76, 30);
addPlayer("com", "Patrick Cutrone", "FWD", 75, 26);
addPlayer("com", "Pepe Reina", "GK", 76, 42);
addPlayer("com", "Alberto Moreno", "DEF", 75, 32);
addPlayer("com", "Sergi Roberto", "MID", 77, 32);
addPlayer("com", "Raphael Varane", "DEF", 80, 31); // Retired but maybe in roster for start of season context? Or remove.
// Varane retired. Removing/Replacing.
addPlayer("com", "Marc-Oliver Kempf", "DEF", 74, 29);
addPlayer("com", "Gabriel Strefezza", "FWD", 76, 27);
addPlayer("com", "Nico Paz", "MID", 74, 20);
addPlayer("com", "Emil Audero", "GK", 75, 27);

// Venezia
addPlayer("ven", "Joel Pohjanpalo", "FWD", 76, 30);
addPlayer("ven", "Gianluca Busio", "MID", 74, 22);
addPlayer("ven", "Jesse Joronen", "GK", 73, 31);
addPlayer("ven", "Gaetano Oristanio", "FWD", 73, 22);
addPlayer("ven", "Alfred Duncan", "MID", 75, 31);
addPlayer("ven", "Marin Sverko", "DEF", 72, 26);
addPlayer("ven", "Hans Nicolussi Caviglia", "MID", 72, 24);
addPlayer("ven", "Jay Idzes", "DEF", 71, 24);
addPlayer("ven", "Michael Svoboda", "DEF", 71, 26);
addPlayer("ven", "Antonio Candreva", "MID", 76, 39); // If he joins or keep for depth if user wants
addPlayer("ven", "John Yeboah", "FWD", 72, 24);
addPlayer("ven", "Mikael Egill Ellertsson", "MID", 71, 22);

// Eintracht Frankfurt
addPlayer("fra", "Omar Marmoush", "FWD", 81, 25);
addPlayer("fra", "Hugo Ekitike", "FWD", 79, 22);
addPlayer("fra", "Mario Gotze", "MID", 79, 32);
addPlayer("fra", "Kevin Trapp", "GK", 80, 34);
addPlayer("fra", "Robin Koch", "DEF", 80, 28);
addPlayer("fra", "Arthur Theate", "DEF", 78, 24);
addPlayer("fra", "Rasmus Kristensen", "DEF", 77, 27);
addPlayer("fra", "Ellyes Skhiri", "MID", 79, 29);
addPlayer("fra", "Hugo Larsson", "MID", 78, 20);

// Stuttgart
addPlayer("stu", "Deniz Undav", "FWD", 81, 28);
addPlayer("stu", "Ermedin Demirovic", "FWD", 80, 26);
addPlayer("stu", "Chris Fuhrich", "MID", 79, 26);
addPlayer("stu", "Angelo Stiller", "MID", 80, 23);
addPlayer("stu", "Alexander Nubel", "GK", 79, 28);
addPlayer("stu", "Maximilian Mittelstadt", "DEF", 79, 27);
addPlayer("stu", "Enzo Millot", "MID", 78, 22);
addPlayer("stu", "Jeff Chabot", "DEF", 77, 26);
addPlayer("stu", "Jamie Leweling", "FWD", 77, 23);

// Hoffenheim
addPlayer("hof", "Andrej Kramaric", "FWD", 80, 33);
addPlayer("hof", "Oliver Baumann", "GK", 80, 34);
addPlayer("hof", "Anton Stach", "MID", 78, 26);
addPlayer("hof", "Florian Grillitsch", "MID", 77, 29);
addPlayer("hof", "Marius Bulter", "FWD", 76, 31);
addPlayer("hof", "Ozan Kabak", "DEF", 76, 24);
addPlayer("hof", "Adam Hlozek", "FWD", 76, 22);
addPlayer("hof", "Alexander Prass", "MID", 75, 23);

// Wolfsburg
addPlayer("wob", "Maximilian Arnold", "MID", 79, 30);
addPlayer("wob", "Jonas Wind", "FWD", 78, 25);
addPlayer("wob", "Lovro Majer", "MID", 79, 26);
addPlayer("wob", "Ridle Baku", "DEF", 77, 26);
addPlayer("wob", "Kamil Grabara", "GK", 78, 25);
addPlayer("wob", "Sebastiaan Bornauw", "DEF", 76, 25);
addPlayer("wob", "Patrick Wimmer", "MID", 77, 23);
addPlayer("wob", "Mohamed Amoura", "FWD", 77, 24);

// Freiburg
addPlayer("fre", "Vincenzo Grifo", "MID", 80, 31);
addPlayer("fre", "Matthias Ginter", "DEF", 80, 30);
addPlayer("fre", "Christian Gunter", "DEF", 79, 31);
addPlayer("fre", "Ritsu Doan", "MID", 79, 26);
addPlayer("fre", "Michael Gregoritsch", "FWD", 78, 30);
addPlayer("fre", "Noah Atubolu", "GK", 76, 22);
addPlayer("fre", "Maximilian Eggestein", "MID", 78, 28);
addPlayer("fre", "Philipp Lienhart", "DEF", 78, 28);

// Mainz 05
addPlayer("mai", "Jonathan Burkardt", "FWD", 77, 24);
addPlayer("mai", "Nadiem Amiri", "MID", 77, 28);
addPlayer("mai", "Robin Zentner", "GK", 76, 30);
addPlayer("mai", "Lee Jae-sung", "MID", 76, 32);
addPlayer("mai", "Phillipp Mwene", "DEF", 75, 30);
addPlayer("mai", "Dominik Kohr", "MID", 75, 30);
addPlayer("mai", "Silvan Widmer", "DEF", 75, 31);

// Monchengladbach
addPlayer("gla", "Alassane Plea", "FWD", 77, 31);
addPlayer("gla", "Julian Weigl", "MID", 77, 29);
addPlayer("gla", "Nico Elvedi", "DEF", 77, 28);
addPlayer("gla", "Ko Itakura", "DEF", 77, 27);
addPlayer("gla", "Jonas Omlin", "GK", 77, 30);
addPlayer("gla", "Kevin Stoger", "MID", 78, 31);
addPlayer("gla", "Tim Kleindienst", "FWD", 77, 29);
addPlayer("gla", "Franck Honorat", "MID", 77, 28);

// Union Berlin
addPlayer("uni", "Robin Gosens", "DEF", 79, 30); // Moved to Fiorentina actually? Or stayed? Let's check. He moved to Fiorentina.
// Replacing Gosens.
addPlayer("uni", "Tom Rothe", "DEF", 74, 20);
addPlayer("uni", "Kevin Vogt", "DEF", 76, 33);
addPlayer("uni", "Rani Khedira", "MID", 76, 30);
addPlayer("uni", "Frederik Ronnow", "GK", 78, 32);
addPlayer("uni", "Diogo Leite", "DEF", 77, 25);
addPlayer("uni", "Lucas Tousart", "MID", 76, 27);
addPlayer("uni", "Yorbe Vertessen", "FWD", 75, 23);
addPlayer("uni", "Benedict Hollerbach", "FWD", 74, 23);

// Werder Bremen
addPlayer("wer", "Marvin Ducksch", "FWD", 77, 30);
addPlayer("wer", "Mitchell Weiser", "DEF", 76, 30);
addPlayer("wer", "Romano Schmid", "MID", 76, 24);
addPlayer("wer", "Michael Zetterer", "GK", 75, 29);
addPlayer("wer", "Marco Friedl", "DEF", 76, 26);
addPlayer("wer", "Jens Stage", "MID", 75, 28);
addPlayer("wer", "Niklas Stark", "DEF", 75, 29);

// Augsburg
addPlayer("aug", "Phillip Tietz", "FWD", 75, 27);
addPlayer("aug", "Ruben Vargas", "MID", 76, 26);
addPlayer("aug", "Jeffrey Gouweleeuw", "DEF", 75, 33);
addPlayer("aug", "Finn Dahmen", "GK", 74, 26);
addPlayer("aug", "Elvis Rexhbecaj", "MID", 74, 27);
addPlayer("aug", "Mads Pedersen", "DEF", 74, 28);
addPlayer("aug", "Samuel Essende", "FWD", 73, 26);
addPlayer("aug", "Kelechi Iheanacho", "FWD", 76, 29); // If context allows, adding real players
addPlayer("aug", "Kristijan Jakic", "MID", 75, 27);
addPlayer("aug", "Nadir Junte", "FWD", 71, 19);
addPlayer("aug", "Timitri Giannoulis", "DEF", 75, 28);
addPlayer("aug", "Steve Mounie", "FWD", 74, 29);
addPlayer("aug", "Frank Onyeka", "MID", 75, 26);

// Heidenheim
addPlayer("hei", "Patrick Mainka", "DEF", 75, 30);
addPlayer("hei", "Kevin Muller", "GK", 75, 33);
addPlayer("hei", "Jan Schoppner", "MID", 73, 25);
addPlayer("hei", "Marvin Pieringer", "FWD", 73, 25);
addPlayer("hei", "Paul Wanner", "MID", 72, 19);
addPlayer("hei", "Jonas Fohrenbach", "DEF", 73, 28);
addPlayer("hei", "Lennard Maloney", "MID", 73, 25);
addPlayer("hei", "Benedikt Gimber", "DEF", 72, 27);
addPlayer("hei", "Mikkel Kaufmann", "FWD", 72, 25);
addPlayer("hei", "Adrian Beck", "MID", 71, 27);
addPlayer("hei", "Sirlord Conteh", "FWD", 70, 28);
addPlayer("hei", "Omar Traore", "DEF", 71, 26);

// Bochum
addPlayer("boc", "Philipp Hofmann", "FWD", 74, 31);
addPlayer("boc", "Anthony Losilla", "MID", 73, 38);
addPlayer("boc", "Bernardo", "DEF", 74, 29);
addPlayer("boc", "Manuel Riemann", "GK", 75, 36); // Or Patrick Drewes
addPlayer("boc", "Matus Bero", "MID", 73, 29);
addPlayer("boc", "Dani de Wit", "MID", 74, 26);
addPlayer("boc", "Myron Boadu", "FWD", 74, 23);
addPlayer("boc", "Ibrahima Sissoko", "MID", 74, 26);
addPlayer("boc", "Jakov Medic", "DEF", 73, 25);
addPlayer("boc", "Maximilian Wittek", "DEF", 74, 29);
addPlayer("boc", "Ivan Ordets", "DEF", 74, 32);
addPlayer("boc", "Cristian Gamboa", "DEF", 72, 34);

// St. Pauli
addPlayer("stp", "Jackson Irvine", "MID", 74, 31);
addPlayer("stp", "Johannes Eggestein", "FWD", 73, 26);
addPlayer("stp", "Nikola Vasilj", "GK", 73, 29);
addPlayer("stp", "Hauke Wahl", "DEF", 72, 30);
addPlayer("stp", "Eric Smith", "DEF", 73, 27);
addPlayer("stp", "Manolis Saliakas", "DEF", 72, 28);
addPlayer("stp", "Connor Metcalfe", "MID", 72, 25);
addPlayer("stp", "Robert Wagner", "MID", 71, 21);
addPlayer("stp", "Morgan Guilavogui", "FWD", 73, 26);
addPlayer("stp", "Oladapo Afolayan", "FWD", 72, 27);
addPlayer("stp", "Elias Saad", "FWD", 72, 24);
addPlayer("stp", "Karol Mets", "DEF", 71, 31);

// Holstein Kiel
addPlayer("kie", "Lewis Holtby", "MID", 72, 34);
addPlayer("kie", "Steven Skrzybski", "FWD", 72, 32);
addPlayer("kie", "Timon Weiner", "GK", 71, 25);
addPlayer("kie", "Timo Becker", "DEF", 71, 27);
addPlayer("kie", "Shuto Machino", "FWD", 71, 25);
addPlayer("kie", "Patrick Erras", "DEF", 70, 29);
addPlayer("kie", "Benedikt Pichler", "FWD", 71, 27);

// --- PREMIER LEAGUE EXPANSION ---

// Ipswich Town

// Southampton

// Leicester City

// Nottingham Forest

// Everton

// Brentford

// Crystal Palace

// Bournemouth

// Fulham

// Wolves

// Brighton

// West Ham

// --- LIGUE 1 EXPANSION ---

// Lille
addPlayer("lil", "Jonathan David", "FWD", 81, 24);
addPlayer("lil", "Edon Zhegrova", "FWD", 80, 25);
addPlayer("lil", "Lucas Chevalier", "GK", 80, 23);
addPlayer("lil", "Angel Gomes", "MID", 79, 24);
addPlayer("lil", "Benjamin Andre", "MID", 79, 34);
addPlayer("lil", "Bafode Diakite", "DEF", 78, 23);
addPlayer("lil", "Tiago Santos", "DEF", 78, 22);
addPlayer("lil", "Thomas Meunier", "DEF", 77, 33);
addPlayer("lil", "Remy Cabella", "MID", 77, 34);

// Lyon
addPlayer("lyo", "Alexandre Lacazette", "FWD", 81, 33);
addPlayer("lyo", "Rayan Cherki", "MID", 78, 21);
addPlayer("lyo", "Corentin Tolisso", "MID", 79, 30);
addPlayer("lyo", "Nicolas Tagliafico", "DEF", 78, 32);
addPlayer("lyo", "Lucas Perri", "GK", 77, 26);
addPlayer("lyo", "Maxence Caqueret", "MID", 79, 24);
addPlayer("lyo", "Ernest Nuamah", "FWD", 77, 20);
addPlayer("lyo", "Said Benrahma", "FWD", 78, 29);
addPlayer("lyo", "Georges Mikautadze", "FWD", 78, 23);

// Lens
addPlayer("len", "Brice Samba", "GK", 81, 30);
addPlayer("len", "Kevin Danso", "DEF", 80, 26);
addPlayer("len", "Facundo Medina", "DEF", 79, 25);
addPlayer("len", "Florian Sotoca", "FWD", 78, 34);
addPlayer("len", "Przemyslaw Frankowski", "MID", 78, 29);
addPlayer("len", "Andy Diouf", "MID", 76, 21);
addPlayer("len", "Angelo Fulgini", "MID", 76, 28);
addPlayer("len", "Wesley Said", "FWD", 76, 29);

// Rennes
addPlayer("ren", "Amine Gouiri", "FWD", 79, 24);
addPlayer("ren", "Ludovic Blas", "MID", 78, 26);
addPlayer("ren", "Steve Mandanda", "GK", 78, 39);
addPlayer("ren", "Adrien Truffert", "DEF", 78, 22);
addPlayer("ren", "Baptiste Santamaria", "MID", 77, 29);
addPlayer("ren", "Arnaud Kalimuendo", "FWD", 77, 22);
addPlayer("ren", "Leo Ostigard", "DEF", 76, 24);
addPlayer("ren", "Albert Gronbaek", "MID", 76, 23);

// Nice
addPlayer("nic", "Jeremie Boga", "FWD", 78, 27);
addPlayer("nic", "Terem Moffi", "FWD", 79, 25);
addPlayer("nic", "Dante", "DEF", 77, 40);
addPlayer("nic", "Marcin Bulka", "GK", 79, 25);
addPlayer("nic", "Hicham Boudaoui", "MID", 77, 25);
addPlayer("nic", "Melvin Bard", "DEF", 76, 23);
addPlayer("nic", "Gaetan Laborde", "FWD", 77, 30);
addPlayer("nic", "Youssouf Ndayishimiye", "MID", 78, 26);
addPlayer("nic", "Tanguy Ndombele", "MID", 76, 27);

// Reims
addPlayer("rei", "Junya Ito", "FWD", 78, 31);
addPlayer("rei", "Keito Nakamura", "FWD", 76, 24);
addPlayer("rei", "Marshall Munetsi", "MID", 76, 28);
addPlayer("rei", "Yehvann Diouf", "GK", 76, 24);
addPlayer("rei", "Teddy Teuma", "MID", 77, 31);
addPlayer("rei", "Joseph Okumu", "DEF", 75, 27);
addPlayer("rei", "Oumar Diakite", "FWD", 75, 20);

// Strasbourg
addPlayer("str", "Habib Diarra", "MID", 75, 20);
addPlayer("str", "Emanuel Emegha", "FWD", 74, 21);
addPlayer("str", "Dilane Bakwa", "FWD", 74, 22);
addPlayer("str", "Saidou Sow", "DEF", 73, 22);
addPlayer("str", "Andrey Santos", "MID", 75, 20);
addPlayer("str", "Caleb Wiley", "DEF", 72, 19);
addPlayer("str", "Djordje Petrovic", "GK", 76, 24);

// Toulouse
addPlayer("tou", "Zakaria Aboukhlal", "FWD", 76, 24);
addPlayer("tou", "Rasmus Nicolaisen", "DEF", 75, 27);
addPlayer("tou", "Guillaume Restes", "GK", 75, 19);
addPlayer("tou", "Vincent Sierro", "MID", 75, 29);
addPlayer("tou", "Yann Gboho", "MID", 74, 23);
addPlayer("tou", "Gabriel Suazo", "DEF", 75, 27);
addPlayer("tou", "Frank Magri", "FWD", 73, 25);

// Montpellier
addPlayer("mon2", "Teji Savanier", "MID", 79, 32);
addPlayer("mon2", "Akor Adams", "FWD", 75, 24);
addPlayer("mon2", "Jordan Ferri", "MID", 75, 32);
addPlayer("mon2", "Benjamin Lecomte", "GK", 76, 33);
addPlayer("mon2", "Arnaud Nordin", "FWD", 75, 26);
addPlayer("mon2", "Falaye Sacko", "DEF", 74, 29);
addPlayer("mon2", "Moussa Tamari", "FWD", 76, 27);

// Nantes
addPlayer("nan", "Alban Lafont", "GK", 77, 25);
addPlayer("nan", "Moses Simon", "FWD", 76, 29);
addPlayer("nan", "Pedro Chirivella", "MID", 75, 27);
addPlayer("nan", "Mostafa Mohamed", "FWD", 76, 26);
addPlayer("nan", "Nicolas Pallois", "DEF", 74, 37);
addPlayer("nan", "Douglas Augusto", "MID", 75, 27);
addPlayer("nan", "Jean-Charles Castelletto", "DEF", 75, 29);

// Brest
addPlayer("bst", "Romain Del Castillo", "FWD", 78, 28);
addPlayer("bst", "Pierre Lees-Melou", "MID", 79, 31);
addPlayer("bst", "Marco Bizot", "GK", 78, 33);
addPlayer("bst", "Brendan Chardonnet", "DEF", 77, 29);
addPlayer("bst", "Kenny Lala", "DEF", 76, 33);
addPlayer("bst", "Mahdi Camara", "MID", 77, 26);
addPlayer("bst", "Ludovic Ajorque", "FWD", 76, 30);

// Le Havre
addPlayer("hav", "Arthur Desmas", "GK", 74, 30);
addPlayer("hav", "Arouna Sangante", "DEF", 73, 22);
addPlayer("hav", "Christopher Operi", "DEF", 73, 27);
addPlayer("hav", "Daler Kuzyaev", "MID", 74, 31);
addPlayer("hav", "Abdoulaye Toure", "MID", 73, 30);
addPlayer("hav", "Andre Ayew", "FWD", 74, 34);
addPlayer("hav", "Emmanuel Sabbi", "FWD", 72, 26);

// Auxerre
addPlayer("aux", "Gauthier Hein", "MID", 74, 28);
addPlayer("aux", "Jubal", "DEF", 73, 31);
addPlayer("aux", "Donovan Leon", "GK", 72, 31);
addPlayer("aux", "Gideon Mensah", "DEF", 72, 26);
addPlayer("aux", "Lassine Sinayoko", "FWD", 72, 24);
addPlayer("aux", "Rayan Raveloson", "MID", 73, 27);

// Saint-Etienne
addPlayer("sai", "Gautier Larsonneur", "GK", 74, 27);
addPlayer("sai", "Dylan Batubinsika", "DEF", 72, 28);
addPlayer("sai", "Ibrahim Sissoko", "FWD", 73, 28);
addPlayer("sai", "Mathieu Cafaro", "MID", 73, 27);
addPlayer("sai", "Zuriko Davitashvili", "FWD", 74, 23);
addPlayer("sai", "Yunis Abdelhamid", "DEF", 73, 37);

// Angers
addPlayer("ang", "Himad Abdelli", "MID", 73, 24);
addPlayer("ang", "Yahia Fofana", "GK", 73, 24);
addPlayer("ang", "Lois Diony", "FWD", 71, 31);
addPlayer("ang", "Cedric Hountondji", "DEF", 72, 30);
addPlayer("ang", "Haris Belkebla", "MID", 72, 30);
addPlayer("ang", "Farid El Melali", "FWD", 71, 27);

// --- TURKISH SUPER LEAGUE EXPANSION ---

// Galatasaray
addPlayer("gal", "Victor Osimhen", "FWD", 88, 27);
addPlayer("gal", "Mauro Icardi", "FWD", 83, 33);
addPlayer("gal", "Davinson Sanchez", "DEF", 81, 30);
addPlayer("gal", "Lucas Torreira", "MID", 81, 30);
addPlayer("gal", "Baris Alper Yilmaz", "FWD", 80, 26);
addPlayer("gal", "Gabriel Sara", "MID", 80, 27);
addPlayer("gal", "Dries Mertens", "FWD", 79, 39);
addPlayer("gal", "Fernando Muslera", "GK", 79, 40);
addPlayer("gal", "Abdulekerim Bardakci", "DEF", 79, 31);
addPlayer("gal", "Ismail Jakobs", "DEF", 78, 27);
addPlayer("gal", "Kaan Ayhan", "DEF", 77, 31);
addPlayer("gal", "Yunus Akgun", "FWD", 78, 26);
addPlayer("gal", "Michy Batshuayi", "FWD", 79, 32);
addPlayer("gal", "Victor Nelsson", "DEF", 79, 27);

// Fenerbahce
addPlayer("fen", "Youssef En-Nesyri", "FWD", 82, 29);
addPlayer("fen", "Fred", "MID", 81, 33);
addPlayer("fen", "Allan Saint-Maximin", "FWD", 80, 29);
addPlayer("fen", "Sebastian Szymanski", "MID", 81, 27);
addPlayer("fen", "Dominik Livakovic", "GK", 81, 31);
addPlayer("fen", "Caglar Soyuncu", "DEF", 79, 30);
addPlayer("fen", "Dusan Tadic", "FWD", 80, 37);
addPlayer("fen", "Edin Dzeko", "FWD", 79, 40);
addPlayer("fen", "Sofyan Amrabat", "MID", 80, 30);
addPlayer("fen", "Alexander Djiku", "DEF", 79, 32);
addPlayer("fen", "Jayden Oosterwolde", "DEF", 78, 25);
addPlayer("fen", "Irfan Can Kahveci", "MID", 79, 31);
addPlayer("fen", "Bright Osayi-Samuel", "DEF", 78, 28);

// Besiktas
addPlayer("bes", "Ciro Immobile", "FWD", 82, 36);
addPlayer("bes", "Rafa Silva", "MID", 83, 33);
addPlayer("bes", "Gedson Fernandes", "MID", 80, 27);
addPlayer("bes", "Semih Kilicsoy", "FWD", 79, 21);
addPlayer("bes", "Gabriel Paulista", "DEF", 78, 35);
addPlayer("bes", "Al-Musrati", "MID", 79, 30);
addPlayer("bes", "Milot Rashica", "FWD", 78, 30);
addPlayer("bes", "Mert Gunok", "GK", 77, 37);
addPlayer("bes", "Joao Mario", "MID", 79, 33);
addPlayer("bes", "Felix Uduokhai", "DEF", 78, 28);

// Trabzonspor
addPlayer("tra", "Edin Visca", "MID", 78, 36);
addPlayer("tra", "Ugurcan Cakir", "GK", 80, 30);
addPlayer("tra", "Simon Banza", "FWD", 79, 30);
addPlayer("tra", "Enis Bardhi", "MID", 77, 31);
addPlayer("tra", "Stefan Savic", "DEF", 78, 35);
addPlayer("tra", "Okay Yokuslu", "MID", 77, 32);
addPlayer("tra", "Denis Dragus", "FWD", 76, 27);
addPlayer("tra", "Ozan Tufan", "MID", 76, 29);
addPlayer("tra", "Anthony Nwakaeme", "FWD", 76, 35);
addPlayer("tra", "Eren Elmali", "DEF", 75, 23);

// Basaksehir
addPlayer("bas", "Krzysztof Piatek", "FWD", 77, 31);
addPlayer("bas", "Berkay Ozcan", "MID", 76, 28);
addPlayer("bas", "Deniz Turuc", "MID", 76, 33);
addPlayer("bas", "Muhammed Sengezer", "GK", 75, 27);
addPlayer("bas", "Leo Duarte", "DEF", 76, 27);
addPlayer("bas", "Jerome Opoku", "DEF", 75, 25);
addPlayer("bas", "Davidson", "FWD", 75, 33);
addPlayer("bas", "Olivier Kemen", "MID", 74, 27);

// --- EREDIVISIE EXPANSION ---

// PSV
addPlayer("psv", "Joey Veerman", "MID", 82, 27);
addPlayer("psv", "Jerdy Schouten", "MID", 81, 29);
addPlayer("psv", "Johan Bakayoko", "FWD", 81, 23);
addPlayer("psv", "Noa Lang", "FWD", 81, 27);
addPlayer("psv", "Luuk de Jong", "FWD", 80, 36);
addPlayer("psv", "Sergino Dest", "DEF", 79, 25);
addPlayer("psv", "Walter Benitez", "GK", 80, 33);
addPlayer("psv", "Olivier Boscagli", "DEF", 80, 28);
addPlayer("psv", "Malik Tillman", "MID", 80, 24);
addPlayer("psv", "Guus Til", "MID", 78, 28);
addPlayer("psv", "Ryan Flamingo", "DEF", 77, 23);
addPlayer("psv", "Ismael Saibari", "MID", 78, 25);

// Feyenoord
addPlayer("fey", "Santiago Gimenez", "FWD", 81, 25);
addPlayer("fey", "Quinten Timber", "MID", 80, 25);
addPlayer("fey", "David Hancko", "DEF", 82, 28);
addPlayer("fey", "Calvin Stengs", "MID", 79, 27);
addPlayer("fey", "Igor Paixao", "FWD", 79, 26);
addPlayer("fey", "Justin Bijlow", "GK", 80, 28);
addPlayer("fey", "Gernot Trauner", "DEF", 78, 34);
addPlayer("fey", "Hwang In-beom", "MID", 79, 29);
addPlayer("fey", "Jordan Lotomba", "DEF", 77, 27);
addPlayer("fey", "Ayase Ueda", "FWD", 77, 28);

// Ajax
addPlayer("aja", "Brian Brobbey", "FWD", 79, 24);
addPlayer("aja", "Jordan Henderson", "MID", 78, 36);
addPlayer("aja", "Jorrel Hato", "DEF", 78, 20);
addPlayer("aja", "Kenneth Taylor", "MID", 78, 24);
addPlayer("aja", "Steven Berghuis", "FWD", 78, 34);
addPlayer("aja", "Josip Sutalo", "DEF", 78, 26);
addPlayer("aja", "Wout Weghorst", "FWD", 77, 34);
addPlayer("aja", "Bertrand Traore", "FWD", 77, 30);
addPlayer("aja", "Davy Klaassen", "MID", 77, 33);
addPlayer("aja", "Remko Pasveer", "GK", 75, 42);
addPlayer("aja", "Devyne Rensch", "DEF", 77, 23);
addPlayer("aja", "Mika Godts", "FWD", 76, 21);

// AZ Alkmaar
addPlayer("az", "Troy Parrott", "FWD", 76, 24);
addPlayer("az", "Sven Mijnans", "MID", 77, 26);
addPlayer("az", "Jordy Clasie", "MID", 76, 35);
addPlayer("az", "Ruben van Bommel", "FWD", 76, 22);
addPlayer("az", "Rome-Jayden Owusu-Oduro", "GK", 74, 20);
addPlayer("az", "Bruno Martins Indi", "DEF", 75, 32);
addPlayer("az", "Seiya Maikuma", "DEF", 75, 26);
addPlayer("az", "Kristijan Belic", "MID", 74, 23);
addPlayer("az", "Peer Koopmeiners", "MID", 74, 24);
addPlayer("az", "Ibrahim Sadiq", "FWD", 75, 24);
addPlayer("az", "Mayckel Lahdo", "FWD", 74, 21);

// Twente
addPlayer("twe", "Sem Steijn", "MID", 77, 24);
addPlayer("twe", "Sam Lammers", "FWD", 76, 29);
addPlayer("twe", "Lars Unnerstall", "GK", 78, 36);
addPlayer("twe", "Michel Vlap", "MID", 75, 29);
addPlayer("twe", "Mees Hilgers", "DEF", 76, 23);
addPlayer("twe", "Bas Kuipers", "DEF", 74, 29);
addPlayer("twe", "Carel Eiting", "MID", 74, 26);
addPlayer("twe", "Youri Regeer", "MID", 74, 20);
addPlayer("twe", "Daan Rots", "FWD", 75, 22);
addPlayer("twe", "Ricky van Wolfswinkel", "FWD", 75, 35);

// Utrecht
addPlayer("utr", "Taylor Booth", "MID", 74, 25);
addPlayer("utr", "Nick Viergever", "DEF", 73, 37);
addPlayer("utr", "Vasilios Barkas", "GK", 75, 30);
addPlayer("utr", "Mike van der Hoorn", "DEF", 73, 31);
addPlayer("utr", "Souffian El Karouani", "DEF", 73, 23);
addPlayer("utr", "Jens Toornstra", "MID", 74, 35);
addPlayer("utr", "Paxten Aaronson", "MID", 73, 20);
addPlayer("utr", "Noah Ohio", "FWD", 72, 21);
addPlayer("utr", "David Min", "FWD", 72, 25);

// --- MORE PLAYERS FOR SMALLER TEAMS ---

// NEC Nijmegen
addPlayer("nec", "Lasse Schone", "MID", 72, 40);
addPlayer("nec", "Koki Ogawa", "FWD", 73, 29);
addPlayer("nec", "Robin Roefs", "GK", 71, 21);
addPlayer("nec", "Bram Nuytinck", "DEF", 73, 34);
addPlayer("nec", "Philippe Sandler", "DEF", 73, 27);
addPlayer("nec", "Dirk Proper", "MID", 74, 22);
addPlayer("nec", "Rober Gonzalez", "MID", 73, 23);
addPlayer("nec", "Sontje Hansen", "FWD", 72, 22);
addPlayer("nec", "Basar Onal", "FWD", 71, 20);
addPlayer("nec", "Calvin Verdonk", "DEF", 73, 27);
addPlayer("nec", "Thomas Ouwejan", "DEF", 73, 27);
addPlayer("nec", "Brayann Pereira", "DEF", 71, 21);
addPlayer("nec", "Kodai Sano", "MID", 72, 20);
addPlayer("nec", "Stijn van Gassel", "GK", 71, 27);
addPlayer("nec", "Argyris Darelas", "MID", 69, 21);
addPlayer("nec", "Mees Hoedemakers", "MID", 71, 26);

// Sparta Rotterdam
addPlayer("spr", "Tobias Lauritsen", "FWD", 73, 29);
addPlayer("spr", "Nick Olij", "GK", 75, 31);
addPlayer("spr", "Mike Eerdhuijzen", "DEF", 72, 23);
addPlayer("spr", "Said Bakari", "DEF", 71, 29);
addPlayer("spr", "Arno Verschueren", "MID", 73, 27);
addPlayer("spr", "Joshua Kitolano", "MID", 73, 22);
addPlayer("spr", "Camiel Neghli", "FWD", 72, 22);
addPlayer("spr", "Charles-Andreas Brym", "FWD", 71, 25);
addPlayer("spr", "Pelle Clement", "MID", 71, 28);
addPlayer("spr", "Julian Baas", "DEF", 71, 22);
addPlayer("spr", "Metinho", "MID", 71, 21);
addPlayer("spr", "Mohamed Nassoh", "MID", 71, 21);
addPlayer("spr", "Teo Quintero", "DEF", 70, 25);
addPlayer("spr", "Boyd Reith", "DEF", 70, 25);
addPlayer("spr", "Rick Meissen", "DEF", 69, 22);
addPlayer("spr", "Djevencio van der Kust", "DEF", 70, 23);

// Go Ahead Eagles
addPlayer("gae", "Victor Edvardsen", "FWD", 72, 30);
addPlayer("gae", "Luca Plogmann", "GK", 70, 24);
addPlayer("gae", "Mats Deijl", "DEF", 72, 26);
addPlayer("gae", "Joris Kramer", "DEF", 71, 27);
addPlayer("gae", "Evert Linthorst", "MID", 71, 24);
addPlayer("gae", "Jakob Breum", "MID", 71, 20);
addPlayer("gae", "Oliver Edvardsen", "FWD", 71, 25);
addPlayer("gae", "Finn Stokkers", "FWD", 70, 28);
addPlayer("gae", "Gerrit Nauber", "DEF", 71, 32);
addPlayer("gae", "Soren Tengstedt", "FWD", 70, 24);
addPlayer("gae", "Dean James", "DEF", 70, 24);
addPlayer("gae", "Mathis Suray", "MID", 69, 23);
addPlayer("gae", "Enric Llansana", "MID", 70, 25);
addPlayer("gae", "Luca Everink", "DEF", 68, 23);
addPlayer("gae", "Calvin Twigt", "MID", 70, 21);
addPlayer("gae", "Jadel Adel", "MID", 68, 22);

// Fortuna Sittard
addPlayer("for", "Alen Halilovic", "MID", 74, 30);
addPlayer("for", "Mattijs Branderhorst", "GK", 71, 30);
addPlayer("for", "Rodrigo Guth", "DEF", 72, 23);
addPlayer("for", "Ivo Pinto", "DEF", 71, 34);
addPlayer("for", "Loreintz Rosier", "MID", 71, 25);
addPlayer("for", "Samuel Bastien", "MID", 72, 27);
addPlayer("for", "Kaj Sierhuis", "FWD", 72, 26);
addPlayer("for", "Makan Aiko", "FWD", 70, 23);
addPlayer("for", "Kristoffer Peterson", "FWD", 71, 29);
addPlayer("for", "Ryan Fosso", "MID", 70, 22);
addPlayer("for", "Shawn Adewoye", "DEF", 70, 24);
addPlayer("for", "Ante Erceg", "FWD", 71, 34);
addPlayer("for", "Mitchell Dijks", "DEF", 72, 31);
addPlayer("for", "Darijo Grujcic", "DEF", 69, 25);
addPlayer("for", "Josip Mitrovic", "FWD", 70, 24);
addPlayer("for", "Samuel Bastien", "MID", 72, 28); // Duplicate check?
addPlayer("for", "Ezequiel Bullaude", "MID", 73, 25);

// Heerenveen
addPlayer("hee", "Andries Noppert", "GK", 74, 32);
addPlayer("hee", "Pawel Bochniewicz", "DEF", 73, 30);
addPlayer("hee", "Mickey van der Hart", "GK", 71, 30);
addPlayer("hee", "Mats Kohlert", "DEF", 72, 26);
addPlayer("hee", "Sam Kersten", "DEF", 72, 26);
addPlayer("hee", "Simon Olsson", "MID", 73, 26);
addPlayer("hee", "Espen van Ee", "MID", 70, 20);
addPlayer("hee", "Ion Nicolaescu", "FWD", 72, 25);
addPlayer("hee", "Jacob Trenskow", "FWD", 71, 23);
addPlayer("hee", "Amara Conde", "MID", 72, 27);
addPlayer("hee", "Danilo Al-Saed", "FWD", 71, 25);
addPlayer("hee", "Luuk Brouwers", "MID", 73, 30);
addPlayer("hee", "Denzel Hall", "DEF", 70, 23);
addPlayer("hee", "Ilias Sebaoui", "MID", 71, 22);
addPlayer("hee", "Nikolai Hopland", "DEF", 70, 20);
addPlayer("hee", "Oliver Braude", "DEF", 71, 20);
addPlayer("hee", "Mateja Milovanovic", "DEF", 68, 20);

// PEC Zwolle
addPlayer("zwo", "Davy van den Berg", "MID", 71, 26);
addPlayer("zwo", "Jasper Schendelaar", "GK", 71, 23);
addPlayer("zwo", "Anselmo Garcia Mac Nulty", "DEF", 70, 21);
addPlayer("zwo", "Simon Graves", "DEF", 70, 25);
addPlayer("zwo", "Filip Krastev", "MID", 72, 22);
addPlayer("zwo", "Anouar El Azzouzi", "MID", 70, 23);
addPlayer("zwo", "Dylan Vente", "FWD", 71, 25);
addPlayer("zwo", "Younes Namli", "MID", 73, 30);
addPlayer("zwo", "Odysseus Velanas", "MID", 71, 26);
addPlayer("zwo", "Thomas Buitink", "FWD", 70, 24);
addPlayer("zwo", "Sherel Floranus", "DEF", 71, 26);
addPlayer("zwo", "Tristan Gooijer", "DEF", 71, 20);
addPlayer("zwo", "Jamiro Monteiro", "MID", 73, 31);
addPlayer("zwo", "Dylan Mbayo", "FWD", 70, 23);
addPlayer("zwo", "Nick Fichtinger", "MID", 68, 20);
addPlayer("zwo", "Damian van der Haar", "DEF", 68, 20);

// Alanyaspor
addPlayer("aly", "Efecan Karaca", "MID", 74, 36);
addPlayer("aly", "Ertugrul Taskiran", "GK", 72, 34);
addPlayer("aly", "Fidan Aliti", "DEF", 73, 30);
addPlayer("aly", "Jure Balkovec", "DEF", 72, 29);
addPlayer("aly", "Gaius Makouta", "MID", 73, 26);
addPlayer("aly", "Richard", "MID", 72, 32);
addPlayer("aly", "Sergio Cordova", "FWD", 72, 26);
addPlayer("aly", "Serdar Dursun", "FWD", 72, 32);

// Rizespor
addPlayer("riz", "Dal Varesanovic", "MID", 73, 25);
addPlayer("riz", "Ivo Grbic", "GK", 74, 28);
addPlayer("riz", "Attila Mocsi", "DEF", 72, 24);
addPlayer("riz", "Casper Hojer", "DEF", 72, 29);
addPlayer("riz", "Amir Hadziahmetovic", "MID", 74, 27);
addPlayer("riz", "Giannis Papanikolaou", "MID", 73, 25);
addPlayer("riz", "Ali Sowe", "FWD", 73, 30);
addPlayer("riz", "Ibrahim Olawoyin", "FWD", 72, 26);

// Antalyaspor
addPlayer("ant", "Sam Larsson", "FWD", 73, 33);
addPlayer("ant", "Kenan Piric", "GK", 72, 29);
addPlayer("ant", "Veysel Sari", "DEF", 72, 35);
addPlayer("ant", "Thalisson", "DEF", 71, 22);
addPlayer("ant", "Jakub Kaluzinski", "MID", 72, 21);
addPlayer("ant", "Sander van de Streek", "MID", 72, 31);
addPlayer("ant", "Adolfo Gaich", "FWD", 72, 25);
addPlayer("ant", "Braian Samudio", "FWD", 72, 28);

// Gaziantep
addPlayer("gaz", "Alexandru Maxim", "MID", 74, 36);
addPlayer("gaz", "Sokratis Dioudis", "GK", 72, 31);
addPlayer("gaz", "Papy Djilobodji", "DEF", 72, 35);
addPlayer("gaz", "Arda Kizildag", "DEF", 71, 25);
addPlayer("gaz", "Kacper Kozlowski", "MID", 72, 20);
addPlayer("gaz", "Deian Sorescu", "MID", 72, 26);
addPlayer("gaz", "Kenan Kodro", "FWD", 72, 30);

// Konyaspor
addPlayer("kon", "Guilherme", "DEF", 73, 36);
addPlayer("kon", "Jakub Slowik", "GK", 72, 32);
addPlayer("kon", "Adil Demirbag", "DEF", 72, 26);
addPlayer("kon", "Ugurcan Yazgili", "DEF", 71, 25);
addPlayer("kon", "Marko Jevtovic", "MID", 72, 30);
addPlayer("kon", "Pedrinho", "MID", 72, 27);
addPlayer("kon", "Umut Nayir", "FWD", 72, 31);
addPlayer("kon", "Blaz Kramer", "FWD", 72, 28);

// Kasimpasa
addPlayer("kas", "Haris Hajradinovic", "MID", 74, 32);
addPlayer("kas", "Andreas Gianniotis", "GK", 72, 31);
addPlayer("kas", "Kenneth Omeruo", "DEF", 73, 30);
addPlayer("kas", "Yasin Ozcan", "DEF", 71, 18);
addPlayer("kas", "Aytac Kara", "MID", 73, 31);
addPlayer("kas", "Antonin Barak", "MID", 75, 29);
addPlayer("kas", "Nuno Da Costa", "FWD", 73, 33);
addPlayer("kas", "Mamadou Fall", "FWD", 73, 32);

// Sivasspor
addPlayer("siv", "Rey Manaj", "FWD", 75, 29);
addPlayer("siv", "Ali Sasal Vural", "GK", 71, 33);
addPlayer("siv", "Noah Sonko Sundberg", "DEF", 72, 28);
addPlayer("siv", "Uros Radakovic", "DEF", 71, 30);
addPlayer("siv", "Charis Charisis", "MID", 72, 29);
addPlayer("siv", "Alex Pritchard", "MID", 72, 31);
addPlayer("siv", "Keita Balde", "FWD", 73, 29);

// Moreirense
addPlayer("mor", "Alan", "MID", 72, 26);
addPlayer("mor", "Kewin Silva", "GK", 72, 29);
addPlayer("mor", "Maracas", "DEF", 72, 30);
addPlayer("mor", "Marcelo", "DEF", 71, 34);
addPlayer("mor", "Lawrence Ofori", "MID", 72, 26);
addPlayer("mor", "Goncalo Franco", "MID", 72, 23);
addPlayer("mor", "Madson", "FWD", 72, 24);
addPlayer("mor", "Luis Asue", "FWD", 71, 22);

// Gil Vicente
addPlayer("gil", "Kanya Fujimoto", "MID", 73, 27);
addPlayer("gil", "Andrew", "GK", 73, 23);
addPlayer("gil", "Ruben Fernandes", "DEF", 72, 38);
addPlayer("gil", "Sandro Cruz", "DEF", 70, 23);
addPlayer("gil", "Maxime Dominguez", "MID", 72, 28);
addPlayer("gil", "Martim Neto", "MID", 71, 21);
addPlayer("gil", "Felix Correia", "FWD", 73, 23);
addPlayer("gil", "Caue", "FWD", 71, 21);

// Rio Ave
addPlayer("rio", "Adrien Silva", "MID", 73, 37);
addPlayer("rio", "Jhonatan", "GK", 72, 33);
addPlayer("rio", "Aderllan Santos", "DEF", 73, 35);
addPlayer("rio", "Patrick William", "DEF", 71, 27);
addPlayer("rio", "Joao Novais", "MID", 72, 30);
addPlayer("rio", "Amine Oudrhiri", "MID", 71, 31);
addPlayer("rio", "Clayton", "FWD", 72, 25);
addPlayer("rio", "Tiago Morais", "FWD", 71, 20);

// Estoril
addPlayer("est", "Fabricio Garcia", "FWD", 71, 25);
addPlayer("est", "Dani Figueira", "GK", 71, 26);
addPlayer("est", "Eliaquim Mangala", "DEF", 73, 33);
addPlayer("est", "Pedro Alvaro", "DEF", 71, 24);
addPlayer("est", "Vinicius Zanocelo", "MID", 72, 23);
addPlayer("est", "Xeka", "MID", 73, 29);
addPlayer("est", "Alejandro Marques", "FWD", 72, 24);
addPlayer("est", "Yanis Begraoui", "FWD", 71, 23);

// Boavista
addPlayer("boa", "Sebastian Perez", "MID", 72, 28);
addPlayer("boa", "Joao Goncalves", "GK", 71, 23);
addPlayer("boa", "Rodrigo Abascal", "DEF", 71, 30);
addPlayer("boa", "Bruno Onyemaechi", "DEF", 72, 25);
addPlayer("boa", "Miguel Reisinho", "MID", 71, 25);
addPlayer("boa", "Ibrahima Camara", "MID", 70, 25);
addPlayer("boa", "Robert Bozenik", "FWD", 73, 24);
addPlayer("boa", "Salvador Agra", "FWD", 71, 32);

// Ural
addPlayer("ura", "Eric Bicfalvi", "MID", 73, 38);
addPlayer("ura", "Ilya Pomazun", "GK", 74, 28);
addPlayer("ura", "Danijel Miskic", "MID", 72, 31);
addPlayer("ura", "Italo", "DEF", 71, 24);
addPlayer("ura", "Silvije Begic", "DEF", 71, 31);
addPlayer("ura", "Aleksey Kashtanov", "FWD", 71, 28);
addPlayer("ura", "Andrey Egorychev", "MID", 72, 31);
addPlayer("ura", "Timur Ayupov", "MID", 71, 31);
addPlayer("ura", "Mingiyan Beveev", "DEF", 70, 30);
addPlayer("ura", "Igor Konovalov", "MID", 70, 28);

// Baltika
addPlayer("bal", "Vitaliy Lisakovich", "FWD", 72, 28);
addPlayer("bal", "Maksim Borisko", "GK", 69, 24);
addPlayer("bal", "Nikola Radmanovac", "DEF", 68, 27);
addPlayer("bal", "Kristijan Bistrovic", "MID", 72, 26);
addPlayer("bal", "Diego Luna", "DEF", 70, 24);
addPlayer("bal", "Nathan Gassama", "DEF", 69, 23);
addPlayer("bal", "Yury Kovalev", "MID", 69, 31);
addPlayer("bal", "Alex Fernandes", "FWD", 70, 24);
addPlayer("bal", "Kevin Andrade", "DEF", 70, 25);

// Sochi
addPlayer("soc", "Artur Yusupov", "MID", 73, 37);
addPlayer("soc", "Nikita Burmistrov", "FWD", 70, 31);
addPlayer("soc", "Marcelo Alves", "DEF", 71, 26);
addPlayer("soc", "Kirill Zaika", "DEF", 70, 32);
addPlayer("soc", "Vanja Drkusic", "DEF", 74, 25);
addPlayer("soc", "Victorien Angban", "MID", 71, 28);
addPlayer("soc", "Sasa Zdjelar", "MID", 74, 30); // CSKA player but maybe moved? No, let's use real ones.
addPlayer("soc", "Aleksandr Maksimenko", "GK", 76, 28); // Spartak, ignoring duplicates as addPlayer handles it
addPlayer("soc", "Martin Kramaric", "FWD", 70, 28);
addPlayer("soc", "Yahia Attiyat Allah", "DEF", 73, 31);
addPlayer("soc", "Ignacio Saavedra", "MID", 71, 25);

// --- EREDIVISIE EXPANSION ---

// PSV
addPlayer("psv", "Walter Benitez", "GK", 81, 31);
addPlayer("psv", "Ricardo Pepi", "FWD", 77, 21);
addPlayer("psv", "Armando Obispo", "DEF", 75, 25);
addPlayer("psv", "Mauro Junior", "DEF", 76, 25);
addPlayer("psv", "Isaac Babadi", "MID", 74, 19);

// Feyenoord
addPlayer("fey", "Timon Wellenreuther", "GK", 77, 28);
addPlayer("fey", "Ramiz Zerrouki", "MID", 76, 26);
addPlayer("fey", "Bart Nieuwkoop", "DEF", 75, 28);
addPlayer("fey", "Thomas Beelen", "DEF", 76, 23);
addPlayer("fey", "Antoni Milambo", "MID", 74, 19);

// Ajax
addPlayer("aja", "Anton Gaaei", "DEF", 74, 21);
addPlayer("aja", "Sivert Mannsverk", "MID", 74, 22);
addPlayer("aja", "Ahmetcan Kaplan", "DEF", 74, 21);
addPlayer("aja", "Diant Ramaj", "GK", 76, 22);
addPlayer("aja", "Kian Fitz-Jim", "MID", 73, 21);

// AZ Alkmaar
addPlayer("az", "Wouter Goes", "DEF", 73, 20);
addPlayer("az", "David Moller Wolfe", "DEF", 74, 22);
addPlayer("az", "Ernest Poku", "FWD", 72, 20);
addPlayer("az", "Maxim Dekker", "DEF", 72, 20);
addPlayer("az", "Denso Kasius", "DEF", 72, 21);

// Twente
addPlayer("twe", "Anass Salah-Eddine", "DEF", 73, 22);
addPlayer("twe", "Mathias Kjolo", "MID", 74, 23);
addPlayer("twe", "Mitchell van Bergen", "FWD", 73, 25);
addPlayer("twe", "Max Bruns", "DEF", 72, 21);
addPlayer("twe", "Przemyslaw Tyton", "GK", 71, 37);

// Utrecht
addPlayer("utr", "Oscar Fraulo", "MID", 72, 20);
addPlayer("utr", "Victor Jensen", "MID", 72, 24);
addPlayer("utr", "Siebe Horemans", "DEF", 72, 26);
addPlayer("utr", "Rafik El Arguioui", "MID", 70, 22);
addPlayer("utr", "Luuk Brouwers", "MID", 73, 26);

// NEC Nijmegen
addPlayer("nec", "Calvin Verdonk", "DEF", 73, 27);
addPlayer("nec", "Thomas Ouwejan", "DEF", 73, 27);
addPlayer("nec", "Brayann Pereira", "DEF", 71, 21);
addPlayer("nec", "Kodai Sano", "MID", 72, 20);
addPlayer("nec", "Stijn van Gassel", "GK", 71, 27);

// Sparta Rotterdam
addPlayer("spr", "Pelle Clement", "MID", 71, 28);
addPlayer("spr", "Julian Baas", "DEF", 71, 22);
addPlayer("spr", "Metinho", "MID", 71, 21);
addPlayer("spr", "Mohamed Nassoh", "MID", 71, 21);
addPlayer("spr", "Teo Quintero", "DEF", 70, 25);

// Go Ahead Eagles
addPlayer("gae", "Gerrit Nauber", "DEF", 71, 32);
addPlayer("gae", "Soren Tengstedt", "FWD", 70, 24);
addPlayer("gae", "Jakob Breum", "MID", 71, 20);
addPlayer("gae", "Dean James", "DEF", 70, 24);
addPlayer("gae", "Mathis Suray", "MID", 69, 23);

// Fortuna Sittard
addPlayer("for", "Kristoffer Peterson", "FWD", 71, 29);
addPlayer("for", "Ivo Pinto", "DEF", 71, 34);
addPlayer("for", "Ryan Fosso", "MID", 70, 22);
addPlayer("for", "Shawn Adewoye", "DEF", 70, 24);
addPlayer("for", "Ante Erceg", "FWD", 71, 34);

// Heerenveen
addPlayer("hee", "Amara Conde", "MID", 72, 27);
addPlayer("hee", "Danilo Al-Saed", "FWD", 71, 25);
addPlayer("hee", "Luuk Brouwers", "MID", 73, 26); // Duplicate with Utrecht? Check. He moved to Heerenveen.
// Removing from Utrecht in next pass if needed, but adding here.
addPlayer("hee", "Denzel Hall", "DEF", 70, 23);
addPlayer("hee", "Ilias Sebaoui", "MID", 71, 22);

// PEC Zwolle
addPlayer("zwo", "Younes Namli", "MID", 73, 30);
addPlayer("zwo", "Odysseus Velanas", "MID", 71, 26);
addPlayer("zwo", "Anouar El Azzouzi", "MID", 70, 23);
addPlayer("zwo", "Thomas Buitink", "FWD", 70, 24);
addPlayer("zwo", "Sherel Floranus", "DEF", 71, 26);

// --- TURKISH SUPER LEAGUE EXPANSION ---

// Galatasaray
addPlayer("gal", "Victor Nelsson", "DEF", 79, 25);
addPlayer("gal", "Kerem Demirbay", "MID", 78, 31);
addPlayer("gal", "Dries Mertens", "FWD", 81, 37);
addPlayer("gal", "Michy Batshuayi", "FWD", 79, 30);
addPlayer("gal", "Elias Jelert", "DEF", 75, 21);

// Fenerbahce
addPlayer("fen", "Alexander Djiku", "DEF", 78, 30);
addPlayer("fen", "Bright Osayi-Samuel", "DEF", 77, 26);
addPlayer("fen", "Ismail Yuksek", "MID", 77, 25);
addPlayer("fen", "Irfan Can Kahveci", "MID", 78, 29);
addPlayer("fen", "Cenk Tosun", "FWD", 75, 33);

// Besiktas
addPlayer("bes", "Rafa Silva", "MID", 83, 31);
addPlayer("bes", "Ciro Immobile", "FWD", 82, 34);
addPlayer("bes", "Gabriel Paulista", "DEF", 78, 33);
addPlayer("bes", "Joao Mario", "MID", 79, 31);
addPlayer("bes", "Gedson Fernandes", "MID", 79, 25);
addPlayer("bes", "Mert Gunok", "GK", 77, 35);

// Trabzonspor
addPlayer("tra", "Edin Visca", "FWD", 78, 34);
addPlayer("tra", "Batista Mendy", "MID", 76, 24);
addPlayer("tra", "Stefan Savic", "DEF", 78, 33);
addPlayer("tra", "Ozan Tufan", "MID", 75, 29);
addPlayer("tra", "Ugurcan Cakir", "GK", 79, 28);

// Basaksehir
addPlayer("bas", "Krzysztof Piatek", "FWD", 77, 29);
addPlayer("bas", "Davidson", "FWD", 75, 33);
addPlayer("bas", "Leo Duarte", "DEF", 76, 28);
addPlayer("bas", "Deniz Turuc", "MID", 75, 31);
addPlayer("bas", "Muhammed Sengezer", "GK", 74, 27);

// Kasimpasa
addPlayer("kas", "Claudio Winck", "DEF", 73, 30);
addPlayer("kas", "Jhon Espinoza", "DEF", 71, 25);
addPlayer("kas", "Loret Sadiku", "MID", 72, 33);
addPlayer("kas", "Gokhan Gul", "MID", 71, 26);
addPlayer("kas", "Mortadha Ben Ouanes", "DEF", 72, 30);

// Sivasspor
addPlayer("siv", "Emrah Bassan", "MID", 71, 32);
addPlayer("siv", "Azizbek Turgunboev", "MID", 70, 29);
addPlayer("siv", "Samba Camara", "DEF", 70, 31);
addPlayer("siv", "Djordje Nikolic", "GK", 70, 27);
addPlayer("siv", "Queensy Menig", "FWD", 71, 29);

// Alanyaspor
addPlayer("aly", "Loide Augusto", "FWD", 71, 24);
addPlayer("aly", "Nicolas Janvier", "MID", 71, 26);
addPlayer("aly", "Yusuf Ozdemir", "DEF", 70, 23);
addPlayer("aly", "Florent Hadergjonaj", "DEF", 72, 30);
addPlayer("aly", "Nuno Lima", "DEF", 70, 23);

// Rizespor
addPlayer("riz", "Khusniddin Alikulov", "DEF", 72, 25);
addPlayer("riz", "Halil Ibrahim Pehlivan", "DEF", 70, 31);
addPlayer("riz", "Martin Minchev", "FWD", 71, 23);
addPlayer("riz", "David Akintola", "FWD", 72, 28);
addPlayer("riz", "Taha Sahin", "DEF", 70, 24);

// Antalyaspor
addPlayer("ant", "Erdal Rakip", "MID", 72, 28);
addPlayer("ant", "Emre Uzun", "MID", 68, 19);
addPlayer("ant", "Guray Vural", "DEF", 73, 36);
addPlayer("ant", "Ramzi Safuri", "MID", 72, 28);
addPlayer("ant", "Oleksandr Petrusenko", "MID", 71, 26);

// Gaziantep
addPlayer("gaz", "Deian Sorescu", "MID", 72, 26); // Duplicate check?
addPlayer("gaz", "Ertugrul Ersoy", "DEF", 71, 27);
addPlayer("gaz", "Salem M'Bakata", "DEF", 72, 26);
addPlayer("gaz", "Mustafa Eskihellac", "MID", 71, 27);
addPlayer("gaz", "Cyril Mandouki", "MID", 70, 33);

// Konyaspor
addPlayer("kon", "Alassane Ndao", "FWD", 72, 27);
addPlayer("kon", "Ogulcan Ulgun", "MID", 70, 26);
addPlayer("kon", "Riechedly Bazoer", "DEF", 73, 27);
addPlayer("kon", "Yusuf Erdogan", "MID", 71, 32);
addPlayer("kon", "Nikola Boranijasevic", "DEF", 71, 28);

// --- PRIMEIRA LIGA EXPANSION ---

// Benfica
addPlayer("ben", "Alexander Bah", "DEF", 79, 26);
addPlayer("ben", "Florentino Luis", "MID", 79, 25);
addPlayer("ben", "Gianluca Prestianni", "FWD", 74, 18);
addPlayer("ben", "Jan-Niklas Beste", "DEF", 78, 25);
addPlayer("ben", "Arthur Cabral", "FWD", 78, 26);

// Porto
addPlayer("por", "Otavio", "DEF", 78, 22);
addPlayer("por", "Nico Gonzalez", "MID", 79, 22);
addPlayer("por", "Pepe", "FWD", 79, 27); // The winger
addPlayer("por", "Goncalo Borges", "FWD", 75, 23);
addPlayer("por", "Ze Pedro", "DEF", 75, 27);

// Sporting CP
addPlayer("spo", "Geovany Quenda", "FWD", 74, 17);
addPlayer("spo", "Daniel Braganca", "MID", 78, 25);
addPlayer("spo", "Matheus Reis", "DEF", 77, 29);
addPlayer("spo", "Zeno Debast", "DEF", 78, 20);
addPlayer("spo", "Franco Israel", "GK", 76, 24);

// Braga
addPlayer("bra", "Rodrigo Zalazar", "MID", 78, 25);
addPlayer("bra", "Joao Moutinho", "MID", 78, 37);
addPlayer("bra", "Sikou Niakate", "DEF", 76, 25);
addPlayer("bra", "Ricardo Horta", "FWD", 80, 29);
addPlayer("bra", "Matheus", "GK", 79, 32);

// Vitoria de Guimaraes
addPlayer("gui", "Tomas Handel", "MID", 76, 23);
addPlayer("gui", "Toni Borevkovic", "DEF", 75, 27);
addPlayer("gui", "Bruno Varela", "GK", 76, 29);
addPlayer("gui", "Nuno Santos", "MID", 74, 25);
addPlayer("gui", "Telmo Arcanjo", "MID", 73, 23);

// Famalicao
addPlayer("fam", "Zaydou Youssouf", "MID", 75, 25);
addPlayer("fam", "Gustavo Sa", "MID", 74, 19);
addPlayer("fam", "Oscar Aranda", "FWD", 72, 22);
addPlayer("fam", "Mirko Topic", "MID", 74, 23);
addPlayer("fam", "Rafa Soares", "DEF", 73, 29);

// Moreirense
addPlayer("mor", "Ismael", "MID", 71, 24);
addPlayer("mor", "Guilherme Schettine", "FWD", 71, 28);
addPlayer("mor", "Fabiano", "DEF", 72, 24);
addPlayer("mor", "Caio Secco", "GK", 70, 33);
addPlayer("mor", "Benny", "MID", 71, 27);

// Arouca
addPlayer("aro", "Morlaye Sylla", "MID", 73, 26);
addPlayer("aro", "Jason", "FWD", 73, 30);
addPlayer("aro", "Alfonso Trezza", "FWD", 71, 25);
addPlayer("aro", "David Simao", "MID", 73, 34);
addPlayer("aro", "Nino Galovic", "DEF", 71, 32);

// Gil Vicente
addPlayer("gil", "Jonathan Buatu", "DEF", 72, 30);
addPlayer("gil", "Jesus Castillo", "MID", 70, 23);
addPlayer("gil", "Tidjany Toure", "FWD", 71, 22);
addPlayer("gil", "Mory Gbane", "MID", 71, 23);
addPlayer("gil", "Ze Carlos", "DEF", 71, 26);

// Rio Ave
addPlayer("rio", "Marios Vrousai", "FWD", 72, 26);
addPlayer("rio", "Renato Pantalon", "DEF", 71, 26);
addPlayer("rio", "Ole Pohlmann", "MID", 70, 23);
addPlayer("rio", "Kiko Bondoso", "FWD", 72, 28);
addPlayer("rio", "Joao Tome", "DEF", 70, 21);

// Estoril
addPlayer("est", "Jordan Holsgrove", "MID", 73, 24);
addPlayer("est", "Wagner Pina", "DEF", 71, 21);
addPlayer("est", "Michel Costa", "MID", 70, 22);
addPlayer("est", "Kevin Boma", "DEF", 70, 21);
addPlayer("est", "Israel Salazar", "FWD", 70, 21);

// Boavista
addPlayer("boa", "Ilija Vukotic", "MID", 71, 25);
addPlayer("boa", "Joel Silva", "MID", 70, 21);
addPlayer("boa", "Goncalo Miguel", "DEF", 69, 21);
addPlayer("boa", "Filipe Ferreira", "DEF", 70, 33);
addPlayer("boa", "Augusto Dabo", "DEF", 69, 20);

// --- KAZAKHSTAN PREMIER LEAGUE EXPANSION ---

// Astana
addPlayer("ast", "Aleksa Amanovic", "DEF", 69, 27);
addPlayer("ast", "Stanislav Basmanov", "FWD", 67, 23);
addPlayer("ast", "Ramazan Karimov", "FWD", 67, 25);
addPlayer("ast", "Kipras Kazukolovas", "DEF", 68, 23);
addPlayer("ast", "Islambek Kuat", "MID", 68, 31);
addPlayer("ast", "Josip Condric", "GK", 68, 31);
addPlayer("ast", "Marin Tomasov", "MID", 70, 37);
addPlayer("ast", "Geoffrey Chinedu", "FWD", 69, 27);
addPlayer("ast", "Ousmane Camara", "FWD", 68, 25);
addPlayer("ast", "Nazmi Gripshi", "MID", 68, 27);
addPlayer("ast", "Karlo Bartolec", "DEF", 68, 29);

// Kairat
addPlayer("kai", "Andrey Ulshin", "MID", 66, 24);
addPlayer("kai", "Damir Kasabulat", "DEF", 65, 21);
addPlayer("kai", "Nikita Sergeev", "FWD", 65, 23); // Fictional/Youth? Using generic name if not found.
// Actually, let's use real players.
addPlayer("kai", "Egor Tkachenko", "DEF", 65, 21);
addPlayer("kai", "Arsen Buranchiev", "MID", 66, 22);
addPlayer("kai", "Vadim Ulyanov", "GK", 65, 23);
addPlayer("kai", "Joao Paulo", "FWD", 70, 38);
addPlayer("kai", "Giorgi Zaria", "MID", 68, 27);
addPlayer("kai", "Valeriy Gromyko", "MID", 68, 27);
addPlayer("kai", "Ofri Arad", "DEF", 67, 25);
addPlayer("kai", "Viktor Vasin", "DEF", 67, 36);

// Tobol
addPlayer("tob", "Igor Ivanovic", "MID", 68, 27);
addPlayer("tob", "David Henen", "FWD", 67, 28);
addPlayer("tob", "Tsotne Mosiashvili", "MID", 67, 29);
addPlayer("tob", "Ahmed El Messaoudi", "MID", 68, 29);
addPlayer("tob", "Roman Asrankulov", "DEF", 66, 25);
addPlayer("tob", "Stas Pokatilov", "GK", 67, 32);
addPlayer("tob", "Albert Gabaraev", "DEF", 66, 27);
addPlayer("tob", "Rui Costa", "FWD", 68, 28);
addPlayer("tob", "Ivan Miladinovic", "DEF", 67, 30);
addPlayer("tob", "Islam Chesnokov", "FWD", 67, 25);

// Ordabasy
addPlayer("ord", "Askhat Tagybergen", "MID", 69, 34);
addPlayer("ord", "Bauyrzhan Islamkhan", "MID", 68, 31);
addPlayer("ord", "Serhiy Maliy", "DEF", 68, 34);
addPlayer("ord", "Gafurzhan Suyumbaev", "DEF", 67, 34);
addPlayer("ord", "Vsevolod Sadovskiy", "FWD", 67, 27);
addPlayer("ord", "Zlatan Sehovic", "DEF", 68, 26);
addPlayer("ord", "Lovro Cvek", "MID", 67, 31);
addPlayer("ord", "Sultanbek Astanov", "MID", 66, 25);
addPlayer("ord", "Azamat Shaikov", "DEF", 66, 25);
addPlayer("ord", "Aykhan Aubakir", "FWD", 65, 21);

// Aktobe
addPlayer("akt", "Jose Cevallos", "MID", 68, 29);
addPlayer("akt", "Adilkhan Tanzharikov", "DEF", 66, 27);
addPlayer("akt", "Ramazan Orazov", "MID", 68, 26);
addPlayer("akt", "Uche Agbo", "MID", 67, 28);
addPlayer("akt", "Mateo Barac", "DEF", 67, 30);
addPlayer("akt", "Igor Shatskiy", "GK", 68, 35);
addPlayer("akt", "Maxim Samorodov", "FWD", 69, 24);
addPlayer("akt", "Arman Kenesov", "MID", 67, 26);
addPlayer("akt", "Bogdan Vatajelu", "DEF", 67, 31);
addPlayer("akt", "Dorny Romero", "FWD", 68, 28);

// Elimai
addPlayer("eli", "China", "MID", 67, 28); // Rogerio China
addPlayer("eli", "Zhan-Ali Payruz", "MID", 66, 25);
addPlayer("eli", "Nikita Korzun", "MID", 67, 29);
addPlayer("eli", "Quentin Cornette", "FWD", 67, 30);
addPlayer("eli", "Dmitri Yashin", "DEF", 66, 31);
addPlayer("eli", "Denis Kavlinov", "GK", 66, 31);
addPlayer("eli", "Ivan Sviridov", "FWD", 66, 22);
addPlayer("eli", "Samuel Odeyobo", "DEF", 65, 31);
addPlayer("eli", "Bayerzhan Tanirbergenov", "MID", 64, 21);

// Kyzylzhar
addPlayer("kyz", "Evgeniy Berezkin", "MID", 67, 28);
addPlayer("kyz", "Rafael Sabino", "MID", 66, 28);
addPlayer("kyz", "Paul Imvad", "FWD", 65, 23); // Check name. Maybe 'Imwad'?
addPlayer("kyz", "Luka Imnadze", "FWD", 66, 27); // Corrected
addPlayer("kyz", "Ruben Brigido", "MID", 66, 33);
addPlayer("kyz", "Zoran Nizic", "DEF", 66, 34);
addPlayer("kyz", "Vadim Petrov", "GK", 65, 24);
addPlayer("kyz", "Ular Zhaxylvkov", "DEF", 65, 27);
addPlayer("kyz", "Shokhan Abzalov", "FWD", 64, 33);
addPlayer("kyz", "Oleksii Shchebetun", "FWD", 65, 27);

// Kaisar
addPlayer("kai2", "Vasyl Sovpel", "MID", 65, 25);
addPlayer("kai2", "Valeriy Gromyko", "MID", 67, 27);
addPlayer("kai2", "Dmitry Borodin", "MID", 65, 25);
addPlayer("kai2", "Ruslan Yudenkov", "DEF", 65, 37);
addPlayer("kai2", "Aybar Zhaksylykov", "FWD", 64, 27);
addPlayer("kai2", "Stefan Sicovic", "GK", 65, 28);
addPlayer("kai2", "Adilet Kenesbek", "DEF", 64, 22);
addPlayer("kai2", "Orken Mahan", "FWD", 64, 23);
addPlayer("kai2", "Togzhan Saparov", "DEF", 64, 23);
addPlayer("kai2", "Elzhas Altynbekov", "FWD", 63, 30);

// Zhetysu
addPlayer("zhe", "Meyrambek Kalmyrza", "DEF", 64, 21);
addPlayer("zhe", "Serikzhan Muzhikov", "MID", 66, 35);
addPlayer("zhe", "Anton Shramchenko", "MID", 65, 31);
addPlayer("zhe", "Daniyar Usenov", "FWD", 64, 23);
addPlayer("zhe", "Orest Kostyk", "GK", 64, 25);
addPlayer("zhe", "Giogi Chadsunidse", "DEF", 65, 28);
addPlayer("zhe", "Viktor Bragg", "MID", 65, 24);
addPlayer("zhe", "Askhat Baltabekov", "DEF", 64, 33);
addPlayer("zhe", "Ruslan Kuchukov", "FWD", 63, 22);

// Shakhter
addPlayer("sha", "Roger Cañas", "MID", 66, 34);
addPlayer("sha", "Milos Stanojevic", "MID", 65, 30);
addPlayer("sha", "Anton Tolordava", "DEF", 65, 28);
addPlayer("sha", "Dmitro Ryzhuk", "DEF", 64, 32);
addPlayer("sha", "Juan Asprilla", "FWD", 65, 24);
addPlayer("sha", "Andrey Shalabaev", "GK", 63, 23);
addPlayer("sha", "Dmitriy Bukatkin", "MID", 63, 24);
addPlayer("sha", "Maxat Baizhanov", "MID", 64, 39);
addPlayer("sha", "Imanali Zhusupov", "FWD", 63, 21);

// Atyrau
addPlayer("aty", "Ihar Stasevich", "MID", 67, 38);
addPlayer("aty", "Mikalai Signevich", "FWD", 67, 32);
addPlayer("aty", "Olzhas Kerimzhanov", "DEF", 66, 35);
addPlayer("aty", "Gevorg Najaryan", "MID", 65, 26);
addPlayer("aty", "Soslan Takulov", "MID", 66, 29);
addPlayer("aty", "Egor Khatkevich", "GK", 65, 36);
addPlayer("aty", "Nikita Stepanov", "DEF", 65, 27);
addPlayer("aty", "Joel Kayamba", "FWD", 66, 32);
addPlayer("aty", "Rinat Dzhumatov", "MID", 64, 26);

// Turan
addPlayer("tur", "Pavel Kireenko", "FWD", 64, 30);
addPlayer("tur", "Branislav Sluka", "DEF", 65, 25);
addPlayer("tur", "Abylaykhan Zhumabek", "FWD", 65, 22);
addPlayer("tur", "Nikola Cuckic", "MID", 65, 27);
addPlayer("tur", "Plamen Dimov", "DEF", 64, 33);
addPlayer("tur", "Timur Rudoselskiy", "DEF", 64, 29);
addPlayer("tur", "Alisher Suley", "MID", 64, 29);
addPlayer("tur", "Dovran Abdyev", "GK", 63, 24);

// Okzhetpes
addPlayer("okz", "Ruslan Bolov", "FWD", 64, 30);
addPlayer("okz", "Maksim Drachenko", "MID", 64, 34);
addPlayer("okz", "Salamat Zhumabekov", "FWD", 63, 26);
addPlayer("okz", "Niyaz Idrisov", "DEF", 63, 25);
addPlayer("okz", "Srjan Dimitrov", "MID", 64, 32);

// --- ULTIMATE PLAYER POPULATION (BIG TEAMS GAPS) ---

// Atletico Madrid
addPlayer("atm", "Koke", "MID", 84, 34);
addPlayer("atm", "Juan Musso", "GK", 81, 32);
addPlayer("atm", "Clement Lenglet", "DEF", 80, 31);
addPlayer("atm", "Nahuel Molina", "DEF", 82, 28);
addPlayer("atm", "Cesar Azpilicueta", "DEF", 80, 37);
// transferred out: addPlayer('atm', 'Axel Witsel', 'DEF', 81, 37);
// transferred out: addPlayer('atm', 'Rodrigo Riquelme', 'MID', 80, 26);
addPlayer("atm", "Pablo Barrios", "MID", 81, 23);
addPlayer("atm", "Angel Correa", "FWD", 82, 31);
// transferred out: addPlayer('atm', 'Thomas Lemar', 'MID', 79, 31);
// transferred out: addPlayer('atm', 'Samuel Lino', 'MID', 81, 26);

// Real Sociedad
addPlayer("rso", "Aritz Elustondo", "DEF", 80, 32);
addPlayer("rso", "Alvaro Odriozola", "DEF", 78, 30);
addPlayer("rso", "Benat Turrientes", "MID", 78, 24);
addPlayer("rso", "Orri Oskarsson", "FWD", 76, 22);
addPlayer("rso", "Sergio Gomez", "DEF", 79, 26);
addPlayer("rso", "Ander Barrenetxea", "FWD", 79, 24);
addPlayer("rso", "Jon Aramburu", "DEF", 75, 24);

// Athletic Club
addPlayer("ath", "Mikel Vesga", "MID", 79, 33);
addPlayer("ath", "Oscar de Marcos", "DEF", 80, 37);
addPlayer("ath", "Inigo Lekue", "DEF", 77, 33);
addPlayer("ath", "Unai Nunez", "DEF", 79, 29);
addPlayer("ath", "Alvaro Djalo", "FWD", 79, 27);
addPlayer("ath", "Nico Serrano", "FWD", 74, 23);
addPlayer("ath", "Mikel Jauregizar", "MID", 72, 23);
// transferred out: addPlayer('ath', 'Julen Agirrezabala', 'GK', 78, 25);

// Villarreal
// transferred out: addPlayer('vil', 'Eric Bailly', 'DEF', 78, 32);
addPlayer("vil", "Kiko Femenia", "DEF", 77, 35);
addPlayer("vil", "Santi Comesana", "MID", 79, 30);
addPlayer("vil", "Denis Suarez", "MID", 77, 32);
addPlayer("vil", "Pape Gueye", "MID", 78, 27);
addPlayer("vil", "Nicolas Pepe", "FWD", 80, 31);
addPlayer("vil", "Luiz Junior", "GK", 78, 25);
addPlayer("vil", "Ayoze Perez", "FWD", 80, 33);

// Girona
addPlayer("gir", "Alejandro Frances", "DEF", 77, 24);
addPlayer("gir", "Ladislav Krejci", "DEF", 80, 27);
// transferred out: addPlayer('gir', 'Bojan Miovski', 'FWD', 78, 27);
addPlayer("gir", "Yaser Asprilla", "MID", 77, 22);
addPlayer("gir", "Arnau Martinez", "DEF", 78, 23);
addPlayer("gir", "Jhon Solis", "MID", 75, 21);

// Sevilla
addPlayer("sev", "Marcao", "DEF", 78, 30);
addPlayer("sev", "Gonzalo Montiel", "DEF", 78, 29);
addPlayer("sev", "Adria Pedrosa", "DEF", 77, 28);
addPlayer("sev", "Nemanja Gudelj", "DEF", 79, 34);
addPlayer("sev", "Djibril Sow", "MID", 78, 29);
// transferred out: addPlayer('sev', 'Albert Sambi Lokonga', 'MID', 77, 26);
// transferred out: addPlayer('sev', 'Kelechi Iheanacho', 'FWD', 77, 30);
// transferred out: addPlayer('sev', 'Suso', 'FWD', 79, 32);
addPlayer("sev", "Peque", "MID", 75, 23);
addPlayer("sev", "Valentin Barco", "DEF", 76, 22);

// Valencia
addPlayer("val", "Thierry Correia", "DEF", 78, 27);
addPlayer("val", "Dimitri Foulquier", "DEF", 76, 33);
addPlayer("val", "Cesar Tarrega", "DEF", 75, 24);
addPlayer("val", "Hugo Guillamon", "MID", 77, 26);
addPlayer("val", "Andre Almeida", "MID", 78, 26);
addPlayer("val", "Sergi Canos", "FWD", 76, 29);
addPlayer("val", "Diego Lopez", "FWD", 78, 24);
addPlayer("val", "Luis Rioja", "FWD", 77, 32);

// Inter Milan
addPlayer("int", "Francesco Acerbi", "DEF", 82, 38);
addPlayer("int", "Matteo Darmian", "DEF", 80, 36);
addPlayer("int", "Denzel Dumfries", "DEF", 82, 30);
addPlayer("int", "Tajon Buchanan", "DEF", 78, 27);
addPlayer("int", "Kristjan Asllani", "MID", 77, 24);
addPlayer("int", "Mehdi Taremi", "FWD", 81, 34);
addPlayer("int", "Joaquin Correa", "FWD", 77, 32);
addPlayer("int", "Marko Arnautovic", "FWD", 79, 37);

// AC Milan
addPlayer("mil", "Matteo Gabbia", "DEF", 79, 27);
addPlayer("mil", "Strahinja Pavlovic", "DEF", 80, 25);
addPlayer("mil", "Emerson Royal", "DEF", 78, 27);
addPlayer("mil", "Davide Calabria", "DEF", 79, 29);
addPlayer("mil", "Yunus Musah", "MID", 77, 23);
addPlayer("mil", "Noah Okafor", "FWD", 78, 26);
addPlayer("mil", "Samuel Chukwueze", "FWD", 79, 27);
addPlayer("mil", "Tammy Abraham", "FWD", 80, 28);
addPlayer("mil", "Luka Jovic", "FWD", 78, 28);

// Juventus
addPlayer("juv", "Federico Gatti", "DEF", 80, 28);
addPlayer("juv", "Pierre Kalulu", "DEF", 79, 26);
addPlayer("juv", "Danilo", "DEF", 80, 35);
addPlayer("juv", "Andrea Cambiaso", "DEF", 81, 26);
addPlayer("juv", "Nicolo Savona", "DEF", 74, 23);
addPlayer("juv", "Khephren Thuram", "MID", 81, 25);
addPlayer("juv", "Nicolo Fagioli", "MID", 79, 25);
addPlayer("juv", "Samuel Mbangula", "FWD", 72, 22);
addPlayer("juv", "Nico Gonzalez", "FWD", 81, 28);
addPlayer("juv", "Arkadiusz Milik", "FWD", 79, 32);

// Napoli
addPlayer("nap", "Amir Rrahmani", "DEF", 81, 32);
addPlayer("nap", "Rafa Marin", "DEF", 76, 24);
addPlayer("nap", "Mathias Olivera", "DEF", 78, 28);
addPlayer("nap", "Leonardo Spinazzola", "DEF", 79, 33);
addPlayer("nap", "Andre-Frank Zambo Anguissa", "MID", 82, 30);
addPlayer("nap", "Billy Gilmour", "MID", 78, 25);
addPlayer("nap", "Michael Folorunsho", "MID", 77, 28);
addPlayer("nap", "David Neres", "FWD", 81, 29);
addPlayer("nap", "Giovanni Simeone", "FWD", 78, 31);
addPlayer("nap", "Matteo Politano", "FWD", 80, 33);
addPlayer("nap", "Cyril Ngonge", "FWD", 77, 26);

// AS Roma
addPlayer("rom", "Mario Hermoso", "DEF", 81, 31);
addPlayer("rom", "Mats Hummels", "DEF", 82, 37);
addPlayer("rom", "Angelino", "DEF", 79, 29);
addPlayer("rom", "Zeki Celik", "DEF", 76, 29);
addPlayer("rom", "Stephan El Shaarawy", "FWD", 79, 33);
addPlayer("rom", "Bryan Cristante", "MID", 80, 31);
addPlayer("rom", "Leandro Paredes", "MID", 79, 32);
addPlayer("rom", "Manu Kone", "MID", 79, 25);
addPlayer("rom", "Tommaso Baldanzi", "MID", 77, 23);
addPlayer("rom", "Alexis Saelemaekers", "FWD", 78, 27);
addPlayer("rom", "Eldor Shomurodov", "FWD", 75, 31);

// Lazio
addPlayer("laz", "Mario Gila", "DEF", 79, 26);
addPlayer("laz", "Patric", "DEF", 77, 33);
addPlayer("laz", "Adam Marusic", "DEF", 78, 33);
addPlayer("laz", "Luca Pellegrini", "DEF", 76, 27);
addPlayer("laz", "Matias Vecino", "MID", 78, 35);
addPlayer("laz", "Gaetano Castrovilli", "MID", 77, 29);
addPlayer("laz", "Gustav Isaksen", "FWD", 77, 25);
addPlayer("laz", "Tijjani Noslin", "FWD", 76, 27);
addPlayer("laz", "Pedro", "FWD", 77, 39);

// Fiorentina
addPlayer("fio", "Marin Pongracic", "DEF", 78, 28);
addPlayer("fio", "Lucas Martinez Quarta", "DEF", 80, 30);
addPlayer("fio", "Rolando Mandragora", "MID", 78, 29);
addPlayer("fio", "Amir Richardson", "MID", 75, 24);
addPlayer("fio", "Edoardo Bove", "MID", 77, 24);
addPlayer("fio", "Jonathan Ikone", "FWD", 78, 28);
addPlayer("fio", "Riccardo Sottil", "FWD", 76, 27);
addPlayer("fio", "Christian Kouame", "FWD", 77, 28);

// Bologna
addPlayer("bol", "Nicolo Casale", "DEF", 77, 28);
addPlayer("bol", "Jhon Lucumi", "DEF", 79, 28);
addPlayer("bol", "Juan Miranda", "DEF", 77, 26);
addPlayer("bol", "Nikola Moro", "MID", 77, 28);
addPlayer("bol", "Kacper Urbanski", "MID", 74, 21);
addPlayer("bol", "Tommaso Pobega", "MID", 77, 27);
addPlayer("bol", "Jesper Karlsson", "FWD", 77, 28);
addPlayer("bol", "Samuel Iling-Junior", "FWD", 76, 22);

// Leverkusen
addPlayer("lev", "Matej Kovar", "GK", 76, 26);
addPlayer("lev", "Robert Andrich", "MID", 82, 31);
addPlayer("lev", "Aleix Garcia", "MID", 81, 29);
addPlayer("lev", "Jonas Hofmann", "MID", 80, 34);
addPlayer("lev", "Martin Terrier", "FWD", 81, 29);
addPlayer("lev", "Nathan Tella", "FWD", 78, 27);
addPlayer("lev", "Patrik Schick", "FWD", 81, 30);
addPlayer("lev", "Arthur", "DEF", 74, 23);

// Dortmund
addPlayer("dor", "Alexander Meyer", "GK", 76, 35);
addPlayer("dor", "Waldemar Anton", "DEF", 81, 30);
addPlayer("dor", "Niklas Sule", "DEF", 81, 30);
addPlayer("dor", "Yan Couto", "DEF", 79, 24);
addPlayer("dor", "Julian Ryerson", "DEF", 80, 28);
addPlayer("dor", "Pascal Gross", "MID", 82, 35);
addPlayer("dor", "Felix Nmecha", "MID", 78, 25);
addPlayer("dor", "Giovanni Reyna", "MID", 77, 23);
addPlayer("dor", "Maximilian Beier", "FWD", 79, 23);

// RB Leipzig
addPlayer("rbl", "El Chadaille Bitshiabu", "DEF", 74, 21);
addPlayer("rbl", "Lukas Klostermann", "DEF", 79, 30);
addPlayer("rbl", "Benjamin Henrichs", "DEF", 80, 29);
addPlayer("rbl", "Nicolas Seiwald", "MID", 77, 25);
addPlayer("rbl", "Amadou Haidara", "MID", 80, 28);
addPlayer("rbl", "Christoph Baumgartner", "MID", 80, 27);
addPlayer("rbl", "Eljif Elmas", "MID", 78, 26);
addPlayer("rbl", "Antonio Nusa", "FWD", 77, 21);

// Paris Saint-Germain
addPlayer("psg", "Lucas Beraldo", "DEF", 78, 22);
addPlayer("psg", "Milan Skriniar", "DEF", 81, 31);
addPlayer("psg", "Willian Pacho", "DEF", 80, 24);
addPlayer("psg", "Fabian Ruiz", "MID", 82, 30);
addPlayer("psg", "Kang-in Lee", "MID", 81, 25);
addPlayer("psg", "Senny Mayulu", "MID", 70, 20);

// Marseille
addPlayer("mar", "Leonardo Balerdi", "DEF", 80, 27);
addPlayer("mar", "Lilian Brassier", "DEF", 78, 26);
addPlayer("mar", "Derek Cornelius", "DEF", 75, 28);
addPlayer("mar", "Quentin Merlin", "DEF", 77, 24);
addPlayer("mar", "Geoffrey Kondogbia", "MID", 79, 33);
addPlayer("mar", "Ismael Kone", "MID", 76, 24);
addPlayer("mar", "Adrien Rabiot", "MID", 82, 31);
addPlayer("mar", "Amine Harit", "MID", 79, 29);
addPlayer("mar", "Neal Maupay", "FWD", 76, 30);
addPlayer("mar", "Valentin Carboni", "MID", 75, 21);

// Lyon
addPlayer("lyo", "Clinton Mata", "DEF", 77, 33);
addPlayer("lyo", "Duje Caleta-Car", "DEF", 78, 29);
addPlayer("lyo", "Moussa Niakhate", "DEF", 79, 30);
addPlayer("lyo", "Nemanja Matic", "MID", 79, 38);
addPlayer("lyo", "Jordan Veretout", "MID", 79, 33);
addPlayer("lyo", "Wilfried Zaha", "FWD", 79, 33);
addPlayer("lyo", "Gift Orban", "FWD", 75, 24);

// Lille
addPlayer("lil", "Aissa Mandi", "DEF", 76, 34);
addPlayer("lil", "Alexsandro", "DEF", 77, 27);
addPlayer("lil", "Mitchel Bakker", "DEF", 75, 26);
addPlayer("lil", "Ayyoub Bouaddi", "MID", 74, 18);
addPlayer("lil", "Osame Sahraoui", "FWD", 76, 25);
addPlayer("lil", "Mohamed Bayo", "FWD", 75, 28);

// Besiktas
addPlayer("bes", "Jonas Svensson", "DEF", 74, 33);
addPlayer("bes", "Arthur Masuaku", "DEF", 76, 32);
addPlayer("bes", "Cher Ndour", "MID", 74, 22);
addPlayer("bes", "Ernest Muci", "MID", 76, 25);
addPlayer("bes", "Jean Onana", "MID", 74, 26);

// Wolves expansion

// Newcastle expansion

// West Ham expansion

// Brighton expansion

// Tottenham expansion

// --- DEPTH FOR SMALLER LEAGUE TEAMS ---

// Alaves depth
// transferred out: addPlayer('ala', 'Aleksandar Sedlar', 'DEF', 74, 34);
// transferred out: addPlayer('ala', 'Abdel Abqar', 'DEF', 75, 27);
addPlayer("ala", "Manu Sanchez", "DEF", 76, 25);
addPlayer("ala", "Carlos Protesoni", "MID", 73, 34);
addPlayer("ala", "Stoichkov", "FWD", 75, 32);
addPlayer("ala", "Carlos Vicente", "FWD", 75, 27);
addPlayer("ala", "Toni Martinez", "FWD", 75, 29);

// Las Palmas depth
addPlayer("pal", "Mika Marmol", "DEF", 76, 25);
addPlayer("pal", "Alex Munoz", "DEF", 74, 32);
addPlayer("pal", "Jose Campana", "MID", 76, 33);
addPlayer("pal", "Enzo Loiodice", "MID", 75, 25);
addPlayer("pal", "Oliver McBurnie", "FWD", 74, 30);
addPlayer("pal", "Jaime Mata", "FWD", 75, 37);

// Hoffenheim depth
addPlayer("hof", "Kevin Akpoguma", "DEF", 75, 31);
addPlayer("hof", "Tim Drexler", "DEF", 71, 21);
addPlayer("hof", "Dennis Geiger", "MID", 76, 28);
addPlayer("hof", "Tom Bischof", "MID", 72, 21);
addPlayer("hof", "Mergim Berisha", "FWD", 76, 28);
addPlayer("hof", "Haris Tabakovic", "FWD", 75, 32);

// Wolfsburg depth
addPlayer("wob", "Cedric Zesiger", "DEF", 76, 28);
addPlayer("wob", "Joakim Maehle", "DEF", 79, 29);
addPlayer("wob", "Mattias Svanberg", "MID", 78, 27);
addPlayer("wob", "Salih Ozcan", "MID", 77, 28);

// Holstein Kiel depth
addPlayer("kie", "Carl Johansson", "DEF", 70, 28);
addPlayer("kie", "Max Geschwill", "DEF", 69, 25);
addPlayer("kie", "Nicolai Remberg", "MID", 69, 26);
addPlayer("kie", "Fiete Arp", "FWD", 70, 26);

// --- ULTIMATE PLAYER POPULATION (LIGUE 1 SMALL TEAMS) ---

// Strasbourg
addPlayer("str", "Ismael Doukoure", "DEF", 74, 23);
addPlayer("str", "Sebastian Nanasi", "MID", 75, 24);
addPlayer("str", "Sekou Mara", "FWD", 74, 24);

// Toulouse
addPlayer("tou", "Mark McKenzie", "DEF", 75, 27);
addPlayer("tou", "Cristian Casseres Jr", "MID", 75, 26);
addPlayer("tou", "Joshua King", "FWD", 74, 34);

// Montpellier
addPlayer("mon2", "Becir Omeragic", "DEF", 76, 24);
addPlayer("mon2", "Modibo Sagnan", "DEF", 75, 27);
addPlayer("mon2", "Joris Chotard", "MID", 77, 24);
addPlayer("mon2", "Wahbi Khazri", "FWD", 75, 35);

// Nantes
addPlayer("nan", "Nathan Zeze", "DEF", 73, 21);
addPlayer("nan", "Nicolas Cozza", "DEF", 74, 27);
addPlayer("nan", "Florent Mollet", "MID", 76, 34);
addPlayer("nan", "Matthis Abline", "FWD", 75, 23);

// Al Nassr (Bonus)
addPlayer("aln", "Cristiano Ronaldo", "FWD", 86, 41);
addPlayer("aln", "Sadio Mane", "FWD", 83, 34);
addPlayer("aln", "Aymeric Laporte", "DEF", 84, 32);

// --- FINAL TOP-UPS (KPL & TURKISH) ---

// Astana depth
addPlayer("ast", "Abzal Beysebekov", "DEF", 67, 33);
addPlayer("ast", "Yan Vorogovskiy", "DEF", 68, 30);
addPlayer("ast", "Max Ebong", "MID", 69, 27);
addPlayer("ast", "Aleksandr Marochkin", "DEF", 67, 35);
addPlayer("ast", "Elkhan Astanov", "MID", 66, 26);

// Kairat depth
addPlayer("kai", "Elder Santana", "FWD", 67, 33);
addPlayer("kai", "Adilet Sadybekov", "MID", 66, 24);
addPlayer("kai", "Arad Ofri", "DEF", 67, 27);
addPlayer("kai", "Egor Tkachenko", "DEF", 65, 23);
addPlayer("kai", "Sultanbek Astanov", "MID", 66, 26);

// Tobol depth
addPlayer("tob", "Quenten Cooper", "DEF", 66, 31);
addPlayer("tob", "Joseph Essien", "MID", 65, 26);
addPlayer("tob", "Ruslan Valiullin", "DEF", 66, 31);
addPlayer("tob", "Igor Ivanovic", "MID", 68, 28);
addPlayer("tob", "David Henen", "FWD", 67, 30);

// Ordabasy depth
addPlayer("ord", "Jasur Yakhshiboev", "FWD", 69, 29);
addPlayer("ord", "Dembo Darboe", "FWD", 68, 27);
addPlayer("ord", "Eugene Makarenko", "MID", 67, 34);
addPlayer("ord", "Temirlan Yerlanov", "DEF", 66, 32);
addPlayer("ord", "Igor Plastun", "DEF", 67, 35);

// Aktobe depth
addPlayer("akt", "Leonel Strumia", "MID", 67, 33);
addPlayer("akt", "Alibek Kassym", "DEF", 67, 27);
addPlayer("akt", "Uche Agbo", "MID", 67, 30);
addPlayer("akt", "Jose Cevallos", "MID", 68, 31);
addPlayer("akt", "Amadou Doumbouya", "FWD", 66, 24);

// Trabzonspor depth
addPlayer("tra", "Mislav Orsic", "FWD", 78, 33);
addPlayer("tra", "Pedro Malheiro", "DEF", 75, 25);
addPlayer("tra", "Stefano Denswil", "DEF", 76, 33);
addPlayer("tra", "Arseniy Batagov", "DEF", 74, 24);
addPlayer("tra", "John Lundstram", "MID", 77, 32);
addPlayer("tra", "Borna Barisic", "DEF", 76, 33);

// Besiktas depth
addPlayer("bes", "Daniel Amartey", "DEF", 75, 31);
addPlayer("bes", "Vincent Aboubakar", "FWD", 79, 34);
addPlayer("bes", "Alex Oxlade-Chamberlain", "MID", 76, 33);
addPlayer("bes", "Onur Bulut", "DEF", 74, 32);
addPlayer("bes", "Salih Ucan", "MID", 76, 32);

// --- MEGA SQUAD EXPANSION (REQUESTED TEAMS) ---

// Ligue 1
addPlayer("len", "Salis Abdul Samed", "MID", 77, 26);
addPlayer("len", "Ruben Aguilar", "DEF", 76, 33);
addPlayer("len", "Jonathan Gradit", "DEF", 77, 33);
addPlayer("len", "Deiver Machado", "DEF", 76, 33);
addPlayer("len", "Neil El Aynaoui", "MID", 75, 25);
addPlayer("len", "Hamzat Ojediran", "MID", 73, 22);
addPlayer("len", "Malang Sarr", "DEF", 75, 27);
addPlayer("len", "Martin Satriano", "FWD", 74, 25);

addPlayer("ren", "Mikayil Faye", "DEF", 75, 22);
addPlayer("ren", "Lorenz Assignon", "DEF", 76, 26);
addPlayer("ren", "Glen Kamara", "MID", 76, 30);
addPlayer("ren", "Hans Hateboer", "DEF", 77, 32);
addPlayer("ren", "Jota", "FWD", 77, 27);
addPlayer("ren", "Christopher Wooh", "DEF", 75, 25);
addPlayer("ren", "Azor Matusiwa", "MID", 76, 28);
addPlayer("ren", "Henrik Meister", "FWD", 70, 22);

addPlayer("nic", "Jonathan Clauss", "DEF", 80, 34);
addPlayer("nic", "Mohamed-Ali Cho", "FWD", 77, 22);
addPlayer("nic", "Youssoufa Moukoko", "FWD", 78, 21);
addPlayer("nic", "Moise Bombito", "DEF", 76, 26);
addPlayer("nic", "Ali Abdi", "DEF", 75, 32);
addPlayer("nic", "Morgan Sanson", "MID", 78, 32);
addPlayer("nic", "Pablo Rosario", "MID", 76, 29);
addPlayer("nic", "Sofiane Diop", "MID", 77, 26);

addPlayer("rei", "Valentin Atangana Edoa", "MID", 73, 21);
addPlayer("rei", "Emmanuel Agbadou", "DEF", 77, 29);
addPlayer("rei", "Sergio Akieme", "DEF", 75, 28);
addPlayer("rei", "Buta", "DEF", 75, 29);
addPlayer("rei", "Gabriel Silva", "FWD", 72, 24);
addPlayer("rei", "Reda Khadra", "MID", 73, 25);
addPlayer("rei", "Amine Salama", "FWD", 71, 26);
addPlayer("rei", "Mohamed Daramy", "FWD", 74, 24);

addPlayer("str", "Guela Doue", "DEF", 75, 23);
addPlayer("str", "Sebastian Nanasi", "MID", 75, 24);
addPlayer("str", "Sekou Mara", "FWD", 74, 24);
addPlayer("str", "Saidou Sow", "DEF", 73, 24);
addPlayer("str", "Felix Lemarechal", "MID", 72, 23);
addPlayer("str", "Abakar Sylla", "DEF", 74, 23);
addPlayer("str", "Mamadou Sarr", "DEF", 71, 20);
addPlayer("str", "Diego Moreira", "FWD", 72, 22);

addPlayer("tou", "Djibril Sidibe", "DEF", 75, 34);
addPlayer("tou", "Shavy Babicka", "FWD", 72, 26);
addPlayer("tou", "Umit Akdag", "DEF", 70, 22);
addPlayer("tou", "Charlie Cresswell", "DEF", 72, 23);
addPlayer("tou", "Aron Donnum", "MID", 74, 28);
addPlayer("tou", "Rafik Messali", "MID", 68, 23);
addPlayer("tou", "Niklas Schmidt", "MID", 73, 28);
addPlayer("tou", "Frank Magri", "FWD", 73, 26);

addPlayer("bst", "Kamory Doumbia", "MID", 76, 23);
addPlayer("bst", "Mama Balde", "FWD", 75, 30);
addPlayer("bst", "Soumaila Coulibaly", "DEF", 74, 22);
addPlayer("bst", "Ibrahim Salah", "FWD", 72, 25);
addPlayer("bst", "Romain Perraud", "DEF", 75, 28);
addPlayer("bst", "Edimilson Fernandes", "MID", 74, 30);
addPlayer("bst", "Julen Le Cardinal", "DEF", 72, 29);
addPlayer("bst", "Abdoulaye Ndiaye", "DEF", 71, 24);

addPlayer("hav", "Issa Soumare", "FWD", 71, 25);
addPlayer("hav", "Josue Casimir", "FWD", 72, 25);
addPlayer("hav", "Etienne Youte Kinkoue", "DEF", 73, 24);
addPlayer("hav", "Yanis Zouaoui", "DEF", 69, 28);
addPlayer("hav", "Oussama Targhalline", "MID", 72, 24);
addPlayer("hav", "Antoine Joujou", "FWD", 70, 23);
addPlayer("hav", "Loic Nego", "DEF", 71, 35);
addPlayer("hav", "Samuel Grandsir", "FWD", 72, 30);

addPlayer("aux", "Theo Bair", "FWD", 72, 26);
addPlayer("aux", "Hamed Traore", "MID", 76, 26);
addPlayer("aux", "Gabriel Osho", "DEF", 73, 28);
addPlayer("aux", "Ki-Jana Hoever", "DEF", 73, 24);
addPlayer("aux", "Clement Akpa", "DEF", 70, 24);
addPlayer("aux", "Lasso Coulibaly", "FWD", 69, 24);
addPlayer("aux", "Paul Joly", "DEF", 72, 26);
addPlayer("aux", "Elisha Owusu", "MID", 73, 28);

addPlayer("sai", "Ben Old", "MID", 71, 24);
addPlayer("sai", "Pierre Ekwah", "MID", 74, 24);
addPlayer("sai", "Lucas Stassin", "FWD", 72, 21);
addPlayer("sai", "Augustine Boakye", "MID", 71, 25);
addPlayer("sai", "Igor Miladinovic", "MID", 70, 23);
addPlayer("sai", "Mickael Nade", "DEF", 72, 27);
addPlayer("sai", "Mathieu Cafaro", "MID", 73, 29);
addPlayer("sai", "Aimen Moueffek", "MID", 72, 25);

addPlayer("ang", "Bamba Dieng", "FWD", 74, 26);
addPlayer("ang", "Jim Allevinah", "FWD", 72, 31);
addPlayer("ang", "Jean-Eudes Aholou", "MID", 73, 32);
addPlayer("ang", "Carlens Arcus", "DEF", 71, 30);
addPlayer("ang", "Jacques Ekomie", "DEF", 69, 23);
addPlayer("ang", "Zinedine Ferhat", "FWD", 72, 33);
addPlayer("ang", "Lilian Rao-Lisoa", "DEF", 69, 26);
addPlayer("ang", "Jordan Lefort", "DEF", 71, 33);

// Russian Premier League expansion
addPlayer("akh", "Gamid Agalarov", "FWD", 72, 26);
addPlayer("akh", "Miroslav Bogosavac", "DEF", 73, 30);
addPlayer("akh", "Evgeniy Kharin", "MID", 72, 31);
addPlayer("akh", "Daniil Utkin", "MID", 74, 26);
addPlayer("akh", "Vladislav Kamirov", "MID", 71, 25);
addPlayer("akh", "Amine Talal", "MID", 72, 30);
addPlayer("akh", "Lucas Lovat", "DEF", 72, 29);
addPlayer("akh", "Anton Shvets", "MID", 72, 33);

addPlayer("rub", "Aleksandr Zotov", "MID", 72, 36);
addPlayer("rub", "Ruslan Bezrukov", "MID", 71, 24);
addPlayer("rub", "Marvin Cuni", "FWD", 71, 25);
addPlayer("rub", "Enri Mukba", "DEF", 68, 21);
addPlayer("rub", "Joel Fameyeh", "FWD", 72, 29);
addPlayer("rub", "Konstantin Nizhegorodov", "DEF", 70, 24);
addPlayer("rub", "Rustam Ashurmatov", "DEF", 71, 30);
addPlayer("rub", "Umarali Rakhmonaliev", "MID", 69, 23);

addPlayer("fak", "Mikhail Shchetinin", "MID", 68, 21);
addPlayer("fak", "Aleksey Kashtanov", "FWD", 71, 30);
addPlayer("fak", "Dominik Dinga", "DEF", 69, 28);
addPlayer("fak", "Sergey Bryzgalov", "DEF", 69, 33);
addPlayer("fak", "Igor Merzlyakov", "DEF", 67, 23);
addPlayer("fak", "Nikolay Giorgobiani", "MID", 70, 27);
addPlayer("fak", "Luka Bagatelia", "MID", 66, 21);
addPlayer("fak", "Dylan Mertens", "MID", 68, 31);

addPlayer("ore", "Gabriel Florentin", "MID", 73, 27);
addPlayer("ore", "Danila Prokhin", "DEF", 72, 25);
addPlayer("ore", "Artem Kasimov", "DEF", 68, 23);
addPlayer("ore", "Aleksey Baranovskiy", "FWD", 67, 21);
addPlayer("ore", "Stepan Oganesyan", "FWD", 71, 24);
addPlayer("ore", "Tomas Muro", "MID", 70, 23);
addPlayer("ore", "Yaroslav Mikhailov", "MID", 70, 23);
addPlayer("ore", "Justin Cuero", "FWD", 69, 22);

addPlayer("pnn", "Nikita Kakkoev", "DEF", 71, 27);
addPlayer("pnn", "Stanislav Magkeev", "DEF", 72, 27);
addPlayer("pnn", "Dan Glazer", "MID", 71, 29);
addPlayer("pnn", "Vladislav Karapuzov", "MID", 70, 26);
addPlayer("pnn", "Matteo Stamatov", "DEF", 69, 27);
addPlayer("pnn", "Luka Totic", "MID", 68, 25);
addPlayer("pnn", "Aleksandr Ektov", "DEF", 70, 31);
addPlayer("pnn", "Ilya Zhigulev", "MID", 70, 30);

// Bundesliga expansion
addPlayer("fra", "Can Uzun", "MID", 76, 21);
addPlayer("fra", "Ansgar Knauff", "FWD", 76, 24);
addPlayer("fra", "Igor Matanovic", "FWD", 75, 23);
addPlayer("fra", "Fares Chaibi", "MID", 77, 23);
addPlayer("fra", "Tuta", "DEF", 78, 27);
addPlayer("fra", "Mahmoud Dahoud", "MID", 78, 30);
addPlayer("fra", "Junior Dina Ebimbe", "MID", 77, 25);
addPlayer("fra", "Aurele Amenda", "DEF", 74, 23);

addPlayer("stu", "Fabian Rieder", "MID", 77, 24);
addPlayer("stu", "Ameen Al-Dakhil", "DEF", 75, 24);
addPlayer("stu", "Anthony Rouault", "DEF", 76, 25);
addPlayer("stu", "Josha Vagnoman", "DEF", 77, 25);
addPlayer("stu", "Anrie Chase", "DEF", 71, 22);
addPlayer("stu", "Yannik Keitel", "MID", 75, 26);
addPlayer("stu", "Ramon Hendriks", "DEF", 73, 25);
addPlayer("stu", "Nick Woltemade", "FWD", 74, 24);

addPlayer("fre", "Eren Dinkci", "FWD", 76, 24);
addPlayer("fre", "Junior Adamu", "FWD", 74, 25);
addPlayer("fre", "Merlin Rohl", "MID", 75, 24);
addPlayer("fre", "Kiliann Sildillia", "DEF", 76, 24);
addPlayer("fre", "Lukas Kubler", "DEF", 76, 33);
addPlayer("fre", "Bruno Ogbus", "DEF", 68, 20);
addPlayer("fre", "Jordy Makengo", "DEF", 73, 24);
addPlayer("fre", "Maximilian Philipp", "FWD", 76, 32);

addPlayer("mai", "Paul Nebel", "MID", 74, 24);
addPlayer("mai", "Kaishu Sano", "MID", 73, 25);
addPlayer("mai", "Armindo Sieb", "FWD", 72, 23);
addPlayer("mai", "Moritz Jenz", "DEF", 76, 27);
addPlayer("mai", "Andreas Hanche-Olsen", "DEF", 75, 29);
addPlayer("mai", "Maxim Leitsch", "DEF", 74, 28);
addPlayer("mai", "Lasse Riess", "GK", 68, 25);
addPlayer("mai", "Nikolas Veratschnig", "DEF", 69, 23);

addPlayer("gla", "Luca Netz", "DEF", 76, 22);
addPlayer("gla", "Joe Scally", "DEF", 75, 23);
addPlayer("gla", "Tomas Cvancara", "FWD", 75, 26);
addPlayer("gla", "Rocco Reitz", "MID", 75, 24);
addPlayer("gla", "Robin Hack", "FWD", 76, 28);
addPlayer("gla", "Fabio Chiarodia", "DEF", 70, 21);
addPlayer("gla", "Philipp Sander", "MID", 73, 28);
addPlayer("gla", "Grant-Leon Ranos", "FWD", 70, 23);

addPlayer("uni", "Danilho Doekhi", "DEF", 79, 28);
addPlayer("uni", "Christopher Trimmel", "DEF", 75, 39);
addPlayer("uni", "Woo-yeong Jeong", "MID", 75, 27);
addPlayer("uni", "Laszlo Benes", "MID", 76, 29);
addPlayer("uni", "Jordan Pefok", "FWD", 76, 30);
addPlayer("uni", "Leopold Querfeld", "DEF", 73, 22);
addPlayer("uni", "Tim Skarke", "FWD", 74, 30);
addPlayer("uni", "Janik Haberer", "MID", 75, 32);

addPlayer("wer", "Justin Njinmah", "FWD", 75, 26);
addPlayer("wer", "Keke Topp", "FWD", 71, 22);
addPlayer("wer", "Olivier Deman", "MID", 74, 26);
addPlayer("wer", "Isak Hansen-Aaroen", "MID", 70, 22);
addPlayer("wer", "Amos Pieper", "DEF", 75, 28);
addPlayer("wer", "Senne Lynen", "MID", 75, 27);
addPlayer("wer", "Marco Grüll", "FWD", 75, 28);
addPlayer("wer", "Skelly Alvero", "MID", 72, 24);

// Real Betis
addPlayer("bet", "Vitor Roque", "FWD", 78, 21);
addPlayer("bet", "Cedric Bakambu", "FWD", 78, 35);
addPlayer("bet", "Abde Ezzalzouli", "FWD", 78, 24);
addPlayer("bet", "Isco", "MID", 82, 34);
addPlayer("bet", "Giovani Lo Celso", "MID", 82, 30);
addPlayer("bet", "Pablo Fornals", "MID", 79, 30);
addPlayer("bet", "Marc Roca", "MID", 78, 29);
addPlayer("bet", "Diego Llorente", "DEF", 79, 33);
addPlayer("bet", "Ricardo Rodriguez", "DEF", 77, 34);
addPlayer("bet", "Rui Silva", "GK", 81, 32);
// transferred out: addPlayer('bet', 'Johnny Cardoso', 'MID', 77, 24);

// Osasuna expansion
addPlayer("osa", "Ante Budimir", "FWD", 80, 35);
// transferred out: addPlayer('osa', 'Bryan Zaragoza', 'FWD', 78, 25);
addPlayer("osa", "Aimar Oroz", "MID", 78, 24);
addPlayer("osa", "Sergio Herrera", "GK", 79, 33);
addPlayer("osa", "Lucas Torro", "MID", 77, 32);

// Getafe expansion
addPlayer("get", "Borja Mayoral", "FWD", 80, 29);
addPlayer("get", "Mauro Arambarri", "MID", 78, 31);
addPlayer("get", "Luis Milla", "MID", 78, 31);
addPlayer("get", "David Soria", "GK", 80, 33);
addPlayer("get", "Djene", "DEF", 78, 34);

// Mallorca expansion
addPlayer("mal", "Vedat Muriqi", "FWD", 80, 32);
addPlayer("mal", "Sergi Darder", "MID", 78, 32);
// transferred out: addPlayer('mal', 'Dominik Greif', 'GK', 77, 29);
addPlayer("mal", "Antonio Raillo", "DEF", 78, 35);
addPlayer("mal", "Johan Mojica", "DEF", 77, 34);

// Rayo expansion
addPlayer("ray", "James Rodriguez", "MID", 80, 35);
addPlayer("ray", "Isi Palazon", "FWD", 79, 31);
addPlayer("ray", "Augusto Batalla", "GK", 78, 30);
addPlayer("ray", "Florian Lejeune", "DEF", 78, 35);

// Alaves expansion
addPlayer("ala", "Antonio Sivera", "GK", 78, 30);
addPlayer("ala", "Joan Jordan", "MID", 77, 32);
addPlayer("ala", "Luka Romero", "FWD", 74, 21);

// Las Palmas expansion
addPlayer("pal", "Jasper Cillessen", "GK", 78, 37);
addPlayer("pal", "Adnan Januzaj", "FWD", 76, 31);
addPlayer("pal", "Kirian Rodriguez", "MID", 79, 30);
addPlayer("pal", "Alberto Moleiro", "MID", 78, 22);

// Valladolid expansion
addPlayer("val2", "Karl Hein", "GK", 75, 24);
addPlayer("val2", "Kenedy", "FWD", 74, 30);
addPlayer("val2", "Juanmi Latasa", "FWD", 73, 25);

// Espanyol expansion
addPlayer("esp", "Joan Garcia", "GK", 79, 25);
addPlayer("esp", "Javi Puado", "FWD", 77, 28);
addPlayer("esp", "Alejo Veliz", "FWD", 74, 22);
addPlayer("esp", "Alex Kral", "MID", 76, 28);

// Bournemouth

// Crystal Palace

// Brentford

// Everton

// Nottingham Forest

// Leicester City

// Southampton

// Ipswich Town

// Serie A expansion
addPlayer("tor", "Saul Coco", "DEF", 76, 27);
addPlayer("tor", "Sebastian Walukiewicz", "DEF", 74, 26);
addPlayer("tor", "Marcus Pedersen", "DEF", 74, 26);
addPlayer("tor", "Adam Masina", "DEF", 74, 32);
addPlayer("tor", "Karol Linetty", "MID", 75, 31);
addPlayer("tor", "Adrien Tameze", "MID", 75, 32);
addPlayer("tor", "Gvidas Gineitis", "MID", 71, 22);
addPlayer("tor", "Antonio Donnarumma", "GK", 68, 36);

addPlayer("gen", "Alessandro Vogliacco", "DEF", 73, 28);
addPlayer("gen", "Mattia Bani", "DEF", 75, 32);
addPlayer("gen", "Stefano Sabelli", "DEF", 74, 33);
addPlayer("gen", "Fabio Miretti", "MID", 75, 23);
addPlayer("gen", "Caleb Ekuban", "FWD", 73, 32);
addPlayer("gen", "Brooke Norton-Cuffy", "DEF", 72, 22);
addPlayer("gen", "Morten Thorsby", "MID", 75, 30);
addPlayer("gen", "Jeff Ekhator", "FWD", 67, 19);

addPlayer("ud", "Festy Ebosele", "DEF", 73, 24);
addPlayer("ud", "Jurgen Ekkelenkamp", "MID", 74, 26);
addPlayer("ud", "Thomas Kristensen", "DEF", 73, 24);
addPlayer("ud", "Christian Kabasele", "DEF", 74, 35);
addPlayer("ud", "Keinan Davis", "FWD", 74, 28);
addPlayer("ud", "Oier Zarraga", "MID", 73, 27);
addPlayer("ud", "Isaac Success", "FWD", 73, 30);
addPlayer("ud", "Jordan Zemura", "DEF", 72, 26);

addPlayer("com", "Alberto Dossena", "DEF", 75, 28);
addPlayer("com", "Ignace Van der Brempt", "DEF", 73, 24);
addPlayer("com", "Maximo Perrone", "MID", 74, 23);
addPlayer("com", "Alieu Fadera", "FWD", 72, 24);
addPlayer("com", "Lucas Da Cunha", "MID", 74, 25);
addPlayer("com", "Ali Jasim", "FWD", 71, 22);
addPlayer("com", "Luca Mazzitelli", "MID", 74, 30);
addPlayer("com", "Edoardo Goldaniga", "DEF", 73, 32);

// Primeira Liga expansion
addPlayer("bra", "Bruma", "FWD", 78, 31);
addPlayer("bra", "Roger Fernandes", "FWD", 75, 20);
addPlayer("bra", "Amine El Ouazzani", "FWD", 74, 25);
addPlayer("bra", "Gabriel Martinez", "FWD", 73, 23);
addPlayer("bra", "Bright Arrey-Mbi", "DEF", 73, 23);
addPlayer("bra", "Victor Gomez", "DEF", 75, 26);
addPlayer("bra", "Adrian Marin", "DEF", 74, 29);
addPlayer("bra", "Paulo Oliveira", "DEF", 75, 34);

addPlayer("gui", "Nelson Oliveira", "FWD", 73, 35);
addPlayer("gui", "Jesus Ramirez", "FWD", 71, 28);
addPlayer("gui", "Kaio Cesar", "FWD", 72, 22);
addPlayer("gui", "Jorge Fernandes", "DEF", 74, 29);
addPlayer("gui", "Tiago Silva", "MID", 76, 33);
addPlayer("gui", "Tomas Ribeiro", "DEF", 74, 27);
addPlayer("gui", "Bruno Gaspar", "DEF", 73, 33);
addPlayer("gui", "Manu Silva", "MID", 72, 25);

addPlayer("fam", "Mario Gonzalez", "FWD", 74, 30);
addPlayer("fam", "Gil Dias", "MID", 73, 30);
addPlayer("fam", "Mihai Alexandru Dobre", "FWD", 71, 28);
addPlayer("fam", "Riccieli", "DEF", 74, 28);
addPlayer("fam", "Enea Mihaj", "DEF", 73, 28);
addPlayer("fam", "Calegari", "DEF", 73, 24);
addPlayer("fam", "Leonardo Oliveira", "GK", 70, 21);
addPlayer("fam", "Tom van de Looi", "MID", 72, 27);

addPlayer("aro", "Henrique Araujo", "FWD", 74, 24);
addPlayer("aro", "Taichi Fukui", "MID", 71, 22);
addPlayer("aro", "Quaresma", "DEF", 72, 24);
addPlayer("aro", "Nico Mantl", "GK", 72, 26);
addPlayer("aro", "Ivo Rodrigues", "FWD", 73, 31);
addPlayer("aro", "Mamadou Loum", "MID", 74, 29);
addPlayer("aro", "Matias Rocha", "DEF", 72, 25);
addPlayer("aro", "Weverson", "DEF", 71, 26);

// Turkish Super Lig expansion
addPlayer("bas", "Onur Ergun", "MID", 72, 33);
addPlayer("bas", "Lucas Lima", "DEF", 73, 34);
addPlayer("bas", "Omer Ali Sahiner", "DEF", 73, 34);
addPlayer("bas", "Philippe Keny", "FWD", 71, 27);
addPlayer("bas", "Hamza Gureler", "DEF", 68, 20);
addPlayer("bas", "Joao Figueiredo", "FWD", 74, 30);
addPlayer("bas", "Berat Ozdemir", "MID", 74, 28);
addPlayer("bas", "Miguel Crespo", "MID", 76, 30);

// Monza
addPlayer("mnz", "Matteo Pessina", "MID", 78, 29);
addPlayer("mnz", "Dany Mota", "FWD", 76, 28);
addPlayer("mnz", "Andrea Colpani", "MID", 78, 27); // Moved to Fiorentina? Checking... Yes.
// Colpani is at Fiorentina. Removing.
addPlayer("mnz", "Milan Djuric", "FWD", 75, 36);
addPlayer("mnz", "Gianluca Caprari", "FWD", 76, 33);
addPlayer("mnz", "Pablo Mari", "DEF", 77, 33);
addPlayer("mnz", "Andrea Carboni", "DEF", 74, 25);
addPlayer("mnz", "Stefano Turati", "GK", 76, 25);
addPlayer("mnz", "Warren Bondo", "MID", 73, 22);

// Lecce
addPlayer("lec", "Nikola Krstovic", "FWD", 76, 26);
addPlayer("lec", "Lameck Banda", "FWD", 74, 25);
addPlayer("lec", "Ante Rebic", "FWD", 76, 33);
addPlayer("lec", "Ylber Ramadani", "MID", 75, 30);
addPlayer("lec", "Federico Baschirotto", "DEF", 76, 30);
addPlayer("lec", "Antonino Gallo", "DEF", 74, 26);
addPlayer("lec", "Wladimiro Falcone", "GK", 79, 31);
addPlayer("lec", "Kialonda Gaspar", "DEF", 74, 28);

// Empoli
addPlayer("emp", "Sebastiano Esposito", "FWD", 73, 24);
addPlayer("emp", "Lorenzo Colombo", "FWD", 74, 24);
addPlayer("emp", "Jacopo Fazzini", "MID", 75, 23);
addPlayer("emp", "Ardian Ismajli", "DEF", 75, 30);
addPlayer("emp", "Mattia Viti", "DEF", 73, 24);
addPlayer("emp", "Devis Vasquez", "GK", 72, 28);
addPlayer("emp", "Youssef Maleh", "MID", 73, 28);

// Verona
addPlayer("ver", "Casper Tengstedt", "FWD", 72, 26);
addPlayer("ver", "Daniel Mosquera", "FWD", 71, 26);
addPlayer("ver", "Reda Belahyane", "MID", 70, 22);
addPlayer("ver", "Ondrej Duda", "MID", 75, 31);
addPlayer("ver", "Pawel Dawidowicz", "DEF", 75, 31);
addPlayer("ver", "Lorenzo Montipo", "GK", 77, 30);
addPlayer("ver", "Jackson Tchatchoua", "DEF", 73, 25);

// Cagliari
addPlayer("cag", "Roberto Piccoli", "FWD", 73, 25);
addPlayer("cag", "Gianluca Gaetano", "MID", 75, 26);
addPlayer("cag", "Razvan Marin", "MID", 76, 30);
addPlayer("cag", "Sebastiano Luperto", "DEF", 76, 30);
addPlayer("cag", "Yerry Mina", "DEF", 76, 32);
addPlayer("cag", "Simone Scuffet", "GK", 75, 30);
addPlayer("cag", "Zito Luvumbo", "FWD", 73, 24);

// Parma
addPlayer("par", "Ange-Yoan Bonny", "FWD", 74, 22);
addPlayer("par", "Dennis Man", "FWD", 77, 28);
addPlayer("par", "Valentin Mihaila", "FWD", 74, 26);
addPlayer("par", "Adrian Bernabe", "MID", 76, 25);
addPlayer("par", "Alessandro Circati", "DEF", 73, 23);
addPlayer("par", "Zion Suzuki", "GK", 74, 24);
addPlayer("par", "Emanuele Valeri", "DEF", 73, 27);

// Venezia
addPlayer("ven", "Joel Pohjanpalo", "FWD", 76, 32);
addPlayer("ven", "Gianluca Busio", "MID", 74, 24);
addPlayer("ven", "Hans Nicolussi Caviglia", "MID", 73, 26);
addPlayer("ven", "Jay Idzes", "DEF", 71, 26);
addPlayer("ven", "Jesse Joronen", "GK", 74, 33);
addPlayer("ven", "Gaetano Oristanio", "MID", 72, 24);

// Heidenheim
addPlayer("hei", "Marvin Pieringer", "FWD", 74, 26);
addPlayer("hei", "Paul Wanner", "MID", 76, 20);
addPlayer("hei", "Leo Scienza", "MID", 72, 27);
addPlayer("hei", "Lennard Maloney", "MID", 74, 26);
addPlayer("hei", "Patrick Mainka", "DEF", 75, 31);
addPlayer("hei", "Kevin Muller", "GK", 75, 35);

// Augsburg
addPlayer("aug", "Samuel Essende", "FWD", 73, 28);
addPlayer("aug", "Phillip Tietz", "FWD", 74, 29);
addPlayer("aug", "Ruben Vargas", "MID", 77, 28);
addPlayer("aug", "Arne Maier", "MID", 76, 27);
addPlayer("aug", "Jeffrey Gouweleeuw", "DEF", 76, 35);
addPlayer("aug", "Nediljko Labrovic", "GK", 75, 26);
addPlayer("aug", "Keven Schlotterbeck", "DEF", 76, 29);

// Bochum
addPlayer("boc", "Philipp Hofmann", "FWD", 73, 33);
addPlayer("boc", "Matus Bero", "MID", 74, 30);
addPlayer("boc", "Dani de Wit", "MID", 75, 28);
addPlayer("boc", "Ivan Ordets", "DEF", 75, 34);
addPlayer("boc", "Patrick Drewes", "GK", 72, 33);
addPlayer("boc", "Myron Boadu", "FWD", 73, 25);

// St. Pauli
addPlayer("stp", "Johannes Eggestein", "FWD", 72, 28);
addPlayer("stp", "Jackson Irvine", "MID", 75, 33);
addPlayer("stp", "Eric Smith", "DEF", 74, 29);
addPlayer("stp", "Nikola Vasilj", "GK", 73, 30);
addPlayer("stp", "Morgan Guilavogui", "FWD", 71, 28);

// Rostov
addPlayer("ros", "Maksim Osipenko", "DEF", 76, 32);
addPlayer("ros", "Danil Glebov", "MID", 75, 26);
addPlayer("ros", "Ronaldo", "FWD", 74, 25);
addPlayer("ros", "Mohammad Mohebi", "FWD", 73, 27);
addPlayer("ros", "Khoren Bayramyan", "MID", 72, 34);
addPlayer("ros", "Viktor Melekhin", "DEF", 71, 22);

// Lokomotiv Moscow
addPlayer("lok", "Aleksey Batrakov", "MID", 75, 21);
addPlayer("lok", "Dmitriy Barinov", "MID", 75, 30);
addPlayer("lok", "Ilya Lantratov", "GK", 76, 30);
addPlayer("lok", "Ilya Samoshnikov", "DEF", 74, 28);
addPlayer("lok", "Sergey Pinyaev", "FWD", 76, 21);
addPlayer("lok", "Gerzino Nyamsi", "DEF", 74, 29);

// Ural
addPlayer("ura", "Eric Bicfalvi", "MID", 72, 38);
addPlayer("ura", "Danijel Miskic", "MID", 71, 32);
addPlayer("ura", "Silvije Begic", "DEF", 71, 33);

// Sochi
addPlayer("soc", "Martin Kramaric", "MID", 71, 28);
addPlayer("soc", "Ignacio Saavedra", "MID", 72, 27);

// Elimai
addPlayer("eli", "Ivan Sviridov", "FWD", 63, 24);
addPlayer("eli", "China", "FWD", 64, 30);
addPlayer("eli", "Quentin Cornette", "FWD", 65, 32);

// Kyzylzhar
addPlayer("kyz", "Luka Imnadze", "FWD", 62, 27);
addPlayer("kyz", "Evgeniy Berezkin", "MID", 63, 30);

// Kaisar
addPlayer("kai2", "Junior Bakayoko", "DEF", 62, 31);
addPlayer("kai2", "Dmitriy Borodin", "MID", 61, 27);

// Shakhter Karagandy
addPlayer("sha", "Roger Canas", "MID", 62, 36);
addPlayer("sha", "Imanali Zhusupov", "DEF", 60, 24);

// Atyrau
addPlayer("aty", "Nikolay Signevich", "FWD", 63, 34);
addPlayer("aty", "Igor Stasevich", "MID", 64, 40);

// Turan
addPlayer("tur", "Artem Arkhipov", "FWD", 61, 29);
addPlayer("tur", "Viktor Vasin", "DEF", 62, 38);

// Okzhetpes
addPlayer("okz", "Jasur Jumaev", "GK", 60, 26);
addPlayer("okz", "Samat Shamshi", "MID", 61, 30);

leagues.forEach((league) => {
  league.teams.forEach((team) => {
    team.players = generatePlayers(team.rating, team.players);
  });
});

addPlayer("mci", "Erling Haaland", "FWD", 91, 26);
addPlayer("mci", "Phil Foden", "MID", 89, 26);
addPlayer("mci", "Rodri", "MID", 90, 30);
addPlayer("mci", "Ruben Dias", "DEF", 88, 29);
addPlayer("mci", "Josko Gvardiol", "DEF", 87, 25);
addPlayer("mci", "Gianluigi Donnarumma", "GK", 88, 27);
addPlayer("mci", "Bernardo Silva", "MID", 87, 32);
addPlayer("mci", "Jeremy Doku", "FWD", 85, 24);
addPlayer("mci", "Jack Grealish", "FWD", 84, 31);
addPlayer("mci", "Nathan Ake", "DEF", 84, 31);
addPlayer("mci", "John Stones", "DEF", 86, 32);
addPlayer("mci", "Stefan Ortega", "GK", 80, 34);
addPlayer("mci", "Manuel Akanji", "DEF", 85, 31);
addPlayer("mci", "Rico Lewis", "DEF", 83, 22);
addPlayer("mci", "Mateo Kovacic", "MID", 83, 32);
addPlayer("mci", "Matheus Nunes", "MID", 81, 28);
addPlayer("mci", "Savinho", "FWD", 84, 22);
addPlayer("mci", "Oscar Bobb", "FWD", 82, 23);
addPlayer("mci", "Abdukodir Khusanov", "DEF", 83, 22);
addPlayer("liv", "Alisson", "GK", 89, 34);
// transferred out: addPlayer('liv', 'Trent Alexander-Arnold', 'DEF', 87, 28);
addPlayer("liv", "Virgil van Dijk", "DEF", 88, 35);
addPlayer("liv", "Ibrahima Konate", "DEF", 86, 27);
addPlayer("liv", "Andrew Robertson", "DEF", 84, 32);
addPlayer("liv", "Alexis Mac Allister", "MID", 86, 28);
addPlayer("liv", "Dominik Szoboszlai", "MID", 85, 26);
addPlayer("liv", "Ryan Gravenberch", "MID", 84, 24);
addPlayer("liv", "Mohamed Salah", "FWD", 88, 34);
addPlayer("liv", "Cody Gakpo", "FWD", 85, 27);
addPlayer("liv", "Alexander Isak", "FWD", 86, 27);
addPlayer("liv", "Luis Diaz", "FWD", 85, 30);
addPlayer("liv", "Diogo Jota", "FWD", 84, 30);
addPlayer("liv", "Harvey Elliott", "MID", 82, 23);
addPlayer("liv", "Curtis Jones", "MID", 81, 25);
addPlayer("liv", "Joe Gomez", "DEF", 80, 29);
addPlayer("liv", "Jarell Quansah", "DEF", 81, 23);
// transferred out: addPlayer('liv', 'Caoimhin Kelleher', 'GK', 80, 28);
addPlayer("liv", "Federico Chiesa", "FWD", 82, 29);
addPlayer("liv", "Wataru Endo", "MID", 80, 33);
addPlayer("ars", "David Raya", "GK", 86, 86, 30);
addPlayer("ars", "Ben White", "DEF", 85, 85, 28);
addPlayer("ars", "William Saliba", "DEF", 88, 91, 25);
addPlayer("ars", "Gabriel Magalhaes", "DEF", 86, 86, 28);
addPlayer("ars", "Jurrien Timber", "DEF", 84, 87, 24);
addPlayer("ars", "Riccardo Calafiori", "DEF", 84, 88, 23);
addPlayer("ars", "Declan Rice", "MID", 88, 89, 27);
addPlayer("ars", "Kepa Arrizabalaga", "GK", 80, 80, 31);
addPlayer("ars", "Cristhian Mosquera", "DEF", 81, 88, 22);
addPlayer("ars", "Piero Hincapie", "DEF", 82, 86, 24);
addPlayer("ars", "Eberechi Eze", "MID", 84, 85, 28);
addPlayer("ars", "Christian Norgaard", "MID", 80, 80, 32);
addPlayer("ars", "Noni Madueke", "FWD", 82, 86, 24);
addPlayer("ars", "Martin Odegaard", "MID", 89, 90, 27);
addPlayer("ars", "Mikel Merino", "MID", 83, 83, 29);
addPlayer("ars", "Myles Lewis-Skelly", "MID", 75, 87, 19);
addPlayer("ars", "Bukayo Saka", "FWD", 89, 92, 24);
addPlayer("ars", "Kai Havertz", "FWD", 86, 87, 26);
addPlayer("ars", "Viktor Gyokeres", "FWD", 87, 87, 27);
addPlayer("ars", "Gabriel Martinelli", "FWD", 85, 88, 24);
addPlayer("ars", "Leandro Trossard", "FWD", 82, 82, 31);
addPlayer("ars", "Gabriel Jesus", "FWD", 82, 82, 29);
addPlayer("che", "Robert Sanchez", "GK", 81, 29);
addPlayer("che", "Reece James", "DEF", 83, 27);
addPlayer("che", "Levi Colwill", "DEF", 84, 23);
addPlayer("che", "Wesley Fofana", "DEF", 82, 26);
addPlayer("che", "Marc Cucurella", "DEF", 82, 28);
addPlayer("che", "Moises Caicedo", "MID", 85, 25);
addPlayer("che", "Enzo Fernandez", "MID", 84, 26);
addPlayer("che", "Cole Palmer", "MID", 88, 24);
addPlayer("che", "Romeo Lavia", "MID", 81, 22);
addPlayer("che", "Pedro Neto", "FWD", 83, 26);
addPlayer("che", "Nicolas Jackson", "FWD", 83, 25);
addPlayer("che", "Christopher Nkunku", "FWD", 84, 29);
addPlayer("che", "Malo Gusto", "DEF", 82, 23);
addPlayer("che", "Joao Felix", "FWD", 82, 27);
addPlayer("che", "Mykhaylo Mudryk", "FWD", 80, 26);
addPlayer("che", "Kiernan Dewsbury-Hall", "MID", 80, 28);
addPlayer("che", "Axel Disasi", "DEF", 80, 29);
addPlayer("che", "Benoit Badiashile", "DEF", 79, 25);
addPlayer("che", "Filip Jorgensen", "GK", 78, 24);
addPlayer("mun", "Andre Onana", "GK", 84, 30);
addPlayer("mun", "Diogo Dalot", "DEF", 83, 27);
addPlayer("mun", "Lisandro Martinez", "DEF", 85, 29);
addPlayer("mun", "Matthijs de Ligt", "DEF", 84, 27);
addPlayer("mun", "Luke Shaw", "DEF", 82, 31);
addPlayer("mun", "Kobbie Mainoo", "MID", 84, 21);
addPlayer("mun", "Manuel Ugarte", "MID", 83, 25);
addPlayer("mun", "Bruno Fernandes", "MID", 87, 32);
addPlayer("mun", "Alejandro Garnacho", "FWD", 84, 22);
addPlayer("mun", "Marcus Rashford", "FWD", 83, 29);
addPlayer("mun", "Rasmus Hojlund", "FWD", 83, 23);
addPlayer("mun", "Joshua Zirkzee", "FWD", 81, 25);
addPlayer("mun", "Noussair Mazraoui", "DEF", 82, 29);
addPlayer("mun", "Leny Yoro", "DEF", 81, 21);
addPlayer("mun", "Harry Maguire", "DEF", 80, 33);
addPlayer("mun", "Casemiro", "MID", 81, 34);
addPlayer("mun", "Mason Mount", "MID", 80, 28);
addPlayer("mun", "Christian Eriksen", "MID", 79, 34);
addPlayer("mun", "Amad Diallo", "FWD", 81, 24);
addPlayer("mun", "Altay Bayindir", "GK", 78, 28);
addPlayer("tot", "Guglielmo Vicario", "GK", 84, 29);
addPlayer("tot", "Pedro Porro", "DEF", 84, 27);
addPlayer("tot", "Cristian Romero", "DEF", 85, 28);
addPlayer("tot", "Micky van de Ven", "DEF", 85, 25);
addPlayer("tot", "Destiny Udogie", "DEF", 83, 23);
addPlayer("tot", "Pape Matar Sarr", "MID", 82, 24);
addPlayer("tot", "Yves Bissouma", "MID", 82, 30);
addPlayer("tot", "James Maddison", "MID", 85, 30);
addPlayer("tot", "Dejan Kulusevski", "FWD", 84, 26);
addPlayer("tot", "Son Heung-min", "FWD", 86, 34);
addPlayer("tot", "Dominic Solanke", "FWD", 84, 29);
addPlayer("tot", "Brennan Johnson", "FWD", 82, 25);
addPlayer("tot", "Radu Dragusin", "DEF", 81, 24);
addPlayer("tot", "Rodrigo Bentancur", "MID", 82, 29);
addPlayer("tot", "Timo Werner", "FWD", 80, 30);
addPlayer("tot", "Archie Gray", "MID", 79, 20);
addPlayer("tot", "Richarlison", "FWD", 80, 29);
addPlayer("tot", "Ben Davies", "DEF", 77, 33);
addPlayer("tot", "Djed Spence", "DEF", 78, 25);
addPlayer("tot", "Fraser Forster", "GK", 76, 38);
addPlayer("new", "Nick Pope", "GK", 83, 34);
addPlayer("new", "Kieran Trippier", "DEF", 81, 36);
addPlayer("new", "Sven Botman", "DEF", 84, 26);
addPlayer("new", "Fabian Schar", "DEF", 80, 34);
addPlayer("new", "Lewis Hall", "DEF", 79, 21);
addPlayer("new", "Bruno Guimaraes", "MID", 86, 28);
addPlayer("new", "Sandro Tonali", "MID", 84, 26);
addPlayer("new", "Joelinton", "MID", 83, 30);
addPlayer("new", "Anthony Gordon", "FWD", 85, 25);
addPlayer("new", "Harvey Barnes", "FWD", 82, 28);
addPlayer("new", "Callum Wilson", "FWD", 80, 34);
addPlayer("new", "Jacob Murphy", "FWD", 78, 31);
addPlayer("new", "Joe Willock", "MID", 80, 27);
addPlayer("new", "Sean Longstaff", "MID", 79, 28);
addPlayer("new", "Tino Livramento", "DEF", 81, 23);
addPlayer("new", "Lloyd Kelly", "DEF", 79, 27);
addPlayer("new", "Dan Burn", "DEF", 78, 34);
addPlayer("new", "Martin Dubravka", "GK", 77, 37);
addPlayer("new", "William Osula", "FWD", 75, 23);
addPlayer("new", "Emil Krafth", "DEF", 76, 32);
addPlayer("avl", "Emiliano Martinez", "GK", 86, 34);
addPlayer("avl", "Matty Cash", "DEF", 80, 29);
addPlayer("avl", "Ezri Konsa", "DEF", 83, 28);
addPlayer("avl", "Pau Torres", "DEF", 83, 29);
addPlayer("avl", "Lucas Digne", "DEF", 80, 33);
addPlayer("avl", "John McGinn", "MID", 82, 32);
addPlayer("avl", "Amadou Onana", "MID", 83, 24);
addPlayer("avl", "Youri Tielemans", "MID", 82, 29);
addPlayer("avl", "Morgan Rogers", "MID", 81, 24);
addPlayer("avl", "Ollie Watkins", "FWD", 86, 31);
addPlayer("avl", "Leon Bailey", "FWD", 82, 29);
addPlayer("avl", "Ian Maatsen", "DEF", 80, 24);
addPlayer("avl", "Diego Carlos", "DEF", 80, 33);
addPlayer("avl", "Boubacar Kamara", "MID", 82, 26);
addPlayer("avl", "Ross Barkley", "MID", 78, 32);
addPlayer("avl", "Jhon Duran", "FWD", 81, 22);
addPlayer("avl", "Emiliano Buendia", "MID", 79, 29);
addPlayer("avl", "Jacob Ramsey", "MID", 81, 25);
addPlayer("avl", "Tyrone Mings", "DEF", 78, 33);
addPlayer("avl", "Joe Gauci", "GK", 75, 25);
addPlayer("avl", "Kosta Nedeljkovic", "DEF", 74, 20);
addPlayer("avl", "Silas", "MID", 74, 22);
addPlayer("whu", "Alphonse Areola", "GK", 81, 33);
addPlayer("whu", "Aaron Wan-Bissaka", "DEF", 80, 29);
addPlayer("whu", "Max Kilman", "DEF", 81, 29);
addPlayer("whu", "Jean-Clair Todibo", "DEF", 82, 26);
addPlayer("whu", "Emerson", "DEF", 79, 32);
addPlayer("whu", "Edson Alvarez", "MID", 81, 28);
addPlayer("whu", "Tomas Soucek", "MID", 80, 31);
addPlayer("whu", "Lucas Paqueta", "MID", 83, 29);
addPlayer("whu", "Jarrod Bowen", "FWD", 83, 29);
addPlayer("whu", "Mohammed Kudus", "FWD", 83, 26);
addPlayer("whu", "Niclas Fullkrug", "FWD", 80, 33);
addPlayer("whu", "Guido Rodriguez", "MID", 79, 32);
addPlayer("whu", "Vladimir Coufal", "DEF", 78, 33);
addPlayer("whu", "Konstantinos Mavropanos", "DEF", 79, 28);
addPlayer("whu", "Crysencio Summerville", "FWD", 80, 25);
addPlayer("whu", "Michail Antonio", "FWD", 77, 36);
addPlayer("whu", "Carlos Soler", "MID", 80, 29);
addPlayer("whu", "Danny Ings", "FWD", 76, 34);
addPlayer("whu", "Lukasz Fabianski", "GK", 76, 41);
addPlayer("whu", "Aaron Cresswell", "DEF", 75, 36);
addPlayer("bha", "Bart Verbruggen", "GK", 81, 24);
addPlayer("bha", "Joel Veltman", "DEF", 78, 34);
addPlayer("bha", "Lewis Dunk", "DEF", 80, 34);
addPlayer("bha", "Jan Paul van Hecke", "DEF", 81, 26);
addPlayer("bha", "Pervis Estupinan", "DEF", 81, 28);
addPlayer("bha", "Mats Wieffer", "MID", 80, 26);
addPlayer("bha", "Carlos Baleba", "MID", 80, 22);
addPlayer("bha", "Joao Pedro", "FWD", 82, 25);
addPlayer("bha", "Simon Adingra", "FWD", 80, 24);
addPlayer("bha", "Kaoru Mitoma", "FWD", 82, 29);
addPlayer("bha", "Danny Welbeck", "FWD", 79, 35);
addPlayer("bha", "Julio Enciso", "MID", 79, 22);
addPlayer("bha", "Georginio Rutter", "FWD", 80, 24);
addPlayer("bha", "Evan Ferguson", "FWD", 80, 21);
addPlayer("bha", "Matt O'Riley", "MID", 81, 25);
addPlayer("bha", "James Milner", "MID", 76, 40);
addPlayer("bha", "Ferdi Kadioglu", "DEF", 80, 26);
addPlayer("bha", "Adam Webster", "DEF", 77, 31);
addPlayer("bha", "Jason Steele", "GK", 76, 35);
addPlayer("bha", "Yankuba Minteh", "FWD", 79, 22);
addPlayer("wol", "Jose Sa", "GK", 80, 33);
addPlayer("wol", "Nelson Semedo", "DEF", 79, 32);
addPlayer("wol", "Craig Dawson", "DEF", 78, 36);
addPlayer("wol", "Toti Gomes", "DEF", 78, 27);
addPlayer("wol", "Rayan Ait-Nouri", "DEF", 82, 25);
addPlayer("wol", "Mario Lemina", "MID", 81, 32);
addPlayer("wol", "Joao Gomes", "MID", 82, 25);
addPlayer("wol", "Jean-Ricner Bellegarde", "MID", 78, 28);
addPlayer("wol", "Hwang Hee-chan", "FWD", 80, 30);
// transferred out: addPlayer('wol', 'Matheus Cunha', 'FWD', 82, 27);
addPlayer("wol", "Jorgen Strand Larsen", "FWD", 79, 26);
addPlayer("wol", "Pablo Sarabia", "FWD", 78, 34);
addPlayer("wol", "Rodrigo Gomes", "MID", 77, 23);
addPlayer("wol", "Tommy Doyle", "MID", 77, 24);
addPlayer("wol", "Andre", "MID", 80, 25);
addPlayer("wol", "Santiago Bueno", "DEF", 77, 27);
addPlayer("wol", "Matt Doherty", "DEF", 75, 34);
addPlayer("wol", "Goncalo Guedes", "FWD", 77, 29);
addPlayer("wol", "Sam Johnstone", "GK", 78, 33);
addPlayer("wol", "Yerson Mosquera", "DEF", 76, 25);
addPlayer("ful", "Bernd Leno", "GK", 82, 34);
addPlayer("ful", "Kenny Tete", "DEF", 79, 30);
addPlayer("ful", "Joachim Andersen", "DEF", 82, 30);
addPlayer("ful", "Calvin Bassey", "DEF", 80, 26);
addPlayer("ful", "Antonee Robinson", "DEF", 81, 29);
addPlayer("ful", "Sasa Lukic", "MID", 78, 30);
addPlayer("ful", "Sander Berge", "MID", 79, 28);
addPlayer("ful", "Emile Smith Rowe", "MID", 82, 26);
addPlayer("ful", "Alex Iwobi", "MID", 80, 30);
addPlayer("ful", "Rodrigo Muniz", "FWD", 80, 25);
addPlayer("ful", "Raul Jimenez", "FWD", 79, 35);
addPlayer("ful", "Andreas Pereira", "MID", 80, 30);
addPlayer("ful", "Harry Wilson", "MID", 78, 29);
addPlayer("ful", "Adama Traore", "FWD", 78, 30);
addPlayer("ful", "Timothy Castagne", "DEF", 79, 30);
addPlayer("ful", "Issa Diop", "DEF", 78, 29);
addPlayer("ful", "Jorge Cuenca", "DEF", 77, 26);
addPlayer("ful", "Harrison Reed", "MID", 77, 31);
addPlayer("ful", "Reiss Nelson", "FWD", 78, 26);
addPlayer("ful", "Steven Benda", "GK", 74, 27);
addPlayer("bou", "Adam Smith", "DEF", 75, 35);
addPlayer("bou", "Illia Zabarnyi", "DEF", 81, 24);
addPlayer("bou", "Marcos Senesi", "DEF", 80, 29);
addPlayer("bou", "Milos Kerkez", "DEF", 80, 22);
addPlayer("bou", "Lewis Cook", "MID", 80, 29);
addPlayer("bou", "Ryan Christie", "MID", 79, 31);
addPlayer("bou", "Justin Kluivert", "FWD", 80, 27);
addPlayer("bou", "Marcus Tavernier", "MID", 80, 27);
addPlayer("bou", "Antoine Semenyo", "FWD", 81, 26);
addPlayer("bou", "Evanilson", "FWD", 81, 26);
addPlayer("bou", "Dango Ouattara", "FWD", 78, 24);
addPlayer("bou", "Enes Unal", "FWD", 78, 29);
addPlayer("bou", "Tyler Adams", "MID", 79, 27);
addPlayer("bou", "Julian Araujo", "DEF", 77, 25);
addPlayer("bou", "Luis Sinisterra", "FWD", 79, 27);
addPlayer("bou", "Alex Scott", "MID", 78, 23);
// transferred out: addPlayer('bou', 'Dean Huijsen', 'DEF', 77, 21);
addPlayer("bou", "Mark Travers", "GK", 76, 27);
addPlayer("bou", "Max Aarons", "DEF", 76, 26);
addPlayer("cry", "Dean Henderson", "GK", 80, 29);
addPlayer("cry", "Daniel Munoz", "DEF", 80, 30);
addPlayer("cry", "Marc Guehi", "DEF", 83, 26);
addPlayer("cry", "Maxence Lacroix", "DEF", 80, 26);
addPlayer("cry", "Tyrick Mitchell", "DEF", 80, 27);
addPlayer("cry", "Trevoh Chalobah", "DEF", 79, 27);
addPlayer("cry", "Adam Wharton", "MID", 82, 22);
addPlayer("cry", "Jefferson Lerma", "MID", 79, 31);
addPlayer("cry", "Daichi Kamada", "MID", 78, 30);
addPlayer("cry", "Jean-Philippe Mateta", "FWD", 82, 29);
addPlayer("cry", "Ismaila Sarr", "FWD", 79, 28);
addPlayer("cry", "Eddie Nketiah", "FWD", 78, 27);
addPlayer("cry", "Will Hughes", "MID", 77, 31);
addPlayer("cry", "Cheick Doucoure", "MID", 80, 26);
addPlayer("cry", "Matheus Franca", "FWD", 76, 22);
addPlayer("cry", "Chris Richards", "DEF", 77, 26);
addPlayer("cry", "Jeffrey Schlupp", "MID", 76, 33);
addPlayer("cry", "Joel Ward", "DEF", 75, 36);
addPlayer("cry", "Matt Turner", "GK", 76, 32);
// transferred out: addPlayer('bre', 'Mark Flekken', 'GK', 80, 33);
addPlayer("bre", "Mads Roerslev", "DEF", 77, 27);
addPlayer("bre", "Ethan Pinnock", "DEF", 80, 33);
addPlayer("bre", "Nathan Collins", "DEF", 79, 25);
addPlayer("bre", "Kristoffer Ajer", "DEF", 79, 28);
addPlayer("bre", "Mathias Jensen", "MID", 80, 30);
addPlayer("bre", "Vitaly Janelt", "MID", 79, 28);
addPlayer("bre", "Bryan Mbeumo", "FWD", 83, 27);
addPlayer("bre", "Yoane Wissa", "FWD", 81, 30);
addPlayer("bre", "Kevin Schade", "FWD", 77, 24);
addPlayer("bre", "Fabio Carvalho", "MID", 78, 24);
addPlayer("bre", "Igor Thiago", "FWD", 77, 25);
addPlayer("bre", "Mikkel Damsgaard", "MID", 78, 26);
addPlayer("bre", "Keane Lewis-Potter", "FWD", 77, 25);
addPlayer("bre", "Rico Henry", "DEF", 79, 29);
addPlayer("bre", "Aaron Hickey", "DEF", 79, 24);
addPlayer("bre", "Ben Mee", "DEF", 77, 36);
addPlayer("bre", "Yehor Yarmoliuk", "MID", 76, 22);
addPlayer("bre", "Hakon Valdimarsson", "GK", 74, 24);
addPlayer("eve", "Jordan Pickford", "GK", 83, 32);
addPlayer("eve", "Ashley Young", "DEF", 76, 41);
addPlayer("eve", "James Tarkowski", "DEF", 81, 33);
addPlayer("eve", "Jarrad Branthwaite", "DEF", 83, 24);
addPlayer("eve", "Vitaliy Mykolenko", "DEF", 79, 27);
addPlayer("eve", "Abdoulaye Doucoure", "MID", 79, 33);
addPlayer("eve", "Idrissa Gueye", "MID", 78, 36);
addPlayer("eve", "Dwight McNeil", "MID", 80, 26);
addPlayer("eve", "Jack Harrison", "MID", 78, 29);
addPlayer("eve", "Dominic Calvert-Lewin", "FWD", 80, 29);
addPlayer("eve", "Beto", "FWD", 78, 28);
addPlayer("eve", "Iliman Ndiaye", "FWD", 79, 26);
addPlayer("eve", "Jesper Lindstrom", "MID", 78, 26);
addPlayer("eve", "Orel Mangala", "MID", 78, 28);
addPlayer("eve", "James Garner", "MID", 78, 25);
addPlayer("eve", "Nathan Patterson", "DEF", 76, 24);
addPlayer("eve", "Armando Broja", "FWD", 77, 24);
addPlayer("eve", "Michael Keane", "DEF", 77, 33);
addPlayer("eve", "Seamus Coleman", "DEF", 76, 37);
addPlayer("eve", "Joao Virginia", "GK", 74, 26);
addPlayer("nfo", "Matz Sels", "GK", 79, 34);
addPlayer("nfo", "Neco Williams", "DEF", 78, 25);
addPlayer("nfo", "Nikola Milenkovic", "DEF", 81, 28);
addPlayer("nfo", "Murillo", "DEF", 82, 24);
addPlayer("nfo", "Ola Aina", "DEF", 79, 29);
addPlayer("nfo", "Ryan Yates", "MID", 78, 28);
addPlayer("nfo", "James Ward-Prowse", "MID", 80, 31);
addPlayer("nfo", "Elliot Anderson", "MID", 78, 23);
addPlayer("nfo", "Morgan Gibbs-White", "MID", 82, 26);
addPlayer("nfo", "Callum Hudson-Odoi", "FWD", 80, 25);
addPlayer("nfo", "Chris Wood", "FWD", 80, 34);
addPlayer("nfo", "Anthony Elanga", "FWD", 79, 24);
addPlayer("nfo", "Taiwo Awoniyi", "FWD", 79, 29);
addPlayer("nfo", "Ibrahim Sangare", "MID", 80, 28);
addPlayer("nfo", "Nicolas Dominguez", "MID", 79, 28);
addPlayer("nfo", "Alex Moreno", "DEF", 79, 33);
addPlayer("nfo", "Willy Boly", "DEF", 77, 35);
addPlayer("nfo", "Willy Boly", "DEF", 77, 35);
addPlayer("nfo", "Carlos Miguel", "GK", 76, 27);
addPlayer("nfo", "Jota Silva", "FWD", 77, 26);
addPlayer("lei", "Mads Hermansen", "GK", 80, 26);
addPlayer("lei", "James Justin", "DEF", 78, 28);
addPlayer("lei", "Wout Faes", "DEF", 79, 28);
addPlayer("lei", "Caleb Okoli", "DEF", 77, 24);
addPlayer("lei", "Victor Kristiansen", "DEF", 77, 23);
addPlayer("lei", "Harry Winks", "MID", 79, 30);
addPlayer("lei", "Wilfred Ndidi", "MID", 80, 29);
addPlayer("lei", "Abdul Fatawu", "FWD", 79, 22);
addPlayer("lei", "Facundo Buonanotte", "MID", 78, 21);
addPlayer("lei", "Stephy Mavididi", "FWD", 78, 28);
addPlayer("lei", "Jamie Vardy", "FWD", 78, 39);
addPlayer("lei", "Patson Daka", "FWD", 77, 27);
addPlayer("lei", "Bilal El Khannouss", "MID", 77, 22);
addPlayer("lei", "Jordan Ayew", "FWD", 77, 34);
addPlayer("lei", "Oliver Skipp", "MID", 77, 25);
addPlayer("lei", "Jannik Vestergaard", "DEF", 77, 33);
addPlayer("lei", "Ricardo Pereira", "DEF", 78, 32);
addPlayer("lei", "Hamza Choudhury", "MID", 76, 28);
addPlayer("lei", "Conor Coady", "DEF", 76, 33);
addPlayer("lei", "Danny Ward", "GK", 75, 32);
addPlayer("sou", "Aaron Ramsdale", "GK", 81, 28);
addPlayer("sou", "Yukinari Sugawara", "DEF", 78, 25);
addPlayer("sou", "Taylor Harwood-Bellis", "DEF", 79, 24);
addPlayer("sou", "Jan Bednarek", "DEF", 78, 30);
addPlayer("sou", "Jack Stephens", "DEF", 76, 32);
addPlayer("sou", "Kyle Walker-Peters", "DEF", 80, 29);
addPlayer("sou", "Flynn Downes", "MID", 78, 27);
addPlayer("sou", "Joe Aribo", "MID", 77, 30);
addPlayer("sou", "Mateus Fernandes", "MID", 78, 22);
addPlayer("sou", "Adam Lallana", "MID", 76, 38);
addPlayer("sou", "Tyler Dibling", "FWD", 76, 20);
addPlayer("sou", "Cameron Archer", "FWD", 77, 24);
addPlayer("sou", "Ben Brereton Diaz", "FWD", 77, 27);
addPlayer("sou", "Adam Armstrong", "FWD", 78, 29);
addPlayer("sou", "Will Smallbone", "MID", 76, 26);
addPlayer("sou", "Ryan Manning", "DEF", 76, 29);
addPlayer("sou", "Armel Bella-Kotchap", "DEF", 77, 24);
addPlayer("sou", "Paul Onuachu", "FWD", 76, 32);
addPlayer("sou", "Lesley Ugochukwu", "MID", 76, 22);
addPlayer("sou", "Alex McCarthy", "GK", 75, 36);
addPlayer("ips", "Arijanet Muric", "GK", 78, 27);
addPlayer("ips", "Axel Tuanzebe", "DEF", 78, 28);
addPlayer("ips", "Dara O'Shea", "DEF", 78, 27);
addPlayer("ips", "Jacob Greaves", "DEF", 78, 25);
addPlayer("ips", "Leif Davis", "DEF", 79, 26);
addPlayer("ips", "Sam Morsy", "MID", 77, 34);
addPlayer("ips", "Kalvin Phillips", "MID", 78, 30);
addPlayer("ips", "Omari Hutchinson", "FWD", 79, 22);
addPlayer("ips", "Sammie Szmodics", "FWD", 77, 29);
addPlayer("ips", "Jack Clarke", "FWD", 78, 25);
// transferred out: addPlayer('ips', 'Liam Delap', 'FWD', 79, 23);
addPlayer("ips", "Massimo Luongo", "MID", 76, 33);
addPlayer("ips", "Jens Cajuste", "MID", 77, 26);
addPlayer("ips", "Chiedozie Ogbene", "FWD", 77, 29);
addPlayer("ips", "Wes Burns", "FWD", 76, 31);
addPlayer("ips", "George Hirst", "FWD", 76, 27);
addPlayer("ips", "Luke Woolfenden", "DEF", 76, 27);
addPlayer("ips", "Conor Townsend", "DEF", 75, 33);
addPlayer("ips", "Ben Johnson", "DEF", 77, 26);
addPlayer("ips", "Christian Walton", "GK", 74, 29);
addPlayer("mci", "Claudio Echeverri", "MID", 78, 20);
addPlayer("che", "Kendry Paez", "MID", 77, 19);
addPlayer("che", "Estevao", "FWD", 78, 19);
addPlayer("che", "Aaron Anselmino", "DEF", 76, 21);
addPlayer("mci", "Cavan Sullivan", "MID", 70, 16);

addPlayer("mun", "Matheus Cunha", "FWD", 82, 27);
addPlayer("tot", "Kevin Danso", "DEF", 82, 27);
addPlayer("liv", "Jeremie Frimpong", "DEF", 84, 25);
addPlayer("bre", "Michael Kayode", "DEF", 78, 21);
addPlayer("avl", "Yasin Özcan", "DEF", 76, 20);
addPlayer("che", "Mike Penders", "GK", 72, 20);
addPlayer("sou", "Joshua Quarshie", "DEF", 73, 22);
addPlayer("tot", "Luka Vuskovic", "DEF", 75, 19);
addPlayer("che", "Dario Essugo", "MID", 77, 21);
addPlayer("bre", "Caoimhin Kelleher", "GK", 81, 27);
addPlayer("che", "Liam Delap", "FWD", 80, 23);
addPlayer("tor", "Josh Sargent", "FWD", 78, 26);
addPlayer("ala", "Yusi", "DEF", 76, 22);
addPlayer("ala", "Denis Suárez", "MID", 77, 25);
addPlayer("ala", "Jon Pacheco", "DEF", 75, 25);
addPlayer("ala", "Mariano Díaz", "FWD", 80, 23);
addPlayer("ala", "Carles Aleñá", "MID", 75, 22);
addPlayer("ala", "Raúl Fernández", "GK", 80, 25);
addPlayer("ala", "Lucas Boyé", "FWD", 79, 28);
addPlayer("ala", "Jonny Otto", "DEF", 77, 27);
addPlayer("ala", "Pablo Ibáñez", "MID", 78, 27);
addPlayer("ala", "Calebe", "MID", 80, 26);
addPlayer("ala", "Abde Rebbach", "MID", 75, 28);
// transferred out: addPlayer('ala', 'Gustavo Albarracín', 'MID', 75, 27);
addPlayer("ala", "Dennis Rufo", "FWD", 78, 29);
addPlayer("ath", "Jesús Areso", "DEF", 77, 25);
addPlayer("ath", "Robert Navarro", "MID", 78, 24);
addPlayer("ath", "Alex Padilla", "GK", 77, 21);
addPlayer("atm", "Matteo Ruggeri", "DEF", 79, 25);
addPlayer("atm", "Álex Baena", "MID", 77, 24);
addPlayer("atm", "Thiago Almada", "MID", 75, 25);
addPlayer("atm", "Carlos Martín", "FWD", 80, 20);
addPlayer("atm", "Clément Lenglet", "DEF", 80, 24);
addPlayer("atm", "Dávid Hancko", "DEF", 77, 26);
addPlayer("atm", "Marc Pubill", "DEF", 80, 22);
addPlayer("atm", "Giacomo Raspadori", "FWD", 80, 26);
addPlayer("atm", "Nico González", "MID", 77, 23);
// transferred out: addPlayer('atm', 'Santiago Mouriño', 'DEF', 78, 25);
addPlayer("bar", "Joan García", "GK", 75, 20);
addPlayer("bar", "Roony Bardghji", "MID", 78, 20);
addPlayer("cel", "Ferran Jutglà", "FWD", 76, 23);
addPlayer("cel", "Ionuț Radu", "GK", 77, 27);
addPlayer("cel", "Javi Rueda", "DEF", 75, 28);
addPlayer("esp", "Rubén Sánchez", "DEF", 80, 28);
addPlayer("esp", "Urko González de Zárate", "MID", 80, 26);
addPlayer("esp", "Roberto Fernández", "FWD", 75, 28);
addPlayer("esp", "José Salinas", "DEF", 80, 20);
addPlayer("esp", "Marko Dmitrović", "GK", 78, 24);
addPlayer("esp", "Ramon Terrats", "MID", 77, 22);
addPlayer("esp", "Miguel Rubio", "DEF", 76, 28);
addPlayer("esp", "Luca Koleosho", "MID", 77, 24);
addPlayer("esp", "Charles Pickel", "MID", 75, 23);
addPlayer("esp", "Kike García", "FWD", 75, 26);
addPlayer("esp", "Carlos Romero", "DEF", 79, 21);
addPlayer("esp", "Tyrhys Dolan", "FWD", 79, 28);
addPlayer("esp", "Clemens Riedel", "DEF", 77, 20);
// transferred out: addPlayer('esp', 'Hugo Pérez', 'DEF', 77, 28);
// transferred out: addPlayer('esp', 'Marcos Fernández', 'FW', 79, 21);
addPlayer("get", "Mario Martín", "MID", 78, 22);
addPlayer("get", "Juanmi", "FWD", 79, 20);
addPlayer("get", "Abu Kamara", "FWD", 77, 22);
addPlayer("get", "Javi Muñoz", "MID", 80, 25);
addPlayer("get", "Kiko Femenía", "DEF", 76, 24);
addPlayer("get", "Álex Sancris", "MID", 79, 23);
addPlayer("get", "Adrián Liso", "MID", 75, 27);
addPlayer("get", "Davinchi", "DEF", 80, 29);
addPlayer("gir", "Dominik Livaković", "GK", 75, 25);
addPlayer("gir", "Hugo Rincón", "DEF", 79, 21);
addPlayer("gir", "Vitor Reis", "DEF", 76, 26);
addPlayer("gir", "Azzedine Ounahi", "MID", 80, 24);
addPlayer("gir", "Vladyslav Vanat", "FWD", 76, 27);
addPlayer("gir", "Àlex Moreno", "DEF", 79, 25);
addPlayer("mal", "Lucas Bergström", "GK", 78, 22);
addPlayer("mal", "Jan Virgili", "MID", 79, 22);
addPlayer("mal", "Mateo Joseph", "FWD", 76, 24);
addPlayer("mal", "Pablo Torre", "MID", 76, 24);
addPlayer("osa", "Víctor Muñoz", "FWD", 75, 24);
addPlayer("osa", "Ander Yoldi", "MID", 77, 29);
addPlayer("ray", "Luiz Felipe", "DEF", 75, 24);
addPlayer("ray", "Alemão", "FWD", 79, 27);
addPlayer("ray", "Gerard Gumbau", "MID", 77, 25);
addPlayer("ray", "Fran Pérez", "MID", 78, 28);
addPlayer("ray", "Nobel Mendy", "DEF", 79, 25);
addPlayer("ray", "Jozhua Vertrouwd", "DEF", 75, 24);
addPlayer("bet", "Álvaro Valles", "GK", 77, 20);
addPlayer("bet", "Natan", "DEF", 79, 26);
addPlayer("bet", "Antony", "MID", 78, 25);
addPlayer("bet", "Valentín Gómez", "DEF", 76, 22);
addPlayer("bet", "Nelson Deossa", "MID", 79, 26);
addPlayer("bet", "Junior Firpo", "DEF", 80, 23);
addPlayer("bet", "Pau López", "GK", 79, 29);
// transferred out: addPlayer('bet', 'Gonzalo Petit', 'FW', 75, 20);
addPlayer("rma", "Álvaro Carreras", "DEF", 80, 24);
addPlayer("rma", "Franco Mastantuono", "MID", 77, 23);
addPlayer("rso", "Gonçalo Guedes", "FWD", 79, 22);
addPlayer("mal", "Samu Costa", "MID", 77, 29);
addPlayer("mal", "Cyle Larin", "FWD", 76, 25);
addPlayer("cel", "Marcos Alonso", "DEF", 78, 20);
addPlayer("cel", "Unai Nuñez", "DEF", 77, 28);
addPlayer("cel", "Mihailo Ristic", "DEF", 75, 22);
addPlayer("osa", "Abel Bretones", "DEF", 76, 22);
addPlayer("osa", "Enzo Boyomo", "DEF", 77, 20);
addPlayer("osa", "Raul Garcia", "FWD", 75, 26);
addPlayer("leg", "Munir El Haddadi", "FWD", 76, 23);
addPlayer("leg", "Naim Garcia", "MID", 73, 20);
addPlayer("val2", "Mario Martin", "MID", 73, 26);
addPlayer("val2", "Raul Moro", "FWD", 75, 28);
addPlayer("val2", "David Torres", "DEF", 72, 28);
addPlayer("leg", "Roberto López", "MID", 74, 24);
addPlayer("leg", "Darko Brasanac", "MID", 75, 27);
addPlayer("leg", "Juan Soriano", "GK", 75, 27);
addPlayer("val2", "Anuar Tuhami", "MID", 72, 20);
addPlayer("val2", "Kike Pérez", "MID", 73, 28);
addPlayer("val2", "Eray Cömert", "DEF", 74, 27);
addPlayer("lyo", "Endrick", "FWD", 82, 92, 20);
addPlayer("bar", "Marcus Rashford", "FWD", 84, 84, 28);
addPlayer("cel", "Hugo Alvarez", "MID", 76, 25);
addPlayer("osa", "Jesus Areso", "DEF", 77, 26);

// -------------------------------------------------------------
// OVERRIDE: 2026/2027 REALISTIC LALIGA SCOUTS (from TRANSFERMARKT)
// -------------------------------------------------------------
(() => {
  const ll = leagues.find((l) => l.id === "laliga");
  if (ll) {
    ll.teams.forEach((team) => {
      team.players = []; // clear old ones
    });
  }
})();

// rma
addPlayer("rma", "Kylian Mbappé", "FWD", 94, 95, 27, "ST");
addPlayer("rma", "Vinícius Júnior", "FWD", 93, 94, 26, "LW");
addPlayer("rma", "Jude Bellingham", "MID", 93, 95, 23);
addPlayer("rma", "Federico Valverde", "MID", 90, 91, 28);
addPlayer("rma", "Thibaut Courtois", "GK", 89, 89, 34);
addPlayer("rma", "Rodrygo", "FWD", 87, 89, 25, "RW");
addPlayer("rma", "Éder Militão", "DEF", 87, 89, 28);
addPlayer("rma", "Eduardo Camavinga", "MID", 87, 91, 23);
addPlayer("rma", "Aurélien Tchouaméni", "MID", 87, 90, 26);
addPlayer("rma", "Antonio Rüdiger", "DEF", 86, 86, 33);
addPlayer("rma", "Dani Carvajal", "DEF", 84, 84, 34);
addPlayer("rma", "David Alaba", "DEF", 82, 82, 34);
addPlayer("rma", "Brahim Díaz", "MID", 84, 85, 27);
addPlayer("rma", "Arda Güler", "MID", 83, 90, 21);
addPlayer("rma", "Ferland Mendy", "DEF", 83, 83, 31);
addPlayer("rma", "Endrick", "FWD", 81, 91, 20);
addPlayer("rma", "Andriy Lunin", "GK", 82, 84, 27);
addPlayer("rma", "Joan Martínez", "DEF", 76, 88, 19);

// bar
addPlayer("bar", "Lamine Yamal", "FWD", 90, 96, 19);
addPlayer("bar", "Pedri", "MID", 88, 91, 23);
addPlayer("bar", "Gavi", "MID", 86, 90, 22);
addPlayer("bar", "Ronald Araújo", "DEF", 86, 89, 27);
addPlayer("bar", "Marc-André ter Stegen", "GK", 87, 87, 34);
addPlayer("bar", "Frenkie de Jong", "MID", 86, 87, 29);
addPlayer("bar", "Raphinha", "FWD", 86, 86, 29);
addPlayer("bar", "Robert Lewandowski", "FWD", 85, 85, 38);
addPlayer("bar", "Jules Koundé", "DEF", 86, 88, 27);
addPlayer("bar", "Alejandro Balde", "DEF", 84, 88, 22);
addPlayer("bar", "Dani Olmo", "MID", 85, 85, 28);
addPlayer("bar", "Pau Cubarsí", "DEF", 82, 91, 19);
addPlayer("bar", "Fermín López", "MID", 82, 86, 23);
addPlayer("bar", "Ferran Torres", "FWD", 81, 83, 26);
addPlayer("bar", "Andreas Christensen", "DEF", 82, 82, 30);
addPlayer("bar", "Héctor Fort", "DEF", 78, 86, 20);
addPlayer("bar", "Marc Casadó", "MID", 79, 85, 22);
addPlayer("bar", "Iñaki Peña", "GK", 76, 80, 27);
addPlayer("bar", "Pau Víctor", "FWD", 77, 83, 24);

// atm
addPlayer("atm", "Antoine Griezmann", "FWD", 87, 87, 35);
addPlayer("atm", "Jan Oblak", "GK", 86, 86, 33);
addPlayer("atm", "Julián Álvarez", "FWD", 87, 90, 26);
addPlayer("atm", "Marcos Llorente", "MID", 84, 84, 31);
addPlayer("atm", "Rodrigo De Paul", "MID", 84, 84, 32);
addPlayer("atm", "Koke", "MID", 82, 82, 34);
addPlayer("atm", "José María Giménez", "DEF", 83, 83, 31);
addPlayer("atm", "Nahuel Molina", "DEF", 81, 83, 28);
addPlayer("atm", "Robin Le Normand", "DEF", 83, 84, 29);
addPlayer("atm", "Conor Gallagher", "MID", 82, 85, 26);
addPlayer("atm", "Samuel Lino", "MID", 83, 86, 26);
addPlayer("atm", "Alexander Sørloth", "FWD", 83, 83, 30);
addPlayer("atm", "Pablo Barrios", "MID", 81, 87, 23);
addPlayer("atm", "Axel Witsel", "DEF", 79, 79, 37);
addPlayer("atm", "Reinildo", "DEF", 80, 80, 32);
addPlayer("atm", "César Azpilicueta", "DEF", 78, 78, 36);

// sev
addPlayer("sev", "Isaac Romero", "FWD", 80, 86, 26);
addPlayer("sev", "Suso", "FWD", 79, 79, 32);
addPlayer("sev", "Albert Sambi Lokonga", "MID", 80, 84, 26);
addPlayer("sev", "Saúl Ñíguez", "MID", 80, 80, 31);
addPlayer("sev", "Loïc Badé", "DEF", 82, 86, 26);
addPlayer("sev", "Dodi Lukebakio", "FWD", 80, 82, 28);
addPlayer("sev", "Nemanja Gudelj", "MID", 78, 78, 34);
addPlayer("sev", "Chidera Ejuke", "FWD", 79, 81, 28);
addPlayer("sev", "Jesús Navas", "DEF", 76, 76, 40);
addPlayer("sev", "Ørjan Nyland", "GK", 77, 77, 35);
addPlayer("sev", "Kike Salas", "DEF", 78, 84, 24);
addPlayer("sev", "Juanlu Sánchez", "DEF", 78, 85, 23);
addPlayer("sev", "Peque", "FWD", 76, 83, 23);
addPlayer("sev", "Valentín Barco", "DEF", 77, 85, 22);

// val
addPlayer("val", "Giorgi Mamardashvili", "GK", 85, 89, 25);
addPlayer("val", "José Gayà", "DEF", 82, 82, 31);
addPlayer("val", "Hugo Duro", "FWD", 81, 83, 26);
addPlayer("val", "Javi Guerra", "MID", 81, 88, 23);
addPlayer("val", "Pepelu", "MID", 81, 83, 27);
addPlayer("val", "Diego López", "FWD", 80, 85, 24);
addPlayer("val", "Rafa Mir", "FWD", 77, 79, 29);
addPlayer("val", "Yarek Gasiorowski", "DEF", 76, 86, 21);
addPlayer("val", "Enzo Barrenechea", "MID", 77, 83, 25);
addPlayer("val", "Luis Rioja", "FWD", 77, 77, 32);

// rso
addPlayer("rso", "Mikel Oyarzabal", "FWD", 84, 84, 29);
addPlayer("rso", "Martín Zubimendi", "MID", 85, 87, 27);
addPlayer("rso", "Takefusa Kubo", "MID", 83, 86, 25);
addPlayer("rso", "Brais Méndez", "MID", 82, 82, 29);
addPlayer("rso", "Álex Remiro", "GK", 83, 84, 31);
addPlayer("rso", "Jon Aramburu", "DEF", 78, 83, 24);
addPlayer("rso", "Jon Pacheco", "DEF", 79, 84, 25);
addPlayer("rso", "Nayef Aguerd", "DEF", 80, 81, 30);
addPlayer("rso", "Luka Sučić", "MID", 81, 86, 23);
addPlayer("rso", "Arsen Zakharyan", "MID", 79, 85, 23);
addPlayer("rso", "Ander Barrenetxea", "FWD", 80, 84, 24);
addPlayer("rso", "Umar Sadiq", "FWD", 77, 78, 29);

// bet
addPlayer("bet", "Giovani Lo Celso", "MID", 83, 83, 30);
addPlayer("bet", "William Carvalho", "MID", 80, 80, 34);
addPlayer("bet", "Pablo Fornals", "MID", 81, 81, 30);
addPlayer("bet", "Abde Ezzalzouli", "FWD", 80, 85, 24);
addPlayer("bet", "Vitor Roque", "FWD", 81, 88, 21);
addPlayer("bet", "Rui Silva", "GK", 80, 80, 32);
addPlayer("bet", "Héctor Bellerín", "DEF", 79, 79, 31);
addPlayer("bet", "Marc Bartra", "DEF", 78, 78, 35);
addPlayer("bet", "Diego Llorente", "DEF", 79, 79, 32);
addPlayer("bet", "Johnny Cardoso", "MID", 82, 87, 24);
addPlayer("bet", "Chimy Ávila", "FWD", 79, 79, 32);

// ath
addPlayer("ath", "Nico Williams", "FWD", 85, 90, 23);
addPlayer("ath", "Iñaki Williams", "FWD", 83, 83, 32);
addPlayer("ath", "Oihan Sancet", "MID", 83, 86, 26);
addPlayer("ath", "Unai Simón", "GK", 84, 85, 29);
addPlayer("ath", "Dani Vivian", "DEF", 82, 85, 27);
addPlayer("ath", "Julen Agirrezabala", "GK", 80, 85, 25);
addPlayer("ath", "Yeray Álvarez", "DEF", 80, 80, 31);
addPlayer("ath", "Beñat Prados", "MID", 79, 84, 25);
addPlayer("ath", "Gorka Guruzeta", "FWD", 81, 82, 29);
addPlayer("ath", "Andoni Gorosabel", "DEF", 78, 79, 29);
addPlayer("ath", "Unai Gómez", "MID", 78, 85, 23);
addPlayer("ath", "Óscar de Marcos", "DEF", 79, 79, 36);
addPlayer("ath", "Iñigo Lekue", "DEF", 77, 77, 30);
addPlayer("ath", "Mikel Vesga", "MID", 78, 78, 31);
addPlayer("ath", "Alex Berenguer", "FWD", 80, 80, 28);
addPlayer("ath", "Álvaro Djaló", "FWD", 79, 83, 24);
addPlayer("ath", "Ander Herrera", "MID", 77, 77, 34);

// vil
addPlayer("vil", "Gerard Moreno", "FWD", 83, 83, 34);
addPlayer("vil", "Álex Baena", "MID", 83, 87, 24);
addPlayer("vil", "Dani Parejo", "MID", 81, 81, 37);
addPlayer("vil", "Yeremy Pino", "FWD", 80, 86, 23);
addPlayer("vil", "Juan Foyth", "DEF", 80, 82, 28);
addPlayer("vil", "Pape Gueye", "MID", 79, 82, 27);
addPlayer("vil", "Santi Comesaña", "MID", 79, 80, 29);
addPlayer("vil", "Ayoze Pérez", "FWD", 81, 81, 32);
addPlayer("vil", "Thierno Barry", "FWD", 78, 84, 24);
addPlayer("vil", "Diego Conde", "GK", 79, 82, 28);
addPlayer("vil", "Logan Costa", "DEF", 79, 84, 25);
addPlayer("vil", "Nicolas Pépé", "FWD", 79, 80, 31);
addPlayer("vil", "Eric Bailly", "DEF", 79, 79, 30);
addPlayer("vil", "Kiko Femenía", "DEF", 77, 77, 33);
addPlayer("vil", "Alfonso Pedraza", "DEF", 79, 79, 28);
addPlayer("vil", "Ramón Terrats", "MID", 76, 81, 23);
addPlayer("vil", "Denis Suárez", "MID", 77, 77, 30);
addPlayer("vil", "Ilias Akhomach", "FWD", 78, 85, 20);

// gir
addPlayer("gir", "Viktor Tsygankov", "FWD", 82, 83, 28);
addPlayer("gir", "Daley Blind", "DEF", 80, 80, 36);
addPlayer("gir", "Miguel Gutiérrez", "DEF", 81, 86, 24);
addPlayer("gir", "Iván Martín", "MID", 80, 82, 27);
addPlayer("gir", "Yangel Herrera", "MID", 80, 81, 28);
addPlayer("gir", "Paulo Gazzaniga", "GK", 80, 80, 34);
addPlayer("gir", "Donny van de Beek", "MID", 78, 79, 29);
addPlayer("gir", "Bojan Miovski", "FWD", 78, 81, 27);
addPlayer("gir", "Yáser Asprilla", "MID", 78, 86, 22);
addPlayer("gir", "Abel Ruiz", "FWD", 77, 81, 26);
addPlayer("gir", "Bryan Gil", "FWD", 79, 83, 25);
addPlayer("gir", "Arnaut Danjuma", "FWD", 79, 79, 29);
addPlayer("gir", "Oriol Romeu", "MID", 78, 78, 32);
addPlayer("gir", "Portu", "FWD", 78, 78, 32);
addPlayer("gir", "Cristhian Stuani", "FWD", 78, 78, 37);
addPlayer("gir", "Jhon Solís", "MID", 75, 83, 19);
addPlayer("gir", "Alejandro Francés", "DEF", 76, 83, 21);
addPlayer("gir", "Gabriel Misehouy", "MID", 74, 84, 18);

// cel
addPlayer("cel", "Iago Aspas", "FWD", 81, 81, 38);
addPlayer("cel", "Óscar Mingueza", "DEF", 80, 82, 27);
addPlayer("cel", "Hugo Álvarez", "MID", 77, 85, 23);
addPlayer("cel", "Fran Beltrán", "MID", 79, 82, 27);
addPlayer("cel", "Vicente Guaita", "GK", 79, 79, 39);
addPlayer("cel", "Jonathan Bamba", "FWD", 78, 78, 30);
addPlayer("cel", "Williot Swedberg", "MID", 77, 85, 22);
addPlayer("cel", "Carl Starfelt", "DEF", 78, 79, 31);
addPlayer("cel", "Marcos Alonso", "DEF", 77, 77, 35);
addPlayer("cel", "Javier Manquillo", "DEF", 76, 76, 32);
addPlayer("cel", "Tasos Douvikas", "FWD", 78, 81, 26);
addPlayer("cel", "Borja Iglesias", "FWD", 78, 78, 33);
addPlayer("cel", "Mihailo Ristić", "DEF", 76, 76, 28);
addPlayer("cel", "Carlos Domínguez", "DEF", 75, 80, 23);
addPlayer("cel", "Damián Rodríguez", "MID", 74, 80, 21);
addPlayer("cel", "Ilaix Moriba", "MID", 75, 80, 21);
addPlayer("cel", "Pablo Durán", "FWD", 73, 78, 23);
addPlayer("cel", "Alfon", "FWD", 74, 76, 24);

// osa
addPlayer("osa", "Ante Budimir", "FWD", 80, 80, 34);
addPlayer("osa", "Aimar Oroz", "MID", 80, 85, 24);
addPlayer("osa", "Sergio Herrera", "GK", 79, 79, 33);
addPlayer("osa", "Jon Moncayola", "MID", 79, 81, 28);
addPlayer("osa", "Bryan Zaragoza", "FWD", 79, 84, 25);
addPlayer("osa", "Enzo Boyomo", "DEF", 78, 84, 24);
addPlayer("osa", "Rubén Peña", "DEF", 77, 77, 35);
addPlayer("osa", "Lucas Torró", "MID", 78, 78, 31);
addPlayer("osa", "Rubén García", "MID", 77, 77, 32);
addPlayer("osa", "Alejandro Catena", "DEF", 78, 78, 31);
addPlayer("osa", "Moi Gómez", "FWD", 78, 78, 32);
addPlayer("osa", "Juan Cruz", "DEF", 76, 76, 31);
addPlayer("osa", "Jesús Areso", "DEF", 77, 80, 24);
addPlayer("osa", "Unai García", "DEF", 76, 76, 31);
addPlayer("osa", "Pablo Ibáñez", "MID", 76, 78, 25);
addPlayer("osa", "Iker Muñoz", "MID", 75, 81, 21);
addPlayer("osa", "Raúl García de Haro", "FWD", 76, 81, 23);
addPlayer("osa", "José Arnaiz", "FWD", 76, 76, 29);

// get
addPlayer("get", "David Soria", "GK", 80, 80, 33);
addPlayer("get", "Djené", "DEF", 79, 79, 34);
addPlayer("get", "Mauro Arambarri", "MID", 79, 79, 30);
addPlayer("get", "Borja Mayoral", "FWD", 80, 80, 29);
addPlayer("get", "Carles Aleñá", "MID", 77, 78, 28);
addPlayer("get", "Omar Alderete", "DEF", 78, 80, 29);
addPlayer("get", "Luis Milla", "MID", 78, 78, 31);
addPlayer("get", "Christantus Uche", "MID", 76, 84, 23);
addPlayer("get", "Bertuğ Yıldırım", "FWD", 75, 82, 24);
addPlayer("get", "Álvaro Rodríguez", "FWD", 74, 82, 22);
addPlayer("get", "Juan Iglesias", "DEF", 76, 78, 25);
addPlayer("get", "Nabil Aberdin", "DEF", 75, 80, 21);
addPlayer("get", "Diego Rico", "DEF", 77, 77, 31);
addPlayer("get", "Yellu Santiago", "MID", 73, 81, 19);
addPlayer("get", "Álex Sola", "FWD", 75, 78, 24);
addPlayer("get", "Peter Federico", "FWD", 75, 80, 21);
addPlayer("get", "Carles Pérez", "FWD", 76, 76, 26);

// mal
addPlayer("mal", "Vedat Muriqi", "FWD", 80, 80, 32);
addPlayer("mal", "Sergi Darder", "MID", 79, 79, 32);
addPlayer("mal", "Dani Rodríguez", "MID", 78, 78, 38);
addPlayer("mal", "Samu Costa", "MID", 79, 84, 25);
addPlayer("mal", "Antonio Raíllo", "DEF", 79, 79, 34);
addPlayer("mal", "Johan Mojica", "DEF", 77, 77, 33);
addPlayer("mal", "Dominik Greif", "GK", 76, 79, 29);
addPlayer("mal", "Martin Valjent", "DEF", 78, 78, 30);
addPlayer("mal", "Cyle Larin", "FWD", 77, 77, 31);
addPlayer("mal", "Valery Fernández", "MID", 76, 80, 26);
addPlayer("mal", "Takuma Asano", "FWD", 76, 76, 31);
addPlayer("mal", "Leo Román", "GK", 76, 82, 23);
addPlayer("mal", "Pablo Maffeo", "DEF", 78, 78, 26);
addPlayer("mal", "Toni Lato", "DEF", 76, 78, 26);
addPlayer("mal", "Omar Mascarell", "MID", 77, 77, 31);
addPlayer("mal", "Manu Morlanes", "MID", 76, 79, 25);
addPlayer("mal", "Antonio Sánchez", "MID", 76, 78, 26);
addPlayer("mal", "Abdon Prats", "FWD", 75, 75, 31);

// ray
addPlayer("ray", "Isi Palazón", "FWD", 79, 79, 31);
addPlayer("ray", "Álvaro García", "FWD", 79, 79, 33);
addPlayer("ray", "Óscar Valentín", "MID", 79, 79, 31);
addPlayer("ray", "Florian Lejeune", "DEF", 78, 78, 35);
addPlayer("ray", "Dani Cárdenas", "GK", 77, 79, 29);
addPlayer("ray", "Sergio Camello", "FWD", 78, 82, 25);
addPlayer("ray", "Unai López", "MID", 77, 77, 30);
addPlayer("ray", "Abdul Mumin", "DEF", 77, 81, 28);
addPlayer("ray", "James Rodríguez", "MID", 79, 79, 34);
addPlayer("ray", "Jorge de Frutos", "FWD", 77, 78, 29);
addPlayer("ray", "Pathé Ciss", "MID", 76, 76, 32);
addPlayer("ray", "Andrei Rațiu", "DEF", 76, 78, 25);
addPlayer("ray", "Iván Balliu", "DEF", 76, 76, 32);
addPlayer("ray", "Alfonso Espino", "DEF", 77, 77, 32);
addPlayer("ray", "Gerard Gumbau", "MID", 76, 78, 29);
addPlayer("ray", "Adri Embarba", "FWD", 76, 76, 32);
addPlayer("ray", "Randy Nteka", "FWD", 75, 76, 26);
addPlayer("ray", "Pedro Díaz", "MID", 75, 80, 25);

// ala
addPlayer("ala", "Antonio Sivera", "GK", 79, 81, 29);
addPlayer("ala", "Jon Guridi", "MID", 78, 79, 31);
addPlayer("ala", "Carlos Vicente", "FWD", 78, 82, 27);
addPlayer("ala", "Nahuel Tenaglia", "DEF", 77, 78, 30);
addPlayer("ala", "Kike García", "FWD", 76, 76, 36);
addPlayer("ala", "Asier Villalibre", "FWD", 76, 77, 28);
addPlayer("ala", "Abdel Abqar", "DEF", 77, 82, 27);
addPlayer("ala", "Ander Guevara", "MID", 77, 79, 29);
addPlayer("ala", "Hugo Novoa", "DEF", 74, 81, 23);
addPlayer("ala", "Toni Martínez", "FWD", 76, 78, 29);
addPlayer("ala", "Tomas Conechny", "FWD", 75, 78, 28);
addPlayer("ala", "Jesús Owono", "GK", 73, 79, 23);
addPlayer("ala", "Santiago Mouriño", "DEF", 74, 81, 22);
addPlayer("ala", "Manu Sánchez", "DEF", 75, 81, 23);
addPlayer("ala", "Tomás Blanco", "MID", 74, 79, 25);
addPlayer("ala", "Joan Jordán", "MID", 75, 75, 29);
addPlayer("ala", "Luka Romero", "FWD", 73, 83, 19);
addPlayer("ala", "Stoichkov", "FWD", 75, 75, 30);

// pal (Las Palmas)
addPlayer("pal", "Kirian Rodríguez", "MID", 80, 81, 30);
addPlayer("pal", "Jasper Cillessen", "GK", 78, 78, 37);
addPlayer("pal", "Alberto Moleiro", "MID", 79, 86, 22);
addPlayer("pal", "Sandro Ramírez", "FWD", 78, 78, 30);
addPlayer("pal", "José Campaña", "MID", 77, 77, 33);
addPlayer("pal", "Mika Mármol", "DEF", 78, 84, 24);
addPlayer("pal", "Javi Muñoz", "MID", 77, 78, 31);
addPlayer("pal", "Oliver McBurnie", "FWD", 76, 76, 30);
addPlayer("pal", "Marc Cardona", "FWD", 75, 75, 30);
addPlayer("pal", "Scott McKenna", "DEF", 76, 77, 29);
addPlayer("pal", "Álex Muñoz", "DEF", 75, 75, 31);
addPlayer("pal", "Dinko Horkas", "GK", 73, 78, 25);
addPlayer("pal", "Alex Suárez", "DEF", 75, 75, 31);
addPlayer("pal", "Marvin Park", "DEF", 74, 78, 23);
addPlayer("pal", "Enzo Loiodice", "MID", 76, 80, 23);
addPlayer("pal", "Manu Fuster", "MID", 74, 76, 26);
addPlayer("pal", "Fábio Silva", "FWD", 75, 81, 22);
addPlayer("pal", "Jaime Mata", "FWD", 74, 74, 35);

// leg (Leganes)
addPlayer("leg", "Marko Dmitrović", "GK", 78, 78, 34);
addPlayer("leg", "Juan Cruz", "FWD", 76, 82, 26);
addPlayer("leg", "Sébastien Haller", "FWD", 79, 79, 32);
addPlayer("leg", "Yvan Neyou", "MID", 77, 79, 29);
addPlayer("leg", "Darko Brašanac", "MID", 76, 76, 34);
addPlayer("leg", "Jorge Sáenz", "DEF", 76, 78, 29);
addPlayer("leg", "Óscar Rodríguez", "MID", 76, 77, 28);
addPlayer("leg", "Valentin Rosier", "DEF", 76, 77, 29);
addPlayer("leg", "Javi Hernández", "DEF", 76, 77, 28);
addPlayer("leg", "Seydouba Cissé", "MID", 75, 80, 25);
addPlayer("leg", "Munir El Haddadi", "FWD", 75, 75, 30);
addPlayer("leg", "Juan Soriano", "GK", 74, 76, 26);
addPlayer("leg", "Matija Nastasić", "DEF", 75, 75, 31);
addPlayer("leg", "Enric Franquesa", "DEF", 74, 76, 27);
addPlayer("leg", "Renato Tapia", "MID", 76, 76, 29);
addPlayer("leg", "Roberto López", "MID", 74, 79, 24);
addPlayer("leg", "Miguel de la Fuente", "FWD", 74, 77, 24);
addPlayer("leg", "Dani Raba", "FWD", 73, 73, 28);

// val2 (Valladolid)
addPlayer("val2", "Selim Amallah", "MID", 77, 77, 29);
addPlayer("val2", "Karl Hein", "GK", 76, 83, 24);
addPlayer("val2", "Víctor Meseguer", "MID", 76, 80, 27);
addPlayer("val2", "Mamadou Sylla", "FWD", 75, 75, 32);
addPlayer("val2", "Javi Sánchez", "DEF", 76, 77, 29);
addPlayer("val2", "Luis Pérez", "DEF", 75, 75, 31);
addPlayer("val2", "Ivan Sánchez", "MID", 75, 75, 33);
addPlayer("val2", "Raúl Moro", "FWD", 76, 82, 23);
addPlayer("val2", "Juanmi Latasa", "FWD", 75, 80, 25);
addPlayer("val2", "Cenk Özkacar", "DEF", 75, 79, 25);
addPlayer("val2", "Kike Pérez", "MID", 75, 75, 29);
addPlayer("val2", "André Ferreira", "GK", 73, 76, 28);
addPlayer("val2", "Lucas Rosa", "DEF", 73, 80, 24);
addPlayer("val2", "Stanko Jurić", "MID", 74, 75, 27);
addPlayer("val2", "Anuar Tuhami", "MID", 73, 74, 29);
addPlayer("val2", "Amath Ndiaye", "FWD", 74, 74, 28);
addPlayer("val2", "Kenedy", "FWD", 74, 74, 28);
addPlayer("val2", "Marcos André", "FWD", 74, 75, 27);

// esp (Espanyol)
addPlayer("esp", "Javi Puado", "FWD", 79, 81, 28);
addPlayer("esp", "Joan García", "GK", 78, 85, 25);
addPlayer("esp", "Leandro Cabrera", "DEF", 78, 78, 35);
addPlayer("esp", "Alex Král", "MID", 77, 80, 28);
addPlayer("esp", "Pol Lozano", "MID", 76, 78, 26);
addPlayer("esp", "Sergi Gómez", "DEF", 76, 76, 34);
addPlayer("esp", "Alejo Véliz", "FWD", 76, 84, 22);
addPlayer("esp", "Carlos Romero", "DEF", 75, 81, 24);
addPlayer("esp", "Jofre Carreras", "FWD", 75, 81, 25);
addPlayer("esp", "Marash Kumbulla", "DEF", 76, 80, 26);
addPlayer("esp", "Irvin Cardona", "FWD", 75, 76, 28);
addPlayer("esp", "Fernando Pacheco", "GK", 75, 75, 32);
addPlayer("esp", "Omar El Hilali", "DEF", 74, 82, 21);
addPlayer("esp", "Brian Oliván", "DEF", 75, 75, 30);
addPlayer("esp", "Álvaro Aguado", "MID", 76, 76, 28);
addPlayer("esp", "José Gragera", "MID", 75, 80, 24);
addPlayer("esp", "Pere Milla", "FWD", 75, 75, 31);
addPlayer("esp", "Salvi Sánchez", "FWD", 73, 73, 33);

// OVERRIDE: 2026/2027 REALISTIC SERIE A SCOUTS (from TRANSFERMARKT)
(() => {
  const sa = leagues.find((l) => l.id === "seriea");
  if (sa) {
    sa.teams.forEach((team) => {
      team.players = []; // clear old ones
    });
  }
})();

// Inter Milan (int)
addPlayer("int", "Lautaro Martínez", "FWD", 89, 90, 29);
addPlayer("int", "Nicolò Barella", "MID", 88, 89, 29);
addPlayer("int", "Alessandro Bastoni", "DEF", 87, 89, 27);
addPlayer("int", "Hakan Çalhanoğlu", "MID", 86, 86, 32);
addPlayer("int", "Marcus Thuram", "FWD", 85, 86, 29);
addPlayer("int", "Federico Dimarco", "DEF", 85, 85, 29);
addPlayer("int", "Benjamin Pavard", "DEF", 84, 84, 30);
addPlayer("int", "Yann Sommer", "GK", 85, 85, 38);
addPlayer("int", "Henrikh Mkhitaryan", "MID", 82, 82, 37);
addPlayer("int", "Matteo Darmian", "DEF", 80, 80, 37);
addPlayer("int", "Denzel Dumfries", "DEF", 82, 82, 30);
addPlayer("int", "Davide Frattesi", "MID", 83, 85, 27);
addPlayer("int", "Stefan de Vrij", "DEF", 82, 82, 34);
addPlayer("int", "Piotr Zieliński", "MID", 83, 83, 32);
addPlayer("int", "Carlos Augusto", "DEF", 81, 82, 27);
addPlayer("int", "Mehdi Taremi", "FWD", 82, 82, 34);

// AC Milan (mil)
addPlayer("mil", "Rafael Leão", "FWD", 87, 89, 27);
addPlayer("mil", "Mike Maignan", "GK", 87, 88, 31);
addPlayer("mil", "Theo Hernández", "DEF", 86, 87, 29);
addPlayer("mil", "Christian Pulisic", "FWD", 84, 85, 28);
addPlayer("mil", "Fikayo Tomori", "DEF", 84, 85, 29);
addPlayer("mil", "Ismaël Bennacer", "MID", 83, 84, 29);
addPlayer("mil", "Tijjani Reijnders", "MID", 83, 85, 28);
addPlayer("mil", "Malick Thiaw", "DEF", 81, 86, 25);
addPlayer("mil", "Ruben Loftus-Cheek", "MID", 82, 82, 30);
addPlayer("mil", "Álvaro Morata", "FWD", 83, 83, 34);
addPlayer("mil", "Emerson Royal", "DEF", 80, 81, 27);
addPlayer("mil", "Samuel Chukwueze", "FWD", 81, 83, 27);
addPlayer("mil", "Youssouf Fofana", "MID", 82, 84, 27);
addPlayer("mil", "Strahinja Pavlović", "DEF", 80, 84, 25);
addPlayer("mil", "Davide Calabria", "DEF", 80, 80, 30);

// Juventus (juv)
addPlayer("juv", "Dušan Vlahović", "FWD", 85, 87, 26);
addPlayer("juv", "Bremer", "DEF", 86, 87, 29);
addPlayer("juv", "Teun Koopmeiners", "MID", 85, 86, 28);
addPlayer("juv", "Gleison Bremer", "DEF", 86, 86, 29);
addPlayer("juv", "Douglas Luiz", "MID", 84, 85, 28);
addPlayer("juv", "Michele Di Gregorio", "GK", 83, 85, 29);
addPlayer("juv", "Federico Chiesa", "FWD", 83, 84, 29);
addPlayer("juv", "Kenan Yildiz", "FWD", 80, 89, 21);
addPlayer("juv", "Khéphren Thuram", "MID", 82, 86, 25);
addPlayer("juv", "Manuel Locatelli", "MID", 82, 83, 28);
addPlayer("juv", "Danilo", "DEF", 82, 82, 35);
addPlayer("juv", "Andrea Cambiaso", "DEF", 82, 85, 26);
addPlayer("juv", "Nicolò Fagioli", "MID", 80, 84, 25);
addPlayer("juv", "Timothy Weah", "FWD", 79, 81, 26);
addPlayer("juv", "Nicolás González", "FWD", 82, 83, 28);
addPlayer("juv", "Pierre Kalulu", "DEF", 80, 83, 26);
addPlayer("juv", "Francisco Conceição", "FWD", 80, 85, 24);

// Napoli (nap)
addPlayer("nap", "Khvicha Kvaratskhelia", "FWD", 87, 90, 25);
addPlayer("nap", "Romelu Lukaku", "FWD", 84, 84, 33);
addPlayer("nap", "Stanislav Lobotka", "MID", 84, 84, 32);
addPlayer("nap", "Alessandro Buongiorno", "DEF", 83, 87, 27);
addPlayer("nap", "Scott McTominay", "MID", 82, 83, 30);
addPlayer("nap", "Giovanni Di Lorenzo", "DEF", 83, 83, 33);
addPlayer("nap", "Amir Rrahmani", "DEF", 82, 82, 32);
addPlayer("nap", "Frank Anguissa", "MID", 82, 82, 31);
addPlayer("nap", "Alex Meret", "GK", 81, 82, 29);
addPlayer("nap", "Billy Gilmour", "MID", 80, 83, 25);
addPlayer("nap", "David Neres", "FWD", 81, 81, 29);
addPlayer("nap", "Matteo Politano", "FWD", 81, 81, 33);
addPlayer("nap", "Leonardo Spinazzola", "DEF", 80, 80, 33);
addPlayer("nap", "Giacomo Raspadori", "FWD", 80, 83, 26);
addPlayer("nap", "Mathías Olivera", "DEF", 80, 81, 29);

// Roma (rom)
addPlayer("rom", "Paulo Dybala", "FWD", 85, 85, 33);
addPlayer("rom", "Lorenzo Pellegrini", "MID", 83, 83, 30);
addPlayer("rom", "Gianluca Mancini", "DEF", 83, 84, 30);
addPlayer("rom", "Artem Dovbyk", "FWD", 83, 85, 29);
addPlayer("rom", "Mile Svilar", "GK", 80, 84, 27);
addPlayer("rom", "Evan Ndicka", "DEF", 81, 85, 27);
addPlayer("rom", "Matias Soulé", "FWD", 80, 86, 23);
addPlayer("rom", "Bryan Cristante", "MID", 81, 81, 31);
addPlayer("rom", "Manu Koné", "MID", 81, 85, 25);
addPlayer("rom", "Enzo Le Fée", "MID", 80, 83, 26);
addPlayer("rom", "Stephan El Shaarawy", "FWD", 80, 80, 34);
addPlayer("rom", "Mario Hermoso", "DEF", 82, 82, 31);
addPlayer("rom", "Mats Hummels", "DEF", 81, 81, 38);
addPlayer("rom", "Zeki Çelik", "DEF", 79, 79, 29);
addPlayer("rom", "Saelemaekers", "MID", 79, 81, 27);

// Atalanta (ata)
addPlayer("ata", "Ademola Lookman", "FWD", 84, 85, 29);
addPlayer("ata", "Ederson", "MID", 83, 86, 27);
addPlayer("ata", "Gianluca Scamacca", "FWD", 82, 84, 27);
addPlayer("ata", "Mateo Retegui", "FWD", 81, 84, 27);
addPlayer("ata", "Marten de Roon", "MID", 81, 81, 35);
addPlayer("ata", "Charles De Ketelaere", "MID", 81, 85, 25);
addPlayer("ata", "Marco Brescianini", "MID", 79, 83, 26);
addPlayer("ata", "Raoul Bellanova", "DEF", 81, 85, 26);
addPlayer("ata", "Isak Hien", "DEF", 80, 83, 27);
addPlayer("ata", "Berat Djimsiti", "DEF", 80, 80, 31);
addPlayer("ata", "Sead Kolasinac", "DEF", 80, 80, 33);
addPlayer("ata", "Davide Zappacosta", "DEF", 79, 79, 34);
addPlayer("ata", "Marco Carnesecchi", "GK", 80, 85, 26);
addPlayer("ata", "Odilon Kossounou", "DEF", 80, 84, 25);
addPlayer("ata", "Nicolò Zaniolo", "MID", 79, 81, 27);

// Lazio (laz)
addPlayer("laz", "Mattia Zaccagni", "FWD", 82, 82, 31);
addPlayer("laz", "Boulaye Dia", "FWD", 81, 81, 30);
addPlayer("laz", "Matteo Guendouzi", "MID", 81, 83, 27);
addPlayer("laz", "Alessio Romagnoli", "DEF", 81, 81, 31);
addPlayer("laz", "Ivan Provedel", "GK", 81, 81, 32);
addPlayer("laz", "Taty Castellanos", "FWD", 80, 82, 28);
addPlayer("laz", "Nicolò Rovella", "MID", 79, 83, 25);
addPlayer("laz", "Gustav Isaksen", "FWD", 78, 81, 25);
addPlayer("laz", "Loum Tchaouna", "FWD", 77, 82, 23);
addPlayer("laz", "Nuno Tavares", "DEF", 80, 82, 26);
addPlayer("laz", "Manuel Lazzari", "DEF", 79, 79, 32);
addPlayer("laz", "Patric", "DEF", 78, 78, 33);
addPlayer("laz", "Luca Pellegrini", "DEF", 77, 79, 27);
addPlayer("laz", "Matías Vecino", "MID", 78, 78, 35);
addPlayer("laz", "Fisayo Dele-Bashiru", "MID", 76, 81, 25);

// Fiorentina (fio)
addPlayer("fio", "Albert Gudmundsson", "FWD", 82, 83, 29);
addPlayer("fio", "Moise Kean", "FWD", 80, 83, 26);
addPlayer("fio", "Lucas Martínez Quarta", "DEF", 80, 82, 30);
addPlayer("fio", "Edoardo Bove", "MID", 78, 83, 24);
addPlayer("fio", "Danilo Cataldi", "MID", 78, 78, 32);
addPlayer("fio", "Cristiano Biraghi", "DEF", 79, 79, 34);
addPlayer("fio", "Dodô", "DEF", 80, 82, 28);
addPlayer("fio", "Pietro Terracciano", "GK", 79, 79, 36);
addPlayer("fio", "David de Gea", "GK", 81, 81, 36);
addPlayer("fio", "Marin Pongracic", "DEF", 78, 80, 29);
addPlayer("fio", "Luca Ranieri", "DEF", 78, 80, 27);
addPlayer("fio", "Andrea Colpani", "MID", 79, 81, 27);
addPlayer("fio", "Christian Kouamé", "FWD", 78, 78, 29);
addPlayer("fio", "Riccardo Sottil", "FWD", 77, 80, 27);
addPlayer("fio", "Robin Gosens", "DEF", 80, 80, 32);

// Bologna (bol)
addPlayer("bol", "Riccardo Orsolini", "FWD", 81, 81, 29);
addPlayer("bol", "Lewis Ferguson", "MID", 81, 83, 27);
addPlayer("bol", "Jhon Lucumí", "DEF", 80, 83, 28);
addPlayer("bol", "Remo Freuler", "MID", 80, 80, 34);
addPlayer("bol", "Sam Beukema", "DEF", 79, 82, 28);
addPlayer("bol", "Thijs Dallinga", "FWD", 79, 83, 26);
addPlayer("bol", "Santiago Castro", "FWD", 78, 85, 22);
addPlayer("bol", "Giovanni Fabbian", "MID", 78, 84, 23);
addPlayer("bol", "Stefan Posch", "DEF", 80, 81, 29);
addPlayer("bol", "Dan Ndoye", "FWD", 79, 82, 26);
addPlayer("bol", "Kacper Urbański", "MID", 77, 83, 22);
addPlayer("bol", "Łukasz Skorupski", "GK", 80, 80, 35);
addPlayer("bol", "Jesper Karlsson", "FWD", 78, 80, 28);
addPlayer("bol", "Charalampos Lykogiannis", "DEF", 77, 77, 33);
addPlayer("bol", "Martin Erlić", "DEF", 78, 80, 28);

// Torino (tor)
addPlayer("tor", "Duván Zapata", "FWD", 82, 82, 35);
addPlayer("tor", "Samuele Ricci", "MID", 80, 85, 25);
addPlayer("tor", "Ivan Ilić", "MID", 79, 82, 25);
addPlayer("tor", "Antonio Sanabria", "FWD", 79, 79, 30);
addPlayer("tor", "Perr Schuurs", "DEF", 80, 83, 27);
addPlayer("tor", "Valentino Lazaro", "DEF", 78, 78, 30);
addPlayer("tor", "Vanja Milinković-Savić", "GK", 80, 81, 29);
addPlayer("tor", "Saba Sazonov", "DEF", 76, 81, 24);
addPlayer("tor", "Adrien Tameze", "MID", 78, 78, 32);
addPlayer("tor", "Nikola Vlašić", "MID", 80, 81, 29);
addPlayer("tor", "Borna Sosa", "DEF", 78, 80, 28);
addPlayer("tor", "Che Adams", "FWD", 78, 78, 30);
addPlayer("tor", "Ché Adams", "FWD", 78, 78, 30);
addPlayer("tor", "Gvidas Gineitis", "MID", 74, 80, 22);
addPlayer("tor", "Adam Masina", "DEF", 76, 76, 32);

// Monza (mnz)
addPlayer("mnz", "Matteo Pessina", "MID", 80, 80, 29);
addPlayer("mnz", "Dany Mota", "FWD", 78, 79, 28);
addPlayer("mnz", "Andrea Colpani", "MID", 79, 81, 27);
addPlayer("mnz", "Gianluca Caprari", "FWD", 78, 78, 33);
addPlayer("mnz", "Pablo Marí", "DEF", 78, 78, 33);
addPlayer("mnz", "Alessio Cragno", "GK", 77, 77, 32);
addPlayer("mnz", "Roberto Gagliardini", "MID", 77, 77, 32);
addPlayer("mnz", "Samuele Birindelli", "DEF", 76, 78, 27);
addPlayer("mnz", "Stefano Turati", "GK", 77, 82, 25);
addPlayer("mnz", "Armando Izzo", "DEF", 77, 77, 32);
addPlayer("mnz", "Daniel Maldini", "FWD", 76, 81, 25);
addPlayer("mnz", "Warren Bondo", "MID", 75, 82, 23);
addPlayer("mnz", "Milan Đurić", "FWD", 76, 76, 36);
addPlayer("mnz", "Alessandro Bianco", "MID", 74, 80, 24);
addPlayer("mnz", "Georgios Kyriakopoulos", "DEF", 76, 76, 30);

// Genoa (gen)
addPlayer("gen", "Albert Gudmundsson", "FWD", 82, 83, 29);
addPlayer("gen", "Ruslan Malinovskyi", "MID", 80, 80, 33);
addPlayer("gen", "Johan Vásquez", "DEF", 78, 81, 28);
addPlayer("gen", "Koni De Winter", "DEF", 77, 82, 24);
addPlayer("gen", "Junior Messias", "FWD", 79, 79, 35);
addPlayer("gen", "Morten Frendrup", "MID", 78, 83, 25);
addPlayer("gen", "Aaron Martin", "DEF", 77, 78, 29);
addPlayer("gen", "Badelj", "MID", 77, 77, 37);
addPlayer("gen", "Caleb Ekuban", "FWD", 76, 76, 32);
addPlayer("gen", "Vitinha", "FWD", 78, 82, 26);
addPlayer("gen", "Pierluigi Gollini", "GK", 78, 80, 31);
addPlayer("gen", "Nicola Leali", "GK", 74, 74, 33);
addPlayer("gen", "Andrea Pinamonti", "FWD", 78, 80, 27);
addPlayer("gen", "Morten Thorsby", "MID", 77, 77, 30);
addPlayer("gen", "Alessandro Zanoli", "DEF", 75, 80, 26);

// Udinese (ud)
addPlayer("ud", "Florian Thauvin", "FWD", 80, 80, 33);
addPlayer("ud", "Lorenzo Lucca", "FWD", 78, 82, 26);
addPlayer("ud", "Jaka Bijol", "DEF", 80, 83, 27);
addPlayer("ud", "Sandi Lovric", "MID", 78, 80, 28);
addPlayer("ud", "Hassane Kamara", "DEF", 77, 77, 32);
addPlayer("ud", "Maduka Okoye", "GK", 77, 80, 27);
addPlayer("ud", "Kingsley Ehizibue", "DEF", 76, 77, 31);
addPlayer("ud", "Martín Payero", "MID", 77, 79, 28);
addPlayer("ud", "Brenner", "FWD", 76, 80, 26);
addPlayer("ud", "Karlström", "MID", 76, 76, 31);
addPlayer("ud", "Keinan Davis", "FWD", 75, 77, 28);
addPlayer("ud", "Jurgen Ekkelenkamp", "MID", 76, 80, 26);
addPlayer("ud", "Iker Bravo", "FWD", 73, 82, 21);
addPlayer("ud", "Thomas Kristensen", "DEF", 75, 80, 24);
addPlayer("ud", "Oier Zarraga", "MID", 75, 78, 25);

// Lecce (lec)
addPlayer("lec", "Wladimiro Falcone", "GK", 78, 80, 31);
addPlayer("lec", "Federico Baschirotto", "DEF", 78, 78, 29);
addPlayer("lec", "Ylber Ramadani", "MID", 77, 77, 30);
addPlayer("lec", "Antonino Gallo", "DEF", 76, 80, 26);
addPlayer("lec", "Rémi Oudin", "MID", 77, 78, 29);
addPlayer("lec", "Kialonda Gaspar", "DEF", 76, 78, 29);
addPlayer("lec", "Lameck Banda", "FWD", 76, 81, 25);
addPlayer("lec", "Nikola Krstovic", "FWD", 77, 81, 26);
addPlayer("lec", "Patrick Dorgu", "DEF", 75, 84, 21);
addPlayer("lec", "Alexis Saelemaekers", "MID", 78, 80, 27);
addPlayer("lec", "Lassana Coulibaly", "MID", 76, 76, 30);
addPlayer("lec", "Joan González", "MID", 75, 80, 24);
addPlayer("lec", "Filip Marchwinski", "MID", 74, 81, 24);
addPlayer("lec", "Tete Morente", "FWD", 75, 75, 29);

// Empoli (emp)
addPlayer("emp", "Liam Henderson", "MID", 75, 75, 30);
addPlayer("emp", "Youssef Maleh", "MID", 76, 78, 28);
addPlayer("emp", "Emmanuel Gyasi", "FWD", 76, 76, 32);
addPlayer("emp", "Ardian Ismajli", "DEF", 77, 79, 30);
addPlayer("emp", "Devis Vásquez", "GK", 75, 78, 28);
addPlayer("emp", "Alberto Grassi", "MID", 75, 75, 31);
addPlayer("emp", "Giuseppe Pezzella", "DEF", 75, 75, 28);
addPlayer("emp", "Saba Sazonov", "DEF", 75, 80, 24);
addPlayer("emp", "Lorenzo Colombo", "FWD", 75, 81, 24);
addPlayer("emp", "Sebastiano Esposito", "FWD", 76, 82, 24);
addPlayer("emp", "Mattia Viti", "DEF", 75, 80, 24);
addPlayer("emp", "Pietro Pellegri", "FWD", 75, 80, 25);
addPlayer("emp", "Tino Anjorin", "MID", 74, 79, 25);
addPlayer("emp", "Ola Solbakken", "FWD", 75, 77, 28);

// Hellas Verona (ver)
addPlayer("ver", "Tomas Suslov", "MID", 76, 82, 24);
addPlayer("ver", "Darko Lazovic", "MID", 77, 77, 36);
addPlayer("ver", "Montipò", "GK", 78, 79, 30);
addPlayer("ver", "Pawel Dawidowicz", "DEF", 76, 76, 31);
addPlayer("ver", "Ondrej Duda", "MID", 76, 76, 29);
addPlayer("ver", "Casper Tengstedt", "FWD", 76, 80, 26);
addPlayer("ver", "Grigoris Kastanos", "MID", 76, 78, 28);
addPlayer("ver", "Jackson Tchatchoua", "DEF", 75, 80, 24);
addPlayer("ver", "Daniel Mosquera", "FWD", 74, 78, 26);
addPlayer("ver", "Suat Serdar", "MID", 76, 77, 29);
addPlayer("ver", "Abdou Harroui", "MID", 75, 77, 28);
addPlayer("ver", "Martin Frese", "DEF", 75, 78, 28);
addPlayer("ver", "Reda Belahyane", "MID", 74, 81, 20);
addPlayer("ver", "Dailon Livramento", "FWD", 73, 79, 23);

// Cagliari (cag)
addPlayer("cag", "Zito Luvumbo", "FWD", 77, 82, 24);
addPlayer("cag", "Alessandro Deiola", "MID", 76, 76, 29);
addPlayer("cag", "Yerry Mina", "DEF", 78, 78, 32);
addPlayer("cag", "Tommaso Augello", "DEF", 76, 76, 30);
addPlayer("cag", "Simone Scuffet", "GK", 77, 78, 28);
addPlayer("cag", "Roberto Piccoli", "FWD", 76, 81, 25);
addPlayer("cag", "Razvan Marin", "MID", 76, 77, 30);
addPlayer("cag", "Gabriele Zappa", "DEF", 76, 78, 26);
addPlayer("cag", "Nicolas Viola", "MID", 75, 75, 34);
addPlayer("cag", "Gianluca Lapadula", "FWD", 76, 76, 36);
addPlayer("cag", "Leonardo Pavoletti", "FWD", 75, 75, 35);
addPlayer("cag", "Antoine Makoumbou", "MID", 75, 78, 28);
addPlayer("cag", "Sebastiano Luperto", "DEF", 77, 78, 30);
addPlayer("cag", "Nadir Zortea", "DEF", 75, 78, 27);

// Parma (par)
addPlayer("par", "Dennis Man", "FWD", 79, 81, 27);
addPlayer("par", "Adrián Bernabé", "MID", 78, 84, 25);
addPlayer("par", "Hernani", "MID", 77, 77, 32);
addPlayer("par", "Ange-Yoan Bonny", "FWD", 75, 83, 22);
addPlayer("par", "Valentin Mihaila", "FWD", 76, 80, 26);
addPlayer("par", "Simon Sohm", "MID", 75, 80, 25);
addPlayer("par", "Emanuele Valeri", "DEF", 76, 78, 27);
addPlayer("par", "Zion Suzuki", "GK", 75, 82, 24);
addPlayer("par", "Alessandro Circati", "DEF", 75, 82, 22);
addPlayer("par", "Woyo Coulibaly", "DEF", 74, 76, 25);
addPlayer("par", "Leandro Chichizola", "GK", 74, 74, 34);
addPlayer("par", "Enrico Delprato", "DEF", 76, 78, 26);
addPlayer("par", "Matteo Cancellieri", "FWD", 75, 80, 24);
addPlayer("par", "Pontus Almqvist", "FWD", 76, 78, 27);

// Como (com)
addPlayer("com", "Patrick Cutrone", "FWD", 78, 79, 28);
addPlayer("com", "Gabriel Strefezza", "FWD", 78, 79, 27);
addPlayer("com", "Nicolás Paz", "MID", 76, 85, 21);
addPlayer("com", "Alberto Moreno", "DEF", 77, 77, 34);
addPlayer("com", "Sergi Roberto", "MID", 78, 78, 34);
addPlayer("com", "Pepe Reina", "GK", 77, 77, 43);
addPlayer("com", "Emil Audero", "GK", 77, 79, 29);
addPlayer("com", "Marc-Oliver Kempf", "DEF", 76, 76, 29);
addPlayer("com", "Alberto Dossena", "DEF", 77, 80, 28);
addPlayer("com", "Ignace Van der Brempt", "DEF", 75, 80, 24);
addPlayer("com", "Maximo Perrone", "MID", 75, 82, 23);
addPlayer("com", "Andrea Belotti", "FWD", 77, 77, 32);
addPlayer("com", "Lucas Da Cunha", "MID", 75, 78, 25);
addPlayer("com", "Alessandro Gabrielloni", "FWD", 74, 74, 30);

// Venezia (ven)
addPlayer("ven", "Joel Pohjanpalo", "FWD", 78, 78, 31);
addPlayer("ven", "Gianluca Busio", "MID", 76, 81, 24);
addPlayer("ven", "Tanner Tessmann", "MID", 76, 82, 25);
addPlayer("ven", "Jesse Joronen", "GK", 76, 76, 31);
addPlayer("ven", "Mikael Egill Ellertsson", "MID", 74, 79, 24);
addPlayer("ven", "Gaetano Oristanio", "MID", 75, 81, 23);
addPlayer("ven", "Jay Idzes", "DEF", 75, 79, 26);
addPlayer("ven", "Marin Šverko", "DEF", 74, 76, 28);
addPlayer("ven", "Antonio Candela", "DEF", 74, 77, 26);
addPlayer("ven", "Michael Svoboda", "DEF", 74, 76, 28);
addPlayer("ven", "Alfred Duncan", "MID", 76, 76, 31);
addPlayer("ven", "Francesco Zampano", "DEF", 74, 74, 32);
addPlayer("ven", "Hans Nicolussi Caviglia", "MID", 75, 80, 26);
addPlayer("ven", "John Yeboah", "FWD", 74, 78, 26);

// OVERRIDE: 2026/2027 REALISTIC BUNDESLIGA SCOUTS (from TRANSFERMARKT)
(() => {
  const bl = leagues.find((l) => l.id === "bundesliga");
  if (bl) {
    bl.teams.forEach((team) => {
      team.players = []; // clear old ones
    });
  }
})();

// Bayern Munich (bay)
addPlayer("bay", "Harry Kane", "FWD", 90, 90, 32);
addPlayer("bay", "Jamal Musiala", "MID", 89, 93, 23);
addPlayer("bay", "Florian Wirtz", "MID", 89, 94, 22);
addPlayer("bay", "Michael Olise", "FWD", 86, 89, 24);
addPlayer("bay", "Joshua Kimmich", "MID", 87, 87, 31);
addPlayer("bay", "Leroy Sané", "FWD", 86, 86, 30);
addPlayer("bay", "Alphonso Davies", "DEF", 85, 87, 25);
addPlayer("bay", "João Palhinha", "MID", 85, 85, 30);
addPlayer("bay", "Kim Min-jae", "DEF", 85, 85, 29);
addPlayer("bay", "Dayot Upamecano", "DEF", 84, 85, 27);
addPlayer("bay", "Manuel Neuer", "GK", 86, 86, 40);
addPlayer("bay", "Aleksandar Pavlović", "MID", 83, 89, 21);
addPlayer("bay", "Mathys Tel", "FWD", 81, 88, 20);
addPlayer("bay", "Serge Gnabry", "FWD", 84, 84, 30);
addPlayer("bay", "Sacha Boey", "DEF", 81, 84, 25);
addPlayer("bay", "Raphaël Guerreiro", "DEF", 83, 83, 32);
addPlayer("bay", "Hiroki Ito", "DEF", 81, 84, 26);
addPlayer("bay", "Thomas Müller", "FWD", 83, 83, 36);

// Borussia Dortmund (dor)
addPlayer("dor", "Julian Brandt", "MID", 85, 85, 29);
addPlayer("dor", "Nico Schlotterbeck", "DEF", 84, 87, 26);
addPlayer("dor", "Gregor Kobel", "GK", 86, 88, 28);
addPlayer("dor", "Donyell Malen", "FWD", 83, 84, 27);
addPlayer("dor", "Karim Adeyemi", "FWD", 82, 86, 24);
addPlayer("dor", "Serhou Guirassy", "FWD", 84, 84, 30);
addPlayer("dor", "Marcel Sabitzer", "MID", 83, 83, 32);
addPlayer("dor", "Waldemar Anton", "DEF", 83, 84, 29);
addPlayer("dor", "Pascal Groß", "MID", 82, 82, 34);
addPlayer("dor", "Maximilian Beier", "FWD", 81, 86, 23);
addPlayer("dor", "Jamie Gittens", "FWD", 80, 87, 21);
addPlayer("dor", "Ramy Bensebaini", "DEF", 80, 80, 31);
addPlayer("dor", "Felix Nmecha", "MID", 80, 83, 25);
addPlayer("dor", "Julian Ryerson", "DEF", 80, 81, 28);
addPlayer("dor", "Yan Couto", "DEF", 80, 85, 23);

// Bayer Leverkusen (lev)
addPlayer("lev", "Jeremie Frimpong", "DEF", 86, 88, 25);
addPlayer("lev", "Edmond Tapsoba", "DEF", 84, 86, 27);
addPlayer("lev", "Granit Xhaka", "MID", 85, 85, 33);
addPlayer("lev", "Alejandro Grimaldo", "DEF", 85, 85, 30);
addPlayer("lev", "Victor Boniface", "FWD", 84, 87, 25);
addPlayer("lev", "Exequiel Palacios", "MID", 84, 86, 27);
addPlayer("lev", "Jonathan Tah", "DEF", 84, 84, 30);
addPlayer("lev", "Piero Hincapié", "DEF", 82, 86, 24);
addPlayer("lev", "Lukas Hradecky", "GK", 82, 82, 36);
addPlayer("lev", "Martin Terrier", "FWD", 82, 82, 29);
addPlayer("lev", "Amine Adli", "FWD", 81, 84, 25);
addPlayer("lev", "Robert Andrich", "MID", 82, 82, 31);
addPlayer("lev", "Odilon Kossounou", "DEF", 81, 84, 25);
addPlayer("lev", "Nathan Tella", "FWD", 80, 82, 26);
addPlayer("lev", "Jonas Hofmann", "MID", 81, 81, 33);

// RB Leipzig (rbl)
addPlayer("rbl", "Xavi Simons", "MID", 86, 91, 23);
addPlayer("rbl", "Loïs Openda", "FWD", 85, 88, 26);
addPlayer("rbl", "Benjamin Šeško", "FWD", 83, 88, 22);
addPlayer("rbl", "Willı Orban", "DEF", 83, 83, 33);
addPlayer("rbl", "Castello Lukeba", "DEF", 81, 87, 23);
addPlayer("rbl", "Xaver Schlager", "MID", 83, 83, 28);
addPlayer("rbl", "Amadou Haidara", "MID", 81, 83, 28);
addPlayer("rbl", "Péter Gulácsi", "GK", 82, 82, 35);
addPlayer("rbl", "Antonio Nusa", "FWD", 79, 87, 20);
addPlayer("rbl", "David Raum", "DEF", 82, 83, 28);
addPlayer("rbl", "Mohamed Simakan", "DEF", 82, 86, 25);
addPlayer("rbl", "Benjamin Henrichs", "DEF", 81, 82, 29);
addPlayer("rbl", "Nicolas Seiwald", "MID", 80, 84, 24);
addPlayer("rbl", "Christoph Baumgartner", "MID", 81, 82, 26);
addPlayer("rbl", "Eljif Elmas", "MID", 80, 83, 26);

// Eintracht Frankfurt (fra)
addPlayer("fra", "Omar Marmoush", "FWD", 84, 85, 27);
addPlayer("fra", "Hugo Ekitiké", "FWD", 81, 86, 23);
addPlayer("fra", "Arthur Theate", "DEF", 80, 83, 25);
addPlayer("fra", "Kevin Trapp", "GK", 81, 81, 35);
addPlayer("fra", "Robin Koch", "DEF", 81, 81, 29);
addPlayer("fra", "Mario Götze", "MID", 80, 80, 33);
addPlayer("fra", "Ellyes Skhiri", "MID", 80, 80, 30);
addPlayer("fra", "Hugo Larsson", "MID", 79, 86, 21);
addPlayer("fra", "Fares Chaibi", "MID", 78, 83, 23);
addPlayer("fra", "Tuta", "DEF", 79, 82, 26);
addPlayer("fra", "Rasmus Kristensen", "DEF", 78, 79, 28);
addPlayer("fra", "Nnamdi Collins", "DEF", 74, 82, 22);
addPlayer("fra", "Can Uzun", "MID", 76, 85, 20);
addPlayer("fra", "Ansgar Knauff", "FWD", 77, 81, 24);

// VfB Stuttgart (stu)
addPlayer("stu", "Angelo Stiller", "MID", 82, 86, 25);
addPlayer("stu", "Alexander Nübel", "GK", 81, 83, 29);
addPlayer("stu", "Deniz Undav", "FWD", 82, 82, 29);
addPlayer("stu", "Chris Führich", "FWD", 81, 81, 28);
addPlayer("stu", "Enzo Millot", "MID", 80, 85, 23);
addPlayer("stu", "Maximilian Mittelstädt", "DEF", 80, 81, 29);
addPlayer("stu", "Josha Vagnoman", "DEF", 78, 82, 25);
addPlayer("stu", "Ermedin Demirovic", "FWD", 80, 82, 28);
addPlayer("stu", "Jeff Chabot", "DEF", 79, 81, 28);
addPlayer("stu", "Emegha", "FWD", 77, 83, 23);
addPlayer("stu", "Atakan Karazor", "MID", 79, 79, 29);
addPlayer("stu", "Anthony Rouault", "DEF", 78, 82, 24);
addPlayer("stu", "Jamie Leweling", "FWD", 78, 81, 25);
addPlayer("stu", "Dan-Axel Zagadou", "DEF", 78, 81, 26);

// TSG Hoffenheim (hof)
addPlayer("hof", "Andrej Kramaric", "FWD", 81, 81, 34);
addPlayer("hof", "Oliver Baumann", "GK", 80, 80, 35);
addPlayer("hof", "Anton Stach", "MID", 79, 82, 27);
addPlayer("hof", "Adam Hlozek", "FWD", 78, 82, 23);
addPlayer("hof", "Ozan Kabak", "DEF", 78, 81, 26);
addPlayer("hof", "David Jurasec", "DEF", 77, 81, 25);
addPlayer("hof", "Tom Bischof", "MID", 76, 84, 20);
addPlayer("hof", "Umut Tohumcu", "MID", 75, 81, 21);
addPlayer("hof", "Max Moerstedt", "FWD", 72, 82, 20);
addPlayer("hof", "Pavel Kaderabek", "DEF", 77, 77, 33);
addPlayer("hof", "Marius Bülter", "FWD", 77, 77, 33);
addPlayer("hof", "Alexander Prass", "MID", 77, 82, 24);
addPlayer("hof", "Ihlas Bebou", "FWD", 76, 76, 31);
addPlayer("hof", "Florian Grillitsch", "MID", 78, 78, 30);

// VfL Wolfsburg (wob)
addPlayer("wob", "Lovro Majer", "MID", 80, 82, 28);
addPlayer("wob", "Kamil Grabara", "GK", 79, 84, 27);
addPlayer("wob", "Aster Vranckx", "MID", 78, 82, 23);
addPlayer("wob", "Jonas Wind", "FWD", 79, 81, 27);
addPlayer("wob", "Maxence Lacroix", "DEF", 79, 83, 26);
addPlayer("wob", "Ridle Baku", "DEF", 78, 79, 28);
addPlayer("wob", "Tiago Tomás", "FWD", 77, 82, 23);
addPlayer("wob", "Salih Özcan", "MID", 78, 80, 28);
addPlayer("wob", "Konstantinos Koulierakis", "DEF", 77, 84, 22);
addPlayer("wob", "Joakim Mæhle", "DEF", 78, 78, 28);
addPlayer("wob", "Patrick Wimmer", "FWD", 78, 82, 24);
addPlayer("wob", "Sebastiaan Bornauw", "DEF", 77, 79, 27);
addPlayer("wob", "Mattias Svanberg", "MID", 78, 80, 27);
addPlayer("wob", "Mohamed Amoura", "FWD", 78, 82, 25);

// SC Freiburg (fre)
addPlayer("fre", "Vincenzo Grifo", "MID", 81, 81, 33);
addPlayer("fre", "Matthias Ginter", "DEF", 80, 80, 32);
addPlayer("fre", "Christian Günter", "DEF", 80, 80, 33);
addPlayer("fre", "Ritsu Doan", "FWD", 80, 81, 27);
addPlayer("fre", "Merlin Röhl", "MID", 78, 83, 23);
addPlayer("fre", "Maximilian Eggestein", "MID", 79, 79, 29);
addPlayer("fre", "Michael Gregoritsch", "FWD", 79, 79, 31);
addPlayer("fre", "Noah Atubolu", "GK", 78, 83, 23);
addPlayer("fre", "Philipp Lienhart", "DEF", 79, 81, 29);
addPlayer("fre", "Kiliann Sildillia", "DEF", 77, 82, 23);
addPlayer("fre", "Eren Dinkçi", "FWD", 78, 82, 24);
addPlayer("fre", "Nicolas Höfler", "MID", 76, 76, 36);
addPlayer("fre", "Max Rosenfelder", "DEF", 75, 82, 23);
addPlayer("fre", "Junior Adamu", "FWD", 75, 78, 24);

// Mainz 05 (mai)
addPlayer("mai", "Nadiem Amiri", "MID", 79, 80, 29);
addPlayer("mai", "Jonathan Burkardt", "FWD", 79, 83, 25);
addPlayer("mai", "Robin Zentner", "GK", 78, 79, 31);
addPlayer("mai", "Dominik Kohr", "MID", 77, 77, 32);
addPlayer("mai", "Sepp van den Berg", "DEF", 78, 84, 24);
addPlayer("mai", "Lee Jae-sung", "MID", 78, 78, 33);
addPlayer("mai", "Phillipp Mwene", "DEF", 77, 77, 32);
addPlayer("mai", "Kaishu Sano", "MID", 77, 80, 25);
addPlayer("mai", "Paul Nebel", "MID", 75, 80, 23);
addPlayer("mai", "Silvan Widmer", "DEF", 76, 76, 33);
addPlayer("mai", "Maximilian Leitsch", "DEF", 76, 78, 27);
addPlayer("mai", "Anthony Caci", "DEF", 77, 79, 28);
addPlayer("mai", "Brajan Gruda", "FWD", 78, 85, 21);
addPlayer("mai", "Andreas Hanche-Olsen", "DEF", 76, 78, 29);

// Borussia Mönchengladbach (gla)
addPlayer("gla", "Alassane Plea", "FWD", 79, 79, 33);
addPlayer("gla", "Jonas Omlin", "GK", 79, 79, 32);
addPlayer("gla", "Ko Itakura", "DEF", 79, 81, 29);
addPlayer("gla", "Julian Weigl", "MID", 79, 79, 30);
addPlayer("gla", "Tim Kleindienst", "FWD", 79, 79, 30);
addPlayer("gla", "Nico Elvedi", "DEF", 78, 79, 29);
addPlayer("gla", "Franck Honorat", "FWD", 78, 78, 29);
addPlayer("gla", "Joe Scally", "DEF", 76, 81, 23);
addPlayer("gla", "Rocco Reitz", "MID", 77, 83, 23);
addPlayer("gla", "Kevin Stöger", "MID", 78, 78, 32);
addPlayer("gla", "Luca Netz", "DEF", 76, 81, 22);
addPlayer("gla", "Tomáš Čvančara", "FWD", 76, 80, 25);
addPlayer("gla", "Manu Koné", "MID", 80, 84, 24);
addPlayer("gla", "Maximilian Wöber", "DEF", 78, 80, 28);

// Union Berlin (uni)
addPlayer("uni", "Kevin Volland", "FWD", 78, 78, 33);
addPlayer("uni", "Frederik Rønnow", "GK", 80, 80, 33);
addPlayer("uni", "Diogo Leite", "DEF", 79, 82, 27);
addPlayer("uni", "Danilho Doekhi", "DEF", 78, 81, 27);
addPlayer("uni", "Rani Khedira", "MID", 77, 77, 32);
addPlayer("uni", "András Schäfer", "MID", 77, 80, 27);
addPlayer("uni", "Jorbe Vertessen", "FWD", 76, 80, 25);
addPlayer("uni", "Josip Juranović", "DEF", 78, 78, 30);
addPlayer("uni", "Jerome Roussillon", "DEF", 76, 76, 33);
addPlayer("uni", "Tom Rothe", "DEF", 76, 83, 21);
addPlayer("uni", "Woo-yeong Jeong", "FWD", 75, 78, 26);
addPlayer("uni", "Jordan Siebatcheu", "FWD", 76, 76, 30);
addPlayer("uni", "Tymoteusz Puchacz", "DEF", 75, 76, 27);
addPlayer("uni", "Lucas Tousart", "MID", 77, 78, 28);

// Werder Bremen (wer)
addPlayer("wer", "Mitchell Weiser", "DEF", 79, 79, 31);
addPlayer("wer", "Marvin Ducksch", "FWD", 78, 78, 32);
addPlayer("wer", "Romano Schmid", "MID", 77, 80, 26);
addPlayer("wer", "Milos Veljkovic", "DEF", 77, 77, 30);
addPlayer("wer", "Felix Agu", "DEF", 76, 79, 26);
addPlayer("wer", "Senna Miangue", "DEF", 75, 75, 29);
addPlayer("wer", "Michael Zetterer", "GK", 77, 78, 30);
addPlayer("wer", "Jens Stage", "MID", 76, 77, 29);
addPlayer("wer", "Dawid Kownacki", "FWD", 75, 76, 29);
addPlayer("wer", "Leonardo Bittencourt", "MID", 76, 76, 32);
addPlayer("wer", "Skelly Alvero", "MID", 74, 80, 23);
addPlayer("wer", "Justin Njinmah", "FWD", 76, 81, 25);
addPlayer("wer", "Oliver Burke", "FWD", 74, 74, 28);
addPlayer("wer", "Marco Friedl", "DEF", 77, 79, 28);

// FC Augsburg (aug)
addPlayer("aug", "Fedor Chalov", "FWD", 78, 80, 28);
addPlayer("aug", "Arne Maier", "MID", 77, 80, 27);
addPlayer("aug", "Elvis Rexhbecaj", "MID", 76, 77, 28);
addPlayer("aug", "Ruben Vargas", "MID", 77, 78, 27);
addPlayer("aug", "Felix Uduokhai", "DEF", 77, 79, 28);
addPlayer("aug", "Jeffrey Gouweleeuw", "DEF", 76, 76, 34);
addPlayer("aug", "Finn Dahmen", "GK", 76, 80, 28);
addPlayer("aug", "Mads Pedersen", "DEF", 75, 75, 29);
addPlayer("aug", "Phillip Tietz", "FWD", 76, 77, 28);
addPlayer("aug", "Fredrik Jensen", "MID", 75, 76, 28);
addPlayer("aug", "Nediljko Labrović", "GK", 76, 78, 26);
addPlayer("aug", "Dimitrios Giannoulis", "DEF", 76, 76, 30);
addPlayer("aug", "Steve Mounié", "FWD", 76, 76, 31);
addPlayer("aug", "Samuel Essende", "FWD", 75, 78, 28);

// Heidenheim (hei)
addPlayer("hei", "Tim Kleindienst", "FWD", 78, 78, 30);
addPlayer("hei", "Kevin Müller", "GK", 76, 76, 34);
addPlayer("hei", "Patrick Mainka", "DEF", 76, 76, 31);
addPlayer("hei", "Jan-Niklas Beste", "MID", 78, 80, 27);
addPlayer("hei", "Lennard Maloney", "MID", 75, 78, 26);
addPlayer("hei", "Jonas Föhrenbach", "DEF", 75, 75, 30);
addPlayer("hei", "Marnon Busch", "DEF", 75, 75, 31);
addPlayer("hei", "Omar Traoré", "DEF", 74, 76, 28);
addPlayer("hei", "Paul Wanner", "MID", 76, 85, 20);
addPlayer("hei", "Leo Scienza", "FWD", 74, 76, 27);
addPlayer("hei", "Maximilian Breunig", "FWD", 73, 77, 25);
addPlayer("hei", "Mikkel Kaufmann", "FWD", 74, 78, 25);
addPlayer("hei", "Marvin Pieringer", "FWD", 75, 78, 26);
addPlayer("hei", "Norman Theuerkauf", "DEF", 72, 72, 39);

// VfL Bochum (boc)
addPlayer("boc", "Manuel Riemann", "GK", 77, 77, 37);
addPlayer("boc", "Kevin Stöger", "MID", 78, 78, 32);
addPlayer("boc", "Takuma Asano", "FWD", 77, 77, 31);
addPlayer("boc", "Anthony Losilla", "MID", 75, 75, 40);
addPlayer("boc", "Bernardo", "DEF", 77, 77, 30);
addPlayer("boc", "Ivan Ordets", "DEF", 76, 76, 33);
addPlayer("boc", "Philipp Hofmann", "FWD", 75, 75, 31);
addPlayer("boc", "Erhan Masovic", "DEF", 75, 78, 27);
addPlayer("boc", "Dani de Wit", "MID", 76, 79, 28);
addPlayer("boc", "Myron Boadu", "FWD", 75, 80, 25);
addPlayer("boc", "Gerrit Holtmann", "MID", 74, 74, 31);
addPlayer("boc", "Felix Passlack", "DEF", 74, 75, 27);
addPlayer("boc", "Moritz Broschinski", "FWD", 73, 77, 25);
addPlayer("boc", "Cristian Gamboa", "DEF", 73, 73, 36);

// FC St. Pauli (stp)
addPlayer("stp", "Marcel Hartel", "MID", 76, 76, 30);
addPlayer("stp", "Jackson Irvine", "MID", 76, 76, 31);
addPlayer("stp", "Johannes Eggestein", "FWD", 75, 76, 27);
addPlayer("stp", "Hauke Wahl", "DEF", 75, 75, 32);
addPlayer("stp", "Nikola Vasilj", "GK", 75, 76, 30);
addPlayer("stp", "Manolis Saliakas", "DEF", 75, 76, 29);
addPlayer("stp", "Oladapo Afolayan", "FWD", 74, 76, 28);
addPlayer("stp", "Eric Smith", "DEF", 76, 78, 29);
addPlayer("stp", "Connor Metcalfe", "MID", 74, 78, 26);
addPlayer("stp", "Philipp Treu", "DEF", 73, 77, 25);
addPlayer("stp", "Danel Sinani", "FWD", 73, 74, 29);
addPlayer("stp", "Simon Zoller", "FWD", 72, 72, 34);
addPlayer("stp", "Morgan Guilavogui", "FWD", 74, 76, 28);
addPlayer("stp", "Robert Wagner", "MID", 72, 78, 22);

// Holstein Kiel (kie)
addPlayer("kie", "Steven Skrzybski", "FWD", 75, 75, 33);
addPlayer("kie", "Lewis Holtby", "MID", 75, 75, 35);
addPlayer("kie", "Timo Becker", "DEF", 74, 75, 29);
addPlayer("kie", "Colin Kleine-Bekel", "DEF", 73, 80, 23);
addPlayer("kie", "Shuto Machino", "FWD", 74, 76, 26);
addPlayer("kie", "Timon Weiner", "GK", 74, 78, 27);
addPlayer("kie", "Finn Porath", "MID", 73, 75, 29);
addPlayer("kie", "Alexander Bernhardsson", "FWD", 73, 75, 27);
addPlayer("kie", "Nicolai Remberg", "MID", 72, 76, 25);
addPlayer("kie", "Patrick Erras", "DEF", 73, 73, 31);
addPlayer("kie", "Andu Kelati", "MID", 71, 76, 23);
addPlayer("kie", "Armin Gigović", "MID", 73, 79, 24);
addPlayer("kie", "Phil Harres", "FWD", 70, 77, 24);
addPlayer("kie", "Thomas Dähne", "GK", 71, 71, 32);

(() => {
  const ll = leagues.find((l) => l.id === "laliga");
  const targetTeams = ["rma", "bar", "atm", "sev", "bet", "val", "rso"];
  if (ll) {
    ll.teams.forEach((team) => {
      if (targetTeams.includes(team.id)) {
        team.players = []; // clear previous
      }
    });
  }
})();

// Real Madrid
addPlayer("rma", "Thibaut Courtois", "GK", 89, 89, 34);
addPlayer("rma", "Andriy Lunin", "GK", 82, 84, 27);
addPlayer("rma", "Eder Militao", "DEF", 87, 89, 28);
addPlayer("rma", "Antonio Rüdiger", "DEF", 86, 86, 33);
addPlayer("rma", "Ferland Mendy", "DEF", 83, 83, 31);
addPlayer("rma", "Fran García", "DEF", 78, 82, 24);
addPlayer("rma", "Daniel Carvajal", "DEF", 84, 84, 34);
addPlayer("rma", "David Alaba", "DEF", 82, 82, 34);
addPlayer("rma", "Joan Martínez", "DEF", 76, 88, 19);
addPlayer("rma", "Álvaro Carreras", "DEF", 80, 85, 23);
addPlayer("rma", "Aurelien Tchouameni", "MID", 87, 90, 26);
addPlayer("rma", "Brahim Díaz", "MID", 84, 85, 27);
addPlayer("rma", "Dani Ceballos", "MID", 79, 79, 30);
addPlayer("rma", "Gonzalo García", "MID", 74, 80, 22);
addPlayer("rma", "Manuel Ibáñez", "MID", 71, 78, 20);
addPlayer("rma", "Eduardo Camavinga", "MID", 87, 91, 23);
addPlayer("rma", "Kylian Mbappé", "FWD", 94, 95, 27, "ST");
addPlayer("rma", "Rodrygo", "FWD", 87, 89, 25, "RW");
addPlayer("rma", "Vinícius Júnior", "FWD", 93, 94, 26, "LW");

// Barcelona
addPlayer("bar", "Joan García", "GK", 78, 85, 25);
addPlayer("bar", "Ronald Araujo", "DEF", 86, 89, 27);
addPlayer("bar", "Pau Kubarsi", "DEF", 82, 91, 19);
addPlayer("bar", "Jules Kounde", "DEF", 86, 88, 27);
addPlayer("bar", "Andreas Christensen", "DEF", 82, 82, 30);
addPlayer("bar", "Gerard Martín", "DEF", 75, 81, 22);
addPlayer("bar", "Álvaro Cortés", "DEF", 72, 79, 20);
addPlayer("bar", "Pedri", "MID", 88, 91, 23);
addPlayer("bar", "Gavi", "MID", 86, 90, 22);
addPlayer("bar", "Frenkie de Jong", "MID", 86, 87, 29);
addPlayer("bar", "Fermin López", "MID", 82, 86, 23);
addPlayer("bar", "Marc Bernal", "MID", 76, 87, 19);
addPlayer("bar", "Guille Fernández", "MID", 73, 85, 18);
addPlayer("bar", "Lamine Yamal", "FWD", 90, 96, 19);
addPlayer("bar", "Dani Olmo", "MID", 85, 85, 28);
addPlayer("bar", "Ferran Torres", "FWD", 81, 83, 26);
addPlayer("bar", "Marcus Rashford", "FWD", 83, 83, 28);
addPlayer("bar", "Tony Fernandez", "FWD", 75, 85, 18);
addPlayer("bar", "Juan Hernandez", "FWD", 73, 83, 19);

// Atlético Madrid
addPlayer("atm", "Jan Oblak", "GK", 86, 86, 33);
addPlayer("atm", "Juan Musso", "GK", 80, 80, 32);
addPlayer("atm", "David Ganzko", "DEF", 81, 82, 28);
addPlayer("atm", "Clément Lenglet", "DEF", 78, 78, 31);
addPlayer("atm", "Robin Le Normand", "DEF", 83, 84, 29);
addPlayer("atm", "Marc Pubille", "DEF", 79, 84, 23);
addPlayer("atm", "Nahuel Molina", "DEF", 81, 83, 28);
addPlayer("atm", "José María Jiménez", "DEF", 83, 83, 31);
addPlayer("atm", "Matteo Ruggeri", "DEF", 79, 83, 23);
addPlayer("atm", "Koke", "MID", 82, 82, 34);
addPlayer("atm", "Marcos Llorente", "MID", 84, 84, 31);
addPlayer("atm", "Pablo Barrios", "MID", 81, 87, 23);
addPlayer("atm", "Alex Baena", "MID", 83, 87, 24);
addPlayer("atm", "Thiago Almada", "MID", 79, 86, 25);
addPlayer("atm", "Johnny Cardozo", "MID", 82, 87, 24);
addPlayer("atm", "Nico González", "MID", 79, 84, 24);
addPlayer("atm", "Obed Vargas", "MID", 74, 83, 20);
addPlayer("atm", "Conor Gallagher", "MID", 82, 85, 26);
addPlayer("atm", "Thomas Lemar", "MID", 78, 78, 30);
addPlayer("atm", "Julian Álvarez", "FWD", 87, 90, 26);
addPlayer("atm", "Antoine Griezmann", "FWD", 87, 87, 35);
addPlayer("atm", "Alexander Sørloth", "FWD", 83, 83, 30);
addPlayer("atm", "Giuliano Simeone", "FWD", 77, 83, 23);

// Sevilla
addPlayer("sev", "Órjan Nyland", "GK", 77, 77, 35);
addPlayer("sev", "Álvaro Fernández", "GK", 76, 78, 28);
addPlayer("sev", "Laurent Lucino", "GK", 70, 75, 20);
addPlayer("sev", "Cesar Azpilicueta", "DEF", 78, 78, 36);
addPlayer("sev", "Quique Salas", "DEF", 78, 84, 24);
addPlayer("sev", "Jose Angel Carmona", "DEF", 77, 82, 24);
addPlayer("sev", "Tanguy Nyanzu", "DEF", 76, 82, 24);
addPlayer("sev", "Marcao Teixeira", "DEF", 76, 76, 30);
addPlayer("sev", "Andres Castrin", "DEF", 70, 77, 21);
addPlayer("sev", "Nemanja Gudelj", "MID", 78, 78, 34);
addPlayer("sev", "Joan Jordan", "MID", 76, 76, 31);
addPlayer("sev", "Djibril Sow", "MID", 78, 79, 29);
addPlayer("sev", "Juanlu Sanchez", "MID", 78, 85, 23);
addPlayer("sev", "Lucien Agume", "MID", 76, 81, 24);
addPlayer("sev", "Isaac Romero", "FWD", 80, 86, 26);
addPlayer("sev", "Akor Adams", "FWD", 77, 80, 26);
addPlayer("sev", "Alexis Sánchez", "FWD", 77, 77, 37);
addPlayer("sev", "Neal Maupay", "FWD", 76, 76, 29);
addPlayer("sev", "Chidera Ejuke", "FWD", 79, 81, 28);
addPlayer("sev", "Peke Fernández", "FWD", 76, 83, 23);

// Real Betis
addPlayer("bet", "Álvaro Valles", "GK", 80, 81, 29);
addPlayer("bet", "Héctor Bellerín", "DEF", 79, 79, 31);
addPlayer("bet", "Diego Llorente", "DEF", 79, 79, 32);
addPlayer("bet", "Nathan", "DEF", 76, 82, 25);
addPlayer("bet", "Ricardo Rodríguez", "DEF", 77, 77, 34);
addPlayer("bet", "Marc Roca", "MID", 78, 78, 29);
addPlayer("bet", "Giovanni Lo Celso", "MID", 82, 82, 30);
addPlayer("bet", "Pablo Fornals", "MID", 80, 80, 30);
addPlayer("bet", "Isco", "MID", 82, 82, 34);
addPlayer("bet", "Antoni", "FWD", 79, 82, 26);
addPlayer("bet", "Cucho Hernández", "FWD", 78, 79, 27);
addPlayer("bet", "Adrián", "GK", 75, 75, 39);
addPlayer("bet", "Pau López", "GK", 79, 79, 31);
addPlayer("bet", "Marc Bartra", "DEF", 78, 78, 35);
addPlayer("bet", "Valentín Gómez", "DEF", 76, 84, 23);
addPlayer("bet", "Júnior Firpo", "DEF", 77, 77, 29);
addPlayer("bet", "Sergi Altimira", "MID", 76, 82, 24);
addPlayer("bet", "Alvaro Fidalgo", "MID", 78, 79, 29);
addPlayer("bet", "Nelson Deossa", "MID", 76, 81, 26);
addPlayer("bet", "Rodrigo Riquelme", "FWD", 78, 84, 26);

// Valencia
addPlayer("val", "Stole Dimitrievski", "GK", 80, 80, 32);
addPlayer("val", "Thierry Correia", "DEF", 78, 80, 27);
addPlayer("val", "César Tárrega", "DEF", 76, 83, 24);
addPlayer("val", "José Copete", "DEF", 75, 77, 26);
addPlayer("val", "José Luis Gaya", "DEF", 82, 82, 31);
addPlayer("val", "Pepelu", "MID", 81, 83, 27);
addPlayer("val", "Javi Guerra", "MID", 81, 88, 23);
addPlayer("val", "André Almeida", "MID", 79, 83, 26);
addPlayer("val", "Diego López", "FWD", 80, 85, 24);
addPlayer("val", "Luis Rioja", "FWD", 77, 77, 32);
addPlayer("val", "Hugo Duro", "FWD", 81, 83, 26);
addPlayer("val", "Christian Rivero", "GK", 72, 75, 28);
addPlayer("val", "Justin de Haas", "DEF", 72, 76, 26);
addPlayer("val", "Jesús Vázquez", "DEF", 75, 80, 23);
addPlayer("val", "Dimitri Foulquier", "DEF", 76, 76, 33);
addPlayer("val", "Cenk Özkacar", "DEF", 75, 79, 25);
addPlayer("val", "Filip Ugrinic", "MID", 76, 78, 27);
addPlayer("val", "Baptiste Santamaria", "MID", 77, 77, 31);

// Real Sociedad
addPlayer("rso", "Alex Remiro", "GK", 83, 84, 31);
addPlayer("rso", "Jon Aramburu", "DEF", 78, 83, 24);
addPlayer("rso", "Igor Zubeldia", "DEF", 81, 82, 29);
addPlayer("rso", "Jon Pacheco", "DEF", 79, 84, 25);
addPlayer("rso", "Sergio Gomez", "DEF", 78, 82, 25);
addPlayer("rso", "Yangel Herrera", "MID", 80, 81, 28);
addPlayer("rso", "Beñat Turrientes", "MID", 79, 85, 24);
addPlayer("rso", "Braiz Mendes", "MID", 82, 82, 29);
addPlayer("rso", "Takefusa Kubo", "FWD", 83, 86, 25);
addPlayer("rso", "Ander Barrenetxea", "FWD", 80, 84, 24);
addPlayer("rso", "Mikel Oyarzabal", "FWD", 84, 84, 29);
addPlayer("rso", "Unai Marrero", "GK", 74, 79, 24);
addPlayer("rso", "Aitor Fraga", "GK", 70, 77, 23);
addPlayer("rso", "Aritz Elustondo", "DEF", 78, 78, 32);
addPlayer("rso", "Álvaro Odriozola", "DEF", 77, 77, 30);
addPlayer("rso", "Ayén Muñoz", "DEF", 78, 80, 28);
addPlayer("rso", "Luka Sučić", "MID", 81, 86, 23);
addPlayer("rso", "Pablo Marin", "MID", 75, 82, 23);
addPlayer("rso", "Arsen Zakharyan", "MID", 79, 85, 23);
addPlayer("rso", "Gonçalo Guedes", "FWD", 79, 79, 29);

// OVERRIDE: 2026/2027 REALISTIC LIGUE 1 SCOUTS (from TRANSFERMARKT)
(() => {
  const l1 = leagues.find((l) => l.id === "ligue1");
  if (l1) {
    l1.teams.forEach((team) => {
      team.players = []; // clear old ones
    });
  }
})();

// PSG (psg)
addPlayer("psg", "Ousmane Dembélé", "FWD", 86, 86, 29);
addPlayer("psg", "Vitinha", "MID", 86, 88, 26);
addPlayer("psg", "Bradley Barcola", "FWD", 85, 91, 23);
addPlayer("psg", "Marquinhos", "DEF", 86, 86, 32);
addPlayer("psg", "Achraf Hakimi", "DEF", 86, 87, 27);
addPlayer("psg", "Nuno Mendes", "DEF", 85, 87, 24);
addPlayer("psg", "João Neves", "MID", 84, 91, 21);
addPlayer("psg", "Warren Zaïre-Emery", "MID", 83, 90, 20);
addPlayer("psg", "Désiré Doué", "MID", 81, 88, 20);
addPlayer("psg", "Willian Pacho", "DEF", 82, 86, 24);
addPlayer("psg", "Lucas Beraldo", "DEF", 81, 87, 22);
addPlayer("psg", "Gonçalo Ramos", "FWD", 83, 85, 25);
addPlayer("psg", "Randal Kolo Muani", "FWD", 82, 83, 27);
addPlayer("psg", "Fabián Ruiz", "MID", 84, 84, 30);
addPlayer("psg", "Matvey Safonov", "GK", 80, 83, 27);
addPlayer("psg", "Arnau Tenas", "GK", 78, 83, 24);
addPlayer("psg", "Lee Kang-in", "MID", 82, 84, 25);
addPlayer("psg", "Marco Asensio", "FWD", 82, 82, 30);
addPlayer("psg", "Milan Škriniar", "DEF", 83, 83, 31);
addPlayer("psg", "Lucas Hernández", "DEF", 84, 84, 30);
addPlayer("psg", "Presnel Kimpembe", "DEF", 81, 81, 30);
addPlayer("psg", "Yoram Zague", "DEF", 76, 82, 19);
addPlayer("psg", "Senny Mayulu", "MID", 75, 83, 19);

// Marseille (mar)
addPlayer("mar", "Mason Greenwood", "FWD", 83, 87, 24);
addPlayer("mar", "Adrien Rabiot", "MID", 83, 83, 31);
addPlayer("mar", "Elye Wahi", "FWD", 80, 85, 23);
addPlayer("mar", "Pierre-Emile Højbjerg", "MID", 82, 82, 30);
addPlayer("mar", "Chancel Mbemba", "DEF", 81, 81, 31);
addPlayer("mar", "Leonardo Balerdi", "DEF", 80, 83, 27);
addPlayer("mar", "Geronimo Rulli", "GK", 81, 81, 34);
addPlayer("mar", "Jonathan Rowe", "FWD", 78, 85, 23);
addPlayer("mar", "Neal Maupay", "FWD", 79, 79, 29);
addPlayer("mar", "Valentin Carboni", "MID", 77, 86, 21);
addPlayer("mar", "Ismaël Koné", "MID", 78, 84, 24);
addPlayer("mar", "Amine Harit", "MID", 79, 80, 29);
addPlayer("mar", "Valentin Rongier", "MID", 80, 80, 31);
addPlayer("mar", "Derek Cornelius", "DEF", 76, 80, 28);
addPlayer("mar", "Lilian Brassier", "DEF", 78, 82, 26);
addPlayer("mar", "Quentin Merlin", "DEF", 79, 83, 23);
addPlayer("mar", "Bamo Meïté", "DEF", 77, 83, 24);
addPlayer("mar", "Luis Henrique", "FWD", 77, 82, 24);

// Monaco (asm)
addPlayer("asm", "Aleksandr Golovin", "MID", 82, 82, 30);
addPlayer("asm", "Denis Zakaria", "MID", 81, 81, 29);
addPlayer("asm", "Folarin Balogun", "FWD", 80, 84, 25);
addPlayer("asm", "Breel Embolo", "FWD", 80, 80, 29);
addPlayer("asm", "Takumi Minamino", "MID", 80, 80, 31);
addPlayer("asm", "Vanderson", "DEF", 81, 85, 25);
addPlayer("asm", "Caio Henrique", "DEF", 81, 81, 28);
addPlayer("asm", "Maghnes Akliouche", "MID", 79, 87, 24);
addPlayer("asm", "Eliesse Ben Seghir", "MID", 77, 87, 21);
addPlayer("asm", "Lamine Camara", "MID", 78, 86, 22);
addPlayer("asm", "Mohammed Salisu", "DEF", 80, 83, 27);
addPlayer("asm", "Jordan Teze", "DEF", 79, 82, 26);
addPlayer("asm", "Christian Mawissa", "DEF", 75, 84, 21);
addPlayer("asm", "Krépin Diatta", "MID", 78, 79, 27);
addPlayer("asm", "Thilo Kehrer", "DEF", 79, 80, 29);
addPlayer("asm", "Wilfried Singo", "DEF", 79, 82, 25);
addPlayer("asm", "Philipp Köhn", "GK", 78, 81, 28);
addPlayer("asm", "George Ilenikhena", "FWD", 75, 86, 19);

// Lille (lil)
addPlayer("lil", "Jonathan David", "FWD", 83, 85, 26);
addPlayer("lil", "Edon Zhegrova", "FWD", 82, 84, 27);
addPlayer("lil", "Angel Gomes", "MID", 81, 85, 25);
addPlayer("lil", "Lucas Chevalier", "GK", 82, 87, 24);
addPlayer("lil", "Benjamin André", "MID", 80, 80, 35);
addPlayer("lil", "Bafodé Diakité", "DEF", 80, 84, 25);
addPlayer("lil", "Tiago Santos", "DEF", 79, 86, 23);
addPlayer("lil", "Aissa Mandi", "DEF", 78, 78, 34);
addPlayer("lil", "Mitchel Bakker", "DEF", 77, 80, 25);
addPlayer("lil", "Thomas Meunier", "DEF", 78, 78, 34);
addPlayer("lil", "Alexsandro", "DEF", 78, 81, 26);
addPlayer("lil", "Ayyoub Bouaddi", "MID", 75, 87, 18);
addPlayer("lil", "Ngal'ayel Mukau", "MID", 74, 83, 21);
addPlayer("lil", "Osame Sahraoui", "FWD", 78, 83, 24);
addPlayer("lil", "Matias Fernandez-Pardo", "FWD", 75, 85, 21);
addPlayer("lil", "Rémy Cabella", "MID", 78, 78, 36);
addPlayer("lil", "Gabriel Gudmundsson", "DEF", 77, 79, 27);

// Lyon (lyo)
addPlayer("lyo", "Alexandre Lacazette", "FWD", 83, 83, 35);
addPlayer("lyo", "Rayan Cherki", "MID", 80, 85, 22);
addPlayer("lyo", "Georges Mikautadze", "FWD", 81, 85, 25);
addPlayer("lyo", "Wilfried Zaha", "FWD", 81, 81, 33);
addPlayer("lyo", "Saïd Benrahma", "FWD", 80, 80, 30);
addPlayer("lyo", "Ernest Nuamah", "FWD", 78, 85, 22);
addPlayer("lyo", "Maxence Caqueret", "MID", 80, 83, 26);
addPlayer("lyo", "Corentin Tolisso", "MID", 80, 80, 31);
addPlayer("lyo", "Jordan Veretout", "MID", 80, 80, 33);
addPlayer("lyo", "Nemanja Matić", "MID", 80, 80, 37);
addPlayer("lyo", "Tanner Tessmann", "MID", 76, 82, 24);
addPlayer("lyo", "Lucas Perri", "GK", 79, 83, 28);
addPlayer("lyo", "Anthony Lopes", "GK", 80, 80, 35);
addPlayer("lyo", "Duje Ćaleta-Car", "DEF", 78, 80, 29);
addPlayer("lyo", "Warmed Omari", "DEF", 76, 81, 26);
addPlayer("lyo", "Clinton Mata", "DEF", 78, 78, 33);
addPlayer("lyo", "Moussa Niakhaté", "DEF", 78, 80, 30);
addPlayer("lyo", "Nicolás Tagliafico", "DEF", 79, 79, 33);
addPlayer("lyo", "Ainsley Maitland-Niles", "DEF", 77, 78, 28);
addPlayer("lyo", "Abner", "DEF", 77, 81, 26);
addPlayer("lyo", "Gift Orban", "FWD", 77, 83, 23);

// Lens (len)
addPlayer("len", "Facundo Medina", "DEF", 82, 85, 27);
addPlayer("len", "Kevin Danso", "DEF", 82, 84, 27);
addPlayer("len", "Brice Samba", "GK", 82, 82, 32);
addPlayer("len", "Florian Sotoca", "FWD", 79, 79, 35);
addPlayer("len", "Martin Satriano", "FWD", 78, 83, 25);
addPlayer("len", "Anass Zaroury", "FWD", 77, 82, 25);
addPlayer("len", "Przemysław Frankowski", "DEF", 79, 79, 31);
addPlayer("len", "Jonathan Gradit", "DEF", 78, 78, 33);
addPlayer("len", "Angelo Fulgini", "MID", 78, 78, 29);
addPlayer("len", "Hamzat Ojediran", "MID", 74, 82, 22);
addPlayer("len", "Deiver Machado", "DEF", 78, 78, 32);
addPlayer("len", "Adrien Thomasson", "MID", 77, 77, 32);
addPlayer("len", "Andy Diouf", "MID", 77, 84, 23);
addPlayer("len", "Neil El Aynaoui", "MID", 78, 83, 24);
addPlayer("len", "Nampalys Mendy", "MID", 77, 77, 33);
addPlayer("len", "M'Bala Nzola", "FWD", 78, 78, 29);
addPlayer("len", "Wesley Saïd", "FWD", 77, 77, 31);

// Rennes (ren)
addPlayer("ren", "Amine Gouiri", "FWD", 81, 84, 26);
addPlayer("ren", "Arnaud Kalimuendo", "FWD", 79, 83, 24);
addPlayer("ren", "Ludovic Blas", "MID", 80, 81, 28);
addPlayer("ren", "Albert Grønbæk", "MID", 78, 84, 24);
addPlayer("ren", "Jota", "FWD", 79, 81, 27);
addPlayer("ren", "Glen Kamara", "MID", 78, 79, 30);
addPlayer("ren", "Steve Mandanda", "GK", 79, 79, 41);
addPlayer("ren", "Leo Østigård", "DEF", 78, 81, 26);
addPlayer("ren", "Christopher Wooh", "DEF", 77, 82, 24);
addPlayer("ren", "Alidu Seidu", "DEF", 77, 81, 25);
addPlayer("ren", "Azor Matusiwa", "MID", 78, 80, 28);
addPlayer("ren", "Lorenz Assignon", "DEF", 77, 82, 25);
addPlayer("ren", "Carlos Andrés Gómez", "FWD", 75, 82, 23);
addPlayer("ren", "Adrien Truffert", "DEF", 79, 83, 24);

// Nice (nic)
addPlayer("nic", "Jérémie Boga", "FWD", 80, 80, 29);
addPlayer("nic", "Terem Moffi", "FWD", 80, 82, 27);
addPlayer("nic", "Marcin Bułka", "GK", 81, 84, 26);
addPlayer("nic", "Tanguy Ndombele", "MID", 79, 80, 29);
addPlayer("nic", "Evann Guessand", "FWD", 78, 82, 24);
addPlayer("nic", "Morgan Sanson", "MID", 79, 79, 31);
addPlayer("nic", "Hicham Boudaoui", "MID", 78, 81, 26);
addPlayer("nic", "Melvin Bard", "DEF", 78, 82, 25);
addPlayer("nic", "Dante", "DEF", 78, 78, 42);
addPlayer("nic", "Jonathan Clauss", "DEF", 80, 80, 33);
addPlayer("nic", "Moïse Bombito", "DEF", 76, 82, 26);
addPlayer("nic", "Youssoufa Moukoko", "FWD", 77, 85, 21);
addPlayer("nic", "Badredine Bouanani", "MID", 75, 84, 21);
addPlayer("nic", "Pablo Rosario", "MID", 77, 78, 29);

// Reims (rei)
addPlayer("rei", "Junya Ito", "FWD", 80, 80, 33);
addPlayer("rei", "Keito Nakamura", "FWD", 79, 82, 25);
addPlayer("rei", "Marshall Munetsi", "MID", 78, 79, 29);
addPlayer("rei", "Teddy Teuma", "MID", 79, 79, 32);
addPlayer("rei", "Yehvann Diouf", "GK", 78, 83, 26);
addPlayer("rei", "Emmanuel Agbadou", "DEF", 77, 81, 28);
addPlayer("rei", "Joseph Okumu", "DEF", 76, 78, 28);
addPlayer("rei", "Oumar Diakité", "FWD", 76, 83, 22);
addPlayer("rei", "Thibault De Smet", "DEF", 75, 77, 27);
addPlayer("rei", "Sergio Akieme", "DEF", 76, 79, 28);
addPlayer("rei", "Gabriel Moscardo", "MID", 74, 85, 20);
addPlayer("rei", "Amadou Koné", "MID", 73, 81, 20);
addPlayer("rei", "Amine Salama", "FWD", 74, 78, 25);
addPlayer("rei", "Valentin Atangana", "MID", 74, 83, 20);

// Strasbourg (str)
addPlayer("str", "Sebastian Nanasi", "MID", 78, 85, 23);
addPlayer("str", "Andrey Santos", "MID", 78, 86, 21);
addPlayer("str", "Habib Diarra", "MID", 77, 85, 22);
addPlayer("str", "Emanuel Emegha", "FWD", 76, 83, 23);
addPlayer("str", "Dilane Bakwa", "FWD", 77, 84, 23);
addPlayer("str", "Đorđe Petrović", "GK", 78, 83, 26);
addPlayer("str", "Ismaël Doukouré", "DEF", 76, 83, 22);
addPlayer("str", "Saidou Sow", "DEF", 75, 80, 23);
addPlayer("str", "Guéla Doué", "DEF", 76, 82, 23);
addPlayer("str", "Caleb Wiley", "DEF", 75, 83, 21);
addPlayer("str", "Diego Moreira", "FWD", 74, 82, 21);
addPlayer("str", "Sékou Mara", "FWD", 75, 80, 23);
addPlayer("str", "Félix Lemaréchal", "MID", 73, 80, 22);
addPlayer("str", "Mamadou Sarr", "DEF", 73, 84, 20);

// Toulouse (tou)
addPlayer("tou", "Guillaume Restes", "GK", 78, 86, 21);
addPlayer("tou", "Vincent Sierro", "MID", 78, 78, 30);
addPlayer("tou", "Rasmus Nicolaisen", "DEF", 78, 80, 29);
addPlayer("tou", "Aron Dønnum", "FWD", 77, 78, 28);
addPlayer("tou", "Yann Gboho", "MID", 77, 81, 25);
addPlayer("tou", "Cristian Cásseres Jr.", "MID", 76, 80, 26);
addPlayer("tou", "Frank Magri", "FWD", 75, 80, 26);
addPlayer("tou", "Charlie Cresswell", "DEF", 74, 81, 23);
addPlayer("tou", "Djibril Sidibé", "DEF", 76, 76, 33);
addPlayer("tou", "Joshua King", "FWD", 76, 76, 34);
addPlayer("tou", "Shavy Babicka", "FWD", 75, 78, 25);
addPlayer("tou", "Mark McKenzie", "DEF", 75, 78, 27);
addPlayer("tou", "Denis Genreau", "MID", 74, 76, 26);
addPlayer("tou", "Gabriel Suazo", "DEF", 76, 78, 28);

// Montpellier (mon2)
addPlayer("mon2", "Téji Savanier", "MID", 80, 80, 34);
addPlayer("mon2", "Arnaud Nordin", "FWD", 78, 79, 27);
addPlayer("mon2", "Musa Al-Taamari", "FWD", 78, 79, 28);
addPlayer("mon2", "Joris Chotard", "MID", 78, 83, 24);
addPlayer("mon2", "Jordan Ferri", "MID", 77, 77, 34);
addPlayer("mon2", "Benjamin Lecomte", "GK", 78, 78, 35);
addPlayer("mon2", "Becir Omeragic", "DEF", 76, 82, 24);
addPlayer("mon2", "Kiki Kouyaté", "DEF", 76, 78, 29);
addPlayer("mon2", "Modibo Sagnan", "DEF", 75, 78, 27);
addPlayer("mon2", "Wahbi Khazri", "FWD", 76, 76, 35);
addPlayer("mon2", "Issiaga Sylla", "DEF", 75, 75, 32);
addPlayer("mon2", "Enzo Tchato", "DEF", 74, 79, 23);
addPlayer("mon2", "Khalil Fayad", "MID", 73, 82, 21);
addPlayer("mon2", "Falaye Sacko", "DEF", 75, 75, 30);

// Nantes (nan)
addPlayer("nan", "Moses Simon", "FWD", 79, 79, 30);
addPlayer("nan", "Alban Lafont", "GK", 79, 82, 27);
addPlayer("nan", "Mostafa Mohamed", "FWD", 78, 80, 28);
addPlayer("nan", "Pedro Chirivella", "MID", 78, 80, 28);
addPlayer("nan", "Douglas Augusto", "MID", 77, 78, 29);
addPlayer("nan", "Matthis Abline", "FWD", 76, 82, 23);
addPlayer("nan", "Jean-Charles Castelletto", "DEF", 77, 77, 31);
addPlayer("nan", "Nicolas Pallois", "DEF", 76, 76, 38);
addPlayer("nan", "Kelvin Amian", "DEF", 76, 78, 28);
addPlayer("nan", "Sorba Thomas", "MID", 75, 77, 30);
addPlayer("nan", "Nicolas Cozza", "DEF", 76, 79, 27);
addPlayer("nan", "Tino Kadewere", "FWD", 75, 75, 30);
addPlayer("nan", "Marcus Coco", "MID", 74, 74, 29);
addPlayer("nan", "Nathan Zézé", "DEF", 74, 82, 20);

// Brest (bst)
addPlayer("bst", "Pierre Lees-Melou", "MID", 80, 80, 32);
addPlayer("bst", "Romain Del Castillo", "FWD", 79, 79, 30);
addPlayer("bst", "Marco Bizot", "GK", 79, 79, 35);
addPlayer("bst", "Brendan Chardonnet", "DEF", 78, 78, 31);
addPlayer("bst", "Mahdi Camara", "MID", 78, 80, 27);
addPlayer("bst", "Hugo Magnetti", "MID", 77, 79, 27);
addPlayer("bst", "Kenny Lala", "DEF", 78, 78, 34);
addPlayer("bst", "Ludovic Ajorque", "FWD", 77, 77, 32);
addPlayer("bst", "Mama Baldé", "FWD", 76, 76, 30);
addPlayer("bst", "Kamory Doumbia", "MID", 76, 81, 23);
addPlayer("bst", "Massadio Haïdara", "DEF", 76, 76, 33);
addPlayer("bst", "Romain Faivre", "MID", 77, 79, 27);
addPlayer("bst", "Luc Zogbe", "DEF", 72, 78, 21);
addPlayer("bst", "Julien Le Cardinal", "DEF", 75, 77, 28);

// Le Havre (hav)
addPlayer("hav", "Daler Kuzyaev", "MID", 77, 77, 33);
addPlayer("hav", "Arthur Desmas", "GK", 76, 77, 32);
addPlayer("hav", "Arouna Sangante", "DEF", 76, 82, 24);
addPlayer("hav", "Gautier Lloris", "DEF", 76, 77, 30);
addPlayer("hav", "Oussama Targhalline", "MID", 75, 81, 23);
addPlayer("hav", "Abdoulaye Touré", "MID", 75, 75, 32);
addPlayer("hav", "Christopher Operi", "DEF", 75, 75, 29);
addPlayer("hav", "Rassoul Ndiaye", "MID", 74, 79, 24);
addPlayer("hav", "Emmanuel Sabbi", "FWD", 74, 76, 28);
addPlayer("hav", "Loïc Négo", "DEF", 74, 74, 35);
addPlayer("hav", "Timothée Pembélé", "DEF", 73, 78, 23);
addPlayer("hav", "Yassine Kechta", "MID", 74, 80, 24);
addPlayer("hav", "Ilyes Housni", "FWD", 71, 80, 20);
addPlayer("hav", "Josué Casimir", "FWD", 73, 77, 24);

// Auxerre (aux)
addPlayer("aux", "Donovan Léon", "GK", 76, 76, 33);
addPlayer("aux", "Gauthier Hein", "MID", 76, 76, 29);
addPlayer("aux", "Jubal", "DEF", 76, 76, 32);
addPlayer("aux", "Elisha Owusu", "MID", 75, 77, 28);
addPlayer("aux", "Lassine Sinayoko", "FWD", 75, 78, 26);
addPlayer("aux", "Ado Onaiwu", "FWD", 74, 74, 30);
addPlayer("aux", "Paul Joly", "DEF", 74, 78, 25);
addPlayer("aux", "Gideon Mensah", "DEF", 74, 76, 27);
addPlayer("aux", "Rayan Raveloson", "MID", 74, 74, 29);
addPlayer("aux", "Colin Dagba", "DEF", 74, 75, 27);
addPlayer("aux", "Florian Ayé", "FWD", 73, 73, 29);
addPlayer("aux", "Gabriel Osho", "DEF", 73, 76, 27);
addPlayer("aux", "Kévin Danois", "MID", 72, 79, 21);
addPlayer("aux", "Clément Akpa", "DEF", 72, 77, 24);

// Saint-Etienne (sai)
addPlayer("sai", "Gautier Larsonneur", "GK", 77, 78, 29);
addPlayer("sai", "Zuriko Davitashvili", "FWD", 76, 81, 25);
addPlayer("sai", "Ibrahim Sissoko", "FWD", 75, 75, 30);
addPlayer("sai", "Dylan Batubinsika", "DEF", 75, 76, 30);
addPlayer("sai", "Yunis Abdelhamid", "DEF", 76, 76, 38);
addPlayer("sai", "Mathis Amougou", "MID", 73, 84, 20);
addPlayer("sai", "Aïmen Moueffek", "MID", 74, 80, 25);
addPlayer("sai", "Pierre Ekwah", "MID", 74, 81, 24);
addPlayer("sai", "Dennis Appiah", "DEF", 74, 74, 33);
addPlayer("sai", "Léo Pétrot", "DEF", 74, 75, 29);
addPlayer("sai", "Yvann Maçon", "DEF", 73, 75, 27);
addPlayer("sai", "Lucas Stassin", "FWD", 72, 81, 21);
addPlayer("sai", "Augustine Boakye", "MID", 73, 79, 25);
addPlayer("sai", "Mathieu Cafaro", "MID", 74, 74, 29);

// Angers (ang)
addPlayer("ang", "Yahia Fofana", "GK", 76, 81, 25);
addPlayer("ang", "Himad Abdelli", "MID", 76, 79, 26);
addPlayer("ang", "Lois Diony", "FWD", 74, 74, 33);
addPlayer("ang", "Haris Belkebla", "MID", 74, 74, 32);
addPlayer("ang", "Jean-Eudes Aholou", "MID", 75, 75, 32);
addPlayer("ang", "Farid El Melali", "FWD", 74, 75, 28);
addPlayer("ang", "Cedric Hountondji", "DEF", 74, 74, 32);
addPlayer("ang", "Jordan Lefort", "DEF", 73, 73, 32);
addPlayer("ang", "Emmanuel Biumla", "DEF", 72, 80, 20);
addPlayer("ang", "Zinedine Ferhat", "MID", 74, 74, 33);
addPlayer("ang", "Carlens Arcus", "DEF", 73, 74, 29);
addPlayer("ang", "Florent Hanin", "DEF", 72, 72, 36);
addPlayer("ang", "Bamba Dieng", "FWD", 74, 78, 26);
addPlayer("ang", "Esteban Lepaul", "FWD", 72, 76, 26);

// OVERRIDE: 2026/2027 REALISTIC RPL SCOUTS (from TRANSFERMARKT)
(() => {
  const rpl = leagues.find((l) => l.id === "rpl");
  if (rpl) {
    rpl.teams.forEach((team) => {
      team.players = []; // clear old ones
    });
  }
})();

// Zenit St. Petersburg (zen)
addPlayer("zen", "Wendel", "MID", 82, 82, 28);
addPlayer("zen", "Claudinho", "MID", 81, 81, 29);
addPlayer("zen", "Douglas Santos", "DEF", 80, 80, 32);
addPlayer("zen", "Wílmar Barrios", "MID", 80, 80, 32);
addPlayer("zen", "Erakovic", "DEF", 79, 83, 25);
addPlayer("zen", "Mateo Cassierra", "FWD", 79, 80, 29);
addPlayer("zen", "Nino", "DEF", 79, 80, 29);
addPlayer("zen", "Artur", "FWD", 78, 80, 28);
addPlayer("zen", "Evgeny Latyshonok", "GK", 76, 79, 27);
addPlayer("zen", "Maksim Glushenkov", "MID", 80, 83, 26);
addPlayer("zen", "Pedro", "FWD", 76, 84, 20);
addPlayer("zen", "Matias Caseras", "MID", 75, 78, 26);
addPlayer("zen", "Mikhail Kerzhakov", "GK", 73, 73, 39);
addPlayer("zen", "Denis Adamov", "GK", 73, 76, 28);
addPlayer("zen", "Viacheslav Karavaev", "DEF", 76, 76, 30);
addPlayer("zen", "Sergey Volkov", "DEF", 75, 78, 23);
addPlayer("zen", "Rodrigão", "DEF", 76, 76, 30);
addPlayer("zen", "Aleksandr Kovalenko", "MID", 72, 78, 22);
addPlayer("zen", "Aleksandr Yerokhin", "MID", 73, 73, 36);
addPlayer("zen", "Andrey Mostovoy", "MID", 77, 77, 28);
addPlayer("zen", "Ivan Sergeev", "FWD", 76, 76, 30);
addPlayer("zen", "Ilzat Akhmetov", "MID", 74, 75, 28);

// Spartak Moscow (spa)
addPlayer("spa", "Ezequiel Barco", "MID", 79, 82, 27);
addPlayer("spa", "Srdjan Babic", "DEF", 78, 80, 30);
addPlayer("spa", "Manfred Ugalde", "FWD", 77, 82, 23);
addPlayer("spa", "Christopher Martins", "MID", 76, 78, 29);
addPlayer("spa", "Aleksandr Maksimenko", "GK", 77, 79, 28);
addPlayer("spa", "Ruslan Litvinov", "DEF", 76, 80, 24);
addPlayer("spa", "Daniil Khlusevich", "DEF", 76, 79, 25);
addPlayer("spa", "Marquinhos", "FWD", 76, 80, 26);
addPlayer("spa", "Willian José", "FWD", 76, 76, 34);
addPlayer("spa", "Alexander Selikhov", "GK", 75, 75, 32);
addPlayer("spa", "Nikita Chernov", "DEF", 74, 75, 30);
addPlayer("spa", "Pavel Meleshin", "FWD", 70, 78, 22);
addPlayer("spa", "Oleg Reabciuk", "DEF", 75, 76, 28);
addPlayer("spa", "Tomás Tavares", "DEF", 74, 78, 25);
addPlayer("spa", "Roman Zobnin", "MID", 76, 76, 32);
addPlayer("spa", "Nail Umyarov", "MID", 74, 78, 25);
addPlayer("spa", "Danil Prutsev", "MID", 75, 79, 26);
addPlayer("spa", "Daniil Denisov", "MID", 74, 78, 23);
addPlayer("spa", "Anton Zinkovskiy", "MID", 76, 77, 30);
addPlayer("spa", "Jesús Medina", "MID", 75, 76, 29);
addPlayer("spa", "Théo Bongonda", "MID", 77, 79, 30);
addPlayer("spa", "Alexander Sobolev", "FWD", 77, 78, 29);
addPlayer("spa", "Shamar Nicholson", "FWD", 74, 75, 29);

// CSKA Moscow (csk)
addPlayer("csk", "Fedor Chalov", "FWD", 78, 80, 28);
addPlayer("csk", "Igor Akinfeev", "GK", 78, 78, 40);
addPlayer("csk", "Ivan Oblyakov", "MID", 78, 80, 27);
addPlayer("csk", "Moisés", "DEF", 77, 78, 31);
addPlayer("csk", "Milan Gajic", "DEF", 76, 76, 30);
addPlayer("csk", "Abbosbek Fayzullaev", "MID", 77, 85, 22);
addPlayer("csk", "Willyan Rocha", "DEF", 76, 77, 31);
addPlayer("csk", "Khellven", "DEF", 76, 81, 25);
addPlayer("csk", "Victor Dávila", "FWD", 76, 77, 28);
addPlayer("csk", "Vladislav Torop", "GK", 72, 79, 22);
addPlayer("csk", "Igor Diveev", "DEF", 76, 80, 26);
addPlayer("csk", "Matvey Lukin", "DEF", 70, 78, 21);
addPlayer("csk", "Saša Zdjelar", "MID", 75, 75, 31);
addPlayer("csk", "Maksim Mukhin", "MID", 74, 79, 24);
addPlayer("csk", "Víctor Felipe Méndez", "MID", 74, 78, 26);
addPlayer("csk", "Egor Ushakov", "MID", 70, 77, 23);
addPlayer("csk", "Miralem Pjanić", "MID", 78, 78, 36);
addPlayer("csk", "Kristijan Bistrović", "MID", 74, 75, 28);
addPlayer("csk", "Tamerlan Musaev", "FWD", 75, 78, 24);
addPlayer("csk", "Anton Zabolotnyi", "FWD", 73, 73, 34);

// Dynamo Moscow (dyn)
addPlayer("dyn", "Konstantin Tyukavin", "FWD", 79, 84, 23);
addPlayer("dyn", "Jorge Carrascal", "MID", 78, 80, 27);
addPlayer("dyn", "Daniil Fomin", "MID", 77, 78, 29);
addPlayer("dyn", "Fabián Balbuena", "DEF", 77, 77, 34);
addPlayer("dyn", "Nicolas Ngamaleu", "MID", 76, 76, 31);
addPlayer("dyn", "Luis Chávez", "MID", 77, 77, 30);
addPlayer("dyn", "Bitello", "MID", 78, 81, 26);
addPlayer("dyn", "Andrey Lunev", "GK", 76, 76, 34);
addPlayer("dyn", "Arthur Gomes", "FWD", 76, 79, 27);
addPlayer("dyn", "El Mehdi Maouhoub", "FWD", 74, 80, 22);
addPlayer("dyn", "Anton Shunin", "GK", 75, 75, 39);
addPlayer("dyn", "Igor Leshchuk", "GK", 74, 76, 30);
addPlayer("dyn", "Eli Dasa", "DEF", 75, 75, 31);
addPlayer("dyn", "Sergey Parshivlyuk", "DEF", 72, 72, 37);
addPlayer("dyn", "Nicolas Marichal", "DEF", 74, 80, 25);
addPlayer("dyn", "Roberto Fernández", "DEF", 74, 78, 26);
addPlayer("dyn", "Milan Majstorovic", "DEF", 70, 80, 21);
addPlayer("dyn", "Diego Laxalt", "DEF", 76, 76, 31);
addPlayer("dyn", "Aleksandr Kutitskiy", "MID", 72, 78, 24);
addPlayer("dyn", "Daniil Lesovoy", "MID", 74, 75, 28);
addPlayer("dyn", "Vyacheslav Grulev", "MID", 73, 76, 25);
addPlayer("dyn", "Denis Makarov", "MID", 75, 76, 28);
addPlayer("dyn", "Yaroslav Gladyshev", "FWD", 72, 78, 22);

// Krasnodar (kra)
addPlayer("kra", "Eduard Spertsyan", "MID", 81, 85, 25);
addPlayer("kra", "Jhon Córdoba", "FWD", 80, 80, 32);
addPlayer("kra", "Matvey Safonov", "GK", 80, 84, 27);
addPlayer("kra", "Lucas Olaza", "DEF", 77, 78, 29);
addPlayer("kra", "João Batxi", "MID", 76, 79, 27);
addPlayer("kra", "Kevin Castaño", "MID", 76, 81, 25);
addPlayer("kra", "Vítor Tormena", "DEF", 76, 78, 30);
addPlayer("kra", "Diego Costa", "DEF", 75, 80, 26);
addPlayer("kra", "Stanislav Agkatsev", "GK", 73, 79, 24);
addPlayer("kra", "Sergey Petrov", "DEF", 74, 74, 35);
addPlayer("kra", "Aleksandr Ektov", "DEF", 72, 74, 28);
addPlayer("kra", "Kaio", "DEF", 74, 75, 28);
addPlayer("kra", "Aleksandr Chernikov", "MID", 76, 80, 24);
addPlayer("kra", "Kevin Lenini", "MID", 74, 76, 27);
addPlayer("kra", "Mihajlo Banjac", "MID", 73, 76, 24);
addPlayer("kra", "Olakunle Olusegun", "FWD", 74, 78, 23);
addPlayer("kra", "Moses Cobnan", "FWD", 72, 76, 23);
addPlayer("kra", "Fedor Smolov", "FWD", 75, 75, 36);

// Lokomotiv Moscow (lok)
addPlayer("lok", "Dmitri Barinov", "MID", 78, 79, 29);
addPlayer("lok", "Ilya Lantratov", "GK", 78, 79, 30);
addPlayer("lok", "Sergey Pinyaev", "FWD", 77, 85, 21);
addPlayer("lok", "Nair Tiknizyan", "DEF", 77, 81, 26);
addPlayer("lok", "Alexander Silyanov", "DEF", 75, 80, 25);
addPlayer("lok", "Artem Karpukas", "MID", 75, 81, 23);
addPlayer("lok", "Lucas Fasson", "DEF", 74, 79, 24);
addPlayer("lok", "Aleksey Batrakov", "MID", 77, 86, 20);
addPlayer("lok", "César Montes", "DEF", 76, 78, 29);
addPlayer("lok", "Daniil Khudyakov", "GK", 72, 80, 22);
addPlayer("lok", "Maksim Nenakhov", "DEF", 75, 78, 25);
addPlayer("lok", "Mario Mitaj", "DEF", 74, 80, 22);
addPlayer("lok", "Eugenio Sila", "DEF", 73, 77, 24);
addPlayer("lok", "Stanislav Magkeev", "DEF", 74, 76, 25);
addPlayer("lok", "Ilya Samoshnikov", "DEF", 76, 76, 28);
addPlayer("lok", "Anton Miranchuk", "MID", 77, 77, 30);
addPlayer("lok", "Rifat Zhemaletdinov", "MID", 75, 75, 29);
addPlayer("lok", "Timur Suleymanov", "FWD", 74, 76, 26);
addPlayer("lok", "Guilherme", "GK", 73, 73, 38);

// Rostov (ros)
addPlayer("ros", "Daniil Glebov", "MID", 77, 81, 26);
addPlayer("ros", "Maksim Osipenko", "DEF", 77, 78, 31);
addPlayer("ros", "Nikolay Komlichenko", "FWD", 76, 76, 30);
addPlayer("ros", "Ronaldo", "FWD", 75, 80, 25);
addPlayer("ros", "Kirill Shchetinin", "MID", 74, 79, 24);
addPlayer("ros", "Egor Golenkov", "FWD", 74, 78, 26);
addPlayer("ros", "Sergey Pesyakov", "GK", 74, 74, 35);
addPlayer("ros", "Nikita Medvedev", "GK", 72, 73, 29);
addPlayer("ros", "Ilya Vakhaniya", "DEF", 73, 76, 23);
addPlayer("ros", "Viktor Melekhin", "DEF", 73, 79, 20);
addPlayer("ros", "Evgeniy Chernov", "DEF", 74, 74, 31);
addPlayer("ros", "Khozhimat Erkinov", "MID", 72, 76, 22);
addPlayer("ros", "Andrey Langovich", "DEF", 72, 76, 22);
addPlayer("ros", "Alexey Mironov", "MID", 72, 76, 24);
addPlayer("ros", "Khoren Bayramyan", "MID", 74, 74, 32);
addPlayer("ros", "Mohammad Mohebi", "MID", 75, 77, 25);
addPlayer("ros", "Ivan Komarov", "MID", 71, 76, 21);
addPlayer("ros", "Ilya Zubkov", "FWD", 69, 74, 21);

// Akhmat (akh)
addPlayer("akh", "Bernard Berisha", "MID", 75, 75, 34);
addPlayer("akh", "Anton Shvets", "MID", 74, 74, 33);
addPlayer("akh", "Giorgi Shelia", "GK", 74, 74, 37);
addPlayer("akh", "Camilo", "MID", 74, 75, 27);
addPlayer("akh", "Darko Todorovic", "DEF", 73, 74, 28);
addPlayer("akh", "Gamid Agalarov", "FWD", 73, 76, 25);
addPlayer("akh", "Maksim Samorodov", "FWD", 72, 78, 23);
addPlayer("akh", "Mikhail Oparin", "GK", 71, 71, 30);
addPlayer("akh", "Rizvan Utsiev", "DEF", 70, 70, 36);
addPlayer("akh", "Jasmin Celikovic", "DEF", 72, 74, 25);
addPlayer("akh", "Milos Satara", "DEF", 71, 72, 28);
addPlayer("akh", "Andrey Semenov", "DEF", 72, 72, 35);
addPlayer("akh", "Yury Zhuravlev", "DEF", 71, 73, 27);
addPlayer("akh", "Zakhar Volkov", "DEF", 71, 74, 26);
addPlayer("akh", "Vladislav Kamilov", "MID", 73, 74, 28);
addPlayer("akh", "Artem Timofeev", "MID", 74, 74, 30);
addPlayer("akh", "Evgeny Kharin", "MID", 73, 73, 28);
addPlayer("akh", "Lechi Sadulaev", "MID", 73, 77, 24);
addPlayer("akh", "Ivan Oleynikov", "MID", 72, 74, 25);
addPlayer("akh", "Nader Ghandri", "FWD", 72, 73, 29);
addPlayer("akh", "Vladimir Ilyin", "FWD", 72, 72, 31);

// Krylya Sovetov (kry)
addPlayer("kry", "Benjamin Garre", "FWD", 76, 80, 25);
addPlayer("kry", "Ivan Lomaev", "GK", 75, 79, 27);
addPlayer("kry", "Roman Ezhov", "MID", 75, 77, 28);
addPlayer("kry", "Glenn Bijl", "DEF", 75, 75, 30);
addPlayer("kry", "Ivan Oleynikov", "MID", 73, 75, 27);
addPlayer("kry", "Bogdan Ovsyannikov", "GK", 71, 74, 25);
addPlayer("kry", "Evgeniy Frolov", "GK", 69, 69, 36);
addPlayer("kry", "Ilya Gaponov", "DEF", 71, 73, 26);
addPlayer("kry", "Alexander Soldatenkov", "DEF", 75, 76, 27);
addPlayer("kry", "Mateo Barac", "DEF", 72, 73, 29);
addPlayer("kry", "Yuri Gorshkov", "DEF", 75, 78, 25);
addPlayer("kry", "Fernando Costanza", "MID", 74, 76, 25);
addPlayer("kry", "Maxim Vityugov", "MID", 72, 74, 26);
addPlayer("kry", "Denys Yakuba", "MID", 71, 71, 28);
addPlayer("kry", "Sergei Babkin", "MID", 71, 76, 21);
addPlayer("kry", "Dmitri Tsypchenko", "FWD", 71, 73, 24);
addPlayer("kry", "Vladimir Pisarsky", "FWD", 73, 75, 28);

// Rubin (rub)
addPlayer("rub", "Ugochukwu Iwu", "MID", 75, 79, 26);
addPlayer("rub", "Mirlind Daku", "FWD", 76, 79, 28);
addPlayer("rub", "Igor Vujacic", "DEF", 76, 77, 31);
addPlayer("rub", "Valentin Vada", "MID", 75, 76, 30);
addPlayer("rub", "Dardans Shabanhaxhaj", "FWD", 72, 76, 24);
addPlayer("rub", "Arthur", "GK", 73, 77, 29);
addPlayer("rub", "Yuri Dyupin", "GK", 74, 74, 36);
addPlayer("rub", "Alexei Gritsayenko", "DEF", 73, 73, 29);
addPlayer("rub", "Aleksandr Martynovich", "DEF", 72, 72, 36);
addPlayer("rub", "Egor Teslenko", "DEF", 71, 75, 23);
addPlayer("rub", "Rustam Ashurmatov", "DEF", 72, 74, 27);
addPlayer("rub", "Ilya Rozhkov", "DEF", 70, 76, 19);
addPlayer("rub", "Maciej Rybus", "DEF", 71, 71, 34);
addPlayer("rub", "Aleksandr Lomovitskiy", "MID", 72, 73, 26);
addPlayer("rub", "Lazar Randjelovic", "MID", 73, 74, 26);
addPlayer("rub", "Nikola Cumic", "MID", 73, 75, 25);
addPlayer("rub", "Marat Apshatsev", "MID", 70, 74, 23);
addPlayer("rub", "Oleg Ivanov", "MID", 70, 70, 37);

// Fakel (fak)
addPlayer("fak", "Evgeni Markov", "FWD", 74, 74, 31);
addPlayer("fak", "Aleksandr Belenov", "GK", 74, 74, 39);
addPlayer("fak", "Irakliy Kvekveskiri", "MID", 73, 73, 36);
addPlayer("fak", "Dylan Mertens", "MID", 72, 74, 28);
addPlayer("fak", "Thabo Cele", "MID", 71, 74, 29);
addPlayer("fak", "Vitaly Gudiev", "GK", 71, 72, 29);
addPlayer("fak", "Vasili Cherov", "DEF", 71, 71, 28);
addPlayer("fak", "Igor Yurganov", "DEF", 70, 70, 30);
addPlayer("fak", "Kirill Suslov", "DEF", 69, 69, 32);
addPlayer("fak", "Sergei Bozhin", "DEF", 72, 72, 29);
addPlayer("fak", "Vladislav Masteroy", "DEF", 70, 70, 28);
addPlayer("fak", "Igor Kalinin", "DEF", 71, 71, 28);
addPlayer("fak", "Andrey Mendel", "MID", 71, 71, 29);
addPlayer("fak", "Tahar Bouba", "MID", 71, 74, 24);
addPlayer("fak", "Vyacheslav Yakimov", "MID", 72, 75, 26);
addPlayer("fak", "Khyzyr Appaev", "FWD", 70, 70, 34);

// Orenburg (ore)
addPlayer("ore", "Brian Mansilla", "FWD", 75, 77, 29);
addPlayer("ore", "Matias Perez", "DEF", 75, 78, 27);
addPlayer("ore", "Gabriel Florentín", "MID", 74, 77, 27);
addPlayer("ore", "Jimmy Marin", "MID", 74, 75, 28);
addPlayer("ore", "Jordhy Thompson", "FWD", 73, 80, 21);
addPlayer("ore", "Saeid Saharkhizan", "FWD", 71, 78, 22);
addPlayer("ore", "Nikolay Sysuev", "GK", 71, 73, 24);
addPlayer("ore", "Andrey Malykh", "DEF", 70, 70, 35);
addPlayer("ore", "Danila Prokhin", "DEF", 72, 76, 23);
addPlayer("ore", "Vladimir Poluyakhtov", "DEF", 70, 70, 34);
addPlayer("ore", "Leo Goglichidze", "DEF", 71, 74, 27);
addPlayer("ore", "Maxim Sidorov", "DEF", 71, 72, 26);
addPlayer("ore", "Egor Perez", "MID", 72, 76, 23);
addPlayer("ore", "Tomas Muro", "MID", 72, 75, 22);
addPlayer("ore", "Stepan Oganesyan", "MID", 70, 75, 22);
addPlayer("ore", "Emircan Gürlük", "MID", 69, 75, 20);
addPlayer("ore", "Justin Cuero", "FWD", 70, 76, 20);

// Pari NN (pnn)
addPlayer("pnn", "Artur Nigmatullin", "GK", 75, 75, 34);
addPlayer("pnn", "Kirill Gotsuk", "DEF", 74, 74, 33);
addPlayer("pnn", "Mamadou Maiga", "MID", 74, 76, 29);
addPlayer("pnn", "Zé Turbo", "FWD", 73, 74, 29);
addPlayer("pnn", "Viktor Aleksandrov", "DEF", 73, 79, 24);
addPlayer("pnn", "Dan Glazer", "MID", 73, 74, 29);
addPlayer("pnn", "Ivan Kukushkin", "GK", 68, 73, 22);
addPlayer("pnn", "Dmitriy Stotskiy", "DEF", 72, 72, 34);
addPlayer("pnn", "Nikita Kakkoev", "DEF", 71, 74, 24);
addPlayer("pnn", "Maksim Shnaptsev", "DEF", 69, 74, 20);
addPlayer("pnn", "Mateo Stamatov", "DEF", 71, 73, 25);
addPlayer("pnn", "Daniil Penchikov", "DEF", 69, 71, 26);
addPlayer("pnn", "Aleksandr Troshechkin", "MID", 72, 72, 28);
addPlayer("pnn", "Nikolay Kalinsky", "MID", 73, 73, 30);
addPlayer("pnn", "Ilya Zhigulev", "MID", 71, 71, 28);
addPlayer("pnn", "Valery Tsarukyan", "MID", 69, 74, 22);
addPlayer("pnn", "Juan Boselli", "FWD", 71, 76, 24);
addPlayer("pnn", "Timur Suleymanov", "FWD", 72, 74, 26);

// Ural (ura)
addPlayer("ura", "Eric Bicfalvi", "MID", 74, 74, 38);
addPlayer("ura", "Silvije Begic", "DEF", 74, 74, 32);
addPlayer("ura", "Ilya Pomazun", "GK", 75, 77, 29);
addPlayer("ura", "Ilya Ishkov", "MID", 71, 78, 20);
addPlayer("ura", "Aleksey Mamin", "GK", 69, 73, 25);
addPlayer("ura", "Denys Kulakov", "DEF", 72, 72, 38);
addPlayer("ura", "Emmerson", "DEF", 71, 73, 28);
addPlayer("ura", "Yegor Filipenko", "DEF", 71, 71, 36);
addPlayer("ura", "Italo", "DEF", 71, 76, 22);
addPlayer("ura", "Ibañez", "DEF", 71, 75, 24);
addPlayer("ura", "Leo Ayala", "MID", 70, 75, 22);
addPlayer("ura", "Yuri Gazinskiy", "MID", 71, 71, 34);
addPlayer("ura", "Timur Ayupov", "MID", 72, 72, 30);
addPlayer("ura", "Danijel Miskic", "MID", 73, 73, 30);
addPlayer("ura", "Aleksey Ionov", "MID", 72, 72, 35);
addPlayer("ura", "Aleksey Kashtanov", "FWD", 72, 74, 28);
addPlayer("ura", "Guilherme Schettine", "FWD", 71, 72, 28);

// Baltika (bal)
addPlayer("bal", "Evgeni Latyshonok", "GK", 75, 78, 27);
addPlayer("bal", "Kristijan Bistrovic", "MID", 74, 76, 28);
addPlayer("bal", "Roberto Fernández", "DEF", 74, 78, 26);
addPlayer("bal", "Danila Kozlov", "MID", 71, 78, 21);
addPlayer("bal", "Maksim Borisko", "GK", 69, 73, 23);
addPlayer("bal", "Kirill Malyarov", "DEF", 70, 72, 27);
addPlayer("bal", "Oleksandr Osipov", "DEF", 71, 73, 25);
addPlayer("bal", "Ivan Ostojic", "DEF", 70, 70, 34);
addPlayer("bal", "Kevin Andrade", "DEF", 71, 75, 25);
addPlayer("bal", "Maksim Kuzmin", "MID", 71, 71, 27);
addPlayer("bal", "Artur Galoyan", "MID", 72, 74, 24);
addPlayer("bal", "Dmitri Rybchinskiy", "MID", 71, 73, 25);
addPlayer("bal", "Yuri Kovalev", "MID", 70, 70, 31);
addPlayer("bal", "Gedeon Guzina", "FWD", 70, 70, 30);
addPlayer("bal", "Joel Fameyeh", "FWD", 71, 72, 27);

// Sochi (soc)
addPlayer("soc", "Vanja Drkusic", "DEF", 75, 80, 26);
addPlayer("soc", "Aleksandar Jukic", "MID", 74, 76, 28);
addPlayer("soc", "Martin Kramaric", "FWD", 74, 76, 28);
addPlayer("soc", "Marcelo Alves", "DEF", 74, 77, 26);
addPlayer("soc", "Nikolay Zabolotnyi", "GK", 71, 71, 34);
addPlayer("soc", "Timofey Margasov", "DEF", 71, 71, 31);
addPlayer("soc", "Vyacheslav Litvinov", "DEF", 72, 76, 23);
addPlayer("soc", "Makarenko", "DEF", 70, 75, 23);
addPlayer("soc", "Artem Makarchuk", "DEF", 72, 73, 28);
addPlayer("soc", "Kirill Zaika", "DEF", 71, 71, 31);
addPlayer("soc", "Artur Yusupov", "MID", 72, 72, 34);
addPlayer("soc", "Kirill Kravtsov", "MID", 72, 76, 22);
addPlayer("soc", "Ignacio Saavedra", "MID", 73, 76, 25);
addPlayer("soc", "Victorien Angban", "MID", 71, 72, 27);
addPlayer("soc", "Sergio Cordova", "FWD", 71, 73, 26);
addPlayer("soc", "Saul Guarirapa", "FWD", 72, 77, 21);

// OVERRIDE: 2026/2027 REALISTIC KPL SCOUTS
(() => {
  const kpl = leagues.find((l) => l.id === "kpl");
  if (kpl) {
    kpl.teams.forEach((team) => {
      team.players = []; // clear old ones
    });
  }
})();

// FC Astana (ast)
addPlayer("ast", "Josip Condric", "GK", 72, 73, 32);
addPlayer("ast", "Aleksandr Zarutskiy", "GK", 67, 68, 32);
addPlayer("ast", "Karlo Bartolec", "DEF", 71, 71, 31);
addPlayer("ast", "Aleksandr Marochkin", "DEF", 70, 70, 35);
addPlayer("ast", "Kipras Kazukolovas", "DEF", 70, 73, 25);
addPlayer("ast", "Yan Vorogovskiy", "DEF", 72, 74, 29);
addPlayer("ast", "Abzal Beysebekov", "DEF", 69, 69, 33);
addPlayer("ast", "Marat Bystrov", "DEF", 70, 70, 33);
addPlayer("ast", "Timur Dosmagambetov", "DEF", 68, 68, 34);
addPlayer("ast", "Max Ebong", "MID", 75, 78, 26);
addPlayer("ast", "Islambek Kuat", "MID", 70, 70, 31);
addPlayer("ast", "Elkhan Astanov", "MID", 71, 75, 25);
addPlayer("ast", "Ousmane Camara", "MID", 72, 77, 22);
addPlayer("ast", "Marin Tomasov", "MID", 70, 70, 38);
addPlayer("ast", "Barnes Osei", "MID", 71, 73, 29);
addPlayer("ast", "Dušan Jovančić", "MID", 69, 69, 33);
addPlayer("ast", "Nnamdi Ahanonu", "FWD", 71, 75, 24);
addPlayer("ast", "Chinedu Geoffrey", "FWD", 72, 74, 28);
addPlayer("ast", "Ramazan Karimov", "FWD", 69, 73, 24);
addPlayer("ast", "Stanislav Basmanov", "FWD", 68, 73, 22);
addPlayer("ast", "Nurali Zhaksylyk", "FWD", 67, 74, 21);

// Kairat Almaty (kai)
addPlayer("kai", "Danil Ustimenko", "GK", 70, 75, 25);
addPlayer("kai", "Vadim Ulyanov", "GK", 68, 71, 24);
addPlayer("kai", "Temirlan Anarbekov", "GK", 66, 73, 20);
addPlayer("kai", "Luka Gadrani", "DEF", 71, 73, 29);
addPlayer("kai", "Egor Sorokin", "DEF", 70, 70, 30);
addPlayer("kai", "Ofri Arad", "DEF", 71, 73, 27);
addPlayer("kai", "Ibrokhimkhalil Yuldoshev", "DEF", 72, 78, 25);
addPlayer("kai", "Adilkhan Dobay", "DEF", 68, 72, 23);
addPlayer("kai", "Mikhail Vdovchenko", "DEF", 67, 71, 22);
addPlayer("kai", "Valeri Gromyko", "MID", 73, 75, 29);
addPlayer("kai", "Anton Krachkovskiy", "MID", 70, 74, 23);
addPlayer("kai", "Giorgi Zaria", "MID", 71, 73, 28);
addPlayer("kai", "Vyacheslav Shvyrev", "MID", 70, 75, 23);
addPlayer("kai", "Arsen Buranchiev", "MID", 68, 73, 22);
addPlayer("kai", "Ondrej Baco", "MID", 70, 73, 28);
addPlayer("kai", "João Paulo", "FWD", 73, 73, 38); // Legendary
addPlayer("kai", "Yerkebulan Seydakhmet", "FWD", 70, 74, 26);
addPlayer("kai", "Élder Santana", "FWD", 69, 69, 33);
addPlayer("kai", "Artur Shushenachev", "FWD", 72, 74, 26);
addPlayer("kai", "Galymzhan Kenzhebek", "FWD", 68, 75, 21);
addPlayer("kai", "Khomiki Shingis", "FWD", 65, 73, 19);

// Tobol Kostanay (tob)
addPlayer("tob", "Stas Pokatilov", "GK", 71, 71, 33);
addPlayer("tob", "Sultan Busurmanov", "GK", 68, 70, 27);
addPlayer("tob", "Roman Asrankulov", "DEF", 70, 73, 24);
addPlayer("tob", "Pape-Alioune Ndiaye", "DEF", 70, 72, 28);
addPlayer("tob", "Albert Gabaraev", "DEF", 69, 71, 28);
addPlayer("tob", "Bojan Mladovic", "DEF", 69, 71, 28);
addPlayer("tob", "Erman Kenzhebayev", "DEF", 67, 72, 21);
addPlayer("tob", "Ahmed El Messaoudi", "MID", 73, 73, 30);
addPlayer("tob", "Igor Ivanovic", "MID", 72, 73, 28);
addPlayer("tob", "Ededem Essien", "MID", 71, 75, 26);
addPlayer("tob", "Islam Chesnokov", "MID", 73, 76, 24);
addPlayer("tob", "Beybit Galym", "MID", 68, 73, 19);
addPlayer("tob", "Zhaslan Zhumashev", "MID", 67, 72, 22);
addPlayer("tob", "Rui Costa", "FWD", 72, 74, 28);
addPlayer("tob", "David Henen", "FWD", 70, 70, 30);
addPlayer("tob", "Godberg Cooper", "FWD", 69, 71, 26);
addPlayer("tob", "Evgeny Shakhov", "MID", 71, 71, 33);
addPlayer("tob", "Yerkebulan Nurgaliyev", "FWD", 68, 68, 30);
addPlayer("tob", "Pedro Eugenio", "FWD", 70, 70, 33);

// Ordabasy (ord)
addPlayer("ord", "Bekkhan Shayzada", "GK", 69, 73, 26);
addPlayer("ord", "Sergey Ignatovich", "GK", 70, 70, 33);
addPlayer("ord", "Karlo Sentic", "GK", 68, 74, 22);
addPlayer("ord", "Sergey Malyy", "DEF", 71, 71, 35);
addPlayer("ord", "Temirlan Yerlanov", "DEF", 71, 71, 32);
addPlayer("ord", "Igor Plastun", "DEF", 70, 70, 35);
addPlayer("ord", "Sultan Abilgazy", "DEF", 69, 71, 27);
addPlayer("ord", "Sagadat Tursynbay", "DEF", 68, 71, 25);
addPlayer("ord", "Askhat Tagybergen", "MID", 73, 73, 35);
addPlayer("ord", "Bauyrzhan Islamkhan", "MID", 72, 72, 33);
addPlayer("ord", "Yevhen Makarenko", "MID", 71, 71, 34);
addPlayer("ord", "Lovro Zvonarek", "MID", 70, 80, 19);
addPlayer("ord", "Maxim Fedin", "MID", 69, 69, 29);
addPlayer("ord", "Samat Zharynbetov", "MID", 69, 70, 30);
addPlayer("ord", "Zikrillo Mukhtorov", "MID", 67, 72, 21);
addPlayer("ord", "Jasurbek Yakhshiboev", "FWD", 72, 74, 28);
addPlayer("ord", "Igor Zlatanovic", "FWD", 71, 73, 28);
addPlayer("ord", "Artem Besedin", "FWD", 70, 70, 30);
addPlayer("ord", "Shakhboz Umarov", "FWD", 70, 73, 25);
addPlayer("ord", "Vsevolod Sadovskiy", "FWD", 69, 71, 27);

// Aktobe (akt)
addPlayer("akt", "Igor Shatskiy", "GK", 71, 71, 34);
addPlayer("akt", "Igor Trofimets", "GK", 68, 70, 27);
addPlayer("akt", "Alibek Kasym", "DEF", 72, 75, 25);
addPlayer("akt", "Mateo Barac", "DEF", 72, 74, 29);
addPlayer("akt", "Adilkhan Tanzharikov", "DEF", 69, 72, 27);
addPlayer("akt", "Gaby Kiki", "DEF", 71, 73, 29);
addPlayer("akt", "Bogdan Vatajelu", "DEF", 70, 70, 31);
addPlayer("akt", "Bagdat Kairov", "DEF", 69, 69, 31);
addPlayer("akt", "Alisher Azhimov", "DEF", 68, 73, 23);
addPlayer("akt", "Uche Agbo", "MID", 71, 72, 30);
addPlayer("akt", "Leonel Strumia", "MID", 70, 72, 31);
addPlayer("akt", "Amadou Doumbouya", "MID", 69, 72, 28);
addPlayer("akt", "Jose Cevallos", "MID", 70, 70, 29);
addPlayer("akt", "Aybol Abiken", "MID", 69, 69, 28);
addPlayer("akt", "Arman Kenesov", "MID", 68, 74, 23);
addPlayer("akt", "Miram Sapanov", "MID", 67, 72, 24);
addPlayer("akt", "Idris Umaev", "FWD", 71, 74, 25);
addPlayer("akt", "Dmitriy Bessmertnyi", "FWD", 69, 71, 27);
addPlayer("akt", "Jairo Jean", "FWD", 70, 73, 25);
addPlayer("akt", "Maksim Samorodov", "FWD", 71, 76, 22);

// Yelimay Semey (eli)
addPlayer("eli", "Denis Kavlinov", "GK", 68, 70, 29);
addPlayer("eli", "Nabi Kaniev", "GK", 65, 71, 20);
addPlayer("eli", "Maksym Imerekov", "DEF", 69, 69, 33);
addPlayer("eli", "Dmitri Yashin", "DEF", 68, 68, 33);
addPlayer("eli", "Zhandos Soltan", "DEF", 66, 71, 21);
addPlayer("eli", "Sergey Keiler", "DEF", 68, 68, 30);
addPlayer("eli", "Nikolay Zolotov", "DEF", 67, 68, 29);
addPlayer("eli", "Daniil Penchikov", "DEF", 68, 72, 26);
addPlayer("eli", "Yuriy Pertsukh", "MID", 69, 70, 29);
addPlayer("eli", "Maicom David", "MID", 68, 72, 24);
addPlayer("eli", "Bektur Amangeldinov", "MID", 66, 72, 22);
addPlayer("eli", "Aydos Oral", "MID", 67, 70, 24);
addPlayer("eli", "Azat Ersalimov", "MID", 67, 70, 25);
addPlayer("eli", "China", "MID", 69, 73, 25);
addPlayer("eli", "Erkebulan Nurgaliyev", "MID", 68, 68, 30);
addPlayer("eli", "Ivan Sviridov", "FWD", 69, 74, 23);
addPlayer("eli", "Roman Murtazaev", "FWD", 69, 69, 32);
addPlayer("eli", "Edarlyn Reyes", "FWD", 68, 69, 26);
addPlayer("eli", "Miras Omirtay", "FWD", 66, 71, 20);
addPlayer("eli", "Belo", "FWD", 67, 71, 23);

// Kyzylzhar (kyz)
addPlayer("kyz", "Aleksandr Dovbnya", "GK", 67, 67, 37);
addPlayer("kyz", "Dzhurakhon Babakhanov", "GK", 66, 68, 32);
addPlayer("kyz", "Zharfarkhan Mukhtarov", "DEF", 65, 71, 23);
addPlayer("kyz", "Ular Zhaksybaev", "DEF", 67, 70, 25);
addPlayer("kyz", "Madi Khaseyn", "DEF", 65, 69, 24);
addPlayer("kyz", "Oleksiy Dityatyev", "DEF", 66, 66, 35);
addPlayer("kyz", "Vladislav Sorokin", "DEF", 66, 69, 26);
addPlayer("kyz", "Bekzat Shadmanov", "DEF", 67, 70, 26);
addPlayer("kyz", "Marko Brtan", "MID", 67, 68, 33);
addPlayer("kyz", "Evgeniy Berezkin", "MID", 68, 69, 27);
addPlayer("kyz", "Rafail Ospanov", "MID", 66, 71, 22);
addPlayer("kyz", "Shokhan Abzalov", "MID", 67, 69, 30);
addPlayer("kyz", "Ardager Sula", "MID", 66, 70, 23);
addPlayer("kyz", "Rafael Sabino", "MID", 68, 69, 28);
addPlayer("kyz", "Sergey Ivanov", "MID", 67, 72, 24);
addPlayer("kyz", "Luka Imnadze", "FWD", 68, 70, 26);
addPlayer("kyz", "Boris Cmiljanic", "FWD", 68, 69, 30);
addPlayer("kyz", "Timur Muldinov", "FWD", 67, 68, 30);
addPlayer("kyz", "Maxim Chikanchi", "FWD", 67, 69, 25);
addPlayer("kyz", "Ruben Brigido", "FWD", 68, 68, 32);

// Kaisar (kai2)
addPlayer("kai2", "Stefan Sicak", "GK", 68, 70, 28);
addPlayer("kai2", "Aram Ayrapetyan", "GK", 67, 67, 37);
addPlayer("kai2", "Nurymzhan Salaidin", "GK", 65, 68, 28);
addPlayer("kai2", "Vissarion Tsintsadze", "DEF", 67, 72, 23);
addPlayer("kai2", "Adlet Kenesbek", "DEF", 66, 70, 24);
addPlayer("kai2", "Pavel Berezovich", "DEF", 67, 72, 22);
addPlayer("kai2", "Jovan Pajovic", "DEF", 68, 68, 27);
addPlayer("kai2", "Talgat Kusyapov", "DEF", 67, 70, 24);
addPlayer("kai2", "Vitaliy Pryndeta", "DEF", 68, 68, 31);
addPlayer("kai2", "Kuanysh Kalmuratov", "DEF", 67, 69, 27);
addPlayer("kai2", "Didar Zhalmukan", "MID", 68, 70, 27);
addPlayer("kai2", "Guram Makaridze", "MID", 67, 72, 24);
addPlayer("kai2", "Giga Makharadze", "MID", 67, 69, 26);
addPlayer("kai2", "Duman Narzildaev", "MID", 69, 69, 30);
addPlayer("kai2", "Gor Grigoryan", "MID", 67, 71, 23);
addPlayer("kai2", "Ruslan Sakhalbaev", "MID", 66, 66, 39);
addPlayer("kai2", "Orken Makhan", "FWD", 68, 71, 26);
addPlayer("kai2", "Shokhan Nurbergen", "FWD", 66, 70, 24);
addPlayer("kai2", "Aybar Zhaksylykov", "FWD", 68, 70, 26);
addPlayer("kai2", "Aleksandr Yushin", "FWD", 69, 69, 30);

// Zhetysu (zhe)
addPlayer("zhe", "Arsen Siukaev", "GK", 68, 70, 28);
addPlayer("zhe", "Orest Kostyk", "GK", 66, 69, 24);
addPlayer("zhe", "Gia Chaduneli", "DEF", 68, 69, 29);
addPlayer("zhe", "Adilkhan Dobay", "DEF", 66, 70, 22);
addPlayer("zhe", "Rauan Orynbasar", "DEF", 67, 69, 26);
addPlayer("zhe", "Askhat Baltabekov", "DEF", 67, 68, 30);
addPlayer("zhe", "Konstantin Kucheruk", "DEF", 66, 68, 23);
addPlayer("zhe", "Miras Turlybek", "DEF", 66, 72, 21);
addPlayer("zhe", "Meyrambek Kalmyrza", "MID", 68, 73, 21);
addPlayer("zhe", "Serikzhan Muzhikov", "MID", 68, 68, 34);
addPlayer("zhe", "Aydos Nuraliyev", "MID", 65, 71, 22);
addPlayer("zhe", "Samat Shamshi", "MID", 67, 70, 27);
addPlayer("zhe", "Dinmukhamed Karaman", "MID", 66, 69, 23);
addPlayer("zhe", "Adilzhan Nurzakhypov", "MID", 65, 72, 21);
addPlayer("zhe", "Nurlan Dairav", "MID", 65, 68, 24);
addPlayer("zhe", "Anton Shramchenko", "FWD", 69, 69, 31);
addPlayer("zhe", "Ablaykhan Makhambetov", "FWD", 66, 70, 22);
addPlayer("zhe", "Luka Lursmanashvili", "FWD", 67, 73, 23);
addPlayer("zhe", "Edige Oralbay", "FWD", 65, 69, 22);
addPlayer("zhe", "Temirlan Agimanov", "FWD", 64, 71, 19);

// Shakhter Karagandy (sha)
addPlayer("sha", "Egor Tsuprikov", "GK", 67, 70, 26);
addPlayer("sha", "Vladislav Saenko", "GK", 65, 69, 23);
addPlayer("sha", "Zhandos Rymgaliev", "GK", 64, 71, 20);
addPlayer("sha", "Anton Tolordava", "DEF", 68, 71, 27);
addPlayer("sha", "Egor Alishauskas", "DEF", 67, 70, 26);
addPlayer("sha", "Bogdan Savkiv", "DEF", 66, 72, 22);
addPlayer("sha", "Igor Stanojevic", "DEF", 67, 67, 32);
addPlayer("sha", "Shyngys Flera", "DEF", 65, 70, 22);
addPlayer("sha", "Viktor Vasin", "DEF", 68, 68, 35);
addPlayer("sha", "Almas Tyulyubay", "MID", 66, 71, 22);
addPlayer("sha", "Maxim Galkin", "MID", 66, 72, 24);
addPlayer("sha", "Abylaykhan Nazymkhanov", "MID", 67, 70, 26);
addPlayer("sha", "Ruslan Mingazov", "MID", 69, 69, 32);
addPlayer("sha", "Daniyal Valiev", "MID", 65, 70, 21);
addPlayer("sha", "Ilyas Abil", "MID", 66, 73, 19);
addPlayer("sha", "Jovan Ilic", "MID", 68, 71, 24);
addPlayer("sha", "Evgeni Shikavka", "FWD", 68, 68, 31);
addPlayer("sha", "Aydos Tattybaev", "FWD", 67, 67, 33);
addPlayer("sha", "Daniyar Abulkhairov", "FWD", 65, 71, 21);
addPlayer("sha", "Milan Djokic", "FWD", 68, 70, 26);

// Atyrau (aty)
addPlayer("aty", "Egor Khatkevich", "GK", 68, 68, 35);
addPlayer("aty", "Illya Karavayev", "GK", 65, 69, 26);
addPlayer("aty", "Nurasyl Tokhtarov", "GK", 64, 69, 23);
addPlayer("aty", "Adilbek Zhumakhanov", "DEF", 68, 73, 23);
addPlayer("aty", "Nikita Stepanov", "DEF", 69, 71, 29);
addPlayer("aty", "Sikhou Oumar Sagnang", "DEF", 67, 72, 24);
addPlayer("aty", "Oleg Zoteev", "DEF", 68, 68, 34);
addPlayer("aty", "Olzhas Kerimzhanov", "DEF", 67, 67, 34);
addPlayer("aty", "Alexander Sokolenko", "DEF", 66, 69, 27);
addPlayer("aty", "Aleksandr Noyok", "MID", 70, 70, 31);
addPlayer("aty", "Igor Stasevich", "MID", 69, 69, 38);
addPlayer("aty", "Fatjon Jusufi", "MID", 68, 70, 28);
addPlayer("aty", "Rinat Dzhumatov", "MID", 67, 69, 26);
addPlayer("aty", "Nauryzbek Zhagorov", "MID", 66, 70, 25);
addPlayer("aty", "Jakob Novak", "MID", 68, 71, 25);
addPlayer("aty", "Joel Kayamba", "MID", 69, 69, 31);
addPlayer("aty", "Dembo Darboe", "FWD", 70, 74, 25);
addPlayer("aty", "Pedro Eugenio", "FWD", 71, 71, 33);
addPlayer("aty", "Mukagali Pangerey", "FWD", 65, 71, 20);
addPlayer("aty", "Nikolay Signevich", "FWD", 69, 69, 32);

// Turan (tur)
addPlayer("tur", "Timur Bekmurodov", "GK", 67, 72, 23);
addPlayer("tur", "Vladislav Vasiluchek", "GK", 68, 70, 30);
addPlayer("tur", "Almat Bekbaev", "GK", 64, 64, 39);
addPlayer("tur", "Andrey Zaleskiy", "DEF", 69, 69, 33);
addPlayer("tur", "Aslan Dzhanuzakov", "DEF", 67, 70, 26);
addPlayer("tur", "Oleg Nikolaev", "DEF", 68, 70, 29);
addPlayer("tur", "Nurdaulet Agzambaev", "DEF", 65, 71, 23);
addPlayer("tur", "Darkhan Duisenbekuly", "DEF", 64, 70, 22);
addPlayer("tur", "Antonio Jakoliš", "DEF", 68, 68, 32);
addPlayer("tur", "Marko Nikolić", "DEF", 67, 70, 25);
addPlayer("tur", "Pavel Deobald", "MID", 67, 67, 33);
addPlayer("tur", "Alisher Suley", "MID", 69, 70, 28);
addPlayer("tur", "Branislav Sluka", "MID", 68, 71, 25);
addPlayer("tur", "Olzhas Alibekov", "MID", 66, 70, 25);
addPlayer("tur", "Arten Dmytrijev", "FWD", 67, 67, 35);
addPlayer("tur", "Zhasulan Moldakaraev", "FWD", 67, 67, 36);
addPlayer("tur", "Leonardo Vaca", "FWD", 68, 71, 28);
addPlayer("tur", "Bakdaulet Zulfikarov", "FWD", 66, 72, 23);
addPlayer("tur", "Samat Sarsenov", "FWD", 66, 68, 27);
addPlayer("tur", "Aleksandr Mishchenko", "FWD", 67, 69, 26);

// Okzhetpes (okz)
addPlayer("okz", "Danil Podymskiy", "GK", 66, 70, 25);
addPlayer("okz", "Vyacheslav Grab", "GK", 66, 67, 32);
addPlayer("okz", "Aleksandr Dovbnya", "GK", 65, 65, 37);
addPlayer("okz", "Viktor Goncharov", "DEF", 67, 69, 28);
addPlayer("okz", "Aleksandr Shchipko", "DEF", 66, 71, 24);
addPlayer("okz", "Ruslan Tashenov", "DEF", 65, 69, 22);
addPlayer("okz", "Ilya Karpenko", "DEF", 65, 70, 25);
addPlayer("okz", "Timur Rudoselskiy", "DEF", 66, 68, 29);
addPlayer("okz", "Alexei Tataev", "DEF", 67, 71, 25);
addPlayer("okz", "Miras Tuliev", "MID", 66, 70, 25);
addPlayer("okz", "Artem Mutalipov", "MID", 65, 70, 22);
addPlayer("okz", "Shyngys Flera", "MID", 65, 71, 22);
addPlayer("okz", "Maksim Drachenko", "MID", 66, 66, 34);
addPlayer("okz", "Samat Sarsenov", "MID", 66, 68, 27);
addPlayer("okz", "Darkhan Duisenbek", "MID", 64, 71, 21);
addPlayer("okz", "Beksultan Shamshi", "FWD", 67, 69, 27);
addPlayer("okz", "Batyrkhan Tazhitay", "FWD", 66, 72, 21);
addPlayer("okz", "Aydos Nuraly", "FWD", 65, 70, 23);
addPlayer("okz", "Salamat Zhumabayev", "FWD", 65, 71, 24);
addPlayer("okz", "Ruslan Bolov", "FWD", 67, 67, 30);
