import React, {Component} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class noteForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Add Note Form</h1>
                <form>
                    Task: <input type={"text"} name ={"task"} required><br />
                    Details: <input type={"text"} name ={"details"}><br />
                    Due: <input type={"date"} name ={"duedate"}><br />
                    Reminders: <br />
                    1 day before: <input type={"checkbox"} name ={"r1"}><br />
                    7 days before: <input type={"checkbox"} name ={"r7"}><br />
                    30 days before: <input type={"checkbox"} name ={"r30"}><br />
                    <input type={"submit"}>
                </form>

                <form>
                    <fieldset>
                        <legend>Add a note:</legend>

                        <div className="form-group">
                            <label htmlFor="exampleTextarea">Task</label>
                            <textarea className="form-control" id="exampleTextarea" rows="1"required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea">Details</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <fieldset className={"form-group"}>
                            <div className="form-group">
                                <label htmlFor="exampleTextarea">Date</label>
                                <input type="date" className="form-control" id="exampleInputEmail1">
                            </div>
                        </fieldset>
                        <fieldset className="form-group">
                            <legend>Reminders:</legend>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" checked="">
                                        1 day before
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" >
                                        7 days before
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="">
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

export default Home;




