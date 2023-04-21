import React from 'react'
import { Box, Grid, Divider, Typography, IconButton, Button } from '@mui/material';
import Cancel from './../../images/home/cancel.svg';
import FavouriteIcon from './../../images/home/favourite.svg';
import EditFile from './../../images/home/editFile.svg';
import Share from './../../images/home/fileShare.svg';
import Cut from './../../images/home/cut.svg';
import Folder from './../../images/home/folder.svg'
import More from './../../images/home/moreIcon.svg'
import FilePreviewIcon from './../../images/home/filePreview.svg';
import Delete from './../../images/home/delete.svg'
import Copy from './../../images/home/copy.svg'

const FilePreview = (props) => {
    return (
        <Grid item xs={3} sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        }}>
            <Box sx={{ background: "#fff", width: "100%", border: '1px solid #DDDDDD' }} >
                <Box p={3}>
                    <Grid container display="flex" justifyContent="space-between">
                        <Box display="flex" mr={5}>
                            <img src={FilePreviewIcon} width={20} alt=""></img>
                            <Typography variant="previewHeader" ml={2}>File Preview</Typography>
                        </Box>
                        <img src={Cancel} width={20} alt=""
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                props.setClick(false)
                            }}></img>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                    <Grid container display="flex" justifyContent="space-between">
                        <Box display="flex" style={{ cursor: "pointer" }}>
                            <img src={FavouriteIcon} width={20} alt=""></img>
                            <Typography variant="previewtext" ml={1}>Add to fav</Typography>
                        </Box>
                        <Box display="flex">

                            <img src={EditFile} width={20} alt="" style={{ marginRight: '30px', cursor: "pointer" }}></img>
                            <img src={Share} width={20} alt="" style={{ cursor: "pointer" }}></img>
                        </Box>
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={3} mb={5}>
                        <img src={Folder} width='130' alt="" />
                    </Box>
                    <Typography variant="fileName">
                        Pradeep PD Software Solutions
                        Pvt Ltd.,
                    </Typography>
                    <Grid container>
                        <Grid item xs={4} md={4} lg={4} mt={2}>
                            <Typography variant='settingLable'>Type :</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} mt={2}>
                            <Typography variant='settingLable'>File Folder</Typography>
                        </Grid>
                        <Grid item xs={4} mt={2}>
                            <Typography variant='settingLable'>Location :</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} mt={2}>
                            <Typography variant='settingLable'>C:\Users\murali\Downloads</Typography>
                        </Grid>
                        <Grid item xs={4} mt={2}>
                            <Typography variant='settingLable'>Size :</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} mt={2}>
                            <Typography variant='settingLable'>9 MB</Typography>
                        </Grid>
                        <Grid item xs={4} mt={2}>
                            <Typography variant='settingLable'>Contains :</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} mt={2}>
                            <Typography variant='settingLable'>NA</Typography>
                        </Grid>
                        <Grid item xs={4} mt={2}>
                            <Typography variant='settingLable'>Created :</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} mt={2}>
                            <Typography variant='settingLable'>10:50 PM, Dec 13, 2022</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container sx={{ marginTop: '130px', display: 'flex', justifyContent: "space-between", p: 3, borderTop: '1px solid #DDDDDD' }}>
                    <Button disableRipple mr={5} sx={{ textTransform: 'none' }} >
                        <img src={Cut} width={20} alt=""></img>
                        <Typography variant="previewHeader" ml={2}>Cut</Typography>
                    </Button>
                    <Button disableRipple mr={5} sx={{ textTransform: 'none' }}>
                        <img src={Copy} width={20} alt=""></img>
                        <Typography variant="previewHeader" ml={2}>Copy</Typography>
                    </Button>
                    <Button disableRipple sx={{ textTransform: 'none' }}>
                        <img src={Delete} width={20} alt=""></img>
                        <Typography variant="previewHeader" ml={2}>Delete</Typography>
                    </Button>
                </Grid>
            </Box>
        </Grid>
    )
}

export default FilePreview