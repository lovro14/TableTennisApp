import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayersItem = props => (
  <div>
    <Link to={`/players/${props.playerId}`}>{props.username}</Link>
    <br />
    {props.fullName}
    <hr />
  </div>
);
PlayersItem.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  playerId: PropTypes.string.isRequired
};
export default PlayersItem;
