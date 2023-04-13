import React from 'react'
import { Box, Grid, CardMedia, Typography, CardContent, AvatarGroup, FormControl, FormGroup, FormControlLabel, Checkbox, Card, CardActions } from '@mui/material';
import Folder from './../../images/home/folder.svg'
import { makeStyles } from '@mui/styles';
import Menu from './../../components/Card/Menu.jsx'
import Avatar from '@mui/material/Avatar';
import accessIcon from './../../images/home/accessIcon.svg'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const useStyles = makeStyles((theme) => ({
    card: {
        width: "200px",
        height: '209px',
        margin: '1rem',
        display: 'flex !important',
        flexDirection: 'column !important',
        boxShadow: 'none !important',
        border: "1px solid #D1D1D1",
        borderRadius: "10px !important",
        justifyContent: "center",
        cursor: "pointer"
    },
}))

const colors = [
    {
        text: '#FF7800',
        bg: '#FCBB818F'
    },
    {
        text: '#BD00FF',
        bg: '#DC81FC8F'
    },
    {
        text: '#1400FF',
        bg: '#81BAFC8F'
    },
]

const AccessCard = (props) => {
    const classes = useStyles();
    console.log(props)
    return (
        <Grid>
            <Card className={classes.card} sx={{ justifyContent: "space-between" }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={9}>
                            <CardMedia
                                sx={{ width: '52px' }}
                                component="img"
                                image={Folder}
                                alt="Paella dish"
                            >

                            </CardMedia>
                        </Grid>
                        <Grid item xs={3} sx={{ pr: 1 }} alignSelf="start" onClick={(e) => {
                            e.stopPropagation()
                        }}>
                            <Menu />
                        </Grid>

                    </Grid>
                    <Grid container mt={2}>
                        <Grid item display="flex" flexDirection="column" >
                            <Typography variant='folderName' >
                                Folder 1
                            </Typography>
                            <Typography variant='folderSize' mt={1}>
                                23 Files | 7.79 GB
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ backgroundColor: '#F4F4F4', display: 'flex', justifyContent: 'space-between' }}>
                    <AvatarGroup>
                        <Avatar variant="accessAvatar" sx={{ backgroundColor: "#FCBB818F", color: '#FF7800' }}>M</Avatar>
                        <Avatar variant="accessAvatar" sx={{ backgroundColor: "#DC81FC8F", color: '#BD00FF' }}>A</Avatar>
                        <Avatar variant="accessAvatar" sx={{ backgroundColor: "#81BAFC8F", color: '#1400FF' }}>B</Avatar>
                        <Typography variant="folderSize" sx={{ alignSelf: 'center', fontWeight: 600 }}> +2 More</Typography>
                    </AvatarGroup>
                    <img src={accessIcon} alt="access" />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default AccessCard 
