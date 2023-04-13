import {  InputBase } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme,error, settings }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width:settings && 395,
    border: `1px solid ${error ? "red" : "#ced4da"}`,
    borderRadius:settings ? 0 : 4,
    '& .MuiInputBase-input': {
      borderRadius:settings ? 0 : 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      fontSize: 16,
      width: "100%",
      
      padding: settings ? '5px 12px' :'14px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      fontFamily: settings ? 'Open Sans' : 'Nunito',
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
        backgroundColor: '#fffff'
      },
    },
  }));

  export default BootstrapInput