import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

import authReducer from "./Auth/reducer";
import chatReducer from "./Chat/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  form: formReducer,
});

export default rootReducer;