import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import useTask from '../hooks/useTask';
import TimePick from './TimePick';


const FormInput = ({ value, handleClose }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [status, setStatus] = React.useState('Planning todo');
    const [open, setOpen] = React.useState(false);
    const [timeValue, setTimeValue] = React.useState(new Date());
      const [session]  = useSession();
;
    const { register, handleSubmit } = useForm();
    const router = useRouter()
    const { tasks, setTasks } = useTask();

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    //post to database 
    const onSubmit = data => {
        data['status'] = status;
        data['date'] = new Date(value).toLocaleDateString(undefined, options);
        data['time'] = timeValue.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        data['name'] = session?.user?.name;
        data['email'] = session?.user?.email;

        axios.post('https://task-planner-an.herokuapp.com/tasks', data)
            .then(res => {
                if (res) {
                    toast.success('New Task Added!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTasks([...tasks, data]);
                }
            })
    };


    return (
        <>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                {/* title  */}
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    variant="outlined"
                    className="w-96"
                    {...register("title", { required: true })}
                />
                {/* description  */}
                <textarea
                    placeholder="Write Some Description"
                    id="description"
                    label="Description"
                    type="text"
                    className="w-96 h-36 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500 resize-none p-3 hover:border-gray-500 hover:border-1"
                    {...register("description", { required: true })}
                ></textarea>

                {/* Date  */}
                <TextField
                    margin="dense"
                    id="date"
                    label="Date"
                    type="text"
                    variant="outlined"
                    className="w-96"
                    value={new Date(value).toLocaleDateString(undefined, options)}
                />

                {/* time  */}
                <TimePick timeValue={timeValue} setTimeValue={setTimeValue} />

                {/* status  */}
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="status"
                        value={status}
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value="Planning todo">Planning todo</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Done">Done</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" onClick={handleClose} size="large" sx={{ width: '100px', margin: 'auto', marginBottom: '8px' }}>Add</Button>
                <ToastContainer />
            </form>
        </>
    )
}

export default FormInput
