import { signIn, useSession } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const index = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const handleClick = (e) => {
        e.preventDefault()
        signIn(null, { callbackUrl: "https://an-task-planner.vercel.app/" })
    }

    return (
        <div className="flex flex-col justify-center items-center mt-24">
            <h1 className="text-center text-2xl text-gray-500 primary-font">Welcome to <span className="text-3xl text-blue-500 logo-font">Task Planner</span></h1>
            {/* image  */}
            <Image src="/assets/login.png" width={500} height={400} objectFit="contain" />
            {/* button  */}
            <div onClick={handleClick} className="flex items-center space-x-3 border border-gray-100 p-3 rounded-lg box-border cursor-pointer">
                <FcGoogle className="text-3xl" />
                <span className="primary-font text-gray-600">Sign in with Google</span>
            </div>
        </div>
    )
}

export default index
