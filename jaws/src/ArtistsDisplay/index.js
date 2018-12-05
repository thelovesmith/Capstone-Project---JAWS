import React, { Component } from 'react';
import MicrolinkCard from 'react-microlink';
import { Container, Segment, Header, Card, Grid } from 'semantic-ui-react';


class ArtistDisplay extends Component {
  render() {
    const allArtists = this.props.allArtists.map((artist) => {
      return (
        <Card key={artist.key}> 

        </Card>
      )
    })
    return (
      <div>
        <h2>Single Artist</h2>

      </div>
    )
  }
}
export default ArtistDisplay;