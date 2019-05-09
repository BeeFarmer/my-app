import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit*3,
    padding: theme.spacing.unit*2,
    flexGrow: 1
  },
});

function MyMessageBar(props) {
  const { classes } = props;

  let output = (<div>
    <SnackbarContent className={classes.snackbar} message="I love snacks." action={action} />
    <SnackbarContent
      className={classes.snackbar}
      message={
        'I love candy. I love cookies. I love cupcakes. \
        I love cheesecake. I love chocolate.'
      }
    />
    <SnackbarContent
      className={classes.snackbar}
      message="I love candy. I love cookies. I love cupcakes."
      action={action}
    />
    <SnackbarContent
      className={classes.snackbar}
      message={
        'I love candy. I love cookies. I love cupcakes. \
        I love cheesecake. I love chocolate.'
      }
      action={action}
    />
  </div>
  );

  let myName = "Message Bar";

  let string = `

    import SnackbarContent from '@material-ui/core/SnackbarContent';

    function LongTextSnackbar(props) {

      return (
        <div>
          <SnackbarContent message="I love snacks."  />
            <SnackbarContent message={content 1}/>
            <SnackbarContent message="content 2"/>
        </div>
      );
     }`;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
    </div>
    );

}

MyMessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyMessageBar);
