import React from 'react';

const VideoPlayer = ({ title, url }) => {
  return (
    <div className="row col-12 ">
      <iframe
        src={url} 
        height={400}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full"
        title={title} 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
