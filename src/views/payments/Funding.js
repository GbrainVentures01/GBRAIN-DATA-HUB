import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { Button, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { CustomTextField } from 'ui-component/basic-inputs';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { fundWalletWithMonnify, userAction } from 'store/actions';
import { useSnackbar } from 'notistack';

const Funding = () => {
    const { fundWithMonnify } = useSelector((state) => state);
    // const { user } = loggedInUser;
    const { loading } = fundWithMonnify;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    const INITIAL_FORM_VALUES = {
        amount: ''
    };
    const VALIDATIONS = yup.object().shape({
        amount: yup.number().integer().required('Please enter amount to fund').typeError('amount must be a number')
    });
    const handleSubmit = ({ values, gateway }) => {
        dispatch(
            fundWalletWithMonnify({
                amount: {
                    data: { ...values, gateway }
                },
                enqueueSnackbar
            })
        );
    };

    return (
        <MainCard title="Fund Wallet With Credo or Flutter Wave ">
            <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1.75 }}>
                Credo
            </Typography>

            {/* <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 2.5, mb: 1.75 }}>
                Card Payment
            </Typography> */}
            <Typography variant="body" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                Enter amount to fund and you will be redirected to Credo wave payment gateway.
            </Typography>
            <br />
            <br />
            <Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                You can choose any payment method you are comfortable with, after payment is successful, you will be redirected back to our
                website.
            </Typography>
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                                <CustomTextField fullWidth={true} name="amount" label="Amount" />
                            </Grid>
                        </Grid>

                        <Button
                            disabled={loading ? true : false}
                            onClick={() => handleSubmit({ values, gateway: 'credo' })}
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Pay Now
                        </Button>
                    </Form>
                )}
            </Formik>
            <br />

            <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1.75 }}>
                Flutter Wave
            </Typography>

            {/* <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 2.5, mb: 1.75 }}>
                Card Payment
            </Typography> */}
            <Typography variant="body" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                Enter amount to fund and you will be redirected to flutter wave payment gateway.
            </Typography>
            <br />
            <br />
            <Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                You can choose any payment method you are comfortable with, after payment is successful, you will be redirected back to our
                website.
            </Typography>
            <Formik
                initialValues={{ ...INITIAL_FORM_VALUES }}
                onSubmit={handleSubmit}
                validationSchema={VALIDATIONS}
                enableReinitialize={true}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                                <CustomTextField fullWidth={true} name="amount" label="Amount" />
                            </Grid>
                        </Grid>

                        <Button
                            disabled={loading ? true : false}
                            onClick={() => handleSubmit({ values, gateway: 'fwave' })}
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Pay Now
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainCard>
    );
};

export default Funding;
