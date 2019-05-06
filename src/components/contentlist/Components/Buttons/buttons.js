import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyTemplete  from '../../../templete';


class Buttons extends React.Component
{

  renderButton()
  {
    return(
      <Button variant="contained" >
        Default
      </Button>
    )
  }

  render()
  {
    let output = [];
    for(let i = 0; i < 4; i++)
    {
      output.push(this.renderButton());
    }
    let el = (<div> <h1>default</h1> <br/>{output}</div>)
    let myName = "Button"
    return(
      <div>
      <MyTemplete content = {el} name = {myName}/>
      </div>
    )
  }

}

export default Buttons;
