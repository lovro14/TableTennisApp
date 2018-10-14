import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FOUR_SET_MATCH, FIVE_SET_MATCH } from "../../../match-constants";

const MatchItem = props => {
  let tableSet4 = null;
  let tableSet5 = null;
  if (props.sets.length === FOUR_SET_MATCH) {
    tableSet4 = <th scope="col">Set 4</th>;
  } else if (props.sets.length === FIVE_SET_MATCH) {
    tableSet4 = <th scope="col">Set 4</th>;
    tableSet5 = <th scope="col">Set 5</th>;
  }

  return (
    <div>
      {props.showDetailsLink ? (
        <Link to={`/matches/${props.matchId}`}>Match Details</Link>
      ) : null}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Set 1</th>
            <th scope="col">Set 2</th>
            <th scope="col">Set 3</th>
            {tableSet4}
            {tableSet5}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.username1 === props.winner ? (
                <b>{props.username1}</b>
              ) : (
                props.username1
              )}
            </td>
            {props.sets.map(set => (
              <td key={set._id}>{set.user1}</td>
            ))}
          </tr>
          <tr>
            <td>
              {props.username2 === props.winner ? (
                <b>{props.username2}</b>
              ) : (
                props.username2
              )}
            </td>
            {props.sets.map(set => (
              <td key={set._id}>{set.user2}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
};

MatchItem.propTypes = {
  username1: PropTypes.string.isRequired,
  username2: PropTypes.string.isRequired,
  sets: PropTypes.array.isRequired,
  winner: PropTypes.string.isRequired,
  matchId: PropTypes.string.isRequired,
  showDetailsLink: PropTypes.bool.isRequired
};

export default MatchItem;
