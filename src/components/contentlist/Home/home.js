import React from 'react';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

class MyHome extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
  }
  render() {
    const input = "language: PropTypes.string";
    return (
      <Paper className = "home" elevation = {20} square={true}>
        <div>
        <h1 className = "title">Welcome</h1>
        </div>
        <br/>
        <div className = "text">
          <h1>Welcome to this Material-UI and React introduction website. </h1>
          <br/>
          <h1>Material Design is a design language that Google developed in 2014. Expanding on the "card" motifs that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.</h1>
          <br/>
          <h1>React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies</h1>
        </div>
      </Paper>
    )
  }
}
export default MyHome
