import React from 'react'
import { Box, Grid, CardMedia, Typography, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Folder from './../../images/home/folder.svg'
import { makeStyles } from '@mui/styles';
import Menu from './../../components/Card/Menu.jsx'
import Checked from './../../images/home/checked.svg'
import UnChecked from './../../images/home/uncheckedIcon.svg'

const useStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        height: '80px',
        border: "1px solid #D1D1D1",
        borderRadius: "10px",
        margin: "1rem",
        display: 'flex',
        padding: '0 10px',
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    }
}))



const FileCard = (props) => {
    const classes = useStyles();
    return (
        <Grid
            onClick={() =>  {
                !props.copy &&  props.setClick(true)
                !props.copy &&  props.setActive(props.id)
            }}
            item xs='auto'  justifyContent="center">
            <FormGroup>
                <FormControl style={{ display: "flex", flexDirection: "revert" }}>
                    {props.copy && <FormControlLabel
                        control={
                           <Checkbox
                                style={{
                                    position: "absolute",
                                    zIndex: 9,
                                    color: '#ADAAAA' ,
                                    // backgroundColor:"#fff",
                                    marginLeft: '14px',
                                    "& .MuiCheckbox-root": {
                                        backgroundColor: "green"
                                    }
                                }}
                                icon={<img src={UnChecked} alt="jkh" width={"18px"} />}
                                checkedIcon={<img src={Checked} alt="jkh" width={"18px"} />}
                                // onChange={handleChange}
                            />
                        }
                    />}
                    <Box className={classes.card} sx={props.id === props.active && { backgroundColor: "#FFF7F4", border: '1px solid #F0682C' }}>
                        <Grid container columnSpacing={2} >
                            <Grid item xs={3} alignSelf="center" >
                                <CardMedia
                                    sx={{ ml: 1 }}
                                    component="img"
                                    image={Folder}
                                    alt="Paella dish"

                                >

                                </CardMedia>
                            </Grid>
                            <Grid item xs={7} display="flex" flexDirection="column" alignSelf="end">
                                <Typography variant='folderName'>
                                    Pradeep PD...
                                </Typography>
                                <Typography variant='folderSize'>
                                    23 Files | 7.79 GB
                                </Typography>

                            </Grid>
                            <Grid item xs={2} onClick={(e) => {
                                e.stopPropagation()
                            }}>
                                {/* <img src={More} width={20} height={20} alt="" /> */}
                                <Menu />
                            </Grid>
                        </Grid>
                    </Box>
                </FormControl>
            </FormGroup>
        </Grid>
    )
}

export default FileCard