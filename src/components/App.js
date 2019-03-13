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
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    componentDidMount() {
        return this.onKeywordSubmit('MESSI');
    }


    render() {
        return (
            <div className="ui container app">
                <SearchBar search={this.onKeywordSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoPlayer video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList select={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;