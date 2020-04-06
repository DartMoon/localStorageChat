import {AUTH} from "./constants";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOG_IN_SUCCESS:
      const {payload} = action;

      return {...state, userInfo: payload};
    default:
      return state
  }
};

export default authReducer;