import { takeLatest, call, put } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  collectionsFetchingSuccess,
  collectionsFecthingFailure
} from "./shop.actions";
export function* fetchCollectionAsync() {
  try { 
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(collectionsFetchingSuccess(collectionsMap));
  } catch (error) {
    yield put(collectionsFecthingFailure(error.message));
  }
}
export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}
