import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Notes from './components/notes';
import Home from './components/home';
import noteForm from './components/addNoteForm';
import './bootstrapminty.css';

class App extends Component {
  render() {
    return (
        <div>
        <header className="App-header">
          <p> Remind me later :) </p>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/notes"} component={Notes}/>
                    <Route exact path={"/notes/new"} component={noteForm}/>
                </Switch>
            </Router>
          </header>
      </div>
    );
  }
}

export default App;

