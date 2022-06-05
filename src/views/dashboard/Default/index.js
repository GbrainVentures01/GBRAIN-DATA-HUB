// material-ui
import { Grid } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { userAction } from 'store/actions';
import { gridSpacing } from 'store/constant';
// project imports
import EarningCard from './EarningCard';
import ProductListing from './ProductListing';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
        !Cookies.get('user') && navigate('/pages/login/login3');
        dispatch(userAction({ navigate }));
    }, [dispatch, navigate]);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <ProductListing isLoading={isLoading} />
                    </Grid>
                    {/* <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
