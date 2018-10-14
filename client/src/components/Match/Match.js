import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../UI/Spinner";
import { fetchMatch } from "../../store/actions";
import MatchItem from "../Matches/MatchItem/MatchItem";

class Match extends Component {
  componentDidMount() {
    if (this.props.match.params.matchId) {
      this.props.fetchMatch(this.props.match.params.matchId);
    }
  }

  render() {
    const { match, matches, loading, head2head } = this.props.matchData;
    let matchDetailsContent;
    let historyMatches;
    let head2headContent = null;
    if (match === null || loading === true) {
      matchDetailsContent = <Spinner />;
    } else {
      matchDetailsContent = (
        <MatchItem
          username1={match.username1}
          username2={match.username2}
          sets={match.sets}
          winner={match.winner}
          matchId={match._id}
          showDetailsLink={false}
        />
      );
      if (matches !== null && matches.length > 0) {
        historyMatches = matches.map(match => (
          <MatchItem
            key={match._id}
            username1={match.username1}
            username2={match.username2}
            sets={match.sets}
            winner={match.winner}
            matchId={match._id}
            showDetailsLink={false}
          />
        ));
      }
      let head2headKeys = Object.keys(head2head);
      head2headContent = (
        <div>
          {" "}
          <h1 className="display-4 text-center">Head 2 Head</h1>
          <h3>
            {head2headKeys[0]}: {head2head[match.username1]}
          </h3>
          <h3 >
            {head2headKeys[1]}: {head2head[match.username2]}
          </h3>
          <br />
          <hr />
        </div>
      );
    }
    return (
      <div className="matches">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Selected Match</h1>
              {matchDetailsContent}
              <br />
              <hr />
              {head2headContent}
              <h1 className="display-4 text-center">History</h1>
              {historyMatches}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Match.propTypes = {
  fetchMatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    matchData: state.match
  };
};

const mapDispatchToProps = {
  fetchMatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
