import React from 'react';

export default function VisibilityControl(props) {
    return (
        <>
            <div className="form-check">
                <input
                id="showTasks"
                type="checkbox" 
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
                />
                <label className="show-label" htmlFor="showTasks">
                    Show {props.description}
                </label>
               
            </div>
        </>
    )
}
