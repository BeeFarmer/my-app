import React, { Component } from 'react';
import Header  from './header';
import SideBar  from './nav';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      open : false
    };
  }

  handleNavOpen = () =>{
    this.setState({open : !this.state.open});
  };

  render()
  {
    return(
      <div className= 'App' >
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.state.open}/>
      </div>
    );
  }
}

export default App;
