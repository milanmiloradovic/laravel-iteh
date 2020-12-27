import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: []
        };
        this.url = "http://127.0.0.1:8000/";

        this.getTabs();
    }

    getTabs() {
        axios.get(this.url + "todos/tabs/get-tabs").then(res => {
            const tabs = res.data.tabs;
            this.setState({ tabs });
            this.getTasks();
        });
    }

    getTasks() {
        let tabs = [];
        this.state.tabs.map(tab => {
            axios
                .get(this.url + "todos/tasks/get-tasks-id?id_tab=" + tab.id_tab)
                .then(res => {
                    const tasks = res.data.tasks;
                    tab.tasks = tasks;
                });
            tabs.push(tab);
        });
        this.setState({ tabs: tabs });
        console.log(this.state);
    }

    showTasks() {
        const tab = this.state.tabs.filter(tab => tab.isShown == 1);
        if (!tab.tasks) return "";
        tab.tasks.map(task => {
            return (
                <tr>
                    <th scope="row">{task.title}</th>
                </tr>
            );
        });
    }

    showTab(id) {
        axios
            .put(this.url + "todos/tabs/show-tab", {
                id_tab: id
            })
            .then(res => {
                console.log(res.data);
            });
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {this.state.tabs.map(tab => {
                                let id = tab.id_tab;
                                return (
                                    <th
                                        onClick={id => this.showTab(id)}
                                        scope="col"
                                    >
                                        {tab.title}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>{this.showTasks()}</tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("todos")) {
    ReactDOM.render(<Todos />, document.getElementById("todos"));
}
