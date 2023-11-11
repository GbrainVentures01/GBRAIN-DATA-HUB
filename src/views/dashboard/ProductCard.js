import { Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { icon, name, url, image } = product;
    return (
        <Grid item xs={6}>
            {product.external ? (
                <Link to={url} style={{ textDecoration: 'none' }}>
                    <Paper variant="elevation" elevation={3} sx={{ py: 2.2, textAlign: 'center' }}>
                        {icon ? (
                            <Box sx={{ mb: 0.5 }}>{icon}</Box>
                        ) : (
                            <img
                                alt="icon"
                                src={image}
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    marginTop: '8px',
                                    marginBottom: '8px'
                                }}
                            />
                        )}

                        {/* <Typography variant="h6">h6</Typography> */}
                        <Typography sx={{ fontSize: '.8rem', fontFamily: 'Avant', textTransform: 'uppercase' }} variant="subtitle1">
                            {name}
                        </Typography>
                    </Paper>
                </Link>
            ) : (
                <Link to={url} style={{ textDecoration: 'none' }}>
                    <Paper variant="elevation" elevation={3} sx={{ py: 2.2, textAlign: 'center' }}>
                        {icon ? (
                            <Box sx={{ mb: 0.5 }}>{icon}</Box>
                        ) : (
                            <img
                                alt="icon"
                                src={image}
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    marginTop: '8px',
                                    marginBottom: '8px'
                                }}
                            />
                        )}
                        {/* <Typography variant="h6">h6</Typography> */}
                        <Typography
                            sx={{
                                // fontWeight: 'bold',
                                fontSize: '.8rem',
                                fontFamily: 'Avant',
                                textTransform: 'uppercase'
                            }}
                            variant="subtitle1"
                        >
                            {name}
                        </Typography>
                    </Paper>
                </Link>
            )}
        </Grid>
    );
};

export default ProductCard;
