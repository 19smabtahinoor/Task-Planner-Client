import React from 'react'
import Brand from './Brand'
import Calender from './Calender'
import SideBarMenu from './SideBarMenu'

const SideBar = ({ value, setValue }) => {
    
    return (
        <div>
            <Brand />
            <Calender value={value} setValue={setValue} />
            <SideBarMenu />
        </div>
    )
}

export default SideBar
