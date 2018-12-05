import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArtistDisplay from '../ArtistsDisplay/index'
import db from '../Firebase/firebase'
 
class Artists extends Component{
  constructor(){
    super();
    this.state = {
      artists: []
    }
  }
  componentDidMount(){
    this.getArtists();
  }
  componentDidUpdate(){
    console.log(this.state.artists, 'artists')
  }
  getArtists = () => {
    const artistsArray = []
    const artistsRef = db.collection('Artists');
    artistsRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        const {Bio, Fanlink, Image, Instagram, Name} = doc.data();
        artistsArray.push({
          key: doc.id,
          Bio,
          Fanlink,
          Image,
          Instagram, 
          Name
        })
      })
    })
    this.setState({
      artists: artistsArray
    })
  }
  render(){
    return (
      <div>
        <h1>Artists</h1>
        <ArtistDisplay allArtists={this.state.artists}/>
      </div>
    )
  }
}
export default withRouter(Artists);
