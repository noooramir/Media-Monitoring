import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const handleClick = () => {
    window.open(video.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="play-overlay">
          <div className="play-icon">▶</div>
        </div>
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-channel">{video.channel}</p>
        <p className="video-time">{video.publishedTime}</p>
      </div>
    </div>
  );
};

export default VideoCard;
