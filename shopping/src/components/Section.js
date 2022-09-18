import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Section() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={2}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 'auto',
                            '& ul': { padding: 0 },
                            fontWeight: "bold"
                        }}
                        subheader={<li />}
                    >
                        {["MEN", "WOMEN", "KIDS", "SHOES", "BEAUTY", "HOME"].map((sectionId) => (
                            <li key={`section-${sectionId}`}>
                                <ul>
                                    <ListSubheader>{`${sectionId}`}</ListSubheader>
                                    {[0, 1, 2].map((item) => (
                                        <ListItem key={`item-${sectionId}-${item}`}>
                                            <ListItemText primary={`Item ${item}`} />
                                        </ListItem>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </List>
                </Grid>

                <Grid item xs={10}>
                    <Item >

                        <div className='card'>
                            <Card
                                sx={{
                                    maxWidth: '50%',
                                    margin: '10px',
                                    textDecoration: "none"
                                }}
                            >
                                <Link to="/product"
                                    style={{
                                        maxWidth: '100%',
                                        margin: '10px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        textDecoration: "none"
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Next JS T-SHIRT
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Men T-SHIRT
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                                <CardActions >
                                    <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                        Buy
                                    </Button>
                                </CardActions>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </Card>


                            <Card sx={{ maxWidth: '50%',
                                    margin: '10px',
                                    textDecoration: "none" }}>
                                <Link to="/product"
                                    style={{
                                        maxWidth: '100%',
                                        margin: '10px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        textDecoration: "none"
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Next JS T-SHIRT
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Men T-SHIRT
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                                <Button size="small" color="primary" sx={{ width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </Card>

                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                    Buy
                                </Button>
                                <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: '30%', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Link to="/product"
                                style={{
                                    maxWidth: '100%',
                                    margin: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    textDecoration: "none"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Next JS T-SHIRT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Men T-SHIRT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        <CardActions>
                            <Button size="small" color="primary" sx={{ alignItems: "center", width: "23vw", backgroundColor: "blue", color: "red" }}>
                                Buy
                            </Button>
                            <h5 sx={{ margin: '40px', backgroundColor: "blue", height: "10px" }}>
                                    Rs. 3000₹
                                </h5>
                        </CardActions>
                    </Card>
                </div>
            </Item>
        </Grid>
        </Grid >
        </Box >
    )
}

export default Section