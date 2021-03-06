import React, { Component } from 'react'
import SpotifyLogo from '../components/SpotifyLogo'
import Menubar from '../components/MenuBar'
import ContentContainer from './ContentContainer'

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="container" style={{padding: "20px"}}>
        <SpotifyLogo />
        <Menubar />
        <ContentContainer />
      </div>
    )
  }
}

export default App