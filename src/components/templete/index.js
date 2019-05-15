import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';


class MyTemplete extends React.Component
{
  handleChange = (event, value) => {
    this.props.switchTabs(event, value);
  };



  render() {
    const { value } = this.props;

    return (
      <div className = "root">
        <Paper className="paper" elevation = {20}>
          <AppBar position="static" className="templete-appbar">
            <div className = "tab-content">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label={this.props.name}/>
              <Tab label="Usage" />
            </Tabs>
            </div>
          </AppBar>
          {value === 0 && this.props.content}
          {value === 1 && this.props.sampleUsage}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    value: state.value
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    switchTabs: (event, value) => {dispatch({type: 'Switch_Tabs', event: event, value: value})},
  }
}



export default connect(mapStateToProps,mapDispatchtoProps)(MyTemplete);
