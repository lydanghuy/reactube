import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange}/>;
    }

    onInputChange() {}

}

export default SearchBar;