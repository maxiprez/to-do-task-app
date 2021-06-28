import React,{useState} from 'react';
import '../assets/css/styles.css';

export default function TaskCreator(props) {

    const [newTaskName, setNewTaskName] = useState('') 

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        //console.log(newTaskName);
        props.callBack(newTaskName);
        setNewTaskName('');
    }

    return (
        <div className="my-1 text-center task-creator-container">
            <div className="form-group">
                <input className="form-control input-control"
                placeholder="Type a task..."
                type="text" 
                value={newTaskName} 
                onChange={updateNewTaskValue}
                />
            </div>
            

        {/* Mientras no haya nada en el input, el botón estará desactivado*/}

             {
                newTaskName === '' ?
                <div className="form-group">
                    <button className="btn-primary form-control" onClick={createNewTask} disabled>
                        Add Task
                     </button> 
                </div>
                 
                    :

                <div className="form-group">
                    <button className="btn-primary form-control" onClick={createNewTask}>
                        Add Task
                    </button>
                </div>
                
             }
        </div>
    )
}
