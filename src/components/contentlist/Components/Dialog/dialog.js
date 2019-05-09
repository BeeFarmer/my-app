import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';

class MyDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderNotification()
  {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          You Have New Message
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Wow!!!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              100+ people nearby are interested in your profile.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Later
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Check Now
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  render() {
    let myName = "Dialog";
    let output = this.renderNotification();
    let string = `

    import Button from '@material-ui/core/Button';
    import Dialog from '@material-ui/core/Dialog';
    import DialogActions from '@material-ui/core/DialogActions';
    import DialogContent from '@material-ui/core/DialogContent';
    import DialogContentText from '@material-ui/core/DialogContentText';
    import DialogTitle from '@material-ui/core/DialogTitle'

    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} >
        <DialogTitle>{"open dialog?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have one massage
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            check
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            ignore
          </Button>
        </DialogActions>
      </Dialog>
     </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyDialog;
