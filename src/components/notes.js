import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Notes extends Component {
  constructor(props) {
    super(props);

      this.state = {
//      notes: []
    };
  }

  componentDidMount() {
    // fetch("http://localhost:5000/notes")
    //   .then(response => response.json())
    //   .then(spaces => {
    //     this.setState({ notes: notes });
    //   });
  }
  render() {
    // const { notes } = this.notes;
    return (
<div>  <h2>In notes file</h2></div>
    );
  }
}

export default Notes;
