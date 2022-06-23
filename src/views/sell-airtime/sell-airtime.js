// material-ui
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sellAirtime } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import { network } from '_mocks_/networks';
import FeedBack from '../feedBack';

// ==============================|| SAMPLE PAGE ||============================== //

const SellAirtime = ({ title }) => {
    const { sellAirtimeOrder } = useSelector((state) => state);
    const { loading, airtime, error } = sellAirtimeOrder;
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
    }, [navigate]);

    const INITIAL_FORM_VALUES = {
        account_number: '',
        phone_number: '',
        account_name: '',
        amount: '',
        network: network
    };
    const VALIDATIONS = yup.object().shape({
        phone_number: yup.string().required('Please enter phone number').typeError('phone number must be a number'),
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number'),
        network: yup.string().required('please select a airtime network').typeError('This must be a string'),
        account_name: yup.string().required('Enter account name to be credited').typeError('This must be a string'),
        account_number: yup.string().required('Enter account number to be credited').typeError('This must be a string')
    });

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const body = {
            phone_number: values.phone_number,
            account_name: values.account_name,
            account_number: values.account_number,
            request_id: generateRequestId(),
            amount: values.amount,
            network: values.network
        };
        dispatch(
            sellAirtime({
                orderDetails: {
                    data: body
                },
                enqueueSnackbar,
                setshowAlert,
                setErrorAlert: setshowErrorAlert
            })
        );
    };

    return (
        <MainCard title={title}>
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '60vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomTextField name="amount" label="Airtime Amount" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomSelect name="network" options={network} label="Select Airtime Network" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="account_name" label="Beneficiary Account Name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="account_number" label="Beneficiary Account Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="phone_number" label="Phone Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton color="primary" disabled={loading ? true : false}>
                                        Submit
                                    </CustomButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>

            {<FeedBack setshowAlert={setshowAlert} showAlert={showAlert} message={airtime?.data?.message} variant="success" />}
            {<FeedBack setshowErrorAlert={setshowErrorAlert} showErrorAlert={showErrorAlert} message={error} variant="error" />}
        </MainCard>
    );
};

export default SellAirtime;
