import React, { Component } from "react";
import { fetchPlayer } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../UI/Spinner";
import PlayerDetails from "./PlayerDetails/PlayerDetails";

class Player extends Component {
  componentDidMount() {
    if (this.props.match.params.playerId) {
      this.props.fetchPlayer(this.props.match.params.playerId);
    }
  }

  render() {
    const { player, loading } = this.props.player;
    let playerContent;
    if (player === null || loading) {
      playerContent = <Spinner />;
    } else {
      playerContent = (
        <PlayerDetails
          username={player.username}
          fullName={player.fullName}
          numberOfMatches={player.numberOfMatches}
          numberOfWins={player.numberOfWins}
          numberOfLostMatches={player.numberOfLostMatches}
          setPlayed={player.setPlayed}
          setWins={player.setWins}
          setLost={player.setLost}
          pointsPlayed={player.pointsPlayed}
          pointsWon={player.pointsWon}
          pointsLost={player.pointsLost}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">{playerContent}</div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  fetchPlayer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

const mapDispatchToProps = {
  fetchPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
