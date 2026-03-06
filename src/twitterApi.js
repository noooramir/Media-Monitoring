// twitterApi.js
const BASE_URL = "http://localhost:5000";

export async function fetchTodayTweets() {
  try {
    const res = await fetch(`${BASE_URL}/twitter/today`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Twitter fetch error:", err);
    return [];
  }
}

export async function fetchPreviousTweets() {
  try {
    const res = await fetch(`${BASE_URL}/twitter/previous`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Twitter fetch error:", err);
    return [];
  }
}