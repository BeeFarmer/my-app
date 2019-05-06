import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyTemplete  from '../../../templete';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 3,
  },
});

function MySpinner(props) {
  const { classes } = props;
  let output = (<div className={classes.root}>
    <CircularProgress className={classes.progress} />
    <CircularProgress className={classes.progress} color="secondary" />
    <CircularProgress className={classes.progress} />
    <CircularProgress className={classes.progress} color="secondary" />
    <CircularProgress className={classes.progress} />
    <CircularProgress className={classes.progress} color="secondary" />
  </div>
);
  let myName = "Spinner";

  return (
    <div>
    <MyTemplete content = {output} name = {myName}/>
    </div>
  );
}

MySpinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySpinner);
