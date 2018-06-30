import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import _ from 'lodash';

const API_KEY = "AIzaSyDptlRyslOW_I54Ur8rBSnZxRJrNrfgtMc";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboard');
	}

	videoSearch(query) {
		YTSearch({ key: API_KEY, term: query }, data => {
			this.setState({
				videos: data,
				selectedVideo: data[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				{/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
				<SearchBar onSearchTermChange={videoSearch} />

				<VideoDetail video={this.state.selectedVideo} />
				
				<VideoList
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos} />
					
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));
