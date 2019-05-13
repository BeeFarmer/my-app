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
import Data from "./data.js";
import * as Icons from '@material-ui/icons';
import {connect} from 'react-redux';

class DynamicSideBar extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  openSubList(oneState){
    this.props.showSublist(oneState);
  }

  renderNavItem(node)
  {
    const MyIcon = Icons[node.icon];
    if(node.subNavItems)
    {
      let listItems = this.loopSubItems(node.subNavItems)
      return(
        <div>
          <ListItem button onClick={()=>{this.openSubList(node.label)}} key = {node.label}>
            <ListItemIcon>
              <MyIcon />
            </ListItemIcon>
            <ListItemText inset primary={node.label} />
            {this.props.state[node.label]?<Icons.ExpandLess/> : <Icons.ExpandMore/>}
            {console.log(this.props.state[node.label])}
          </ListItem>
          <Divider />
          <Collapse in={this.props.state[node.label]} timeout="auto" unmountOnExit>
          <List component="div">
           {listItems}
          </List>
          </Collapse>

        </div>
      );
    }
    else
    {
      return(
        <div>
        <ListItem button component = {Link} to = {node.url} key = {node.label}>
          <ListItemIcon>
            <MyIcon />
          </ListItemIcon>
          <ListItemText primary={node.label} />
        </ListItem>
        <Divider />
        </div>
      );
    }

  }

  listLoop(list)
  {
    let output = [];
    for(let i in list)
    {
      output.push(this.renderNavItem(list[i]));
    }
    return(
      <div>
      {output}
      </div>
    )
  }

  loopSubItems(list)
  {
    let listItems = []
    for(let i in list)
      {
        listItems.push(this.renderNavItem(list[i]));
      }
    return listItems;
  }
  render()
  {
    const { data } = this.props;
    return(
      <div>

        {this.listLoop(data)}

      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    data: state.data,
    state: state
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    showSublist: (oneState) => {dispatch({type: 'Show_Sublist', oneState: oneState})},
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(DynamicSideBar);
