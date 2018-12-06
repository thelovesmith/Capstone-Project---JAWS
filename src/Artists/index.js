import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArtistDisplay from '../ArtistsDisplay/index';
import db from '../Firebase/firebase';
import styled from 'styled-components';
 
const headStyle = { fontFamily: 'Bungee', color: '#FFBA36', textShadow: '1px 1px 9px #AC27F2', textAlign: 'center', fontSize: '50px', marginTop: '20px' }

const Content = styled.div`
background-image: url( https://media.giphy.com/media/l0MYDdL8WEgSXf41W/giphy.gif);
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
`
const Header = styled.h1`
font-size: 50px;
text-align: center;
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
        <Header style={headStyle}>Artists</Header>
        <ArtistDisplay allArtists={this.state.artists}/>
      </Content>
    )
  }
}
export default withRouter(Artists);
