import React from 'react';
const VideoItem = ({video, select}) => {
    return (
        <div className="ui cards" onClick={()=> select(video)}>
            <div className="card clicker">
                <div className="content">
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title}
                         className="right floated mini ui image"/>
                    <div className="header">{video.snippet.title}</div>
                    <div className="description">{video.snippet.description}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;