import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArtistDisplay from '../ArtistsDisplay/index'
import db from '../Firebase/firebase'
import styled from 'styled-components'
 
const Content = styled.div`
margin: 5px;
background-image: url( https://res.cloudinary.com/averydante/image/upload/v1543898168/Jaws/tumblr_n6nlhgSmDr1qzgjfco1_500.gif);
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
`

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
        this.setState({
          artists: artistsArray
        })
      })
    })
    
  }
  render(){
    return (
      <Content>
        <h1>Artists</h1>
        <ArtistDisplay allArtists={this.state.artists}/>
      </Content>
    )
  }
}
export default withRouter(Artists);
