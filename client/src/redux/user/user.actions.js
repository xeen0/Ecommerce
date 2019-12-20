// reducer define type and payload or properties for respective action type
import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const SignOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START
});
export const SignInSucess = user => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
});

export const SignOutSucess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS
});
export const SignInFailure = error => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
});
export const SignOutFailure = error => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signUpStart = userCreditials => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userCreditials
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error
});
