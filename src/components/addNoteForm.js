import React, {Component} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class noteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            date:Date.now(),
            task: "",
            details: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logChange = this.logChange.bind(this);

    }
    logChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            date: this.state.date,
            task: this.state.task,
            details: this.state.details
        };
        console.log(data);
    }

    render() {
        return(
            <div>
                <h1>What should we remind you about?</h1>

                <form onSubmit={this.handleSubmit} method="POST">
                <fieldset>
                <legend>Add your note:</legend>

                <div className="form-group">
                <label htmlFor="exampleTextarea">Task</label>
                <textarea className="form-control" name="task" id="exampleTextarea" rows="1" onChange={this.logChange} required ></textarea>
                </div>
                <div className="form-group">
                <label htmlFor="exampleTextarea">Details</label>
                <textarea className="form-control" name="details"  id="exampleTextarea" rows="3" onChange={this.logChange}></textarea>
                </div>
                <fieldset className={"form-group"}>
                <div className="form-group">
                <label htmlFor="exampleTextarea">Date</label>
                <input type="date" className="form-control" id="exampleInputEmail1" name="date" onChange={this.logChange}/>
                </div>
                </fieldset>
                <fieldset className="form-group">
                <legend>Reminders:</legend>
                <div className="form-check">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value="" checked="" onChange={this.logChange}/>
                1 day before
                </label>
                </div>
                <div className="form-check disabled">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value="" onChange={this.logChange} />
                7 days before
                </label>
                </div>
                <div className="form-check disabled">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value="" onChange={this.logChange}/>
                30 days before
                </label>
                </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
                </form>

            </div>
        )
    }
}

export default noteForm;




