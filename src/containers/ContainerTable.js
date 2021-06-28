import React, {useState, useEffect} from 'react';
import TaskRow from '../components/TaskRow';
import TaskBanner from '../components/TaskBanner';
import TaskCreator from '../components/TaskCreator';
import VisibilityControl from '../components/VisibilityControl';
import '../assets/css/styles.css';


export default function ContainerTable() {
    const [userName, setUserName] = useState("To Do Task");
    const [taskItems, setTaskItems] = useState([
             {name:'Task One', done: false},
             {name:'Task Two', done: false},
             {name:'Task Three', done: true},
             {name:'Task Four', done: false},
             {name:'Task Five', done: false}
          ])
    const [showCompleted, setShowCompleted] = useState(true)
    
    useEffect (() => {
      let data = localStorage.getItem('tasks');
      if(data != null){
        setTaskItems(JSON.parse(data));
      } else{
        setUserName ('Maxi Example')
        setTaskItems([
          {name:'Task One example', done: false},
          {name:'Task Two example', done: false},
          {name:'Task Three example', done: true},
          {name:'Task Four example', done: false},
          {name:'Task Five example', done: false}
                ])
      }
      setShowCompleted(true);
    }, []);
    
    useEffect(()=>{
      localStorage.setItem('tasks', JSON.stringify(taskItems));
    }, [taskItems])
    
        const toggleTask = task => 
          setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))
        
    
        const taskTableRow = (doneValue) => 
        taskItems
        .filter(task => task.done === doneValue)
        .map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} taskItems={taskItems} />
          ))
    
        const createNewTask = taskName => {
          if(!taskItems.find(t => t.name === taskName)){
            setTaskItems([...taskItems, {name: taskName, done: false}])
          }
        }

    return (
        <>
            <TaskBanner userName={userName} taskItems={taskItems} />
            <TaskCreator callBack={createNewTask} />
            {
            taskItems.filter(t => !t.done).length === 0 ?
             <h2 className="text-center p-4">
               Please, enter a new task...
             </h2>
                :
            <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                        </thead>
                        <tbody>
                        {taskTableRow(false)}
                        </tbody>
              </table>
            }
            <div className="bg-secondary-text-white text-center p-2">
                <VisibilityControl 
                isChecked={showCompleted}
                description="Completed task"
                callback={checked => setShowCompleted(checked)}
                />
            </div>
            {
                showCompleted && (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th>Description</th>
                        <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskTableRow(true)}
                    </tbody>
                </table>
                )
             } 
        </>
    )
}
