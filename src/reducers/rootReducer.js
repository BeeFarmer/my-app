const initState =  {
  anchorEl : null,
  leftOpen : false
}

const rootReducer = (state = initState, action) =>{
  console.log(state);
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
  else {
    return state;
  }
}

export default rootReducer;
