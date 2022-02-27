// material-ui
import { Grid, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGloData, getMtnData, getAirtelData, buyData } from 'store/actions';
import { useNavigate } from 'react-router-dom';

// ==============================|| SAMPLE PAGE ||============================== //

const BuyData = ({ title, network }) => {
    const { myGloDataPlans, myMtnDataPlans, myAirtelDataPlans, dataOrder } = useSelector((state) => state);
    const { gloDataPlans, error, loading } = myGloDataPlans;
    const { mtnDataPlans } = myMtnDataPlans;
    const { airtelDataPlans } = myAirtelDataPlans;
    const { dataError, dataStatus } = dataOrder;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(loading);
    console.log(error);
    useEffect(() => {
        !localStorage.getItem('user') && navigate('/pages/login/login3');
        dispatch(getGloData());
        dispatch(getMtnData());
        dispatch(getAirtelData());
    }, []);
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
                }
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
        </MainCard>
    );
};

export default BuyData;
