import React, { Component } from 'react';
import MicrolinkCard from 'react-microlink';
import { Container, Segment, Header, Card, Grid, Image, Divider, Icon} from 'semantic-ui-react';


class ArtistDisplay extends Component {
  render(){
    const allArtists = this.props.allArtists.map((artist) => {
      return (
        
        <Grid.Row  key={artist.key} columns={3} style={{ margin: '5px', backgroundImage:'linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)'}}> 
          <Grid.Column width={4}>
          <Image src={artist.Image}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h2' style={{color: 'orange'}}>{artist.Name}</Header>
            {artist.Bio}
          </Grid.Column >
          <Grid.Column width={4}>
            <MicrolinkCard url={artist.Instagram} />
            <Divider/>
            <MicrolinkCard url={artist.Fanlink}/>
          </Grid.Column>
        </Grid.Row>
        
        
      )
    })
    return (
      <Grid divided centered stackable container style={{paddingBottom: '25px'}} >  
        {allArtists}

      </Grid>
    )
  }
}
export default ArtistDisplay;