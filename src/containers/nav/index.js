import React from 'react';
import PropTypes from 'prop-types';
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
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';




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
      <MenuList component="nav">
        <ListItem button component = {Link} to = "/list1">
          <ListItemIcon >
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="list1" />
        </ListItem>

        <Divider />

        <ListItem button button component = {Link} to = "/list2">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="list2" />
        </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="list3" />
      </ListItem>

      <Divider />

      <ListItem button onClick={this.showDeleteList}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText inset primary="list4" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

        <div>
        <List>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>

            <List>
              <ListItem>
                list4.1
              </ListItem>
              <Divider />
              <ListItem>
                list4.2
              </ListItem>
            </List>

        </Collapse>
        </List>
        </div>

      </MenuList>
    </div>
    );
  }
}


export default SideBar;
