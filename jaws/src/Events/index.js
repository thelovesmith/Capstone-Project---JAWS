import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EventsDisplay from '../EventsDisplay/index'
class Events extends Component {
  render(){
    return(
      <div>
        <h1>
          Events Page
        </h1>
        <EventsDisplay/>
      </div>
    )
  }
}
export default withRouter(Events);