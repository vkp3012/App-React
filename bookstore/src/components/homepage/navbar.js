import React from 'react'
import { Link } from 'react-router-dom'
import login from '../loginpage/login'
import '../styles/nav.css'
function navbar() {
  return (
    <nav class="navbar bg-black" data-bs-theme="dark">
    {/* <!-- Navbar content --> */}
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <i class="bi bi-book"></i>
                <a class="navbar-brand" href="#">Book Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">All Book</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            New Book
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Cart</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <a class="nav-link active"  href="#" >
                                <button class='login-button'>
                                    <Link to = '/login' style={{ textDecoration: "none" }}>
                                            Login
                                        <span>{login}</span>
                                    </Link>
                                </button>                               
                            </a>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
    </nav>
    )
}

export default navbar