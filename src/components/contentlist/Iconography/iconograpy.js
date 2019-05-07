import React from 'react';
import * as Icons from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


class MyIconography extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      open : false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  renderOneIcon(icon)
  {
    let MyIcon = icon;
    return(

        <li className = "one-icon-display" onClick={this.handleClickOpen} >
          <MyIcon />
        </li>
    );
  }

  render()
  {
    let output = [];
    for(let oneIcon in Icons)
    {
      output.push(this.renderOneIcon(Icons[oneIcon]));
    }
    let myName = "Icons";
    return(
      <div>
        <Paper className = "icon-paper" elevation = {20}>
          <h1>Click on icon to check sample usage</h1>
          <ul className = "icons-display">{output}</ul>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Sample Icon Usage"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This is Sample Usage
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>
    );
  }

}

export default MyIconography;
