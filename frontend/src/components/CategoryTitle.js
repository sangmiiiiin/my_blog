import React from "react";
import { Box, Typography } from '@mui/material';

const CategoryTitle = ({ title, subTitle }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='h6'>{subTitle}</Typography>
        </Box>
    );
}

export default CategoryTitle;