import React from 'react';
import * as Icons from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';


class MyIconography extends React.Component
{

  renderOneIcon(icon)
  {
    let MyIcon = icon;
    return(

        <li className = "one-icon-display"><MyIcon / ></li>

    );
  }

  render()
  {
    let output = [];
    for(let oneIcon in Icons)
    {
      output.push(this.renderOneIcon(Icons[oneIcon]));
    }
    let myName = "Icons";
    return(
      <div>
        <Paper className = "icon-paper" elevation = {20}>
          <ul className = "icons-display">{output}</ul>
        </Paper>
      </div>
    );
  }

}

export default MyIconography;
