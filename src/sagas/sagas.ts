import { takeEvery, put } from "redux-saga/effects";

import * as ACTION_TYPES from "actions/actionTypes";
import * as actions from "actions/actions";

function* getMapInfo(action: actions.MapActionType) {
  const { payload } = action;
  yield put(actions.getMapInfoRequest());
  try {
    yield put(actions.getMapInfoSuccess("success"));
  } catch (e) {
    yield put(actions.getMapInfoFailed((e as any).message));
  } finally {
    yield put(actions.getMapInfoFinished());
  }
}

function* mainSaga() {
  yield takeEvery(ACTION_TYPES.GET_MAP_INFO_START, getMapInfo);
}

export default mainSaga;
