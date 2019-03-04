import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5432/notes`)
      .then(response => response.json())
      .then(notes => {
        this.setState({ notes: notes });
      });
  }
  render() {
     const { notes } = this.state;
     return (
           <div><h2>All notes: </h2>
               <p>
                   {notes.map(eachNote => {
                       return(
                           <div className="card text-white bg-primary mb-3" >
                           <div className="card-header">Due: {eachNote.date}</div>
                               <div className="card-body">
                                   <h4 className="card-title">{eachNote.header}</h4>
                                   <p className="card-text">{eachNote.body}</p>
                               </div>
                           </div>
                       )
                   })}
               </p>
           </div>
       );
  }
}

export default Notes;
