// material-ui
import { Grid } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getNotificationDetails, userAction, userTransactionStat } from 'store/actions';
import { gridSpacing } from 'store/constant';
// project imports
import EarningCard from './EarningCard';
import ProductListing from './ProductListing';
import { useSnackbar } from 'notistack';
import FeedBack from 'views/feedBack';
import PopularCard from './PopularCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const { notificationDetails, userStat } = useSelector((state) => state);
    const { notification } = notificationDetails;
    const { stat } = userStat;
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    // const [ setshowErrorAlert] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
        if (!Cookies.get('user')) {
            navigate('/pages/login');
            return;
        }
        dispatch(userAction({ navigate }));
        dispatch(userTransactionStat({ navigate }));
        // dispatch(userTransactionStatByDate({ navigate }));
        dispatch(getNotificationDetails({ enqueueSnackbar, setshowAlert }));
    }, [dispatch, navigate, enqueueSnackbar]);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <br />
                        <br />
                        <EarningCard isLoading={isLoading} message={notification?.message} />
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
                        <ProductListing isLoading={isLoading} stat={stat} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            {
                <FeedBack
                    from="dashboard"
                    setshowAlert={setshowAlert}
                    showAlert={showAlert}
                    title={notification?.title}
                    message={notification?.message}
                    variant="success"
                />
            }
        </Grid>
    );
};

export default Dashboard;
