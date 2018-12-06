import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EventsDisplay from '../EventsDisplay/index';
import db from '../Firebase/firebase';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components'

const headStyle = { fontFamily: 'Bungee', color: '#FFBA36', textShadow: '1px 1px 9px #AC27F2', textAlign: 'center', fontSize: '50px', marginTop: '20px' }

const Content = styled.div`
background-image: url(https://res.cloudinary.com/averydante/image/upload/v1543898118/Jaws/space_imagw.jpg);
background-size: cover;
background-repeat: no-repeat;
height: 100%;
`

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
      <Content >
        <Header style={headStyle}>
          Upcoming <br/>Events
        </Header>
        <EventsDisplay allEvents={this.state.events}/>
      </Content>
    )
  }
}
export default withRouter(Events);