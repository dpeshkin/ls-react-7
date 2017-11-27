import React, { Component } from "react";
import { connect } from "react-redux";
import { showRequest } from "../../actions/showPageActions";
import "./ShowPage.css";

class ShowPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.showRequest(id);
  }

  render() {
    const { show, isFetching } = this.props;

    return (
      <div className="show-page__result">
        {isFetching ? (
          <div>Загружаем...</div>
        ) : (
          <div className="show-page">
            <div className="show-page__header">
              <h3>{show.name}</h3>
            </div>
            {show.image && (
              <div className="show-page__image">
                <img src={show.image.original} alt={show.name} />
              </div>
            )}
            <div
              className="show-page__summary"
              dangerouslySetInnerHTML={{
                __html: show.summary
              }}
            />
            <div className="show-page__actors">
              <ul className="actors-list">
                {show._embedded &&
                  show._embedded.cast.length > 0 &&
                  show._embedded.cast.map(actor => (
                    <li className="actors-item" key={actor.person.id}>
                      <div className="actor-name">{actor.person.name}</div>
                      <img
                        src={actor.person.image.medium}
                        alt={actor.person.name}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.shows.results,
  isFetching: state.shows.isFetching
});

const mapDispatchToProps = {
  showRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
