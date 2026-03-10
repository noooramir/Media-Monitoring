import React, { useState, useEffect } from 'react';
import './App.css';
import { todayVideos, channelList, scrapingKeywords } from './mockData';

function App() {
  const [loading, setLoading] = useState(false); // Simplified for UI demo

  return (
    <div className="App">
      {/* Top Header Section */}
      <header className="dashboard-header">
        <div className="logo-section">
          <h2 style={{ letterSpacing: '2px', margin: 0 }}>MONITOR-X</h2>
          <small style={{ color: '#888' }}>Real-Time Media Monitoring Intelligence.</small>
        </div>
        <div className="filter-bar">
          <select className="filter-select"><option>All keywords</option></select>
          <select className="filter-select"><option>All Socials</option></select>
          <select className="filter-select"><option>Last 7 days</option></select>
          <button className="filter-select" style={{ background: '#222' }}>Report ↑</button>
          <button className="filter-select" style={{ background: '#eee', color: '#000' }}>Keyword +</button>
        </div>
      </header>

      <div className="dashboard-grid">
        
        {/* Row 1: Top Stat Cards */}
        <div className="card">
          <div className="card-title">Total mentions ⓘ</div>
          <div className="stat-value">3.8k <span className="stat-subtext">+4.3k</span></div>
          <div style={{ height: '50px', marginTop: '10px', borderBottom: '1px solid #ffc107' }}></div>
        </div>

        <div className="card">
          <div className="card-title">Total Engagements ⓘ</div>
          <div className="stat-value">3.1k</div>
          <div style={{ height: '50px', marginTop: '10px', textAlign: 'right', color: '#ffc107' }}>📈</div>
        </div>

        <div className="card">
          <div className="card-title">Sentiment Analysis ⓘ</div>
          <div className="sentiment-container">
            <div className="ring-placeholder"></div>
            <div>
              <div style={{ color: 'var(--accent-pink)' }}>Positive 24.6%</div>
              <div style={{ color: 'var(--accent-teal)' }}>Negative 24.6%</div>
              <div style={{ color: 'var(--text-dim)' }}>Neutral 11%</div>
            </div>
          </div>
        </div>

        {/* Row 2: Main Content */}
        {/* Left: Recent Mentions */}
        <div className="card" style={{ gridRow: 'span 2' }}>
          <div className="card-title">Recent Mentions</div>
          <div className="mentions-list">
            <div className="mention-item">Ansar muhaideen@twitter <br/> <small style={{color:'#888'}}>threat: punjab</small></div>
            <div className="mention-item">mullah akhtar @fb <br/> <small style={{color:'#888'}}>Video: 4people#jihaad Loc: Afg</small></div>
            <div className="mention-item">samiullah@fb <br/> <small style={{color:'#888'}}>#Loc: Hangu</small></div>
          </div>
        </div>

        {/* Center: Video Feed */}
        <div className="card" style={{ gridRow: 'span 1' }}>
          {todayVideos.slice(0, 3).map(video => (
            <div className="feed-item" key={video.id}>
              <img src={video.thumbnail} className="feed-thumb" alt="thumb" />
              <div className="feed-info">
                <h4>{video.title}</h4>
                <span>{video.channel} • {video.publishedTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Social Monitoring */}
        <div className="card" style={{ gridRow: 'span 2' }}>
          <div className="platform-tabs">
            <span className="tab-active">Youtube</span>
            <span>facebook</span>
            <span>twitter</span>
            <span>tiktok</span>
          </div>
          {channelList.slice(0, 3).map((chan, idx) => (
            <div className="feed-item" key={chan.id} style={{ alignItems: 'center', border: 'none' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9rem' }}>{chan.name}</div>
                <small style={{ color: '#888' }}>Followers: {10 + idx}k</small>
              </div>
              <span className={`status-pill ${idx === 1 ? 'status-inactive' : 'status-active'}`}>
                {idx === 1 ? 'Not Active' : 'Most Active'}
              </span>
            </div>
          ))}
        </div>

        {/* Row 3: Bottom Stats */}
        <div className="card">
          <div className="card-title">Sources ⓘ</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', height: '100px' }}>
            <div style={{ height: '80%', width: '15px', background: 'var(--accent-yellow)' }}></div>
            <div style={{ height: '60%', width: '15px', background: 'var(--accent-teal)' }}></div>
            <div style={{ height: '40%', width: '15px', background: 'purple' }}></div>
            <div style={{ height: '30%', width: '15px', background: 'orange' }}></div>
          </div>
        </div>

        {/* Keywords */}
        <div className="card" style={{ gridColumn: 'span 1' }}>
          <div className="card-title">Keywords +</div>
          <div className="keyword-cloud">
            {scrapingKeywords.slice(0, 8).map(word => (
              <span key={word} className="keyword-chip">{word} <small>×</small></span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;