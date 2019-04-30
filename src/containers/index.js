import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Header  from './header';
import SideBar  from './nav';
import List1 from '../components/contentlist/List1/list1.js';
import List2 from '../components/contentlist/List2/list2.js';
import Home from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';



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
       <BrowserRouter>
      <div className= 'App' >
         <div>
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.state.open}/>
         </div>

         <div className = {this.state.open ? "move-right" : "default"}>

             <Switch>
               <Route path = "/" component = {Home} exact/>
               <Route path = "/list1" component = {List1}/>
               <Route path = "/list2" component = {List2}/>
               <Route  component = {Error}/>
             </Switch>

         </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
