import React from 'react'
import Navbar from '../../components/Navbar'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';

function index() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
    }));

    const message = `Truncation should be conditionally applicable on this long line of text
       as this is a much longer line than what the container can support. `;

    return (
        <div>
            <Navbar />
            <Box sx={{ flexGrow: 1, margin: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                                <StyledPaper
                                    sx={{
                                        my: 1,
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar>V</Avatar>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>{message}</Typography>
                                        </Grid>
                                    </Grid>
                                </StyledPaper>

                                <StyledPaper
                                    sx={{
                                        my: 1,
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar>S</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography noWrap>{message}</Typography>
                                        </Grid>
                                    </Grid>
                                </StyledPaper>

                                <StyledPaper
                                    sx={{
                                        my: 1,
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar>A</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{message}</Typography>
                                        </Grid>
                                    </Grid>
                                </StyledPaper>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <Grid container spacing={2} minHeight={160}>
                                <Grid xs display="flex" justifyContent="start" alignItems="start" margin="1rem">
                                    <Avatar src="/static/images/avatar/1.jpg" />
                                    <p xs margin ="1rem"> Vivek Singh</p>
                                </Grid>
                            </Grid>

                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="" id="fullWidth" />
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default index