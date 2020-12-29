import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import Forma from "./Forma";
import "./custom.css";

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [],
            tasks: [],
            newTask: ""
        };
        this.url = "http://127.0.0.1:8000/";

        this.getTabs();
        this.getTasks();

        this.handlerClick = this.handlerClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    getShownTab() {
        let tabs = this.state.tabs;
        let shownTab = 0;

        for (const tab of tabs) {
            if (tab.isShown) {
                shownTab = tab;
                return shownTab;
            }
        }
    }

    showTasks() {
        let shownTab = this.getShownTab();
        if (!shownTab) return "Cekirajte neki od tabova iznad!!";
        return this.state.tasks.map(task => {
            if (task.id_tab == shownTab.id_tab) {
                return (
                    <div
                        className={
                            task.done == 1
                                ? "finished row border"
                                : "not-finished  row border"
                        }
                    >
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
                            <button
                                onClick={() => this.deleteTask(task.id_task)}
                                className="btn btn-sm btn-danger"
                            >
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

    deleteTask(id) {
        axios
            .delete(this.url + "todos/tasks/delete-task?id_task=" + id)
            .then(res => {});
    }

    handlerClick(id) {
        this.showTab(id);
    }

    handleSubmit(title) {
        console.log(title);
        let shownTab = this.getShownTab();
        let id_tab = shownTab.id_tab;
        axios
            .post(this.url + "todos/tasks/create-task", {
                title: title,
                id_tab: id_tab
            })
            .then(res => {});
    }

    render() {
        return (
            <div className="container">
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
                <br></br>
                <div id="mainDiv">
                    <div className="row border border-secondary table-head">
                        <div className="col">
                            <b> Naziv taska</b>
                        </div>
                        <div className="col">
                            <b>Uradi</b>
                        </div>
                        <div className="col">
                            <b>Izbrisi</b>
                        </div>
                        <div className="col">
                            <b>Napravljen</b>
                        </div>
                        <div className="col">
                            <b>Zavrsen:</b>
                        </div>
                    </div>
                    {this.showTasks()}
                </div>

                <div id="formaDodajTask">
                    <Forma addTask={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

if (document.getElementById("todos")) {
    ReactDOM.render(<Todos />, document.getElementById("todos"));
}
