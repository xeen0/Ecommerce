import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  SignInFailure,
  SignInSucess,
  SignOutFailure,
  SignOutSucess,
  signUpSuccess,
  signUpFailure
} from "./user.actions";
import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

export function* getSnapShot(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapShot = yield userRef.get();
    yield put(SignInSucess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShot(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShot(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* SignOut() {
  try {
    yield auth.signOut();
    yield put(SignOutSucess());
  } catch (error) {
    yield put(SignOutFailure(error));
  }
}
//check user to maintain persistance
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShot(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  console.log("sadad");
  yield getSnapShot(user, additionalData);
}

// connecting fuctions with respective to their actions
export function* onGoogleSignStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onCheckUsers() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, SignOut);
}
export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp);
}
export function* UserSaga() {
  yield all([
    call(onGoogleSignStart),
    call(onEmailSignInStart),
    call(onCheckUsers),
    call(onSignOut),
    call(onSignUp),
    call(onSignUpSuccess)
  ]);
}
