import { Grid, Box, Typography, Button, Card, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import LandingImage from './../../images/landing/landingLogo.svg'
import PC from './../../images/landing/pc.svg'
import Track from './../../images/landing/Track.svg'
import star from './../../images/landing/start.svg'
import silverIcon from './../../images/landing/silver.svg'
import premiumIcon from './../../images/landing/premium.svg'
import goldIcon from './../../images/landing/gold.svg'
import facebook from './../../images/landing/facebook.svg'
import fb from './../../images/landing/fb.svg'
import instagram from './../../images/landing/insta.svg'
import twitter from './../../images/landing/twitter.svg'
import linkedin from './../../images/landing/linkedin.svg'


import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TypeSpecimen } from '@mui/icons-material';
const useStyles = makeStyles((theme) => ({
    logoGrid: {
        backgroundColor: "#08122A0",
        height: '100vh',
        padding: '56px'
    },
    card: {
        boxShadow: "linear-gradient(0deg, rgba(154, 84, 234, 0.15), rgba(154, 84, 234, 0.15)), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        maxHeight: '362px',
        maxWidth: '288px',
        padding: '37px 30px'
    },
    priceCard: {
        marginTop:'20px',
        height: "400px",
        // position: "relative",
        width: "310px",
        padding: '32px',
        boxShadow:'none !important',
        "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px !important",
            transform: "scale3d(1.05, 1.05, 1)"
        },

    }
}))
const LandingPage = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid className={classes.logoGrid} item xs={12} md={6}>
                    <Box className={classes.box}>
                        <img src={LandingImage} alt="logo" />
                        <Typography variant='logoTitle' ml={2.5}>CloudZilla</Typography>
                    </Box>
                    <Box sx={{ mt: '20vh' }}>
                        <Typography variant='logoTitle' >
                            Lorem ipsum dolor sit amet
                            <br />
                            consectetur.
                        </Typography>
                    </Box>
                    <Box mt={5} mr={10}>
                        <Typography variant="description">
                            Lorem ipsum dolor sit amet consectetur. Interdum <br /> massa sit mauris ut elementum nisl imperdiet. Enim <br /> pretium enim nullam et facilisis scelerisque et <br /> egestas purus. Nisl cras nisi cras at. Quisque ac <br /> aenean enim gravida.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Button variant="started">
                            Get Started
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Grid container sx={{ pl: 10 }}>
                        <Grid item xs={3} >
                            <Button variant="tabButton">
                                About US
                            </Button>
                        </Grid>
                        <Grid item xs={3.5} sx={{ width: "100%" }} >
                            <Button variant="tabButton">
                                Product Offering
                            </Button>
                        </Grid>
                        <Grid item xs={2.5} >
                            <Button variant="tabButton">
                                Blog
                            </Button>
                        </Grid>
                        <Grid item xs={3} >
                            <Button variant="tabButton" sx={{ backgroundColor: '#F0682C', color: '#fff' }}>
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <img src={PC} alt="pc" />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ padding: '70px 110px 10px', margin: '100px', backgroundColor: "#FFEDE5" }}>
                <Grid container>
                    <Grid item xs={6} style={{ paddingRight: '20%' }}>
                        <Box>
                            <Typography variant="aboutText">
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1.5 }}>
                            <Typography variant="aboutTitle">
                                Lorem ipsum dolor sit
                                <br />
                                amet consectetur. Velit.
                            </Typography>
                        </Box>
                        < Box sx={{ mt: 1.5 }}>
                            <Typography variant="aboutDescription">
                                Lorem ipsum dolor sit amet consectetur. Nunc enim tortor malesuada amet. Gravida erat interdum et mus montes semper sit tempor. Neque amet rhoncus vel etiam at enim varius.
                                Lorem ipsum dolor sit amet consectetur. Ultrices malesuada enim porttitor proin sed. Varius cursus eleifend porttitor maecenas nibh est. Mauris porttitor arcu cursus ornare quis aliquet.
                                Lorem ipsum dolor sit amet consectetur. Nunc enim tortor malesuada amet. Gravida erat interdum et mus montes semper sit tempor. Neque amet rhoncus vel etiam at enim varius.
                                Lorem ipsum dolor sit amet consectetur. Ultrices malesuada enim porttitor proin sed. Varius cursus eleifend porttitor maecenas nibh est. Mauris porttitor arcu cursus ornare quis aliquet.

                            </Typography>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Button variant="started" sx={{ backgroundColor: '#F0682C', color: '#fff' }}>
                                View all
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box >
                            <img src={Track} alt="pc" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ margin: "100px" }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='aboutTitle'>
                            Features so good, they <br /> will change the way you <br /> do affiliate marketing
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="end">
                        <Box>
                            <Button variant="started"
                                endIcon={<ArrowRightAltIcon style={{ color: '#fff' }} />}
                                sx={{ backgroundColor: '#F0682C', color: '#fff', width: '203px' }}>
                                All Features
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid sx={{ my: "50px", display: 'flex', justifyContent: 'space-between' }}>
                    {[1, 2, 3, 4].map(() => {
                        return (
                            <Grid item xs={12} md={6} lg={3}>
                                <Card className={classes.card}>
                                    <Avatar sx={{ backgroundColor: "#fef0ea", padding: '19px', mb: 5 }}>
                                        <img src={star} alt="start" />
                                    </Avatar>
                                    <Typography variant='landingCardTitle'>
                                        Lorem
                                    </Typography>
                                    <br />
                                    <Box style={{ marginTop: "10px", paddingRight: '20px' }}>
                                        <Typography variant='aboutDescription' >
                                            Lorem ipsum dolor sit amet consectetur. Sem leo ornare faucibus ullamcorper sagittis volutpat. Tincidunt facilisi.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Button variant='learnMore'>
                                            Learn More
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Box style={{ margin: '100px' }}>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant='pricingTitle' alignCenter>
                        Affordable pricing
                    </Typography>
                </div>
                <Grid sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item xs={4}>
                        <Card className={classes.priceCard}>
                            <Typography variant="pricingFor">
                                For Entry
                            </Typography>
                            <br />
                            <Typography variant='price'>
                                Free <span style={{ fontSize: '12px', marginLeft: '-8px' }}>/ FOREVER</span>
                            </Typography>
                            <List>
                                {[1, 2, 3, 4].map(() => {
                                    return (
                                        <ListItem sx={{ padding: '10px 0px' }}>
                                            <ListItemIcon>
                                                <img src={silverIcon} alt="silver" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                Lorem ipsum dolor sit amet
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Button variant='buyButton'>
                                Try for free
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.priceCard}>
                            <Typography variant="pricingFor">
                                Individual
                            </Typography>
                            <br />
                            <Typography variant='price'>
                                $00 <span style={{ fontSize: '12px', marginLeft: '-8px' }}>/ MONTH</span>
                            </Typography>
                            <List>
                                {[1, 2, 3, 4].map(() => {
                                    return (
                                        <ListItem sx={{ padding: '10px 0px' }}>
                                            <ListItemIcon>
                                                <img src={premiumIcon} alt="silver" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                Lorem ipsum dolor sit amet
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Button variant='buyButton'>
                                Regular license
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.priceCard}>
                            <Typography variant="pricingFor">
                                Corporate
                            </Typography>
                            <br />
                            <Typography variant='price'>
                                $00 <span style={{ fontSize: '12px', marginLeft: '-8px' }}>/ EDITOR</span>
                            </Typography>
                            <List>
                                {[1, 2, 3, 4].map(() => {
                                    return (
                                        <ListItem sx={{ padding: '10px 0px' }}>
                                            <ListItemIcon>
                                                <img src={goldIcon} alt="silver" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                Lorem ipsum dolor sit amet
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Button variant='buyButton'>
                                Extended license
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#FFEDE5", padding: '40px', borderTop: '10px solid #F0682C' }}>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant='aboutTitle' alignCenter>
                        Our Technology partners
                    </Typography>
                    <Grid>
                        <Grid item sx={{ display: 'flex', justifyContent: 'space-around', mx: '300px' }}>
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />
                            <img src={facebook} alt="facebook" />

                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ backgroundColor: "#0862A0", mt: '20px', padding: '100px 100px 75px', display: 'flex', justifyContent: 'space-between', alignSelf: 'center' }}>
                <Grid item xs={12} md={6} lg={4}>
                    <img src={LandingImage} alt="logo" width={57} height={50} />
                    <Typography variant='footerTitle' alignCenter>
                        CloudZilla
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{ alignSelf: 'center', display: 'flex', justifyContent: "space-between" }}>

                    <Typography variant="description" sx={{ fontSize: "18px" }}>
                        About Us
                    </Typography>
                    <Typography variant="description" sx={{ fontSize: "18px,", ml: '30px' }}>
                        Product Offering
                    </Typography>
                    <Typography variant="description" sx={{ fontSize: "18px", ml: '30px' }}>
                        Blog
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ alignSelf: 'center', display: 'flex', justifyContent: "space-between", width: "12%" }}>

                    <img src={fb} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />

                </Grid>
                {/* <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="description" sx={{ fontSize: "18px", ml: '30px' }}>
                        Designed by Muralidharan
                    </Typography>
                </Grid> */}
            </Box>


        </div >
    )
}

export default LandingPage