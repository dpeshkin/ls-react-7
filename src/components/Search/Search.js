import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRequest } from "../../actions/searchActions";

class Search extends Component {
  state = {
    searchQuery: ""
  };
  handleSearchQuery = () => {
    const query = this.state.searchQuery;
    this.props.searchRequest(query);
  };
  handleOnChange = e => {
    this.setState({ searchQuery: e.target.value });
  };
  handleOnKeyDown = e => {
    if (e.keyCode === 13) {
      this.handleSearchQuery();
    }
  };
  componentDidMount(nextProps) {
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { shows, isFetching } = this.props;
    return (
      <div className="container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Введите название сериала"
            value={this.state.searchQuery}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnKeyDown}
          />
          <button onClick={this.handleSearchQuery}>
            Найти
          </button>
        </div>
        {isFetching ? (
          <div className="search-loading">
            §Идёт загрузка
          </div>
        ) : (
          <div className="search-results">
            {shows.map(show => (
              <div key={show.id} className="show">
                <div className="show__link">
                  <a href={show.url}>
                    <h3>{show.name}</h3>
                  </a>
                </div>
                {show.image && (
                  <div className="show__image">
                    <img
                      src={show.image.original}
                      alt={show.name}
                    />
                  </div>
                )}
                <div
                  className="show__summary"
                  dangerouslySetInnerHTML={{
                    __html: show.summary
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.search.results
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);
