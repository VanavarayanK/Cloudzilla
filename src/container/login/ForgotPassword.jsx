import React from 'react'
import Page from '../../components/page'
import { Typography, Box, Grid, FormControl, FormHelperText, Button, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Google from './../../images/googleIcon.svg'
import Facebook from './../../images/fbIcon.svg'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginCard from '../../components/LoginCard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputBase from '../../components/Textfield/InputBase';

const useStyles = makeStyles(() => ({
    title: {
        color: "#282828",
        lineHeight: "36px",
        fontSize: "24px !important",
        fontStyle: "Nunito !important"
    },
    content: {
        display: "flex ",
        flexDirection: "column ",
        width: '100% !important',
        '@media (max-width:900px)': {
            width: '100% !important',
        }
    },
    button: {
        alignItems: "center",
        backgroundColor: "#F0682C !important",
        color: "#fff !important",
        width: "100%",
        // marginTop: "16rem !important",
        display: "flex",
        fontFamily: "Nunito !important",
        fontSize: "16px !important",
        fontWeight: "600 !important",
        padding: '14px !important',
        textTransform: "none !important"
    },
    signupButton: {
        border: "1px solid #E8E9EA !important",
        width: "100% ",
        padding: '1rem !important ',
        borderRadius: "6px ",
        fontFamily: "Nunito !important",
        fontSize: "14px !important",
        fontWeight: "400 !important",
        textTransform: "none !important"
    }
}))
const ForgotPassword = () => {
    const classes = useStyles();
    const navigate = useNavigate()



    return (
        <Page>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('Email is required').email("Please enter a valid email")
                })}
                onSubmit={() => [

                ]}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <LoginCard>
                            <Box mx={8} mt={10} className={classes.content} >
                                <Typography variant='title'>
                                    Forgot Password
                                </Typography>
                                <Typography variant='subtitle'>
                                    Enter your email and we will send you a reset link
                                </Typography>
                            </Box>
                            <Box  mx={8} mt={3}>
                                <Grid container display="flex" flexDirection="column" sx={{height:'270px'}}>
                                    <FormControl variant="standard">
                                        <Typography variant="formLabel">
                                            E-mail or phone number
                                        </Typography>
                                        <InputBase
                                            error={Boolean(touched.email && errors.email)}
                                            id="email"
                                            value={values.email}
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            fullwidth placeholder='Enter your email' />
                                        {touched.email && errors.email && (
                                            <FormHelperText error>
                                                {errors.email}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} md={12}>
                                    <Button type="submit" fullwidth className={classes.button}>
                                        Send me the link
                                    </Button>
                                </Grid>
                            </Box>
                            <Typography sx={{mt:'125px'}} variant="formLabel" display="flex" justifyContent="center">
                                Already have an account?  <span href="" onClick={() => navigate('/login')} style={{ marginLeft: "8px", color: "#2F93F6", textDecoration: "underline", cursor: "pointer" }}> Sign In</span>
                            </Typography>
                        </LoginCard>
                    </form>
                )}
            </Formik>
        </Page>
    )
}

export default ForgotPassword