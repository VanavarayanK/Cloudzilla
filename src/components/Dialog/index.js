
import { Button, Dialog, IconButton, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from './../../images/home/close.svg';
import React from 'react';
const useStyles = makeStyles(theme => ({
    paper: {
        overflowY: 'unset',
    },
    customizedButton: {
        position: 'absolute',
        left: '30% ',
        top: '-50% !important',
        backgroundColor: 'lightgray',
        color: 'gray',
    }
}));

// function PaperComponent(props) {
//   return (
//     <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
//       <Paper {...props} />
//     </Draggable>
//   );
// }

export default function DraggableDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton autoFocus onClick={handleClose} color="primary" className={classes.customizedButton}>
                        <img src={CloseIcon} />
                    </IconButton>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
