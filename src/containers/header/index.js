import React from 'react';
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
import Collapse from '@material-ui/core/Collapse';


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
        <AppBar>

          <Toolbar>
            <div>
            <ListItem button onClick={()=>{this.props.SideBarOpen()}} >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
            </ListItem>
            </div>

            <Typography variant="h6" color="inherit" className = "grow">
              News
            </Typography>

            <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu  anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              <MenuItem ><a href="http://stylus-lang.com/" target="_blank">Stylus</a></MenuItem>
              <MenuItem ><a href="https://material-ui.com/" target="_blank">Material-UI</a></MenuItem>
              <MenuItem ><a href="https://reactjs.org/" target="_blank">React</a></MenuItem>
           </Menu>

          </Toolbar>

        </AppBar>


        <div >
        <List>
          <Collapse in={this.props.listOpenState} timeout="auto" unmountOnExit>
            <div className="list">
            <List component="div">
              <SideBar/>
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
