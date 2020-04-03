import {AUTH} from "./constants";

const setAuthUser = (payload) => {
  return {
    type: AUTH.LOG_IN_SUCCESS, payload
  }
};

export {setAuthUser};