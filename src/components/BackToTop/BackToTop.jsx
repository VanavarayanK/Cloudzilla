import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useStyles = makeStyles(() => ({
  fab: {
    position:"fixed",
    bottom: "95px",
    right: "11px",
    zIndex: "999",
    cursor: "pointer",
  },

}))
export default function ScrollToTop() {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
          setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <React.Fragment>

      {isVisible && (
 
         <Fab  
         size="medium"
         aria-label="back-to-top" 
         className={classes.fab} 
         onClick={scrollToTop} >
         <KeyboardArrowUpIcon color="primary"/>
      </Fab>
       
      )}

   </React.Fragment>
   
  );
}
