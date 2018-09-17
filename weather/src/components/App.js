import React, { Component } from 'react'
import '../App.css'
import SearchBar from '../containers/search-bar'

class App extends Component {
  render () {
    return (
      <div>
        Weather App
        <SearchBar />
      </div>
    )
  }
}

export default App
