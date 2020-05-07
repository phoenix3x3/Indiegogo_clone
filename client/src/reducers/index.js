import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorRerucer from "./errorReducer";

export default combineReducers({
  error: errorRerucer,
  auth: authReducer,
});
