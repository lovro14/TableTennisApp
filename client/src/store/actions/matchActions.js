import {
  SET_MATCHES_LOADING,
  GET_MATCHES,
  SET_ERRORS,
  MATCH_DETAILS,
  FETCH_MATCHES_SAGA,
  FETCH_MATCH_SAGA,
  ADD_MATCH_SAGA
} from "./actionTypes";

export const setMatchLoading = () => {
  return {
    type: SET_MATCHES_LOADING
  };
};

export const getMatches = matches => {
  return {
    type: GET_MATCHES,
    payload: matches
  };
};

export const fetchMatches = () => {
  return {
    type: FETCH_MATCHES_SAGA
  };
};

export const setMatchErrors = err => {
  return {
    type: SET_ERRORS,
    payload: err
  };
};

export const addNewMatch = (matchData, history) => {
  return {
    type: ADD_MATCH_SAGA,
    history: history,
    matchData: matchData
  };
};

export const getMatchData = matchData => {
  return {
    type: MATCH_DETAILS,
    payload: matchData
  };
};

export const fetchMatch = matchId => {
  return {
    type: FETCH_MATCH_SAGA,
    matchId: matchId
  };
};
