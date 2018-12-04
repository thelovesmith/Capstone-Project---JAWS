import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArtistDisplay from '../ArtistsDisplay/index'
 
class Artists extends Component{
  render(){
    return (
      <div>
        <h1>Artists</h1>
        <ArtistDisplay/>
      </div>
    )
  }
}
export default withRouter(Artists);
