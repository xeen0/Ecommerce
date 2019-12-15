//redux file
// for respective action it takes  state from the flow and returns the state with change back to flow
import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
    case UserActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGNOUT_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
export default UserReducer;
