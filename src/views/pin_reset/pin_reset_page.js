import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { UpdateUserAction, userAction } from 'store/actions';
import MainCard from 'ui-component/cards/MainCard';

const PinReset = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');

        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    const { loggedInUser, updateUser } = useSelector((state) => state);
    const { loading } = loggedInUser;
    const { Update_user_loading } = updateUser;
    const matches = useMediaQuery('(min-width:600px)');
    const pinRef = useRef();
    const confirmPinRef = useRef();

    const handlePinChange = () => {
        if (!pinRef.current.values || !confirmPinRef.current.values) {
            enqueueSnackbar('provide transaction pin to proceed', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        if (pinRef.current.values.join('') !== confirmPinRef.current.values.join('')) {
            enqueueSnackbar('pin and confirm pin must match ', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        dispatch(UpdateUserAction({ user: { pin: confirmPinRef.current.values.join('') }, enqueueSnackbar }));
    };
    return (
        <MainCard
            title=" Reset Your Transaction Pin"
            sx={{
                width: matches ? '50%' : '100%'
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Typography variant="h4">Transaction Pin Reset</Typography>
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Typography variant="h5">Enter New Transaction Pin</Typography>
                    <br />
                    <PinInput
                        style={{
                            margin: 'auto'
                        }}
                        length={4}
                        initialValue=""
                        secret={false}
                        ref={(n) => (pinRef.current = n)}
                        type="numeric"
                        inputMode="number"
                        inputStyle={{ borderColor: 'black' }}
                        inputFocusStyle={{ borderColor: 'blue' }}
                        onComplete={(value, index) => {}}
                        autoSelect={false}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Typography variant="h5">Confirm New Transaction Pin</Typography>
                    <br />
                    <PinInput
                        style={{
                            margin: 'auto'
                        }}
                        length={4}
                        initialValue=""
                        secret
                        ref={(n) => (confirmPinRef.current = n)}
                        type="numeric"
                        inputMode="number"
                        inputStyle={{ borderColor: 'black' }}
                        inputFocusStyle={{ borderColor: 'blue' }}
                        onComplete={(value, index) => {}}
                        autoSelect={false}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="secondary"
                        onClick={handlePinChange}
                        disabled={loading || Update_user_loading ? true : false}
                    >
                        Change Pin
                    </Button>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default PinReset;
