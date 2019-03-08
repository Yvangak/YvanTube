import React from 'react';

class SearchBar extends React.Component {
    state={
        keyword: ""
    }

    onInputChange = event =>{
        this.setState({keyword: event.target.value});
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="ui fluid icon input">
                        <input value={this.state.keyword} onChange={this.onInputChange} className="field" type="text" placeholder="Search Video..." />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;