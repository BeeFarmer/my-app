import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import DynamicSideBar from '../nav/sideBar.js'
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import HomeIcon from '../../assets/images/home1.png';
import HomeAction from '../../actions/HeaderAction/headerAction.js';

class Header extends React.Component
{
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
      menu.push(<MenuItem key = {content[i].label}><a href={content[i].link} target="_blank" rel="noopener noreferrer">{content[i].label}</a></MenuItem>);
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
              <span className = "titleColor">Design Reference</span>
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
    anchorEl: state.headerReducer.anchorEl,
    rightContent: state.headerReducer.rightContent
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    showRightMenu: (event) => {dispatch(HomeAction.ShowRightMenu(event))},
    closeRightMenu: () => {dispatch(HomeAction.CloseRightMenu())}
  }
}



export default connect(mapStateToProps,mapDispatchtoProps)(Header);
