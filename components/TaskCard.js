import { CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FcAlarmClock } from 'react-icons/fc';
import { FiEdit2 } from 'react-icons/fi';

const TaskCard = (props) => {
    const { _id, title, description, status, date, time, name, email } = props;
    const router = useRouter()

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/tasks/${_id}`)
        .then(res => {
            if(res){
                alert('Deleted');
                router.reload(window.location.pathname)
            }
        })
    }

    return (
        <Card sx={{ maxWidth: '100%' }} className="shadow-xl rounded-lg">
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="break-all h-16 overflow-scroll card-desc">
                        {description}
                    </Typography>
                    <div className="flex flex-col items-start space-y-2 mt-3">
                        {/* status  */}
                        <div>
                            <Chip label={status} className={`${status === "Planning todo" ? "bg-yellow-500" : "bg-red-600"} ${status === "Done" && "bg-green-700"} primary-font text-white text-sm`} />
                        </div>
                        {/* time  */}
                        <div className="flex items-center space-x-2">
                            <FcAlarmClock className="text-lg" />
                            <span className="text-gray-600 primary-font">{time}</span>
                        </div>
                        {/* assigned by  */}
                        <div className="flex items-center space-x-2 text-sm">
                            <span>Assigned by</span>
                            <span className="text-blue-500 font-semibold">{name}</span>
                        </div>
                    </div>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <div className="flex items-center space-x-3 p-2">
                    <FiEdit2  className="text-green-500 text-2xl  cursor-pointer" />
                    <AiOutlineDelete className="text-red-500 text-2xl cursor-pointer" onClick={handleDelete} />
                </div>
            </CardActions>
        </Card>
    )
}

export default TaskCard