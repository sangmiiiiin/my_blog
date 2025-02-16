import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';

export default function Calendar() {
  return (
    <Box display="inline-block">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Box>
  );
}

