import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import insta from '../assets/Instagram.jpg'
// import insta from '../assets/instagram.jpeg'
import Image from 'next/image'
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddBoxIcon from '@mui/icons-material/AddBox';
// import AddBox from '@mui/icons-material/AddBox';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

// const pages = ['Products', 'Pricing', 'Blog'];

const settings = ['Profile', 'Setting','Logout'];

const adds = ['UPLOAD VIDEO'];

const ResponsiveAppBar = () => {

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [anchorElVideo, setAnchorElVideo] = React.useState(null);


    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleOpenUserVideo = (event) => {
        setAnchorElVideo(event.currentTarget);
    };

    const handleCloseUserVideo = () => {
        setAnchorElVideo(null);
    };



    return (
        <AppBar position="static" className="navbar">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Image src={insta} width={200} height={55} />
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box> */}


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

                 </Box>

                    <Box sx={{ flexGrow: 0 }} className="nav-icons-container">
                        {/* Home Icon */}
                        
                        <Tooltip title="Home">
                            <IconButton sx={{ p: 0 }} >
                                <HomeIcon fontSize='large' className='nav-icons' />
                            </IconButton>
                        </Tooltip>

                        {/* chat */}
                        <Tooltip title="Chat">
                            <IconButton sx={{ p: 0 }} >
                                <ForumRoundedIcon fontSize='large' className='nav-icons' />
                            </IconButton>
                        </Tooltip>

                        {/* Add */}
                        <Tooltip title="Open upload video">
                            <IconButton onClick={handleOpenUserVideo} sx={{ p: 0 }} >
                                <AddBoxIcon fontSize='large' className='nav-icons' />
                            </IconButton>
                        </Tooltip>
                        

                        {/* explore */}
                        <Tooltip title="Explore">
                            <IconButton  sx={{ p: 0 }} >
                                <ExploreIcon fontSize='large' className='nav-icons' />
                            </IconButton>
                        </Tooltip>
                       

                        <Tooltip title="Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                    sx={{ margin: "0.5rem" }}
                                />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id = "menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        <Menu
                                sx={{ mt: '50px' }}
                                id="add-appbar"
                                anchorEl={anchorElVideo}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}

                                keepMounted

                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}

                                open={Boolean(anchorElVideo)}
                                onClose={handleCloseUserVideo}
                        >
                            {adds.map((add) => (
                                    <MenuItem key={add} onClick={handleCloseUserVideo}>
                                        <Typography textAlign="center">{add}</Typography>
                                    </MenuItem>
                            ))}

                        </Menu>
                            
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
