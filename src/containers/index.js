import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import "../../node_modules/react-vis/dist/style.css";
import Header  from './header';
import Color from '../components/contentlist/Colors/colors.js';
import Iconography from '../components/contentlist/Iconography/iconograpy.js';
import Home from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';
import Footer from './footer/footer.js';
import Buttons from '../components/contentlist/Components/Buttons/buttons.js';
import Tables from '../components/contentlist/Components/Tables/tables.js';
import MyTabs from '../components/contentlist/Components/Tabs/tabs.js';
import MySpinner from '../components/contentlist/Components/Spinner/spinner.js';
import MyProgress from '../components/contentlist/Components/Progress/progress.js';
import MyMessageBar from '../components/contentlist/Components/MessageBar/messageBar.js';
import MyDialog from '../components/contentlist/Components/Dialog/dialog.js';
import MyNotification from '../components/contentlist/Components/Notification/notification.js';
import MyLine from '../components/contentlist/Charts/Line/line.js';
import MyBar from '../components/contentlist/Charts/Bar/bar.js';
import MyStackedBar from '../components/contentlist/Charts/StackedBar/stackedBar.js';
import MyArea from '../components/contentlist/Charts/Area/area.js';
import MyPie from '../components/contentlist/Charts/Pie/pie.js';
import MyScatterplot from '../components/contentlist/Charts/Scatterplot/scatterplot.js';


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
               <Route path = "/components/button" component = {Buttons}/>
               <Route path = "/components/table" component = {Tables}/>
               <Route path = "/components/tabs" component = {MyTabs}/>
               <Route path = "/components/spinner" component = {MySpinner}/>
               <Route path = "/components/progress" component = {MyProgress}/>
               <Route path = "/components/messagebar" component = {MyMessageBar}/>
               <Route path = "/components/dialog" component = {MyDialog}/>
               <Route path = "/components/notification" component = {MyNotification}/>
               <Route path = "/charts/line" component = {MyLine}/>
               <Route path = "/charts/bar" component = {MyBar}/>
               <Route path = "/charts/stackbar" component = {MyStackedBar}/>
               <Route path = "/charts/area" component = {MyArea}/>
               <Route path = "/charts/pie" component = {MyPie}/>
               <Route path = "/charts/scatterplot" component = {MyScatterplot}/>
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
