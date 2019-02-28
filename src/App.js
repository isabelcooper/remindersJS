import React, { Component } from 'react';
import Notes from './components/notes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> In app.js </p>
          <Notes />
        </header>
      </div>
    );
  }
}

export default App;
