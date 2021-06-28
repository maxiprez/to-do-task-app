import React from 'react';
import '../assets/css/styles.css';

export default function TaskRow( props )  {
    return (
        <>
         
             
            <tr key={props.task.name}>
                <td>
                    <label htmlFor={props.task.name}>
                        {props.task.name}
                    </label>
                </td>
                <td>
                    <input type="checkbox"
                     className="option-input checkbox"
                     id={props.task.name}
                     checked={props.task.done} 
                     onChange={() => props.toggleTask(props.task)}
                     />
                </td>
            </tr>

          
        </>
    )
}
