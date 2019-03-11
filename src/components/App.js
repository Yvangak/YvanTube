import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import '../styles/style.css';
import React from 'react';

class App extends React.Component {
    state = {
        videos: []
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

    render() {
        return (
            <div className="ui container app">
                <SearchBar search={this.onKeywordSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;