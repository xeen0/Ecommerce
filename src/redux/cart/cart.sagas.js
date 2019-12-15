import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionType from "../user/user.types";
import { clearCart } from "./cart.actions";
export function* onClearCart() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionType.SIGNOUT_SUCCESS, onClearCart);
}

export function* CartSaga() {
  yield all([call(onSignOutSuccess)]);
}
