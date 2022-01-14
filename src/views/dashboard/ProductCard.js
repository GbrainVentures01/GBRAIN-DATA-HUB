import { Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { icon, name, url } = product;
    return (
        <Grid item xs={6}>
            <Link to={url} style={{ textDecoration: 'none' }}>
                <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
                    <Box sx={{ mb: 0.5 }}>{icon}</Box>
                    {/* <Typography variant="h6">h6</Typography> */}
                    <Typography variant="subtitle1">{name}</Typography>
                </Paper>
            </Link>
        </Grid>
    );
};

export default ProductCard;
