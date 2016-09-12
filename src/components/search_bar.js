import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return(
			<div id="search-bar" className="input-group">
		      <input type="text" className="form-control" placeholder="Search for..." />
		      <span className="input-group-btn">
		        <button className="btn btn-primary" type="button">Search</button>
		      </span>
		    </div>
		);
	}
}

export default SearchBar;