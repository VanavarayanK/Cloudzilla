import React from 'react'
import {  InputLabel, TextareaAutosize, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';


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
        maxWidth: '100%',
        minWidth: '100%',
        "&:focus": {
            border: '1px solid #D9D9D9 !important',
        },
        "&::placeholder": {
            color: "#00000040",
        },
    }
}))

const CreateUser = () => {
    const classes = useStyles()

    return (
        <div>
            <InputLabel htmlFor="bootstrap-input">
                Title
            </InputLabel>
            <InputBase variant="MyCustomInput1" placeholder='Enter here' size="small" className={classes.inputbase} />
            <InputLabel htmlFor="bootstrap-input" sx={{ mt: 2 }}>
                Description
            </InputLabel>
            <TextareaAutosize
                className={`${classes.textArea} ${classes.inputbase}`}
                minRows={3}
                aria-label="empty textarea"
                placeholder="Enter here"
            />
        </div>
    )
}

export default CreateUser