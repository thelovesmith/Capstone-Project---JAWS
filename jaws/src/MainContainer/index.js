import React, { Component } from 'react';

//Import modules
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

//Import Components 
import Landing from '../LandingPage/index';
import Home from '../HomePage/index';
import About from '../About/index';
import Artists from '../Artists/index';
import Videos from '../Videos/index';
import Events from '../Events/index';
class Main extends Component {

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/home' component={Home}/>    
          <Route exact path='/aboutus' component={About} />
          <Route exact path='/artists' component={Artists}/>
          <Route exact path='/videos' component={Videos}/>
          <Route exact path='/events' component={Events}/>
          
        </Switch>
      </div>
    )
  }
}
export default withRouter(Main);