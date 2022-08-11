// material-ui
import { Box, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSellAirtimeDetails, sellAirtime } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import FeedBack from '../feedBack';

// ==============================|| SAMPLE PAGE ||============================== //

const SellAirtime = ({ title }) => {
    const { sellAirtimeOrder, sellAirtimeDetails } = useSelector((state) => state);
    const { airtimeLoading, airtime, error } = sellAirtimeOrder;
    const { loading, airtimeDetails } = sellAirtimeDetails;
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(getSellAirtimeDetails({ enqueueSnackbar }));
    }, [navigate, dispatch, enqueueSnackbar]);
    console.log(airtimeDetails);
    const INITIAL_FORM_VALUES = {
        account_number: '',
        phone_number: '',
        account_name: '',
        amount: '',
        network: '',
        recharge_number: ''
    };
    const VALIDATIONS = yup.object().shape({
        phone_number: yup.string().required('Please enter phone number').typeError('phone number must be a number'),
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number'),
        network: yup.string().required('please select a airtime network').typeError('This must be a string'),
        account_name: yup.string().required('Enter account name to be credited').typeError('This must be a string'),
        account_number: yup.string().required('Enter account number to be credited').typeError('This must be a string')
    });

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

    function percentage(num, per) {
        return num - (num / 100) * per?.toFixed(3);
    }

    const returnPercent = (network) => {
        const net = airtimeDetails.filter((details) => details.attributes.network === network);

        return net[0]?.attributes?.charges_in_percentage;
    };

    const getRechargeNum = (network) => {
        const net = airtimeDetails.filter((details) => details.attributes.network === network);
        return net[0]?.attributes?.phone_number;
    };

    return (
        <MainCard
            title={title}
            sx={{
                overflowY: 'scroll'
            }}
        >
            <Grid
                container
                spacing={12}
                // sx={{
                //     marginBottom: '30px',
                //     overflowY: 'scroll'
                // }}
            >
                {airtimeDetails.map((details) => {
                    const liveUrl = 'https://gbrain-backend.herokuapp.com/';
                    // const testUrl = 'http://localhost:1337';
                    return (
                        <Grid item xs={3} lg={0} key={details.id}>
                            <Box>
                                <img
                                    src={liveUrl + details.attributes?.image?.data?.attributes?.url}
                                    alt="net_img"
                                    style={{
                                        width: '75px',
                                        height: '75px'
                                    }}
                                />
                                <Typography style={{}} variant="subtitle2">
                                    {` We charge ${details.attributes.charges_in_percentage} %`}
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '60vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomSelect name="network" options={airtimeDetails} label="Select Airtime Network" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="amount" label="Airtime Amount" />
                                </Grid>

                                <Grid item xs={12}>
                                    <CustomTextField
                                        name="amount_in_percent"
                                        label="You will get"
                                        // disabled
                                        values={
                                            (values.amount_in_percent =
                                                percentage(Number(values?.amount), returnPercent(values?.network)) || '')
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: values.network !== '' ? 'block' : 'none'
                                    }}
                                >
                                    <CustomTextField
                                        name="recharge_number"
                                        label="Send Airtime To"
                                        values={(values.recharge_number = getRechargeNum(values?.network) || '')}
                                    />
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
                                    <CustomButton color="primary" disabled={loading || airtimeLoading ? true : false}>
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
