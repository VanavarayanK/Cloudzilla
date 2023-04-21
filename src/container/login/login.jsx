import React from 'react'
import Page from '../../components/page'
import { Typography, Box, Grid, FormControl, Button, Link, FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles';
import logo from './../../images/LOGO.svg'
import { useNavigate } from 'react-router-dom';
import Google from './../../images/googleIcon.svg'
import Facebook from './../../images/fbIcon.svg'
import LoginCard from '../../components/LoginCard';
import { Formik } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';
import InputBase from '../../components/Textfield/InputBase';

const useStyles = makeStyles((theme) => ({
  cardBorderRadius: {
    borderRadius: "10px 10px 10px 10px",
    padding: '3rem 0',
  },
  box: {
    backgroundColor: "#0862A0",
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center"
  },
  title: {
    color: "#282828",
    lineHeight: "36px",
    fontSize: "24px !important",
    fontStyle: "Nunito !important"
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  forgotText: {
    display: "flex",
    justifyContent: "end",
    color: "#F24A4A",
    paddingTop: '16px',
    cursor: "pointer",
    fontFamily: 'nunito',
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: '400',
    "&:hover": {
      textDecoration: "underline",
    }
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F0682C !important",
    color: "#fff !important",
    width: "100%",
    // marginTop: "2rem !important",
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
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);



  return (
    <Page>
      <LoginCard>
        <Box className={classes.content}>
          <Typography variant='title'>
            Sign In
          </Typography>
          <Typography variant='subtitle'>
            Enter details to create your account
          </Typography>
        </Box>
        <Box fullwidth mx={8} mt={3}>
          <Formik
            initialValues={{
              userName: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              userName: Yup.string().required('Username is required'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={() => [
              navigate('/home')
            ]}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container display="flex" flexDirection="column" sx={{height:'350px'}}>
                  <FormControl variant="standard">
                    <Typography variant="formLabel" fullwidth >
                      E-mail
                    </Typography>
                    <InputBase
                      error={Boolean(touched.userName && errors.userName)}
                      id="userName"
                      value={values.userName}
                      name="userName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullwidth placeholder='Enter your email' />
                    {touched.userName && errors.userName && (
                      <FormHelperText error>
                        {errors.userName}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl variant="standard">
                    <Typography variant="formLabel">
                      Password
                    </Typography>
                    <InputBase
                      error={Boolean(touched.password && errors.password)}
                      id="password"
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullwidth
                      type="password"
                      placeholder='Enter your password'
                    //  type={showPassword ? 'text' : 'password'}
                    //  endAdornment={
                    //   <IconButton aria-label="search" onClick={handleClickShowPassword}>
                    //     {showPassword ? <VisibilityOff style={{ color: "#949CA9", padding: '0 8px' }} /> : <Visibility style={{ color: "#949CA9", padding: '0 8px' }} />}
                    //   </IconButton>
                    // }
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error>
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <a onClick={() => navigate('/forgotpasswordlink')} className={classes.forgotText} >Forgot password?</a>
                </Grid>
                <Grid xs={12} md={12} >
                  <Button type="submit" fullwidth className={classes.button}>
                    Sign In
                  </Button>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
        <Grid item xs={11} md={11} style={{ display: "flex", margin: "2rem 4rem" }}>
          <Button variant='outlined' fullwidth style={{ marginRight: '10px' }} className={classes.signupButton} >
            <img style={{ marginRight: "10px" }} src={Google} alt="google" />  Sign up with Google
          </Button>
          <Button variant='outlined' style={{ marginLeft: '10px' }} fullwidth className={classes.signupButton} >
            <img style={{ marginRight: "10px" }} src={Facebook} alt="google" />  Sign up with Facebook
          </Button>
        </Grid>
        <Typography mt={2} variant="formLabel" display="flex" justifyContent="center">
          New User? <span href="" onClick={() => navigate('/signup')} style={{ marginLeft: "8px", color: "#2F93F6", textDecoration: "underline", cursor: "pointer", }}> Sign Up</span>
        </Typography>
      </LoginCard>

    </Page>
  )
}

export default Login