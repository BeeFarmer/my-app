import Data from "./data.js";

const initState =  {
  anchorEl : null, //control right menu
  rightContent: Data.rightMenu, // right menu content
  leftOpen : false, //control left menu
  data : Data.navItems, //left menu table of contents data
  value: 0, //central tab display
  event: null
}

const rootReducer = (state = initState, action) =>{
  if(action.type === 'Show_Right_Menu')
  {
    console.log(state.target);
    return{
      ...state,
      anchorEl: action.event.currentTarget
    }
  }
  else if(action.type === 'Close_Right_Menu')
  {
    return{
      ...state,
      anchorEl: null
    }
  }
  else if(action.type === 'Show_Left_Menu')
  {
    return{
      ...state,
      leftOpen: !state.leftOpen
    }
  }
  else if(action.type === 'Show_Sublist')
  {
    return{
      ...state,
      [action.oneState]:  !state[action.oneState]
    }
  }
  else if(action.type === 'Switch_Tabs')
  {
    return{
      ...state,
      value: action.value,
      event: action.event
    }
  }
  else if(action.type === 'Reset_Tabs_Value')
  {
    return{
      ...state,
      value: 0
    }
  }
    return state;

}

export default rootReducer;
