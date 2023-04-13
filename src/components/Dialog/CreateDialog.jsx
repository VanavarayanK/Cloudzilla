import React from 'react'
import { DialogActions, Dialog, DialogTitle, DialogContent, IconButton, Button, InputLabel, TextareaAutosize, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import CloseIcon from "@mui/icons-material/Close";
import CloseIcon from './../../images/home/close.svg'

const useStyles = makeStyles((theme) => ({
    inputbase: {
        border: '1px solid #D9D9D9',
        padding: '5px 12px',
        width: '100%',
        borderRadius: '2px',
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontWeight: "400",
        "&::placeholder": {
            color: "#00000040",
        },
    },
    textArea: {
        border: '1px solid #D9D9D9',
        padding: '5px 12px',
        width: '100%',
        borderRadius: '2px',
        "&:focus": {
            border: '1px solid #D9D9D9 !important',
        },
        "&::placeholder": {
            color: "#00000040",
        },
    }
}))
const CreateDialog = (props) => {
    const classes = useStyles()
    const handleCancel = () => {
        props.close(false);
    };



    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%',  position: "relative", overflow: 'unset' } }}
            maxWidth="xs"
            open={props.open}
        >
            <IconButton
                onClick={handleCancel}
                sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    backgroundColor: "transparent",
                    zIndex: 1,
                }}
            >
                <img src={CloseIcon} alt="close" />
            </IconButton>
            <DialogTitle style={{ position: "relative", zIndex: 0 }} >
                {props.title}
            </DialogTitle>
            <DialogContent dividers sx={{ borderBottom: 'none', overflow:'unset' }}>
                {props.children}
            </DialogContent>
            <DialogActions sx={{ m: 2 }}>
                <Button variant="save" className={classes.contained} onClick={handleCancel}>
                    Save
                </Button>
                <Button variant="cancel" onClick={handleCancel}>Cancel</Button>
            </DialogActions>
        </Dialog>


    )
}

export default CreateDialog