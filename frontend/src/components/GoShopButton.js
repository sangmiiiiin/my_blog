import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function GoShopButton() {
  return (
      <Button 
        variant="contained" 
        href="/main" 
        sx={{ 
          backgroundColor: "#000000",
          "&:hover": { backgroundColor: "#FFFFFF" }
        }}
      >
        <Typography
          sx={{
            color: "white",
            "&:hover": { color: "#000000" }
          }}
        >
          Go shopping!
        </Typography>
      </Button>
  );
}
