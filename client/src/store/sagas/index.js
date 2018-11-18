import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  fetchPlayersSaga,
  fetchPlayerSaga,
  addPlayerSaga,
  getRankingsSaga
} from "./player";
import { fetchMatchesSage, fetchMatchSage, addMatchSaga } from "./match";

export function* watchPlayer() {
  yield all([
    takeEvery(actionTypes.FETCH_PLAYERS_SAGA, fetchPlayersSaga),
    takeEvery(actionTypes.FETCH_PLAYER_SAGA, fetchPlayerSaga),
    takeEvery(actionTypes.ADD_PLAYER_SAGA, addPlayerSaga),
    takeEvery(actionTypes.GET_RANKINGS_SAGA, getRankingsSaga)
  ]);
}

export function* watchMatch() {
  yield all([
    takeEvery(actionTypes.FETCH_MATCHES_SAGA, fetchMatchesSage),
    takeEvery(actionTypes.FETCH_MATCH_SAGA, fetchMatchSage),
    takeEvery(actionTypes.ADD_MATCH_SAGA, addMatchSaga)
  ]);
}
