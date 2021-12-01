import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import FormInput from './FormInput';

const FormModal = ({ open, setOpen, value }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="text-center">Add A Task</DialogTitle>
                <DialogContent>
                    <FormInput value={value} />
                </DialogContent>
                <Button className="w-36 mx-auto mb-6 py-3" variant="contained" onClick={handleClose}>Add</Button>
            </Dialog>
        </div>
    )
}

export default FormModal
