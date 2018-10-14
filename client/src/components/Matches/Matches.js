import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMatches } from "../../store/actions";
import Spinner from "../UI/Spinner";
import MatchItem from "./MatchItem/MatchItem";

class Matches extends Component {
  componentDidMount() {
    this.props.fetchMatches();
  }
  render() {
    const { matches, loading } = this.props.match;
    let matchesContent;
    if (matches === null || loading) {
      matchesContent = <Spinner />;
    } else if (matches.length > 0) {
      matchesContent = matches.map(match => (
        <MatchItem
          key={match._id}
          username1={match.username1}
          username2={match.username2}
          sets={match.sets}
          winner={match.winner}
          matchId={match._id}
          showDetailsLink={true}
        />
      ));
    } else {
      matchesContent = <h1>No matches found</h1>;
    }
    return (
      <div className="matches">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Matches</h1>
              {matchesContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Matches.propTypes = {
  match: PropTypes.object.isRequired,
  fetchMatches: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    match: state.match
  };
};

const mapDispatchToProps = {
  fetchMatches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
