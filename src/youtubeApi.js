// youtubeApi.js
const API_KEY = "AIzaSyDjsgHpIYARahB_4-LCaTYlXBOXC3XnUwA";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

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

const excludeWords = [
  "recipe", "cooking", "food", "music", "song", "dance",
  "funny", "prank", "vlog", "gaming", "minecraft", "fortnite",
  "tutorial", "review", "unboxing", "makeup", "fashion",
  "workout", "fitness",
];

const requiredWords = [
  "pakistan", "attack", "security", "operation", "militant",
  "terror", "army", "military", "killed", "arrested",
  "balochistan", "KPK", "border", "intelligence", "forces",
];

function isRelevantVideo(video) {
  const text = (video.title + " " + video.channel).toLowerCase();

  // Reject if contains any exclude words
  const hasExcluded = excludeWords.some((word) => text.includes(word.toLowerCase()));
  if (hasExcluded) return false;

  // Must contain at least one keyword from scrapingKeywords
  const hasKeyword = scrapingKeywords.some((word) => text.includes(word.toLowerCase()));
  if (!hasKeyword) return false;

  // Must ALSO contain at least one word from requiredWords
  const hasRequired = requiredWords.some((word) => text.includes(word.toLowerCase()));
  if (!hasRequired) return false;

  return true;
}

async function fetchVideosByKeyword(keyword, publishedAfter = null) {
  const params = new URLSearchParams({
    part: "snippet",
    q: keyword,
    type: "video",
    maxResults: 10,
    order: "date",
    key: API_KEY,
    ...(publishedAfter && { publishedAfter }),
  });

  const res = await fetch(`${BASE_URL}/search?${params}`);
  const data = await res.json();

  // 👇 Add this to see the exact error
  if (data.error) {
    console.error("YouTube API Error:", data.error.message);
    console.error("Error code:", data.error.code);
    console.error("Error status:", data.error.status);
    return [];
  }

  // 👇 Add this in case items is undefined
  if (!data.items) {
    console.error("No items returned for keyword:", keyword, data);
    return [];
  }

  return data.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium.url,
    link: `https://youtube.com/watch?v=${item.id.videoId}`,
    publishedTime: new Date(item.snippet.publishedAt).toLocaleDateString(),
    date: publishedAfter ? "today" : "previous",
  }));
}

export async function fetchTodayVideos() {
  const since = new Date();
  since.setHours(0, 0, 0, 0);
  const publishedAfter = since.toISOString();

  const results = await Promise.all(
    scrapingKeywords.map((kw) => fetchVideosByKeyword(kw, publishedAfter))
  );

  return results.flat().filter(isRelevantVideo);
}

export async function fetchPreviousVideos() {
  const results = await Promise.all(
    scrapingKeywords.map((kw) => fetchVideosByKeyword(kw))
  );

  const today = new Date().toDateString();
  return results
    .flat()
    .filter((v) => new Date(v.publishedTime).toDateString() !== today)
    .filter(isRelevantVideo);
}