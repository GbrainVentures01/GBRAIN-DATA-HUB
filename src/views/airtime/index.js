// material-ui
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyAirtime } from 'store/actions';
import { CustomButton, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import FeedBack from '../feedBack';

// ==============================|| SAMPLE PAGE ||============================== //

const BuyAirtime = ({ title, network }) => {
    const { airtimeOrder } = useSelector((state) => state);
    const { loading, airtime, error } = airtimeOrder;
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
    }, [navigate]);

    const INITIAL_FORM_VALUES = {
        beneficiary: '',
        amount: '',
        network: network
    };
    const VALIDATIONS = yup.object().shape({
        beneficiary: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number'),
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number'),
        network: yup.string()
    });

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const body = {
            beneficiary: values.beneficiary,
            serviceID: values.network,
            request_id: generateRequestId(),
            amount: values.amount,
            network: values.network
        };
        console.log(body);
        dispatch(
            buyAirtime({
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
                                    <CustomTextField name="beneficiary" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="amount" label="Airtime Amount" />
                                </Grid>
                                <Grid item xs={12} style={{ display: 'none' }}>
                                    <CustomTextField name="network" label="Network" value={(values.network = network)} />
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

export default BuyAirtime;
