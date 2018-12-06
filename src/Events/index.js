import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EventsDisplay from '../EventsDisplay/index';
import db from '../Firebase/firebase';
import { Container, Header } from 'semantic-ui-react';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }
  componentDidMount(){
    this.getEvents();
  }
  getEvents = () => {
    const eventsArray = [];
    const eventsRef = db.collection('Events');
    eventsRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        const {City, Cover, Description, Image, Title, Venue} = doc.data();
        eventsArray.push({
          key: doc.id,
          City,
          Cover,
          Description,
          Image,
          Title,
          Venue
        })
        this.setState({
          events: eventsArray
        })
      })
    })
  }
  render(){
    return(
      <Container >
        <Header>
          Events Page
        </Header>
        <EventsDisplay allEvents={this.state.events}/>
      </Container>
    )
  }
}
export default withRouter(Events);