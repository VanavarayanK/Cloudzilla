import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Delete from './../../images/home/delete.svg'
import Download from './../../images/home/download.svg'
import Copy from './../../images/home/copy.svg'
import Move from './../../images/home/move.svg'
import More from './../../images/home/moreIcon.svg'
import Rename from './../../images/home/Rename.svg'
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import CloseIcon from './../../images/home/close.svg'
// import { IconButton } from '@mui/material';


const StyledMenu = styled((props) => (
    <Menu
       
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const actions = [{
        icon: Copy,
        name: "Copy"
    },
    {
        icon: Move,
        name: "Move"
    },
    {
        icon: Delete,
        name: "Delete"
    },
    {
        icon: Rename,
        name: "Rename"
    },
    {
        icon: Download,
        name: "Download"
    }
    ]

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-haspopup="true"
                variant="iconButton"
                disableRipple
                disableElevation
                onClick={handleClick}
                disableFocusRipple
            // endIcon={<KeyboardArrowDownIcon />}
            >
                <img src={More} alt="" />
            </Button>
            <StyledMenu

                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                {
                    actions.map((item) => {
                        return (
                            <MenuItem key={item.name} onClick={handleClose} disableRipple>
                                <img src={item.icon} width={14} alt="" />
                                <Typography variant="menu" ml={1}> {item.name}</Typography>
                            </MenuItem>
                        )
                    })
                }
            </StyledMenu>
        </div>
    );
}