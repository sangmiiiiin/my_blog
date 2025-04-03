import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 10,
  border: '1px solid',
  lineHeight: 1,
  backgroundColor: 'none',
  borderColor: 'gray',
  color: 'gray',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:active': {
    // boxShadow: 'none',
    // backgroundColor: '#0062cc',
    // borderColor: '#005cbf',
  },
  '&:focus': {
    // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});