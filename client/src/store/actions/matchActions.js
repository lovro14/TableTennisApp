import {
  SET_MATCHES_LOADING,
  GET_MATCHES,
  SET_ERRORS,
  MATCH_DETAILS
} from "./actionTypes";
import { axiosInstance } from "../../custom-axios";

const setLoading = () => {
  return {
    type: SET_MATCHES_LOADING
  };
};

const getMatches = matches => {
  return {
    type: GET_MATCHES,
    payload: matches
  };
};

export const fetchMatches = () => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axiosInstance.get("/api/matches");
    dispatch(getMatches(res.data.reverse()));
  } catch (err) {
    console.log(err);
  }
};

const setErrors = err => {
  return {
    type: SET_ERRORS,
    payload: err
  };
};

export const addNewMatch = (matchData, history) => async dispatch => {
  try {
    await axiosInstance.post("/api/matches", matchData);
    history.push("/matches");
  } catch (err) {
    dispatch(setErrors(err.response.data));
  }
};

const getMatchData = matchData => {
  return {
    type: MATCH_DETAILS,
    payload: matchData
  };
};

export const fetchMatch = matchId => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axiosInstance.get(`/api/matches/${matchId}`);
    dispatch(getMatchData(res.data));
  } catch (err) {
    console.log(err);
  }
};
