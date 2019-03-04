import React, {Component} from "react";
import { BrowserRouter as Redirect, Router, Link } from "react-router-dom";
import {GoogleLogin} from 'react-google-login';



class Home extends Component {
    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);

        this.state = {
            loggedIn: false
        }
    }

    logIn(event) {
        // console.log("here")
        this.setState({
            loggedIn: true
        });
        // console.log("state set");
        // console.log(this.state)
    }

    render() {
        const {loggedIn} = this.state;
        console.log(loggedIn);

        if (loggedIn === true ) {
            return (
                <div>
                    <h1> Welcome back</h1>
                    <button> <Link to={'/notes'}>See all notes</Link> </button>
                    {/*<button> <Link to={'/notes/new'}>Create new note</Link> </button>*/}
                </div>
                )
        } else {
            return(
            <div>
                <h1>HOME</h1>
                < br/>< br/>
                <GoogleLogin
                    clientId="330538855358-pn7eq4flhlqaobbp99nf5oi6a1js4abe.apps.googleusercontent.com"
                    render={renderProps => (
                        <button onClick={renderProps.onClick}>Log in using your Google account</button>
                    )}
                    // buttonText="Login"
                    onSuccess={this.logIn}
                    // onFailure={responseGoogle}
                />
                {document.getElementById('googleButton')}
            </div>
        )
        }
    }
}

// const responseGoogle = (response) => {
//     response ? this.state = true : this.state = false
// }

export default Home;



