import React, { Component } from "react";
import { getRankings } from "../../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../UI/Spinner";
import { Link } from "react-router-dom";

class RankingBySets extends Component {
  componentDidMount() {
    this.props.getRankings("/api/users/sets");
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
              <th>Sets Won</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player._id}>
                <td>
                  <Link to={`/players/${player._id}`}>{player.username}</Link>
                </td>
                <td>{player.fullName}</td>
                <td>{player.setsWon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return (
      <div className="rankingsBySets">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Ranking by Sets</h1>
              <br/>
              {rankingContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RankingBySets.propTypes = {
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
)(RankingBySets);
