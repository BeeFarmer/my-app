import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyTemplete  from '../../../templete';


const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit*20,
  },
  input: {
    display: 'none',
  },
});

class Buttons extends React.Component
{
  renderButton()
  {
    const {classes} = this.props;
    return(
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
    )
  }

  render()
  {
    const {classes} = this.props;
    let output = [];
    for(let i = 0; i < 4; i++)
    {
      output.push(this.renderButton());
    }
    let el = (<div > <h1>default</h1> <br/>{output}</div>)
    let myName = "Button"
    return(
      <div>
      <MyTemplete content = {el} name = {myName}/>
      </div>
    );
  }

}

export default withStyles(styles)(Buttons);
