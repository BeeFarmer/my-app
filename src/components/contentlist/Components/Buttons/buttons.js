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
    let myName = "Button"
    return(
      <div>
      <MyTemplete content = {output} name = {myName}/>
      </div>
    )
  }

}

export default Buttons;
