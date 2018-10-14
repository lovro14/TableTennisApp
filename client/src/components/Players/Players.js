import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../../store/actions";
import PropTypes from "prop-types";
import Spinner from "../UI/Spinner";
import PlayerItem from "./PlayersItem/PlayersItem";

class Players extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }
  render() {
    const { players, loading } = this.props.player;
    let playersContent;
    if (players === null || loading) {
      playersContent = <Spinner />;
    } else if (players.length > 0) {
      playersContent = players.map(player => (
        <PlayerItem
          key={player._id}
          username={player.username}
          fullName={player.fullName}
          playerId={player._id}
        />
      ));
    }else{
      playersContent = <h1>No players found.</h1>
    }
    return (
      <div className="players">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Players</h1>
              <p className="lead text-center">See player's statistics</p>
              {playersContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Players.propTypes = {
  player: PropTypes.object.isRequired,
  fetchPlayers: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

const mapDispatchToProps = {
  fetchPlayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
