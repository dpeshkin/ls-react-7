import React, { Component } from "react";

class Search extends Component {
  startSearch = () => {};
  handleOnChange = () => {};

  render() {
    return (
      <div className="container">
        <div classname="search-input">
          <input
            type="text"
            placeholder="Введите название сериала"
            value=""
            onChange={this.handleOnChange}
          />
          <button onClick={this.startSearch}>Найти</button>
        </div>
        <div className="search-results" />
      </div>
    );
  }
}

export default Search;
