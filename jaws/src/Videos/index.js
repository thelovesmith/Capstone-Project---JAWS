import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import VideoDisplay from '../VideosDisplay/index'

class Videos extends Component {
  render(){
    return(
      <div>
        <h1>Videos</h1>
        <VideoDisplay/>
      </div>
    )
  }
}

export default withRouter(Videos);