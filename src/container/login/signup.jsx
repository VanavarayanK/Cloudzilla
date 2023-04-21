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
    alignItems: "center ",
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
    // marginTop: "4.2rem !important",
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
const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);



  return (
    <Page>
      <LoginCard>
        <Box className={classes.content} >
          <Typography variant='title'>
            Sign Up
          </Typography>
          <Typography variant='subtitle'>
            Let’s build something greate
          </Typography>
        </Box>
        <Box fullwidth mx={8} mt={3}>
          <Formik
            initialValues={{
              userName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={Yup.object().shape({
              userName: Yup.string().required('Username is required'),
              email: Yup.string().required('Email is required').email("Please enter a valid email"),
              password: Yup.string().required('Password is required'),
              confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')

            })}
            onSubmit={() => [
              navigate('/settings')
            ]}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
               <Grid sx={{height:'350px'}}>
               <Grid container display="flex" flexDirection="column" >
                  <FormControl variant="standard">
                    <Typography variant="formLabel" >
                      Your name
                    </Typography>
                    <InputBase
                      error={Boolean(touched.userName && errors.userName)}
                      id="-password-login"
                      value={values.userName}
                      name="userName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullwidth placeholder='Enter your name' />
                    {touched.userName && errors.userName && (
                      <FormHelperText error>
                        {errors.userName}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl variant="standard">
                    <Typography variant="formLabel">
                      E-mail
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
                <Grid container spacing={2} >
                  <Grid item xs={6} md={6}>
                    <FormControl variant="standard" style={{ width: '100%' }}>
                      <Typography variant="formLabel">
                        Password
                      </Typography>
                      <InputBase
                        error={Boolean(touched.password && errors.password)}
                        id="-password-login"
                        value={values.password}
                        name="password"
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        // type={showPassword ? 'text' : 'password'}
                        // endAdornment={
                        //   <IconButton aria-label="search" onClick={handleClickShowPassword}>
                        //     {showPassword ? <VisibilityOff style={{ color: "#949CA9", padding: '0 8px' }} /> : <Visibility style={{ color: "#949CA9", padding: '0 8px' }} />}
                        //   </IconButton>
                        // }
                        fullwidth placeholder='Enter your password' />
                      {touched.password && errors.password && (
                        <FormHelperText error >
                          {errors.password}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormControl variant="standard" style={{ width: '100%' }}>
                      <Typography variant="formLabel">
                        Confirm Password
                      </Typography>
                      <InputBase
                        error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                        id="confirmPassword"
                        value={values.confirmPassword}
                        name="confirmPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        // type={showPassword ? 'text' : 'password'}
                        // endAdornment={
                        //   <IconButton aria-label="search" onClick={handleClickShowPassword}>
                        //     {showPassword ? <VisibilityOff style={{ color: "#949CA9", padding: '0 8px' }} /> : <Visibility style={{ color: "#949CA9", padding: '0 8px' }} />}
                        //   </IconButton>
                        // }
                        fullWidth placeholder='Enter confirm password' />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <FormHelperText error>
                          {errors.confirmPassword}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
               </Grid>
                <Grid xs={12} md={12}>
                  <Button type="submit" fullwidth className={classes.button}>
                    Sign Up
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
          Already have an account?  <span href="" onClick={() => navigate('/login')} style={{ marginLeft: "8px", color: "#2F93F6", textDecoration: "underline", cursor: "pointer" }}> Sign In</span>
        </Typography>
      </LoginCard>
    </Page>
  )
}

export default Signup