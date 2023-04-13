import React from 'react'
import { Card, Breadcrumbs, FormControl, Typography, Button, Box, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputBase1 from '../../components/Textfield/InputBase';
import Page from '../../components/page';

const useStyles = makeStyles((theme) => ({
    cardBorderRadius: {
        borderRadius: "10px 10px 10px 10px",
        padding: '3rem 0',
    },
    menuText: {
        fontFamily: "Inter !important",
        fontSize: "16px !important",
        // fontWeight: "600 !important",
        lineHeight: "19px !important",
        letterSpacing: "0em !important",
        textAlign: "center !important",
        color: "#A7A7A7 !important"
    },
    menuLogo: {
        display: "flex",
        margin: '8px 1rem  3rem',
        justifyContent: "center"
    },
    header: {
        fontFamily: "Open Sans !important",
        fontSize: "24px !important",
        fontWeight: "600 !important",
        lineHeight: "32px !important",
        letterSpacing: "0em !important",
        textAlign: "center !important",
        color: "#000000 !important"
    },
    text: {
        fontFamily: "Open Sans !important",
        fontSize: "14px !important",
        lineHeight: "19px !important",
        padding: '4px 0',
        fontWeight: "400 !important",
        fontStyle: 'regular'
    },
    button: {
        textAlign: "center !important",
        fontWeight: "600 !important",
        color: "#fff !important",
        width: '85px',
        height: "39px",
        textTransform: "none !important",
        backgroundColor: '#F0682C !important',
        position: 'fixed !important',
        bottom: '84px',
    }
}))


const Settings = () => {
    const classes = useStyles();

    return (
        <Page>
            <Box>
                {/* <Grid container display="flex" flexDirection="column"> */}
                <FormControl variant="standard" >
                    <Typography variant="formLabel" mt={3} className={classes.text} fullwidth >
                        Enter Access Key
                    </Typography>
                    <InputBase1
                        settings={true}
                        placeholder="Enter here"
                    >
                    </InputBase1>
                </FormControl>
            </Box>
            <Box>
                <FormControl variant="standard">
                    <Typography variant="formLabel" className={classes.text} fullwidth >
                        Enter Secret Key
                    </Typography>
                    <InputBase1
                        settings={true}
                        placeholder="Enter here"
                    >
                    </InputBase1>
                </FormControl>
            </Box>
            <Box>
                <FormControl variant="standard">
                    <Typography variant="formLabel" className={classes.text} fullwidth >
                        Enter Bucket Name
                    </Typography>
                    <InputBase1
                        settings={true}
                        placeholder="Enter here"
                    >
                    </InputBase1>
                </FormControl>
                {/* </Grid> */}
            </Box>
            <Box width={395} mt={4}>
                <Typography >
                    <Typography component="span" style={{ color: "red" }}> Note :</Typography>   dolor sit amet consectetur. Ut vitae egestas ipsum ultricies felis. Tincidunt dictum dolor et nullam libero nunc dui pretium neque.
                </Typography>
            </Box>
            <Button className={`${classes.text} ${classes.button}`}>
                Confirm
            </Button>
        </Page>
    )
}

export default Settings