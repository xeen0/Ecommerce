import { call, all } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";
import { UserSaga } from "./user/user.sagas";
import { CartSaga } from "./cart/cart.sagas";
export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(UserSaga), call(CartSaga)]);
}
