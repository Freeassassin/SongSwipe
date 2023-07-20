import { createAction } from "@reduxjs/toolkit";
import { put, takeLeading } from "redux-saga/effects";
import { setTokenStart, setTokenSuccess, setTokenFailure } from "./authSlice";

export const setToken = createAction("setTokenSaga");

export function* setTokenSaga({ payload: { token } }) {
  try {
    yield put(setTokenStart());
    yield put(setTokenSuccess(token));
  } catch (e) {
    yield put(setTokenFailure(e));
  }
}

export default function* authSaga() {
  yield takeLeading(setToken.type, setTokenSaga);
}
