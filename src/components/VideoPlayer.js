import React from 'react';



const VideoPlayer = ({video}) => {
    if (!video) {
        return <div>loading</div>;
    } else {
        const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe title={video.id.videoId} src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header"> {video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;