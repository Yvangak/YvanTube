import VideoItem from './VideoItem';
import React from 'react';

const VideoList = ({videos, select}) => {
    const videoItems = videos.map((video, index) => {
        return <VideoItem select={select} key={index} video={video}/>;
    });
    return (
        <div className="ui segment">{videoItems}</div>
    );
};

export default VideoList;