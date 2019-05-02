import React, { Component } from 'react';
import './index.css';
import MapContainer from './components/MapComponent';
import MainContainer from './containers/MainContainer';

// import 'tachyons';
//semantic?

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_API_KEY)
    return (
      <>
        <MainContainer />

      </>
    )
  }
}

export default App;
