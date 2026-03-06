// Mock data for YouTube videos scraped today
export const todayVideos = [
  {
    id: 1,
    title: "Breaking: Security Alert - BLA Activity Reported in Border Region",
    channel: "Intelligence News Network",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/B30000?text=Security+Alert",
    link: "https://youtube.com/watch?v=example1",
    publishedTime: "2 hours ago",
    date: "today"
  },
  {
    id: 2,
    title: "Counter-Terrorism Operations Update - Latest Developments",
    channel: "Defense Updates",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/B30000?text=CT+Operations",
    link: "https://youtube.com/watch?v=example2",
    publishedTime: "5 hours ago",
    date: "today"
  },
  {
    id: 3,
    title: "Analysis: Hakkal Network Activities and Regional Impact",
    channel: "Strategic Analysis Channel",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/B30000?text=Network+Analysis",
    link: "https://youtube.com/watch?v=example3",
    publishedTime: "7 hours ago",
    date: "today"
  },
  {
    id: 4,
    title: "Security Forces Neutralize Terror Threat in Operation",
    channel: "National Security Today",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/B30000?text=Operation+Success",
    link: "https://youtube.com/watch?v=example4",
    publishedTime: "10 hours ago",
    date: "today"
  }
];

// Mock data for previous days' videos
export const previousVideos = [
  {
    id: 5,
    title: "Weekly Intelligence Brief: Terrorism Threats Assessment",
    channel: "Intelligence Watch",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/8B0000?text=Weekly+Brief",
    link: "https://youtube.com/watch?v=example5",
    publishedTime: "1 day ago",
    date: "previous"
  },
  {
    id: 6,
    title: "Border Security Measures Enhanced Following Recent Incidents",
    channel: "Security Focus",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/8B0000?text=Border+Security",
    link: "https://youtube.com/watch?v=example6",
    publishedTime: "2 days ago",
    date: "previous"
  },
  {
    id: 7,
    title: "Expert Analysis: Understanding Terror Group Tactics",
    channel: "Defense Strategy Forum",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/8B0000?text=Expert+Analysis",
    link: "https://youtube.com/watch?v=example7",
    publishedTime: "3 days ago",
    date: "previous"
  },
  {
    id: 8,
    title: "Regional Cooperation on Counter-Terrorism Initiatives",
    channel: "Global Security Network",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/8B0000?text=Regional+Coop",
    link: "https://youtube.com/watch?v=example8",
    publishedTime: "4 days ago",
    date: "previous"
  },
  {
    id: 9,
    title: "Intelligence Report: Tracking Extremist Communications",
    channel: "Intel Ops Channel",
    thumbnail: "https://via.placeholder.com/320x180/1a1a1a/8B0000?text=Intel+Report",
    link: "https://youtube.com/watch?v=example9",
    publishedTime: "5 days ago",
    date: "previous"
  }
];

// Mock data for monitored channels
export const channelList = [
  {
    id: 1,
    name: "Intel Watch",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=IW"
  },
  {
    id: 2,
    name: "Defense News",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=DN"
  },
  {
    id: 3,
    name: "Security Brief",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=SB"
  },
  {
    id: 4,
    name: "CT Updates",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=CT"
  },
  {
    id: 5,
    name: "Global Intel",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=GI"
  },
  {
    id: 6,
    name: "Strategic Ops",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=SO"
  },
  {
    id: 7,
    name: "Border Watch",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=BW"
  },
  {
    id: 8,
    name: "National SEC",
    image: "https://via.placeholder.com/150/550000/E0E0E0?text=NS"
  }
];

// Keywords for YouTube scraping (to be used with YouTube Data v3 API)
export const scrapingKeywords = [
  // Original keywords
  "BLA",
  "Hakkal",
  "terrorism",
  "herof",
  "herof2",

  // Militant Groups
  "TTP",
  "BRAS",
  "LeJ",
  "ISKP",
  "Majeed Brigade",

  // Operations & Events
  "Operation Azm-e-Istehkam",
  "Counter terrorism Pakistan",
  "Balochistan attack",
  "KPK operation",
  "FATA security",

  // General Threat Terms
  "Insurgency Pakistan",
  "Separatist movement Pakistan",
  "Militant attack Pakistan",
  "IED Pakistan",
  "Ambush Pakistan army",

  // Specific Locations
  "Turbat attack",
  "Quetta bombing",
  "Gwadar security",
  "Zhob operation",
  "Khuzdar incident",
];
