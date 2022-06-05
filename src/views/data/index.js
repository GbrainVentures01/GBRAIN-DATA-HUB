// material-ui
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyData, getAirtelData, getGloData, getMtnData } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import FeedBack from 'views/feedBack';
import * as yup from 'yup';

// ==============================|| SAMPLE PAGE ||============================== //

const BuyData = ({ title, network }) => {
    const { myGloDataPlans, myMtnDataPlans, myAirtelDataPlans, dataOrder } = useSelector((state) => state);

    const { gloDataPlans } = myGloDataPlans;
    const { mtnDataPlans } = myMtnDataPlans;
    const { airtelDataPlans } = myAirtelDataPlans;
    const { loading, data, error } = dataOrder;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
        dispatch(getGloData());
        dispatch(getMtnData());
        dispatch(getAirtelData());
    }, [dispatch, navigate]);

    const INITIAL_FORM_VALUES = {
        beneficiaryNum: '',
        amount: '',
        plan: '',
        network: ''
    };
    const VALIDATIONS = yup.object().shape({
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number'),
        amount: yup.number().integer().typeError('Amount Value must be a number'),
        plan: yup.object().required('Please select data plan'),
        network: yup.string().required('Please select data plan')
    });

    const returnPlan = (network) => {
        switch (network) {
            case 'Glo':
                return gloDataPlans;

            case 'Mtn':
                return mtnDataPlans;
            case 'Airtel':
                return airtelDataPlans;

            default:
                return [];
        }
    };
    const handleSubmit = (values) => {
        const body = {
            beneficiary: values.beneficiaryNum,
            amount: values.amount,
            plan: values.plan.Plan,
            network: values.network
        };
        dispatch(
            buyData({
                orderDetails: {
                    data: { ...body }
                },
                enqueueSnackbar
            })
        );
    };
    return (
        <MainCard title={title}>
            <Formik
                initialValues={{ ...INITIAL_FORM_VALUES }}
                enableReinitialize={true}
                onSubmit={handleSubmit}
                validationSchema={VALIDATIONS}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '60vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomSelect name="plan" options={returnPlan(network)} label="Select Plan" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        name="amount"
                                        disabled
                                        value={(values.amount = values.plan.Price)}
                                        placeholder="Amount"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ display: 'none' }}>
                                    <CustomTextField name="network" disabled value={(values.network = network)} placeholder="Amount" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton disabled={loading ? true : false}>Submit</CustomButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>
            {data.data && <FeedBack message={data?.data?.message} variant="success" />}
            {error && <FeedBack message={error} variant="error" />}
        </MainCard>
    );
};

export default BuyData;
