import React, { useState } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FilePreview from '../../components/Card/FilePreview';
import Add from './../../images/home/add.svg'
import Delete from './../../images/home/delete.svg'
import FileCard from '../../components/Card/FileCard';
import Table from '../../components/Table/UserTable';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CreateDialog from '../../components/Dialog/CreateDialog';
import CreateUser from './CreateUser';
import ToastMessage from '../../components/Alert';
import Page from '../../components/page';



const useStyles = makeStyles((theme) => ({
    card: {
        width: "219px",
        height: '80px',
        border: "1px solid #D1D1D1",
        borderRadius: "10px",
        margin: "1rem",
        display: 'flex',
        padding: '0 10px',
        justifyContent: "center",
        alignItems: "center"
    },
    actions: {
        cursor: "pointer"
    },
    backdrop: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "",
        backdropFilter: "blur(2px)",
    }
}))


const Home = () => {
    const classes = useStyles();
    const [click, setClick] = useState(false)
    // const [active, setActive] = useState(null)
    // const [gridView, setGridView] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [toastAlert, setToastAlert] = useState(false)
    const [severity, setSeverity] = useState('success')


    const array = [1, 2, 3, 1, 2, 2, 2, 3, 3, 2, 2, 23, 3, 3, 3, 3, , 3, 3, 23, 3, 3, 3, 3, , 3, 3, 3, 3, 3, 3, 3, 3]
    return (
        <Page>
            <Grid container position={'relative'}>
                <Grid item xs={click ? 9 : 12}>
                    <Grid container my={2} display="flex" justifyContent="space-between" sx={{ alignItems: "center" }}>
                        <Grid item display="flex" sx={{ height: '25px' }}>
                            <Box display="flex" mr={5} className={classes.actions}
                                onClick={() => setOpenDialog(true)}
                            >
                                <img src={Add} width={20} alt=""></img>
                                <Typography variant="action" ml={1}>Add</Typography>
                            </Box>
                            <Box display="flex" mr={5} className={classes.actions}>
                                <img src={Delete} width={20} alt=""></img>
                                <Typography variant="action" ml={1}>Delete</Typography>
                            </Box>
                        </Grid>
                        <Grid item display="flex">
                            <Typography variant='previewHeader' sx={{ fontWeight: '400', color: "#d1d2d3", m: 1 }}>Filter by :</Typography>
                            <Button
                                variant="select"
                                disableElevation
                                sx={{ textTransform: 'none', backgroundColor: "#fff", color: "#A7A7A7", borderRadius: '5px' }}
                                endIcon={<KeyboardArrowDownIcon sx={{ ml: '130px', color: '#A7A7A7' }} />}
                            >Select</Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ backgroundColor: "#fff", mt: 3, width: '100%', minHeight: '78vh' }}>
                    <Grid columnSpacing={0} container sx={{ pt: 3 }} >
                        <Table />
                        </Grid>
                    </Box>
                </Grid>
                {
                    click && (
                        <FilePreview
                            setClick={setClick}
                            click={click}
                        />
                    )
                }
            <ToastMessage open={toastAlert} close={setToastAlert} severity={severity}/> 
            </Grid>
            <CreateDialog
                open={openDialog}
                title={"Create a user"}
                close={setOpenDialog}
                children={
                    <CreateUser />
                }
            />
            {openDialog && <div className={classes.backdrop} />}
            {/* <Dialog/> */}
        </Page>
    )
}

export default Home