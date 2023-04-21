import React, { useEffect, useState } from 'react'
import { Box, Grid, Alert, Typography, IconButton, Button, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Page from '../../components/page';
import FilePreview from '../../components/Card/FilePreview';
import Add from './../../images/home/add.svg'
import Upload from './../../images/home/upload.svg'
import Delete from './../../images/home/delete.svg'
// import Download from './../../images/home/download.svg'
import Copy from './../../images/home/copy.svg'
import ActiveCopy from './../../images/home/activeCopy.svg'
import Move from './../../images/home/move.svg'
import grid from './../../images/home/grid.svg'
import ActiveGrid from './../../images/home/activeGrid.svg'
import ActiveRow from './../../images/home/activeRow.svg'
import DialogInfo from './../../images/home/dialogInfo.svg'
import row from './../../images/home/row.svg'
import FileCard from '../../components/Card/FileCard';
import AccessCard from '../../components/Card/AccessCard';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

import Table from '../../components/Table/Table';
import CreateDialog from '../../components/Dialog/CreateDialog';
import CreateUser from './CreateFolder';
import CheckIcon from '@mui/icons-material/Check';
import ToastMessage from '../../components/Alert';

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
    const [active, setActive] = useState(null)
    const [gridView, setGridView] = useState(true)
    const [openDialog, setOpenDialog] = useState(false)
    const [copy, setCopy] = useState(false)
    const [alert, setAlert] = useState(false)
    const [toastAlert, setToastAlert] = useState(false)
    const [severity, setSeverity] = useState('success')
    const [disabled, setDisabled] = useState(true)


useEffect(()=>{
!click && setActive(null)
},[click])

    const array = [1, 2, 3, 1, 2, 2, 2, 3, 3, 2, 2, 23, 3, 3, 3, 3, , 3, 3, 23, 3, 3, 3, 3, , 3, 3, 3, 3, 3, 3, 3, 3]
    return (
        <Page>
            <Grid container position={'relative'}>
                <Grid item xs={click ? 6 : 12} md={click ? 9 : 12}>
                    <Grid container my={2} display="flex" justifyContent="space-between" sx={{ alignItems: "center" }}>
                        <Grid item wrap="wrap" display="flex" sx={{ height: '25px' }}>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    onClick={() => setOpenDialog(true)}
                                    classes="action" size="small"
                                    startIcon={<img src={Add} width={20} alt="add"></img>}
                                >
                                    Add
                                </Button>
                                <Button
                                    classes="action" size="small"
                                    startIcon={<img src={Upload} width={15} alt="upload"></img>}
                                >
                                    <Typography variant="action">Upload</Typography>
                                </Button>
                                <Button
                                    classes="action"
                                    startIcon={<DownloadForOfflineOutlinedIcon fontSize="large" />}
                                >
                                    <Typography variant="action">Download</Typography>
                                </Button>
                                <Button
                                    classes="action"
                                    onClick={() => {
                                       gridView && setCopy(copy ? false : true)
                                        setAlert(true)
                                        setClick(false)
                                        setActive(null)

                                    }}
                                    startIcon={<img src={copy ? ActiveCopy : Copy} width={20} alt="" />}
                                >

                                    <Typography variant="action" sx={{ color: copy && '#F0682C' }}>Copy</Typography>
                                </Button>
                                <Button
                                    classes="action"
                                    startIcon={<img src={Move} width={20} alt="" />}
                                >
                                    <Typography variant="action">Move</Typography>
                                </Button>
                                <Button
                                    classes="action"
                                    startIcon={<img src={Delete} width={20} alt="" />}
                                >
                                    <Typography variant="action">Delete</Typography>
                                </Button>
                            </Stack>
                        </Grid>

                        <Grid item display="flex">
                            <IconButton display="flex"
                                onClick={() => {
                                    setGridView(false)
                                    setActive(null)
                                }}
                                style={{ boxShadow: !gridView && '0px 0px 4px 0px #00000040', padding: '2px', width: "35px", borderRadius: '4px', marginRight: "10px" }}>
                                <img src={!gridView ? ActiveRow : row} width={20} alt=""></img>
                            </IconButton>
                            <IconButton
                                onClick={() => setGridView(true)}
                                display="flex" style={{ boxShadow: gridView && '0px 0px 4px 0px #00000040', padding: '5px', width: "35px", borderRadius: '4px' }}>
                                <img src={gridView ? ActiveGrid : grid} width={20} alt=""></img>
                            </IconButton>
                        </Grid>
                    </Grid>
                    {/* <PerfectSc */}
                    <Box sx={{ backgroundColor: "#fff", mt: 3, width: '100%', height: copy && alert ? 'calc(100vh - 350px)': 'calc(100vh - 250px)', overflow: 'scroll' }}>
                        <Grid columnSpacing={0} container sx={{ pt: 3, justifyContent: 'center' }} >
                            {gridView ? array.map((item, i) => {
                                return (
                                    <FileCard
                                        copy={copy}
                                        active={active}
                                        id={i}
                                        setActive={setActive}
                                        setClick={setClick}
                                        click={click}
                                    />
                                )
                            })
                                : (
                                    <Table />
                                )}
                            {/* <AccessCard /> */}
                        </Grid>
                    </Box>
                    {alert && copy && <Alert
                        variant="alertToast"
                        onClose={() => setAlert(false)}
                        action={
                            <Box display="flex">
                                <Button color="inherit" variant='save' sx={{ mr: '65px', p: 1 }}>
                                    Copy(1)
                                </Button>
                                <Button color="inherit" size="small" variant='cencel' sx={{ p: 1, mr: 5 }}>
                                    Cancel
                                </Button></Box>
                        }
                        // style={{ }}
                        icon={<img src={DialogInfo} alt="info" />} >
                        <Typography variant="alertText">
                            Select the item that you want to copy
                        </Typography>
                    </Alert>}
                </Grid>
                {
                    click && (
                        <FilePreview
                            setClick={setClick}
                            click={click}
                        />
                    )
                }

                <CreateDialog
                    open={openDialog}
                    title={"Create User"}
                    close={setOpenDialog}
                    children={
                        <CreateUser />
                    }
                />
                {openDialog && <div className={classes.backdrop} />}
                <ToastMessage open={toastAlert} close={setToastAlert} severity={severity} />
            </Grid>
        </Page>
    )
}

export default Home
