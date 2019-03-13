import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from './VideoPlayer';
import youtube from "../api/youtube";
import '../styles/style.css';
import React from 'react';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onKeywordSubmit = async keyword => {
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });
        this.setState({
            videos: response.data.items
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container app">
                <SearchBar search={this.onKeywordSubmit}/>
                <VideoPlayer video={this.state.selectedVideo}/>
                <VideoList select={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;