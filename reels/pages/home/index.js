import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../../components/Navbar'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function index() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <Grid container spacing={2} margin='2rem'>
                <Grid xs={16} md={8}>
                    <Item>
                        <Box sx={{ flexGrow: 0.1 }}>
                            <Grid container spacing={0.1} minHeight={16}>
                                <Grid xs display="flex" justifyContent="center" alignItems="flex-start">
                                    <Avatar src="../assets/bg1.jpg" alt="Vivek Patel" />
                                </Grid>
                                <Grid display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/12.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                                <Grid xs display="flex" justifyContent="center" alignItems="center">
                                    <Avatar src="/static/images/avatar/3.jpg"  alt="Vivek Patel"/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>
                    <div className = 'avatar-container'>
                            <Avatar
                                alt="Vivek Patel"
                                src="/static/images/avatar/2.jpg"
                                sx={{ margin: "0.5rem",placeItems:"center" }}
                            />
                            <div style={{display:"flex",justifyContent:"center",flexDirection:"column" ,margin:"0",columnGap:"0"}}>
                                <h4>vivek221106</h4>
                                <h2>Vivek Singh</h2>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default index