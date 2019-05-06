import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Header  from './header';
import SideBar  from './nav';
import Color from '../components/contentlist/Colors/colors.js';
import Iconography from '../components/contentlist/Iconography/iconograpy.js';
import Home from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';
import Footer from './footer/footer.js';



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
             <div className = "content">
             <Switch>
               <Route path = "/" component = {Home}  exact/>
               <Route path = "/my-app" component = {Home} exact/>
               <Route path = "/colors" component = {Color}/>
               <Route path = "/icons" component = {Iconography}/>
               <Route  component = {Error}/>
             </Switch>
             </div>

             <div className = "footer-position">
               <Footer />
             </div>

         </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
