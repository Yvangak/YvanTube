import VideoItem from './VideoItem';
import React from 'react';

const VideoList = ({videos}) => {
    const videoItems = videos.map((video, index) => {
        return <VideoItem key={index} video={video}/>;
    });
    return (
        <div className="ui segment">{videoItems}</div>
    );
};

export default VideoList;