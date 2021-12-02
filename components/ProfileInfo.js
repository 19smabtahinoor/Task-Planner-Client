import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import * as React from 'react';
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiDashboardFill } from 'react-icons/ri';

const ProfileInfo = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    const { data: session } = useSession();

    //sign out function
    const handleClick = (e) => {
        e.preventDefault()
        signOut({
            callbackUrl: "https://an-task-planner.vercel.app/login"
        });
    }

    return (
        <div>
            {session && (
                <>
                    <div className="flex items-center space-x-3 cursor-pointer p-3 box-border" onClick={() => setShowMenu(!showMenu)}>
                        <Image src={session?.user?.image} width={40} height={40} objectFit="contain" className="rounded-full" />
                        <h1 className="select-none primary-font text-gray-600">{session?.user?.name}</h1>
                        <MdOutlineKeyboardArrowDown className="text-3xl text-gray-600" />
                    </div>
                    {/* menus  */}
                    {showMenu && (
                        <>
                            <div className="bg-white rounded-bl rounded-lg shadow-xl p-1 box-border fixed top-24 right-14 w-56">
                                <MenuList>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <RiDashboardFill className="text-lg" />
                                        </ListItemIcon>
                                        <ListItemText className="primary-font text-gray-600">Dashboard</ListItemText>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <FaUser className="text-lg" />
                                        </ListItemIcon>
                                        <ListItemText className="primary-font text-gray-600">Profile</ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={handleClick}>
                                        <ListItemIcon>
                                            <FiLogOut className="text-lg" />
                                        </ListItemIcon>
                                        <ListItemText className="primary-font text-gray-600">Logout</ListItemText>
                                    </MenuItem>
                                </MenuList>
                            </div>
                        </>
                    )}
                </>
            )}

        </div>
    )
}

export default ProfileInfo
