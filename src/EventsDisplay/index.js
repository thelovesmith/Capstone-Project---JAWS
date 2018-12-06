import React, { Component } from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const cardGroupStyle = {margin: '10px'};

class EventsDisplay extends Component {
  render() {
    const allEvents = this.props.allEvents.map((event) => {
      return ( 
        <Card key={event.key}>
          <Image src={event.Image}/>
          <Card.Content>
            <Card.Header>{event.Title}</Card.Header>
            <Card.Meta> <Icon bordered color='purple'name='location arrow'/> {event.City}</Card.Meta>
            <Card.Meta> <Icon bordered color='orange'name='warehouse'/>  {event.Venue}</Card.Meta>
            <Card.Description>{event.Description}</Card.Description>
            <Card.Description> <Icon bordered color='green' name='money'/>{event.Cover}</Card.Description>
          </Card.Content>
        </Card>
      )
    })
    return (
      <Card.Group style={cardGroupStyle}>
        {allEvents}

      </Card.Group>
    )
  }
}
export default EventsDisplay;