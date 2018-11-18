import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { axiosInstance } from "../../custom-axios";

export function* fetchPlayersSaga() {
  yield put(actions.setLoading());
  try {
    const response = yield axiosInstance.get("/api/users");
    console.log(response.data);
    yield put(actions.getPlayers(response.data.reverse()));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchPlayerSaga(action) {
  yield put(actions.setLoading());
  try {
    const response = yield call(
      [axiosInstance, "get"],
      `/api/users/${action.playerId}`
    );
    yield put(actions.getPlayer(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* addPlayerSaga(action) {
  try {
    const response = yield axiosInstance.post("/api/users", action.playerData);
    action.history.push("/players");
  } catch (err) {
    yield put(actions.setErrors(err.response.data));
  }
}

export function* getRankingsSaga(action) {
  try {
    yield put(actions.setLoading());
    const response = yield axiosInstance.get(action.path);
    yield put(actions.getPlayers(response.data));
  } catch (err) {
    console.log(err);
  }
}
