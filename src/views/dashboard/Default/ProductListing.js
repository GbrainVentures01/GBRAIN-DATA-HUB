import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
// import chartData from './chart-data/total-growth-bar-chart';
import { products } from '_mocks_/products';
import ProductCard from '../ProductCard';

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const ProductListing = ({ isLoading }) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    // const { navType } = customization;
    // const { primary } = theme.palette.text;
    // const darkLight = theme.palette.dark.light;
    // const grey200 = theme.palette.grey[200];
    // const grey500 = theme.palette.grey[500];

    // const primary200 = theme.palette.primary[200];
    // const primaryDark = theme.palette.primary.dark;
    // const secondaryMain = theme.palette.secondary.main;
    // const secondaryLight = theme.palette.secondary.light;

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Card>
                        <CardHeader title="What Will You Like To Buy" />
                        <CardContent>
                            <Grid container spacing={2}>
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </MainCard>
            )}
        </>
    );
};

ProductListing.propTypes = {
    isLoading: PropTypes.bool
};

export default ProductListing;
