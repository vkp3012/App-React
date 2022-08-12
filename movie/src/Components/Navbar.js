import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', background: "black", color: "white", padding: '1rem', justifyContent: "flex-left", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Movies App</h1>
        </Link>

        <Link to="/fav" style={{ textDecoration: "none" }}>
          <h2 style={{ marginLeft: "2rem" }}>Favourites</h2>
        </Link>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <h2 style={{ marginLeft: "2rem" }}>About</h2>
        </Link>

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <h2 style={{ marginLeft: "35rem" }}>Profile</h2>
        </Link>
      </div>
    )
  }
}