import React from 'react';

const TaskArea = ({value}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="">
            <h1 className="text-3xl font-semibold text-gray-700 date-font">{new Date(value).toLocaleDateString(undefined, options)}</h1>
        </div>
    )
}

export default TaskArea
