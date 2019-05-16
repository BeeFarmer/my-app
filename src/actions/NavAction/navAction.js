const ShowSublist = (oneState) =>{
  return{
    type: 'Show_Sublist',
    oneState: oneState
  };
};

const SetState = (oneState,bool) =>{
  return{
    type: 'Set_State',
    oneState: oneState,
    bool: bool
  };
};

const ResetValue = () =>{
  return{
    type: 'Reset_Tabs_Value'
  };
};

export default {ShowSublist, SetState, ResetValue};
