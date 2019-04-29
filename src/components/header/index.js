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
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

class ButtonAppBar extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      anchorEl: null,
      open : false
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleNavOpen = () =>{
    this.setState({open : !this.state.open});
  };

  handleNavClose = () =>{
    this.setState({open : false});
  };

  render()
  {
    const { classes } = this.props;
    const { anchorEl,open} = this.state;
    return (
      <div className={classes.root}>
        <AppBar >
          <Toolbar>
            <div>
            <ListItem onClick={this.handleNavOpen} >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            </ListItem>
            </div>
            <Typography variant="h6" color="inherit" className={classes.root}>
              News
            </Typography>

            <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu  anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose} getcontentanchorEl = {null}>
              <MenuItem >Profile</MenuItem>
              <MenuItem >My account</MenuItem>
              <MenuItem >Logout</MenuItem>
           </Menu>
          </Toolbar>
        </AppBar>
        <List>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="2" />
          </ListItem>
        </List>
      </Collapse>
        </List>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
