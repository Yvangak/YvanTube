import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import '../styles/style.css';
import React from 'react';

class App extends React.Component {

    onKeywordSubmit = (keyword) => {
        youtube.get("/search", {
            params: {
                q: keyword
            }
        });
    }

    render() {
        return (
            <div className="ui container app">
                <SearchBar search={this.onKeywordSubmit}/>
            </div>
        );
    }
}

export default App;