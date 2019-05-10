import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import SideBar  from '../nav';
import DynamicSideBar from '../nav/sideBar.js'
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';

class Header extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render()
  {

    const { anchorEl} = this.state;
    return (
      <div className = "root">
        <AppBar className="appbar">

          <Toolbar className = "toolbar">
            <div>
            <ListItem button onClick={()=>{this.props.SideBarOpen()}} >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
            </ListItem>
            </div>


            <NavLink to="/"><Avatar
                src="data:image/png;base64,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"
            /></NavLink>

            <Typography variant="h6" className = "grow">
              <h1 className = "titleColor">Design Reference</h1>
            </Typography>

            <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu  anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              <MenuItem ><a href="https://github.com/uber/react-vis" target="_blank">React-Vis</a></MenuItem>
              <MenuItem ><a href="https://material-ui.com/" target="_blank">Material-UI</a></MenuItem>
              <MenuItem ><a href="https://reactjs.org/" target="_blank">React</a></MenuItem>
           </Menu>

          </Toolbar>

        </AppBar>


        <div>
        <List>
          <Collapse in={this.props.listOpenState} timeout="auto" unmountOnExit>
            <div className="list">
            <List component="div">
              <DynamicSideBar/>
            </List>
            </div>
          </Collapse>
        </List>
        </div>
      </div>
    );
  }
}



export default Header;
