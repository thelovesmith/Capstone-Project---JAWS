import React, { Component } from 'react';
//Import components
import Main from './MainContainer/index';
import Header from './Header/index';
import Footer from './Footer/index';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
       <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
