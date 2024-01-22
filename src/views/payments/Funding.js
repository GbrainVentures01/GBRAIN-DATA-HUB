import { Button, Grid, Paper, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { fundWalletWithMonnify, userAction } from 'store/actions';
import { CustomTextField } from 'ui-component/basic-inputs';
import MainCard from 'ui-component/cards/MainCard';
import FeedBack from 'views/feedBack';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';

const Funding = () => {
    const { fundWithMonnify, loggedInUser } = useSelector((state) => state);
    const { user } = loggedInUser;
    const { loading } = fundWithMonnify;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [method, setmethod] = useState({
        'Bank Transfer': false,
        Monify: false,
        Flutterwave: false,
        Credo: false
    });
    const [searchParams] = useSearchParams();
    useEffect(() => {
        searchParams.get('option') &&
            setmethod((prev) => {
                return {
                    ...prev,
                    [searchParams.get('option')]: true
                };
            });
    }, [searchParams]);

    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');

        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);

    useEffect(() => {
        if (Object.keys(user).length === 0) return;
        console.log('USER: ', user);
        if (!user?.hasAccountNum) {
            setshowAlert((prevAlert) => true);
        }
    }, [user]);

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
        <MainCard title="Fund Wallet ">
            {method['Bank Transfer'] && user?.hasAccountNum && (
                <>
                    <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1.75 }}>
                        Bank Transfer
                    </Typography>
                    <Typography variant="body" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                        These are your unique monnify vitual accounts, you can always transfer to it anytime and it will reflect immediately
                        and automatically in your wallet. Note: Charges of 1.65% will be deducted from amount deposited.
                    </Typography>
                </>
            )}
            {method['Bank Transfer'] && user?.hasAccountNum ? (
                <Grid container spacing={3}>
                    {user.monnify_bank_details.map((acc, index) => (
                        <Grid key={index} item xs={12} md={3}>
                            <Paper variant="outlined" sx={{ mt: 2, py: 1.5, textAlign: 'center' }}>
                                <Typography variant="subtitle1">Bank Name: {acc.bank_name}</Typography>
                                <Typography variant="subtitle1">Account Number: {acc.account_number}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <></>
            )}
            {method['Monify'] && (
                <>
                    <Typography variant="h4" sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1.75 }}>
                        Monnify
                    </Typography>
                    <Typography variant="body" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                        Enter amount to fund and you will be redirected to monnify payment gateway.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>
                        You can choose any payment method you are comfortable with, after payment is successful, you will be redirected back
                        to our website.
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
                                    onClick={() => handleSubmit({ values, gateway: 'monify' })}
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                >
                                    Pay Now
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </>
            )}

            {method['Flutterwave'] && (
                <>
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
                        You can choose any payment method you are comfortable with, after payment is successful, you will be redirected back
                        to our website.
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
                </>
            )}
            {method['Credo'] && (
                <>
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
                        You can choose any payment method you are comfortable with, after payment is successful, you will be redirected back
                        to our website.
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
                </>
            )}

            <FeedBack
                title={'Account Transfer Now Available'}
                message={'Generate your monnify funding bank account number now'}
                type="info"
                setshowAlert={setshowAlert}
                showAlert={showAlert}
                goHome={false}
                from={'fund'}
            />
        </MainCard>
    );
};

export default Funding;
