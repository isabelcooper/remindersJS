import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Notes from './components/notes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> In app.js </p>
            <Router>
                <div>
                <Switch>
                    <Route path={"/notes"} component={Notes}/>
                </Switch>
                <button > <Link to={`/notes`}>Click Me</Link></button>
                </div>
            </Router>
        </header>
      </div>
    );
  }
}

export default App;

