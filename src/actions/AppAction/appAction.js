/*
Action(s):

To toggle left menu open or close
*/

import Action from "../ActionID/actionID.js";

const LeftMenuOpen = () =>{
  return{
    type: Action.SHOW_LEFT_MENU
  };
};

export default {LeftMenuOpen};
