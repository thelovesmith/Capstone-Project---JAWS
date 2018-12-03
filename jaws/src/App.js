import React, { Component } from 'react';
//Import components
import Main from './MainContainer/index';
import Header from './Header/index';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
       <Main/>
      </div>
    );
  }
}

export default App;
