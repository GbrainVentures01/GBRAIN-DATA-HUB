import { Card, CardContent, CardHeader, Grid, useMediaQuery, Typography } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import FixedNotification from 'ui-component/fixed-notification';
import ProductCard from 'views/dashboard/ProductCard';

const SelectAirtimeView = ({ airtimeProv }) => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <>
            <MainCard
                sx={{
                    width: matches ? '50%' : '100%',
                    mt: '20px'
                }}
            >
                <FixedNotification />
                <Card>
                    <CardHeader title="Select Network" />
                    <CardContent>
                        <Grid container spacing={4}>
                            {airtimeProv.map((prov) => (
                                <ProductCard key={prov.id} product={prov} />
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </MainCard>
        </>
    );
};

export default SelectAirtimeView;
