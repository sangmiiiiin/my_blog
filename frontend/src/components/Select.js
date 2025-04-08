import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

const SizeSelect = () => {
  const [size, setSize] = React.useState('');
  const clothesSize = ['S', 'M', 'L'];

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
      <FormControl sx={{ m: "auto", minWidth: 360 }}>
        <InputLabel id="Size Selector" sx={{ lineHeight: 0.75 }}>Size</InputLabel>
        <Select
          labelId="Size Selector"
          id="Size Selector"
          value={size}
          label="Size"
          onChange={handleChange}
          sx={{ 
            height: 40,
            fontSize: "15px"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>{clothesSize[0]}</MenuItem>
          <MenuItem>{clothesSize[1]}</MenuItem>
          <MenuItem>{clothesSize[2]}</MenuItem>
        </Select>
      </FormControl>
  );
}

const ColorSelect = () => {
  const [color, setColor] = React.useState('');
  const clothesColor = ["black", "white", "pink"];

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };


  return (
      <FormControl sx={{ m: "auto", minWidth: 360 }}>
        <InputLabel id="Color Selector" sx={{ lineHeight: 0.75 }}>Color</InputLabel>
        <Select
          id="Color Selector"
          labelId="Color Selector"
          value={color}
          label="Color"
          onChange={handleColorChange}
          sx={{ 
            height: 40,
            fontSize: "15px",
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>{clothesColor[0]}</MenuItem>
          <MenuItem>{clothesColor[1]}</MenuItem>
          <MenuItem>{clothesColor[2]}</MenuItem>
        </Select>
      </FormControl>
  );
}

export default function OptionSelect() {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{
        mt: 2,
      }}
    >
      <SizeSelect />
      <ColorSelect />
    </Box>
  );
}