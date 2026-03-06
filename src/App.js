import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Channels from './components/Channels';
import { fetchTodayVideos, fetchPreviousVideos } from './youtubeApi';
import { fetchTodayTweets, fetchPreviousTweets } from './twitterApi';
import { channelList } from './mockData';

function App() {
  const [todayVideos, setTodayVideos] = useState([]);
  const [previousVideos, setPreviousVideos] = useState([]);
  const [todayTweets, setTodayTweets] = useState([]);
  const [previousTweets, setPreviousTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAll() {
      try {
        setLoading(true);
        const [ytToday, ytPrevious, twToday, twPrevious] = await Promise.all([
          fetchTodayVideos(),
          fetchPreviousVideos(),
          fetchTodayTweets(),
          fetchPreviousTweets(),
        ]);
        setTodayVideos(ytToday);
        setPreviousVideos(ytPrevious);
        setTodayTweets(twToday);
        setPreviousTweets(twPrevious);
      } catch (err) {
        setError("Failed to load content. Check your API keys.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAll();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="left-content">
          <VideoSection title="YouTube - Today" videos={todayVideos} />
          <VideoSection title="YouTube - Previous" videos={previousVideos} />
          <VideoSection title="Twitter - Today" videos={todayTweets} />
          <VideoSection title="Twitter - Previous" videos={previousTweets} />
        </div>
        <div className="right-sidebar">
          <Channels channels={channelList} />
        </div>
      </div>
    </div>
  );
}

export default App;