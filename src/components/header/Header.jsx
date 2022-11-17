import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import avatar from "../../assets/avatar.png"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Header = () => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>

                <p>Support</p>
            </MenuItem>
            <MenuItem>

                <p>FAQ</p>
            </MenuItem>
            <MenuItem>
                <p>Notification</p>
            </MenuItem>
            <MenuItem

            >
                <Box display="flex" alignItems="center" gap="1rem">
                    <Box >
                        <Typography fontSize="15px">Oluwaleke Ojo</Typography>
                    </Box>
                    <img style={{ borderRadius: "50%" }} src={avatar} alt="avatar" />
                </Box>

            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: "#ffff", color: "#647787", padding: "0 4.5rem !important" }}>
                    <Box display="flex" alignItems="center" gap="4.5rem">


                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "#1875F0", fontWeight: "bold" } }}
                        >
                        TransMonitor
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                    </Search>
                            </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: "2rem", cursor: "pointer" }}>

                        <Typography

                            component="div"
                            sx={{}}
                        >
                            Support
                        </Typography>
                        <Typography

                            component="div"
                            sx={{}}
                        >
                            FAQ
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="show 8 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={8} color="primary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <Box display="flex" alignItems="center" gap="1rem">
                            <Box >
                                <Typography fontSize="12px" display="flex" justifyContent="flex-end">Hello</Typography>
                                <Typography fontSize="15px">Oluwaleke Ojo</Typography>
                            </Box>
                            <img style={{ borderRadius: "50%" }} src={avatar} alt="avatar" />
                        </Box>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}

export default Header;


