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
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { useTreeItem } from '@mui/lab/TreeItem';
import clsx from 'clsx';

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = (event) => {
        preventSelection(event);
    };

    const handleExpansionClick = (event) => {
        handleExpansion(event);
    };

    const handleSelectionClick = (event) => {
        handleSelection(event);
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div onClick={handleExpansionClick} className={classes.iconContainer}>
                {icon}
            </div>
            <Typography
                onClick={handleSelectionClick}
                component="div"
                className={classes.label}
            >
                {label}
            </Typography>
        </div>
    );
});


CustomContent.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    /**
     * className applied to the root element.
     */
    className: PropTypes.string,
    /**
     * The icon to display next to the tree node's label. Either a parent or end icon.
     */
    displayIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label. Either an expansion or collapse icon.
     */
    expansionIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label.
     */
    icon: PropTypes.node,
    /**
     * The tree node label.
     */
    label: PropTypes.node,
    /**
     * The id of the node.
     */
    nodeId: PropTypes.string.isRequired,
};

const CustomTreeItem = (props) => (
    <TreeItem ContentComponent={CustomContent} {...props} />
);



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
                    <TreeView
                        aria-label="icon expansion"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        sx={{ height: 600, flexGrow: 1, maxWidth: 1000, overflowY: 'auto' }}
                    >
                        <CustomTreeItem nodeId="1" label="Men">
                            <CustomTreeItem nodeId="2" label="T-Shirt" />
                            <CustomTreeItem nodeId="3" label="Shirt" />
                            <CustomTreeItem nodeId="4" label="Showes" />
                        </CustomTreeItem>
                        <CustomTreeItem nodeId="5" label="Documents">
                            <CustomTreeItem nodeId="10" label="OSS" />
                            <CustomTreeItem nodeId="6" label="MUI">
                                <CustomTreeItem nodeId="7" label="src">
                                    <CustomTreeItem nodeId="8" label="index.js" />
                                    <CustomTreeItem nodeId="9" label="tree-view.js" />
                                </CustomTreeItem>
                            </CustomTreeItem>
                        </CustomTreeItem>
                        <CustomTreeItem nodeId="11" label="Documents">
                            <CustomTreeItem nodeId="16" label="OSS" />
                            <CustomTreeItem nodeId="12" label="MUI">
                                <CustomTreeItem nodeId="13" label="src">
                                    <CustomTreeItem nodeId="14" label="index.js" />
                                    <CustomTreeItem nodeId="15" label="tree-view.js" />
                                </CustomTreeItem>
                            </CustomTreeItem>
                        </CustomTreeItem>
                        <CustomTreeItem nodeId="17" label="Documents">
                            <CustomTreeItem nodeId="22" label="OSS" />
                            <CustomTreeItem nodeId="18" label="MUI">
                                <CustomTreeItem nodeId="19" label="src">
                                    <CustomTreeItem nodeId="20" label="index.js" />
                                    <CustomTreeItem nodeId="21" label="tree-view.js" />
                                </CustomTreeItem>
                            </CustomTreeItem>
                        </CustomTreeItem>
                        <CustomTreeItem nodeId="23" label="Men">
                            <CustomTreeItem nodeId="24" label="T-Shirt" />
                            <CustomTreeItem nodeId="25" label="Shirt" />
                            <CustomTreeItem nodeId="26" label="Showes" />
                        </CustomTreeItem>
                        <CustomTreeItem nodeId="27" label="Men">
                            <CustomTreeItem nodeId="28" label="T-Shirt" />
                            <CustomTreeItem nodeId="19" label="Shirt" />
                            <CustomTreeItem nodeId="30" label="Showes" />
                        </CustomTreeItem>
                    </TreeView>
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


                            <Card sx={{
                                maxWidth: '50%',
                                margin: '10px',
                                textDecoration: "none"
                            }}>
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