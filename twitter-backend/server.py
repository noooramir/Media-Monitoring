from twikit import Client
from flask import Flask, jsonify
from flask_cors import CORS
import asyncio
from datetime import datetime, timezone
import sys

print("Starting server...", flush=True)

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

COOKIES = {
    "auth_token": "eb048d6dd08ad9a85bbe05bf053e0afe145c4f26",
    "ct0":        "0f6c1a60a8b8f1fd395770311084e53ea711f14ed2b4ee332238b16ff33180b5e6593bfbd1d731d5b5ffcf1f80a4cbbebcede3f28b2a0af61c99e54752cb81742a16b94f7ebe40731a3e9a313afa635a",
    "guest_id":   "3A177264261177472934",
    "twid":       "3D1498402129861656576"
}

KEYWORDS = [
    "BLA Pakistan",
    "TTP attack",
    "ISKP Pakistan",
    "Balochistan attack",
    "KPK operation",
    "Operation Azm-e-Istehkam",
    "Turbat attack",
    "Quetta bombing",
    "Pakistan military operation",
    "Counter terrorism Pakistan"
]

client = Client("en-US")

async def init_client():
    print("Initializing client with cookies...", flush=True)
    client.set_cookies(COOKIES)
    print("Client initialized!", flush=True)

async def search_keyword(keyword, limit=20):
    results = []
    try:
        print(f"Searching: {keyword}", flush=True)
        tweets = await client.search_tweet(keyword, "Latest", count=limit)
        for tweet in tweets:
            published = tweet.created_at_datetime
            results.append({
                "id": tweet.id,
                "title": tweet.text[:150],
                "channel": f"@{tweet.user.screen_name}",
                "link": f"https://twitter.com/{tweet.user.screen_name}/status/{tweet.id}",
                "publishedTime": published.strftime("%m/%d/%Y"),
                "isToday": published.date() == datetime.now(timezone.utc).date()
            })
    except Exception as e:
        print(f"Error searching '{keyword}': {e}", flush=True)
    return results

async def fetch_all():
    await init_client()
    all_results = []
    for kw in KEYWORDS:
        results = await search_keyword(kw)
        all_results.extend(results)
        await asyncio.sleep(2)
    return all_results

@app.route("/twitter/today")
def get_today():
    results = asyncio.run(fetch_all())
    return jsonify([r for r in results if r["isToday"]])

@app.route("/twitter/previous")
def get_previous():
    results = asyncio.run(fetch_all())
    return jsonify([r for r in results if not r["isToday"]])

if __name__ == "__main__":
    try:
        print("Flask starting on port 5000...", flush=True)
        app.run(port=5000, debug=False)  # debug=False to avoid reloader issues on Windows
    except Exception as e:
        print(f"FATAL ERROR: {e}", flush=True)
        sys.exit(1)