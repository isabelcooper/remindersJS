import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Notes from './components/notes';
import Home from './components/home';
import './bootstrapminty.css';

class App extends Component {
  render() {
    return (
        <div>
        <header className="App-header">
          <p> In app.js </p>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/notes"} component={Notes}/>
                </Switch>
            </Router>
          </header>
      </div>
    );
  }
}

export default App;

