import React from 'react';
import VideoCard from './VideoCard';
import './VideoSection.css';

const VideoSection = ({ title, videos }) => {
  return (
    <section className="video-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-divider"></div>
      </div>
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
