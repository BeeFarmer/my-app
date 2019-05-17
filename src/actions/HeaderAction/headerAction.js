import Action from "../ActionID/actionID.js";

const ShowRightMenu = (event) =>{
  return{
    type: Action.SHOW_RIGHT_MENU,
    event: event
  };
};

const CloseRightMenu = () => {
  return{
    type: Action.CLOSE_RIGHT_MENU,
  };
};

export default {ShowRightMenu, CloseRightMenu};
