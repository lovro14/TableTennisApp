import {
  SET_PLAYERS_LOADING,
  GET_PLAYERS,
  GET_PLAYER,
  SET_ERRORS,
  FETCH_PLAYERS_SAGA,
  FETCH_PLAYER_SAGA,
  ADD_PLAYER_SAGA,
  GET_RANKINGS_SAGA
} from "./actionTypes";

export const setLoading = () => {
  return {
    type: SET_PLAYERS_LOADING
  };
};

export const getPlayers = players => {
  return {
    type: GET_PLAYERS,
    payload: players
  };
};

export const fetchPlayers = () => {
  return {
    type: FETCH_PLAYERS_SAGA
  };
};

export const getPlayer = player => {
  return {
    type: GET_PLAYER,
    payload: player
  };
};

export const fetchPlayer = playerId => {
  return {
    type: FETCH_PLAYER_SAGA,
    playerId: playerId
  };
};

export const setErrors = err => {
  return {
    type: SET_ERRORS,
    payload: err
  };
};

export const addPlayer = (playerData, history) => {
  return {
    type: ADD_PLAYER_SAGA,
    playerData: playerData,
    history: history
  };
};

export const getRankings = path => {
  return {
    type: GET_RANKINGS_SAGA,
    path: path
  };
};
