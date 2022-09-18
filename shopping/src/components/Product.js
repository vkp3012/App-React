import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Product() {
    const [value, setValue] = React.useState(2);

    return (
        <div>
            {/* <Home /> */}
            <Box sx={{ width: 1 }}>

                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 8">
                        <Item>
                            <Card sx={{ maxWidth: '80vw', height: "80vh", margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="540"
                                        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0434%2F0285%2F4564%2Fproducts%2FSide_748811db-ccd1-48c7-9dcd-64ec2ec88993.png%3Fv%3D1623255894&w=1200&q=85"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Item>
                    </Box>

                    <Box gridColumn="span 4">
                        <Item>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    NEXT JS T-SHIRT
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Men T-SHIRT
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rs. 3000₹
                                </Typography>
                                
                            </CardContent>

                            <h4>SIZE</h4>
                            <Stack direction="row" spacing={2}>
                                <Avatar>S</Avatar>
                                <Avatar>M</Avatar>
                                <Avatar>L</Avatar>
                                <Avatar>XL</Avatar>
                                <Avatar>XLL</Avatar>
                            </Stack>

                            <div style={{
                                margin: "20px",
                                display: "flex",
                                alignItems: "flex-end"
                            }}>
                                <p>
                                    Show off your love for Next.js and Vercel with this unique, limited edition t-shirt.
                                    This design is part of a limited run, numbered drop at the June 2021 Next.js Conf.
                                    It features a unique, handcrafted triangle design. Get it while supplies last – only 200
                                    of these shirts will be made! All proceeds will be donated to charity.
                                </p>
                            </div>



                            <Box
                                sx={{
                                    margin: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent:"space-between"
                                }}
                            >
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}

                                    reviews="36 Reviews"
                                />
                                <p>36 Reviews</p>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', backgroundColor: "blue", margin: "5px" }}>
                                <Button sx={{ width: '100%', color: "white" }}>Add to cart</Button>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', backgroundColor: "blue", margin: "5px" }}>
                                <Button sx={{ width: '100%', color: "white" }}>BUY NOW</Button>
                            </Box>

                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <ArrowForwardIosIcon fontSize="small" className="nav-icons" /> Care</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            This is a limited edition production run. 
                                            Printing starts when the drop ends.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>
                                            <ArrowForwardIosIcon fontSize="small" className="nav-icons" />
                                                Details
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            This is a limited edition production run.
                                            Printing starts when the drop ends. Reminder: Bad Boys For Life.
                                            Shipping may take 10+ days due to COVID-19.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </Item>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Product