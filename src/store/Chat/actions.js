import {MESSAGE} from "./constants";

const addMessage = (payload) => ({
  type: MESSAGE.SUCCESS,
  payload
});

const addMessageState = (payload) => ({
  type: MESSAGE.LOAD_SUCCESS,
  payload
});

export {addMessage, addMessageState};

