import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import FormModal from './FormModal';

const SideBarMenu = ({value}) => {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
       <>
            <div className="bg-white shadow-xl rounded-lg p-4 box-border flex items-center justify-between cursor-pointer" onClick={handleClickOpen}>
            <span className="font-semibold primary-font">Create New Task</span>
            <AiOutlinePlus className="text-white bg-blue-500 font-semibold p-1 w-8 h-8 rounded-full" />
        </div>
            <FormModal open={open} setOpen={setOpen} value={value} />
       </>
    )
}

export default SideBarMenu
