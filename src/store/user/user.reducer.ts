import { AnyAction } from "redux";

import { UserData } from "../../utils/firebase.utils";

import {
  signInFailed,
  signUpFailed,
  signOutSuccess,
  signInSuccess,
  signOutFailed,
} from "./user.action";

// import { USER_ACTION_TYPES } from "./user.types";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const useReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;

  /** 
 * 
switch (type) {
  case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return{...state, error: payload}
      default:
        return state;
      }
      */
};
