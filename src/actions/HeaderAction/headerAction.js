const ShowRightMenu = (event) =>{
  return{
    type: 'Show_Right_Menu',
    event: event
  };
};

const CloseRightMenu = () => {
  return{
    type: 'Close_Right_Menu'
  };
};

export default {ShowRightMenu, CloseRightMenu};
