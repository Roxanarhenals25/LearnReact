import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Roxana', 'Default description', false, LEVELS.NORMAL);

    const [tasks, setTask] = useState(defaultTask);
    // const [loading, setLoagind ] = setLoagind(false);

    useEffect(() => {
        console.log('Task State has been modified');
        // setLoagind(false);

        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('Estado completado de la tarea');
    }

    return (
        <div>
            <div className='col-12'> 
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>        
        </div>
    );
}

export default TaskListComponent;