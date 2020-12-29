import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: this.props.tab
        };
        this.url = "http://127.0.0.1:8000/";
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            tab: this.props.tab
        });
    }

    handleClick() {
        this.props.parentHandlerClick(this.state.tab.id_tab);
    }

    kompresijaNaziva() {
        if (this.state.tab.isShown) {
            return this.state.tab.title;
        }
        return "tab";
    }

    render() {
        return (
            <div className="col" onClick={this.handleClick}>
                {this.kompresijaNaziva()}{" "}
            </div>
        );
    }
}

if (document.getElementById("tab")) {
    ReactDOM.render(<Tab />, document.getElementById("tab"));
}
