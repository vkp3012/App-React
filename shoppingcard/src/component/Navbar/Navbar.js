import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <AppBar position='static'>
                <Toolbar className='navbar' position='static'>   
                    <Typography variant="h6" component="div">
                        ONLINE SHOPPING
                    </Typography>
                    <Button color="inherit">
                        CART
                        <ShoppingCartIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar