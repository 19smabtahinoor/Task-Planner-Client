import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import * as React from 'react';

const Calender = ({ value, setValue }) => {

    return (
        <div className="overflow-hidden rounded-xl shadow-xl my-8 bg-white">
            <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ background: '#000' }}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Calender
