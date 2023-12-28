import { Grid, Paper, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { userAction } from 'store/actions';
import MainCard from 'ui-component/cards/MainCard';

const FundingSelection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');

        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    const methods = [
        {
            name: 'Bank Transfer',
            description: 'Best option (Fastest)'
        },
        {
            name: 'Monify ',
            description: 'Second Option'
        },
        {
            name: 'Flutterwave ',
            description: 'Third Option(Fast)'
        },
        {
            name: 'Credo ',
            description: 'Poor Option'
        }
    ];

    return (
        <MainCard title="Fund Wallet By Selecting Your Preferred Payment Method ">
            {/* <>
                <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1.75 }}>
                    Bank Transfer
                </Typography>
                <Typography variant="body" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                    These are your unique monnify vitual accounts, you can always transfer to it anytime and it will reflect immediately and
                    automatically in your wallet. Note: Charges of 1.65% will be deducted from amount deposited.
                </Typography>
            </> */}
            <Grid container spacing={2}>
                {methods.map(({ name, description }) => (
                    <Grid key={name} item xs={12} md={6} lg={6}>
                        <Link to={`/fund?option=${name}`} style={{ textDecoration: 'none' }}>
                            <Paper variant="outlined" sx={{ mt: 2, py: 1, textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1 }} variant="subtitle1">
                                    {description}
                                </Typography>
                                <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1 }} variant="subtitle1">
                                    {name}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </MainCard>
    );
};

export default FundingSelection;
