import { axiosInstance } from "../../custom-axios";
import {
  SET_PLAYERS_LOADING,
  GET_PLAYERS,
  GET_PLAYER,
  SET_ERRORS
} from "./actionTypes";

const setLoading = () => {
  return {
    type: SET_PLAYERS_LOADING
  };
};

const getPlayers = players => {
  return {
    type: GET_PLAYERS,
    payload: players
  };
};

export const fetchPlayers = () => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axiosInstance.get("/api/users");
    dispatch(getPlayers(res.data.reverse()));
  } catch (err) {
    console.log(err);
  }
};

const getPlayer = player => {
  return {
    type: GET_PLAYER,
    payload: player
  };
};

export const fetchPlayer = playerId => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axiosInstance.get(`/api/users/${playerId}`);
    dispatch(getPlayer(res.data));
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

export const addPlayer = (playerData, history) => async dispatch => {
  try {
    await axiosInstance.post("/api/users", playerData);
    history.push("/players");
  } catch (err) {
    dispatch(setErrors(err.response.data));
  }
};

export const getRankings = (path) => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axiosInstance.get(path);
    dispatch(getPlayers(res.data));
  } catch (err) {
    console.log(err);
  }
};