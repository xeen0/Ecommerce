import { call, all } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}
