/*
Action(s):

To toggle central display tab (change tab values)
*/

import Action from "../ActionID/actionID.js";

const SwitchTabs = (event, value) =>{
  return{
    type: Action.SWITCH_TABS,
    event: event,
    value: value
  };
};

const ResetValue = () =>{
  return{
    type: Action.RESET_TABS_VALUE
  };
};

export default {SwitchTabs, ResetValue};
