import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';




class SideBar extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state={
      open : false
    }
  }

  showDeleteList = () =>{
    this.setState({open : !this.state.open});
  }

  render()
  {
    const {open} = this.state;
    return(
      <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>

      <Divider />

      <ListItem button onClick={this.showDeleteList}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText inset primary="Delete" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

        <div className = "ListItem">
        <List>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>

            <List>
              <ListItem>
                Recycle Bin
              </ListItem>
              <Divider />
              <ListItem>
                Spam
              </ListItem>
            </List>

        </Collapse>
        </List>
        </div>

      </List>
    </div>
    );
  }
}


export default SideBar;
