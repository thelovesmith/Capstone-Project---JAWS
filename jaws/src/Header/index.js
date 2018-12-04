import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <div>
        
        <Link to='/home'>Home</Link>
        <br/>
        <Link to='/aboutus'>About Us</Link>
        <br/>
        <Link to='/artists'>Artists</Link>
        <br/>
        <Link to='/videos'>Videos</Link>
        <br/>
        <Link to='/events'>Events</Link>
        <br/>
        <Link to='/'>store</Link>
      </div>
    )
  }
}

export default Header;