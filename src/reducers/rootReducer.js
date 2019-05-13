import Data from "../containers/nav/data.js";

const initState =  {
  anchorEl : null, //control right menu
  leftOpen : false,
  data : Data.navItems
}

const rootReducer = (state = initState, action) =>{
  if(action.type === 'Show_Right_Menu')
  {
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
    return state;

}

export default rootReducer;
