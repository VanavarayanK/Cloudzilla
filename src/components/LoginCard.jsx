import React from 'react'
import { Card, Container, Box, Grid, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles';
import logo from './../images/LOGO.svg'

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "10px 10px 10px 10px",
    padding: '3rem 0',
    // height:'650px',
    // width:"991px"
  },
  box: {
    backgroundColor: "#0862A0",
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center"
  },
  logoContent: {
    display: 'flex',
    borderRight: "1px solid #D1D1D1",
    lineHeight: "10px",
    justifyContent: 'center',
    alignItems: "center",
    '@media (max-width:900px)': {
      borderRight: "none",
      height: '',
      marginTop: '',
    }
  },
}))

const LoginCard = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container>
        <Card className={classes.card}>
          <Grid container>
            <Grid item sx={5} md={5} className={classes.logoContent} style={{ width: "100%" }}>
              <Grid>
                <img src={logo} alt="" />
              </Grid>
            </Grid>
            <Grid item sx={7} md={7} style={{width:'100%'}}>
              {props.children}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  )
}

export default LoginCard