import React from 'react'
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Signup() {
  return (
    <div className='login'>
      <img src='https://th.bing.com/th/id/OIP.lLaLjbpQ1y05HaHXHcDeqgHaE8?pid=ImgDet&rs=1' />
      <div className="login-container" >
        <h1 style={{margin:"5rem",fontSize:"7rem"}}>Welcome to ShopPerZ !</h1>
        <div className="insta-mob-bg">
          <div className="login-card">

            <h1 class="login-heading">
              Signup
            </h1>

            <a class="navbar-brand" href="#">
              ShopPerZ
            </a>

            <TextField
              id="outlined-basic"
              size="small"
              label="Email"
              variant="outlined"
              // fullWidth
              margin="dense"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              size="small"
              label="Full Name"
              variant="outlined"
              // fullWidth
              margin="10px"
              type="password"
              padding="10px"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              size="small"
              label="Password"
              variant="outlined"
              // fullWidth
              margin="10px"
              type="password"
              padding="10px"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            />

            

            <Button
              style={{ marginTop: "0.5rem", width: "10rem" }}
              variant="contained"
              component="label"
              fullWidth
            // onClick={handleClick}
            // disabled={loading}
            >
              Signup 
            </Button>

            <div className="bottom-card">
              Already Have an account ?{" "}
              <Link to="/Login">
                <span style={{ color: "blueviolet" }}>Login</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup