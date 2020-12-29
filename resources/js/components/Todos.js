import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import "./custom.css";

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [],
            tasks: []
        };
        this.url = "http://127.0.0.1:8000/";

        this.getTabs();
        this.getTasks();

        this.handlerClick = this.handlerClick.bind(this);
        this.showTasks = this.showTasks.bind(this);
    }

    getTabs() {
        axios.get(this.url + "todos/tabs/get-tabs").then(res => {
            const tabs = res.data.tabs;
            this.setState({ tabs });
        });
    }

    getTasks() {
        axios.get(this.url + "todos/tasks/get-tasks").then(res => {
            const tasks = res.data.tasks;
            this.setState({ tasks: tasks });
        });
    }

    showTasks() {
        let tabs = this.state.tabs;
        let shownTab = 0;

        for (const tab of tabs) {
            if (tab.isShown) {
                shownTab = tab;
                break;
            }
        }

        return this.state.tasks.map(task => {
            console.log(this.state.tasks, "tasks");
            if (task.id_tab == shownTab.id_tab) {
                return (
                    <div className="row border">
                        <div className="col">{task.title}</div>
                        <div className="col">
                            <button
                                className="btn btn-sm btn-success"
                                onClick={() => this.finishTask(task.id_task)}
                            >
                                FINISH
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm btn-danger">
                                DELETE
                            </button>
                        </div>
                        <div className="col">
                            {task.creation_date ? task.creation_date : "null"}
                        </div>
                        <div className="col">
                            {task.finished_date ? task.finished_date : "null"}
                        </div>
                    </div>
                );
            }
        });
    }

    showTab(id) {
        axios
            .put(this.url + "todos/tabs/show-tab", {
                id_tab: id
            })
            .then(res => {});
        let tabs = this.state.tabs.map(tab => {
            if (tab.id_tab == id) tab.isShown = 1;
            else tab.isShown = 0;
            return tab;
        });
        this.setState({ tabs: tabs });
    }
    finishTask(id) {
        axios
            .put(this.url + "todos/tasks/done-task", {
                id_task: id,
                done: 1
            })
            .then(res => {});
    }

    handlerClick(id) {
        console.log(id);
        this.showTab(id);
    }

    render() {
        return (
            <div id="mainDiv" className="container">
                <div className="row">
                    {this.state.tabs.map(tab => {
                        let id = tab.id_tab;
                        return (
                            <Tab
                                parentHandlerClick={this.handlerClick}
                                key={id}
                                tab={tab}
                            />
                        );
                    })}
                </div>
                <div>
                    <div className="row border">
                        <div className="col">Naziv taska</div>
                        <div className="col">Uradi</div>
                        <div className="col">Izbrisi</div>
                        <div className="col">Napravljen</div>
                        <div className="col">Zavrsen:</div>
                    </div>
                    {this.showTasks()}
                </div>
            </div>
        );
    }
}

if (document.getElementById("todos")) {
    ReactDOM.render(<Todos />, document.getElementById("todos"));
}
