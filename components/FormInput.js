import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import TimePick from './TimePick';

const FormInput = ({value}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div className="flex flex-col space-y-3">
            {/* title  */}
            <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                variant="outlined"
                className="w-96"
            />
            {/* description  */}
            <textarea
                placeholder="Write Some Description"
                id="description"
                label="Description"
                type="text"
                className="w-96 h-36 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500 resize-none p-3 hover:border-gray-500 hover:border-1"
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
            <TimePick />

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

        </div>
    )
}

export default FormInput
