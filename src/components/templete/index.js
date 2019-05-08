import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../'


class MyTemplete extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      value : 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };



  render() {
    const { value } = this.state;

    return (
      <div>
        <Paper className="paper" elevation = {20}>
          <AppBar position="static" className="templete-appbar">
            <div className = "tab-content">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label={this.props.name}/>
              <Tab label="Sample Usage" />
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

export default MyTemplete;
