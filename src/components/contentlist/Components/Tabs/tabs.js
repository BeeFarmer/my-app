import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing.unit * 3,
  },
});

class MyTabs extends React.Component {
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

  renderTabs()
  {
    const {classes} = this.props;
    const { value } = this.state;
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
    );
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    let output = this.renderTabs();
    let myName = "Tabs";
    let string = `
    import AppBar from '@material-ui/core/AppBar';
    import Tabs from '@material-ui/core/Tabs';
    import Tab from '@material-ui/core/Tab';
    <div >
      <AppBar >
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

    return (
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

MyTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTabs);
