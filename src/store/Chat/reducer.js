import {MESSAGE} from './constants'


const initialState = [];

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE.LOAD_SUCCESS:
      return action.payload;
    case MESSAGE.SUCCESS:
      return [...state, action.payload];
    default:
      return state
  }
};

export default chatReducer;