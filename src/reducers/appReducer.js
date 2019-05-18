/*
Handle actions when left menu needs to be toggled
*/

import Action from "../actions/ActionID/actionID.js";

const initState = {
  leftOpen : true,
}

const appReducer = (state = initState, action) =>{
  if(action.type === Action.SHOW_LEFT_MENU)
  {
    return{
      ...state,
      leftOpen: !state.leftOpen
    }
  }
  return state;
}

export default appReducer;
