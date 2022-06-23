import { Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { icon, name, url, image } = product;
    return (
        <Grid item xs={6}>
            {product.external ? (
                <Link to={url} style={{ textDecoration: 'none' }}>
                    <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
                        {icon ? (
                            <Box sx={{ mb: 0.5 }}>{icon}</Box>
                        ) : (
                            <img
                                alt="icon"
                                src={image}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    marginTop: '8px',
                                    marginBottom: '8px'
                                }}
                            />
                        )}

                        {/* <Typography variant="h6">h6</Typography> */}
                        <Typography variant="subtitle1">{name}</Typography>
                    </Paper>
                </Link>
            ) : (
                <Link to={url} style={{ textDecoration: 'none' }}>
                    <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
                        {icon ? (
                            <Box sx={{ mb: 0.5 }}>{icon}</Box>
                        ) : (
                            <img
                                alt="icon"
                                src={image}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    marginTop: '8px',
                                    marginBottom: '8px'
                                }}
                            />
                        )}
                        {/* <Typography variant="h6">h6</Typography> */}
                        <Typography variant="subtitle1">{name}</Typography>
                    </Paper>
                </Link>
            )}
        </Grid>
    );
};

export default ProductCard;
