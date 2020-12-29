import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Forma extends Component {
    constructor(props) {
        super(props);
        this.state = { newTask: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ newTask: e.target.value });
        console.log(e.target.value);
    }

    addTask(title) {
        console.log(title);
        this.props.addTask(title);
    }

    render() {
        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    this.addTask(this.state.newTask);
                }}
            >
                <input
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    type="text"
                ></input>
                <input className="btn " type="submit"></input>
            </form>
        );
    }
}

if (document.getElementById("forma")) {
    ReactDOM.render(<Forma />, document.getElementById("forma"));
}
