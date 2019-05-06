import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import MyTemplete  from '../../../templete';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  progress: {
    padding: theme.spacing.unit * 10,
  },
});

function MyProgress(props) {
  const { classes } = props;
  let output = (<div className={classes.root}>
    <LinearProgress className={classes.progress}/>
    <LinearProgress className={classes.progress} color="secondary" />
    <LinearProgress className={classes.progress}/>
    <LinearProgress className={classes.progress} color="secondary" />
    <LinearProgress className={classes.progress}/>
    <LinearProgress className={classes.progress} color="secondary" />
  </div>
  );
  let myName = "Progress";

  return (
    <div>
    <MyTemplete content = {output} name = {myName}/>
    </div>
  );
}

MyProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProgress);
