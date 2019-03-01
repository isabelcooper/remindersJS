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
           <div><h2>In notes file</h2>
               <p>
                   {notes.map(eachNote => {
                       return(
                           <p>string leading to {eachNote.header}</p>
                       )
                   })}

               </p>
           </div>
       );

  }
}

export default Notes;
