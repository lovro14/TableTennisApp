import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { axiosInstance } from "../../custom-axios";

export function* fetchMatchesSage() {
  try {
    yield put(actions.setMatchLoading());
    const response = yield call([axiosInstance, "get"], "/api/matches");
    console.log(response);
    yield put(actions.getMatches(response.data.reverse()));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchMatchSage(action) {
  try {
    yield put(actions.setMatchLoading());
    const response = yield call(
      [axiosInstance, "get"],
      `/api/matches/${action.matchId}`
    );
    yield put(actions.getMatchData(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* addMatchSaga(action) {
  try {
    const response = yield axiosInstance.post("/api/matches", action.matchData);
    //const response = yield call([axiosInstance, "post"], action.matchData);
    action.history.push("/matches");
  } catch (err) {
    yield put(actions.setMatchErrors(err.response.data));
  }
}
