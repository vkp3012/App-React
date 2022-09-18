import React from 'react'
import TextField from "@mui/material/TextField";


function Login() {
  return (
    <div className="login-container" >
        <div className="insta-mob-bg">
        <div className="login-card">

        <h1 class="login-heading">
                Login
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
            label="Password"
            variant="outlined"
            // fullWidth
            margin="10px"
            type="password"
            padding="10px"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>  
        </div>
    </div>
  )
}

export default Login