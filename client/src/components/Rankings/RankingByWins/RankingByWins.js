import React, { Component } from "react";
import { getRankings } from "../../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../UI/Spinner";
import { Link } from "react-router-dom";

class RankingByWins extends Component {
  componentDidMount() {
    this.props.getRankings("/api/users/wins");
  }
  render() {
    const { loading, players } = this.props.player;
    let rankingContent = null;
    if (players === null || loading) {
      rankingContent = <Spinner />;
    } else {
      rankingContent = (
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Full Name</th>
              <th>Number of Wins</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player._id}>
                <td>
                  <Link to={`/players/${player._id}`}>{player.username}</Link>
                </td>
                <td>{player.fullName}</td>
                <td>{player.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return (
      <div className="rankingsByWins">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Ranking by Wins</h1>
              <br />
              {rankingContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RankingByWins.propTypes = {
  player: PropTypes.object.isRequired,
  getRankings: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    player: state.player,
    getRankings: PropTypes.func.isRequired
  };
};

const mapDispatchToProps = {
  getRankings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingByWins);
