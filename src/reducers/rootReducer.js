/*
This is root reducer,
combining all children reducers.
*/

import { combineReducers } from 'redux';
import headerReducer from "./headerReducer.js";
import appReducer from "./appReducer.js";
//import templeteReducer from "./templeteReducer.js";
import navReducer from "./navReducer.js";

const rootReducer = combineReducers({
  headerReducer,
  appReducer,
  //templeteReducer,
  navReducer
});

export default rootReducer;
