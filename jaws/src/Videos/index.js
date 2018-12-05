import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import db from '../Firebase/firebase'
import VideoDisplay from '../VideosDisplay/index'
import styled from 'styled-components'


const Header = styled.h1`
font-size: 50px;
color: red;
text-align: center;
`
class Videos extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    console.log('mount working ')
    this.getVideos();
  }
  componentDidUpdate() {
    console.log(this.state.videos, 'queried videos')

  }
  getVideos = () => {
    const vids = [];
    var refVideos = db.collection('Videos');
    refVideos.get().then(snapshot => {
      snapshot.forEach(doc => {
        const { Artist, Link, Title } = doc.data();
        vids.push({
          key: doc.id,
          Artist,
          Link,
          Title
        })
        console.log(doc.id, '=>', doc.data(), 'videos');
        this.setState({
          videos: vids
        })
      });
    }).catch(err => {
      console.log('error getting collection', err)
    });

  }
  render(){
    return(
      <div>
        <Header>Videos</Header>
        <VideoDisplay allVideos={this.state.videos}/>
      </div>
    )
  }
}

export default withRouter(Videos);