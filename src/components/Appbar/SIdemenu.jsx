import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, alpha } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from './../../images/settings.svg'
import SettingsIcon from './../../images/settings.png'
import { useNavigate, useLocation } from 'react-router-dom';
import MenuLogo from './../../images/menuLogo.svg'
import DeleteIcon from './../../images/delete.svg'
import RecentIcon from './../../images/recent.svg'
import ShareIcon from './../../images/share.svg'
import HomeIcon from './../../images/home.svg'
import ActiveDeleteIcon from './../../images/home/activeDelete.svg'
import ActiveRecentIcon from './../../images/home/activeRecent.svg'
import ActiveShareIcon from './../../images/home/activeShare.svg'
import ActiveHomeIcon from './../../images/home/activeHome.svg'
import ActiveUserIcon from './../../images/home/activeUser.svg'
import UserIcon from './../../images/home/user.svg'


import ProfileLogo from './../../images/monish.png';
import ActiveIcon from './../../images/Active.svg';
import SearchIcon from './../../images/search.svg';

import ActiveSettingsIcon from './../../images/activeSettings.png';

import { Outlet } from 'react-router-dom';

import { Card, Breadcrumbs, Link, Divider, TextField } from '@mui/material';
import nextIcon from './../../images/nextIcon.svg';
import BreadcrumbIcon from './../../images/breadcrump.svg';


const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
    cardBorderRadius: {
        borderRadius: "10px 10px 10px 10px",
        padding: '3rem 0',
    },
    menuText: {
        fontFamily: "Inter !important",
        fontSize: "16px !important",
        // fontWeight: "600 !important",
        lineHeight: "19px !important",
        letterSpacing: "0em !important",
        textAlign: "center !important",
        color: "#A7A7A7 !important"
    },
    menuLogo: {
        display: "flex",
        margin: '8px 1rem  3rem',
        justifyContent: "center"
    },
    header: {
        fontFamily: "Open Sans !important",
        fontSize: "24px !important",
        fontWeight: "600 !important",
        lineHeight: "32px !important",
        letterSpacing: "0em !important",
        textAlign: "center !important",
        color: "#000000 !important"
    },
    text: {
        fontFamily: "Open Sans !important",
        fontSize: "14px !important",
        lineHeight: "19px !important",
        padding: '4px 0',
        fontWeight: "400 !important",
        fontStyle: 'regular'
    },
    button: {
        textAlign: "center !important",
        fontWeight: "600 !important",
        color: "#fff !important",
        width: '85px',
        height: "39px",
        textTransform: "none !important",
        backgroundColor: '#F0682C !important',
        position: 'fixed !important',
        bottom: '84px',
    }
}))

export default function ResponsiveDrawer(props) {
    const { window } = props;
    const location = useLocation()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [active, setActive] = React.useState(location.pathname === '/home' ? 'home' : '');
    const navigate = useNavigate()
    const menuId = 'primary-search-account-menu';
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const admin =false



    const Menu = [
        {
            icon: admin ? UserIcon : HomeIcon,
            active: admin ? ActiveUserIcon : ActiveHomeIcon,
            text: admin ? "Users" : "Home",
            id: admin ? "user" : 'home',
            path: admin ? "/user" : '/home'
        },
        {
            icon: UserIcon,
            active: ActiveUserIcon,
            text: "Users",
            id: 'user',
            path:'/user'
        },
        {
            icon: RecentIcon,
            active: ActiveRecentIcon,
            text: "Recent",
            id: 'recent',
            path:'/home'
        },
        {
            active: ActiveShareIcon,
            icon: ShareIcon,
            text: "Favourite",
            id: 'favourite',
            path:'/home'
        },
        {
            icon: DeleteIcon,
            active: ActiveDeleteIcon,
            text: "Trash",
            id: 'trash',
            path:'/home'
        }
    ]

    React.useEffect(() => {

    }, [location.pathname])

    const drawer = (
        <div>
            <List>
                <div className={classes.menuLogo}>
                    <img src={MenuLogo} alt="logo" />
                </div>
                {Menu.map((item) => (
                    <ListItem key={item.text}
                        onClick={() => {
                            navigate(item.path)
                            setActive(item.id)
                        }}
                        disablePadding sx={{ display: 'block', pr: 2, pl: active !== item.id && 2, py: 3, display: 'flex', flexDirection: 'row' }}>
                        {active === item.id && <img src={ActiveIcon} />}
                        <Button
                            disableRipple
                            sx={{
                                minHeight: 48,
                                textTransform: "none",
                                p: 2.5,
                                textAlign: "center"
                            }}>
                            <div >
                                <img src={active === item.id ? item.active : item.icon} alt={item.text} width={23} />
                                <Typography className={classes.menuText} style={{ fontWeight: active === item.id ? 600 : 400 }}>{item.text}</Typography>
                            </div>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const breadcrumbs = [
        <Link mx={0.5} underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            <img src={BreadcrumbIcon} alt="" />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >

        </Link>
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: 'none'
                }}
            >
                <Toolbar sx={{ pt: 3, pb: 1, backgroundColor: '#f4f5f6' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.header}>
                        Settings
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <TextField
                        variant="standard"
                        size="small"
                        placeholder='Search anything here'
                        id="outlined-start-adornment"
                        sx={{ borderRadius: '8px', mb: '5px', padding: "6px", backgroundColor: "#fff" }}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: <InputAdornment sx={{ pl: 1, mb: '4px' }} position="start"> <img src={SearchIcon} alt="" /></InputAdornment>,
                        }}
                    />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 1, mb: 1 }}>
                        <IconButton
                            disableRipple={true}
                            size="large"
                            edge="end"
                            sx={{ backgroundColor: "#fff", mx: 1, width: '30px', p: 1, height: '40px', borderRadius: '10px', width: '40px' }}
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            //   onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <img src={NotificationsIcon} alt="settings"></img>
                        </IconButton>
                        <IconButton
                            disableRipple

                            sx={{ backgroundColor: location.pathname === "/settings" ? '#F0682C' : "#fff", mx: 1, width: '30px', p: 1, height: '40px', borderRadius: '10px', width: '40px' }}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            //   onClick={handleProfileMenuOpen}
                            color="inherit"
                            onClick={() => {
                                navigate('/settings')
                                setActive('')
                            }}
                        >
                            <img src={location.pathname === "/settings" ? ActiveSettingsIcon : SettingsIcon} alt="settings"></img>
                        </IconButton>
                        <IconButton
                            disableRipple={true}
                            sx={{ mr: 3, ml: 1, width: '30px', height: '40px', borderRadius: '10px', width: '40px' }}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            //   onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <img src={ProfileLogo} style={{ borderRadius: '8px' }} width={40} height={40} alt="settings"></img>
                        </IconButton>
                    </Box>
                </Toolbar>
                <Divider sx={{ mx: 3 }} />
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        height: 'auto',
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f5f6', minHeight: '100vh', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Card sx={{ mt: 10, display: "flex", p: '6px 12px 4px', width: 'fit-content', pb: '0px', borderRadius: '4px' }}>

                    <Breadcrumbs
                        separator={<img src={nextIcon} style={{ marginBottom: '4px' }} fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Card>
                <Outlet />

            </Box>
        </Box>
    );
}
