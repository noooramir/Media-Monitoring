import React from 'react';
import './Channels.css';

const Channels = ({ channels }) => {
  return (
    <div className="channels-container">
      <div className="channels-header">
        <h2 className="channels-title">Channels</h2>
        <div className="channels-divider"></div>
      </div>
      <div className="channels-grid">
        {channels.map((channel) => (
          <div key={channel.id} className="channel-item" title={channel.name}>
            <div className="channel-image-wrapper">
              <img 
                src={channel.image} 
                alt={channel.name}
                className="channel-image"
              />
              <div className="channel-overlay">
                <span className="channel-name">{channel.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channels;
