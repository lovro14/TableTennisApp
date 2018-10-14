import React from "react";
import PropTypes from "prop-types";

const PlayerDetails = props => (
  <div>
    <p>
      <b>Username:</b> {props.username}
    </p>
    <br />
    <p>
      <b>Full Name: </b> {props.fullName}
    </p>
    <br />
    <hr/>
    <p>
      <b>Played Matches: </b> {props.numberOfMatches}
    </p>
    <br />
    <p>
      <b>Won Matches: </b> {props.numberOfWins}
    </p>
    <br />
    <p>
      <b>Lost Matches: </b> {props.numberOfLostMatches}
    </p>
    <br />
    <hr/>
    <p>
      <b>Sets Played: </b> {props.setPlayed}
    </p>
    <br />
    <p>
      <b>Won Sets: </b> {props.setWins}
    </p>
    <br />
    <p>
      <b>Lost Sets: </b> {props.setLost}
    </p>
    <br />
    <hr/>
    <p>
      <b>Points Played: </b> {props.pointsPlayed}
    </p>
    <br />
    <p>
      <b>Points Won: </b> {props.pointsWon}
    </p>
    <br />
    <p>
      <b>Points Lost: </b> {props.pointsLost}
    </p>
    <br />
  </div>
);

PlayerDetails.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  numberOfMatches: PropTypes.number.isRequired,
  numberOfWins: PropTypes.number.isRequired,
  numberOfLostMatches: PropTypes.number.isRequired,
  setPlayed: PropTypes.number.isRequired,
  setWins: PropTypes.number.isRequired,
  setLost: PropTypes.number.isRequired,
  pointsPlayed: PropTypes.number.isRequired,
  pointsWon: PropTypes.number.isRequired,
  pointsLost: PropTypes.number.isRequired,
};

export default PlayerDetails;
