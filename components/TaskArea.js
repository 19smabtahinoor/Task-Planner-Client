import { useRouter } from 'next/router';
import React from 'react';
import ProfileInfo from './ProfileInfo';

const TaskArea = ({ value }) => {
    const router = useRouter()

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold text-gray-700 date-font">{new Date(value).toLocaleDateString(undefined, options)}</h1>
                <ProfileInfo />
            </div>
        </div>
    )
}

export default TaskArea
