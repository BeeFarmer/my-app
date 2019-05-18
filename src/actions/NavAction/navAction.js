/*
Action(s):

To toggle sublists in left menu: collapsed or expanded
To reset central display to primary tab when content changes
*/

import Action from "../ActionID/actionID.js";

const ShowSublist = (oneState) =>{
  return{
    type: Action.SHOW_SUBLIST,
    oneState: oneState
  };
};

const SetState = (oneState,bool) =>{
  return{
    type: Action.SET_STATE,
    oneState: oneState,
    bool: bool
  };
};


export default {ShowSublist, SetState};
