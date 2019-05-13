import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import "../../node_modules/react-vis/dist/style.css";
import Header  from './header';
import MyColor from '../components/contentlist/Colors/colors.js';
import MyIconography from '../components/contentlist/Iconography/iconograpy.js';
import MyHome from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';
import Footer from './footer/footer.js';
import MyButtons from '../components/contentlist/Components/Buttons/buttons.js';
import MyTables from '../components/contentlist/Components/Tables/tables.js';
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
import MyAvatar from '../components/contentlist/Components/Avatar/avatar.js';
import MyMarkdown from '../components/contentlist/Components/Markdown/markdown.js';
import Data from "./nav/data.js";
import {connect} from 'react-redux';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

  }

  handleNavOpen = () =>{
    this.props.leftMenuOpen();
  };

  renderOneRouter(node)
  {
    console.log(node);
    if(node.subNavItems)
    {
      return this.renderOneRouter(node.subNavItems);
    }
    else
    {
      if(node.url = "/")
      {
        return(
          <div>
          <Route path = {node.url} component = {node.component}  exact/>
          <Route path = "/MyApp" component = {node.component}  exact/>
          </div>
        );
      }
      else
      {
        return(
          <Route path = {node.url} component = {node.component}/>
        );
      }
    }
  }

  routerLoop(routers)
  {
    let output = [];
    for(let i = 0; i < routers.length; i++)
    {
      output.push(this.renderOneRouter(routers[i]));
    }
    return output;
  }
  render()
  {
    return(
       <HashRouter basename='/'>
      <div className= 'App' >
         <div>
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.props.leftOpen}/>
         </div>

         <div className = {this.props.leftOpen ? "move-right" : "default"}>
             <div className = "content">
             <Switch>
               <Route path = "/" component = {MyHome}  exact/>
               <Route path = "/my-app" component = {MyHome} exact/>
               <Route path = "/colors" component = {MyColor}/>
               <Route path = "/icons" component = {MyIconography}/>
               <Route path = "/components/button" component = {MyButtons}/>
               <Route path = "/components/table" component = {MyTables}/>
               <Route path = "/components/tabs" component = {MyTabs}/>
               <Route path = "/components/spinner" component = {MySpinner}/>
               <Route path = "/components/progress" component = {MyProgress}/>
               <Route path = "/components/messagebar" component = {MyMessageBar}/>
               <Route path = "/components/dialog" component = {MyDialog}/>
               <Route path = "/components/notification" component = {MyNotification}/>
               <Route path = "/components/avatar" component = {MyAvatar}/>
               <Route path = "/components/markdown" component = {MyMarkdown}/>
               <Route path = "/charts/line" component = {MyLine}/>
               <Route path = "/charts/bar" component = {MyBar}/>
               <Route path = "/charts/stackbar" component = {MyStackedBar}/>
               <Route path = "/charts/area" component = {MyArea}/>
               <Route path = "/charts/pie" component = {MyPie}/>
               <Route path = "/charts/scatterplot" component = {MyScatterplot}/>
               <Route  component = {Error}/>
             </Switch>
             </div>
         </div>
         <div className = "footer-position">
           <Footer />
         </div>
      </div>
      </HashRouter>

    );
  }
}
const mapStateToProps = (state) =>{
  return{
    leftOpen: state.leftOpen
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    leftMenuOpen: () => {dispatch({type: 'Show_Left_Menu'})}
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
