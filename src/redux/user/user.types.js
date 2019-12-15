// redux file
//this are the action type you want to execute , helps with api calls
// It is  good have these actions ... 1. start 2.Success and 3.Failure
const UserActionTypes = {
  GOOGLE_SIGNIN_START: "GOOGLE_SIGNIN_START",
  EMAIL_SIGNIN_START: "EMAIL_SIGNIN_START",
  SIGNIN_SUCCESS: "SIGNIN_SUCCESS",
  SIGNIN_FAILURE: "SIGNIN_FAILURE",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
  SIGNOUT_START: " SIGNOUT_START",
  SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS",
  SIGNOUT_FAILURE: "SIGNOUT_FAILURE",
  SIGNUP_START: "SIGNUP_START",
  SIGNUP_FAILURE: "SIGNUP_FAILURE",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS"
};
export default UserActionTypes;
