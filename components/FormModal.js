import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
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
                <DialogTitle className="text-center">Add A New Task</DialogTitle>
                <DialogContent>
                    <FormInput value={value} handleClose={handleClose} />
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FormModal
