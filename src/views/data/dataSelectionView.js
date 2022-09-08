import { Card, CardContent, CardHeader, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ProductCard from 'views/dashboard/ProductCard';

const SelectDataView = ({ dataplans }) => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <MainCard
            sx={{
                width: matches ? '50%' : '100%'
            }}
        >
            <Card>
                <CardHeader title="Select Network" />
                <CardContent>
                    <Grid container spacing={2}>
                        {dataplans.map((plan) => (
                            <ProductCard key={plan.id} product={plan} />
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </MainCard>
    );
};

export default SelectDataView;
