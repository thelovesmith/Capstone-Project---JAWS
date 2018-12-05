import React, { Component } from 'react';
// import db from '../Firebase/firebase'
import MicrolinkCard from 'react-microlink'

import { Container, Segment, Header, Card, Grid } from 'semantic-ui-react'


class VideoDisplay extends Component {
  
  render(){ 
    const allVideos = this.props.allVideos.map((video) => {
      return(
        
        <Grid.Column key={video.key} divided>
          <Segment  textAlign="center" raised style={{margin: '10px 0px 10px 0px'}}>

          <Header as='h2' attached='top'>{video.Title}</Header>
          <h3>By: {video.Artist}</h3>
          <MicrolinkCard url={video.Link} target='_blank' size='large'/>
          </Segment>
        </Grid.Column>
      ) 
    })
    return(
      <Grid stackable verticalAlign='middle' columns={3} centered>
        <Grid.Row divided>
        {allVideos}
        
        </Grid.Row>
      </Grid>
    )
  }
}
export default VideoDisplay;