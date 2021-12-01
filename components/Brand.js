import Image from 'next/Image'
import React from 'react'

const Brand = () => {
    return (
        <div className="flex items-center space-x-3">
            <Image src="/assets/logo.png" alt="logo" width={45} height={45} objectFit="contain" />
            <h1 className="logo-font text-2xl font-semibold">Task Planner</h1>
        </div>
    )
}

export default Brand
