import TextField from '@mui/material/TextField';
import React from 'react';

const FormInput = () => {
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
                className="w-96 h-36 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500 resize-none p-3"
            ></textarea>
        </div>
    )
}

export default FormInput
