import { Card, CardContent, CardHeader, Grid, useMediaQuery } from '@mui/material';
import { makeNetworkCall } from 'network';
import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import FixedNotification from 'ui-component/fixed-notification';
import ProductCard from 'views/dashboard/ProductCard';

const SelectDataView = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchPlans = async () => {
        setLoading(true);
        try {
            const res = await makeNetworkCall({ method: 'GET', path: 'data-type-selections?populate=*' });

            if (res.status === 200) {
                setPlans(
                    res.data.data.map((item) => {
                        return {
                            id: item.id,
                            name: item.attributes.name,
                            url: item.attributes.url,
                            image: 'https://gbrain-backend-live.herokuapp.com' + item.attributes.image.data.attributes.url ?? ''
                        };
                    })
                );
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPlans();
    }, []);

    const matches = useMediaQuery('(min-width:600px)');
    return (
        <MainCard
            sx={{
                width: matches ? '50%' : '100%'
            }}
        >
            <FixedNotification />
            <Card>
                <CardHeader title="Select Network" />
                <CardContent>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <Grid container spacing={2}>
                            {plans.map((plan) => (
                                <ProductCard key={plan.id} product={plan} />
                            ))}
                        </Grid>
                    )}
                </CardContent>
            </Card>
        </MainCard>
    );
};

export default SelectDataView;
