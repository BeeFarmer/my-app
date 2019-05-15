import React from 'react';
import Avatar from '@material-ui/core/Avatar';
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
import List from '@material-ui/core/List';
import DynamicSideBar from '../nav/sideBar.js'
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import HomeIcon from '../../assets/images/home1.png';

class Header extends React.Component
{

  constructor(props)
  {
    super(props);
  }

  handleClick = (event) => {
    this.props.showRightMenu(event);
  };

  handleClose = () => {
    this.props.closeRightMenu();
  };

  loopMenu(content)
  {
    let menu = [];
    for( let i in content)
    {
      menu.push(<MenuItem ><a href={content[i].link} target="_blank">{content[i].label}</a></MenuItem>);
    }
    return(
      <div>
        {menu}
      </div>
    )
  }

  render()
  {
    const { anchorEl } = this.props;
    const { rightContent } = this.props;
    let output = this.loopMenu(rightContent);
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

            <div className = "home-icon">
              <NavLink to="/">
                <Avatar src = {HomeIcon} />
              </NavLink>
            </div>

            <Typography variant="h6" className = "grow">
              <h1 className = "titleColor">Design Reference</h1>
            </Typography>

            <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu  className="rightMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              {output}
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

const mapStateToProps = (state) =>{
  return{
    anchorEl: state.anchorEl,
    rightContent: state.rightContent
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    showRightMenu: (event) => {dispatch({type: 'Show_Right_Menu', event: event})},
    closeRightMenu: () => {dispatch({type: 'Close_Right_Menu'})}
  }
}



export default connect(mapStateToProps,mapDispatchtoProps)(Header);
