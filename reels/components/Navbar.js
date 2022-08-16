import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import insta from '../assets/Instagram.jpg'
import Image from 'next/image'
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

// const pages = ['Products', 'Pricing', 'Blog'];
// import {chat} from './chat'
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
// import { async } from '@firebase/util';

// const settings = ['Profile', 'Setting', 'Logout'];

const adds = ['UPLOAD VIDEO'];

const ResponsiveAppBar = () => {

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [anchorElVideo, setAnchorElVideo] = React.useState(null);

    
    const { logout } = React.useContext(AuthContext);
    const { profile } = React.useContext(AuthContext);
    const { about } = React.useContext(AuthContext);
    const { chat } = React.useContext(AuthContext);
    const router = useRouter();

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


    const handleLogout = async() => {
        await logout();
        router.push('/login')
    }

    const handleProfile = async() => {
        // await profile();
        router.push('/profile')
    }

    const handleAbout = async() => {
        // await profile();
        router.push('/about')
    }

    const handleChat = async() => {
        router.push('/chat')
    }

    const handleHome = async() => {
        router.push('/home')
    }

    const handleOpenUserExplore = async() => {
        router.push('/explore')
    }


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
                            <IconButton onClick={() => handleHome()} sx={{ p: 0 }} >
                                <HomeIcon fontSize='large' className='nav-icons' />
                            </IconButton>
                        </Tooltip>

                        {/* chat */}
                        <Tooltip title="Chat">
                            <IconButton  onClick={() => handleChat()} sx={{ p: 0 }} >
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
                            <IconButton onClick={handleOpenUserExplore} sx={{ p: 0 }} >
                                <ExploreIcon fontSize='large' className='nav-icons' />
                            </IconButton>
                        </Tooltip>


                        <Tooltip title="Setting">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt="Vivek Patel"
                                    src="/static/images/avatar/10.jpg"
                                    sx={{ margin: "0.5rem" }}
                                />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
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

                            <MenuItem onClick={()=> {
                                handleProfile()
                                handleCloseUserMenu()
                            }}>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>

                            <MenuItem onClick={()=> {
                                handleAbout()
                                handleCloseUserMenu()
                            }}>
                                <Typography textAlign="center">About</Typography>
                            </MenuItem>

                            <MenuItem onClick={() => {
                                handleLogout()
                                handleCloseUserMenu()
                            }}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
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
