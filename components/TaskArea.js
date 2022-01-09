import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useSession } from "next-auth/client";
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useTask from '../hooks/useTask';
import ProfileInfo from './ProfileInfo';
import TaskCard from './TaskCard';

const TaskArea = ({ value }) => {
    const router = useRouter()
    const {tasks, setTasks} = useTask();
    const [loading, setLoading] = useState(false);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [session]  = useSession();

    useEffect(() => {
        axios.get(`http://localhost:5000/tasks?email=${session?.user?.email}&date=${new Date(value).toLocaleDateString(undefined, options)}`)
            .then(res => {
                setTasks(res.data)
            })
    }, [value, session?.user?.email, tasks])

    // loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [value])

    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold text-gray-700 date-font">{new Date(value).toLocaleDateString(undefined, options)}</h1>
                <ProfileInfo />
            </div>

            <section>
                {loading ? (
                    <div className="flex justify-center items-center mt-24">
                        <CircularProgress />
                    </div>
                ) : (

                    <>
                        {tasks.length === 0 ? (
                            <div className="flex flex-col justify-center items-center mt-24">
                                <h1 className="primary-font text-3xl text-gray-600 text-center mb-8">No Task Added</h1>
                                <Image src="/assets/nodata.png" width={500} height={400} objectFit="contain" className="rounded-lg" />
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
                                    {tasks?.map((item) => {
                                        return (
                                            <>
                                                <TaskCard key={item._id} {...item} />
                                            </>
                                        )
                                    })}
                                </div>
                            </>
                        )}
                    </>
                )}

            </section>
        </div>
    )
}

export default TaskArea
