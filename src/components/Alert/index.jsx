import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Success from './../../images/alert/successAlert.svg'
import Warning from './../../images/alert/warningAlert.svg'
import Error from './../../images/alert/errorAlert.svg'



const ToastMesaage = (props) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {props.open && <Alert
                sx={{ borderLeft: props.severity === "success" ? '10px solid #2CF0C1' : props.severity === "warning" ? "10px solid #F0DC2C" : '10px solid #F02C2C' }}
                icon={<img src={props.severity === "success" ? Success : props.severity === "warning" ? Warning : Error} alt="" />}
                variant="outlined"
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        sx={{ alignSelf: 'center' }}
                        onClick={() => {
                            props.close(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>
                <Typography variant="toastTitle">{props.severity === "success" ? "Success" : props.severity === "warning" ? "Warning" : "Error"}</Typography>
                <br />
                <Typography variant="folderSize" sx={{ color: '#878787' }}>Action that you tried has been done successfully!</Typography>
            </Alert>}
        </Stack >
    )
}

export default ToastMesaage