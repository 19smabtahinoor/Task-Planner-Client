import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import enLocale from 'date-fns/locale/en-US';
import * as React from 'react';

const TimePick = () => {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
            <div>
                <TimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} className="w-96" />}
                />
            </div>
        </LocalizationProvider>
    )
}

export default TimePick
