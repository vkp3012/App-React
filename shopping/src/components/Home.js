import React from 'react'
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Home() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">

                    <Link to="/" style={{ textDecoration: "none" }}>
                        ShopPerZ
                    </Link>

                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    Home
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <Link to="/shop" style={{ textDecoration: "none" }}>
                                    Shop
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <Link to="/ourproduct" style={{ textDecoration: "none" }}>
                                    Our Product
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <Link to="/contect" style={{ textDecoration: "none" }}>
                                    Contect Us
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <Link to="/about" style={{ textDecoration: "none" }}>
                                    About Us
                                </Link>
                            </a>
                        </li>

                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={2} color="secondary">
                                <Link to="/cart" style={{ textDecoration: "none" }}>
                                    <ShoppingCartIcon />
                                </Link>
                            </StyledBadge>
                        </IconButton>

                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    Login
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Home