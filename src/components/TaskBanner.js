import React from 'react'

export default function TaskBanner( props ) {
    return (
        <>
            <h4 className="bg-primary text-white text-center p-4">
                 {props.userName} app ({props.taskItems.filter(t => !t.done).length} task to do)
            </h4>
        </>
    )
}
