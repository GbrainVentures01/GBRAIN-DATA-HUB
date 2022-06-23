import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ProductCard from 'views/dashboard/ProductCard';

const SelectDataView = ({ dataplans }) => {
    return (
        <MainCard>
            <Card
                sx={{
                    maxWidth: '50%'
                }}
            >
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
