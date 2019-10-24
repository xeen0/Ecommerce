import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { ShopActionTypes } from "./shop.types";

export const collectionsFecthingStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const collectionsFetchingSuccess = mapCollection => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: mapCollection
});

export const collectionsFecthingFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const collectionsFecthingStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(collectionsFecthingStart());
    collectionRef
      .get()
      .then(async snapshot => {
        const mapCollection = convertCollectionsSnapshotToMap(snapshot);
        dispatch(collectionsFetchingSuccess(mapCollection));
      })
      .catch(error => dispatch(error.message));
  };
};
