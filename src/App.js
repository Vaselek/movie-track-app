import React, { Component } from 'react';
import './App.css';
import MovieTracker from "./containers/MovieTracker/MovieTracker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieTracker/>
      </div>
    );
  }
}

export default App;
