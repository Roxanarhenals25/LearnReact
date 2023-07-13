import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Roxana', 'Default description', false, LEVELS.NORMAL);

    const [tasks, setTask] = useState(defaultTask);

    useEffect(() => {
        console.log('Task State has been modified');
        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('Estado completado de la tarea');
    }

    return (
        <div>
            <div> 
                <h1>Your Tasks: </h1>
            </div>        
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}



export default TaskListComponent;