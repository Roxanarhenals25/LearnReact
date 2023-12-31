import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/taskClass";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
const defaultTask = new Task("Roxana", "Description", true, LEVELS.NORMAL);
const defaultTask2 = new Task("Raquel", "Description2", false, LEVELS.URGENT);
const defaultTask3 = new Task(
    "Rhenals",
    "Description3",
    true,
    LEVELS.BLOCKING
);

const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
const [loading, setLoagind] = useState(true);

useEffect(() => {
    console.log("Task State has been modified");
    setLoagind(true);

    return () => {
    console.log("TaskList component is going to unmount");
    };
}, [tasks]);

function completeTask(task) {
    console.log("Complete this task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
}

function removeTask(task) {
    console.log("Complete this task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
}

function addTask(task) {
    console.log("Complete this task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
}

return (
    <div>
    <div className="col-12">
        <div className="card">
        <div className="card-header p-3">
            <h5>Your Tasks:</h5>
        </div>
        <div
            className="card-body"
            style={{ position: "relative", height: "400px" }}
>
            <table>
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => {
                return (
                    <TaskComponent
                    key={index}
                    task={task}
                    complete={completeTask}
                    remove={removeTask}
                    ></TaskComponent>
                );
                })}
            </tbody>
            </table>
        </div>
        </div>
    </div>
    <TaskForm add={addTask}> </TaskForm>
    </div>
);
};

export default TaskListComponent;
