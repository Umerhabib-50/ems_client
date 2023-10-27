import { combineReducers } from "redux";

import { adminLoginReducer } from "../reducers/auth";

export default combineReducers({
  admin: adminLoginReducer,
});
