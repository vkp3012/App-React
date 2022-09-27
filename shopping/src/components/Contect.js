import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
// import TwitterIcon from '@mui/icons-material/Twitter';
import Twitter from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import { display } from '@mui/system';

function stringToColor(string) {
  let hash = 130;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontSize: 165
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Grid = styled(MuiGrid)(({ theme }) => ({
  // width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 6),
  },
}));

function Contect() {
  const content = (
    <div >
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <div style={{ width: "97vw", display: "flex", alignItems: "center", justifyContent: "space-around", margin: "1rem" }}>
      <Grid container className='content' >
        <Grid item>
          <Stack>
            <Avatar style={{ width: "20vw",height:"40vh" }} {...stringAvatar('Vivek Patel')} />
          </Stack>
        </Grid>

        <Divider orientation="vertical" flexItem>
          Vivek Kumar Patel
        </Divider>

        <Grid item xs >
          {content}
          <div style={{margin:"2rem"}}>
            <IconButton 
              aria-label="facebook" 
              style={{padding:"1rem" ,fontsize:"large"}} 
              color="primary"
              fontSize="large"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="facebook" style={{padding:"1rem"}} color="primary">
              <Twitter />
            </IconButton>
            <IconButton aria-label="facebook" style={{padding:"1rem"}} color="primary">
              <MailIcon />
            </IconButton>
            <IconButton aria-label="facebook" style={{padding:"1rem",}} color="primary">
              <ContactPhoneIcon />
            </IconButton>
          </div>

        </Grid>


      </Grid>
    </div>
  )
}

export default Contect