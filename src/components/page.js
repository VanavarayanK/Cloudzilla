import React, { forwardRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import BackToTop from "./../components/BackToTop/BackToTop"
import { makeStyles } from '@mui/styles';
import clsx from 'clsx'
import { connect } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {        
    // backgroundColor: "#0862A0",
    // paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(3), 
    // padding: theme.spacing(3),   
    // [theme.breakpoints.down("xs")]: {
    //   padding: '0px 10px'
    // },  
  },
}))


const Page = forwardRef(({
  children,
  title = '',
  isAuthenticated,
  addClass=null,
  ...rest
}, ref) => {
  const classes = useStyles();
  const navigate = useNavigate();
  let location = useLocation();


  useEffect(()=>{
    let allow = false;

    // if(location.pathname==="/login" || location.pathname==="/signup" || location.pathname==="/forgotpasswordlink"){
    //   allow=true
    // }
    // else{
    //   allow=false;
    // }
    // if(!allow){
    //   if(!isAuthenticated){
    //   navigate("/login", { replace: true })
    // }
    // }
  },[])


  return (
    <React.Fragment>
    <div
      ref={ref}
      {...rest}
      className={clsx(classes.root, addClass)}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
    <BackToTop/>
    </React.Fragment>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};



const mapStateToProps = state => {    
  return ({
      force: state, // force state from reducer
      isAuthenticated: state.authReducer.auth && state.authReducer.auth.loggedIn,
  })
};

export default connect(mapStateToProps)(Page);