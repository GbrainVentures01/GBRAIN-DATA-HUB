// material-ui
import { Box, Grid, Typography, CardHeader, Card } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    buyData,
    giftData,
    getAirtelData,
    getGloData,
    getMtnData,
    userAction,
    getMtnSmeData,
    buyCgData,
    getAirtelCgData,
    getGloCgData,
    getMtnSmeTwoData,
    getMtnSmeOneData,
    getMtnSmeCoupData
} from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import FixedNotification from 'ui-component/fixed-notification';
import { generateRequestId } from 'utils/generateRequestId';
import FeedBack from 'views/feedBack';
import * as yup from 'yup';

// ==============================|| SAMPLE PAGE ||============================== //

const BuyData = ({ title, network, sme, cg, sme_1, sme_2, coup }) => {
    const {
        myGloDataPlans,
        getairtelCgDataPlans,
        getgloCgDataPlans,
        myMtnDataPlans,
        myAirtelDataPlans,
        dataOrder,
        dataGiftingOrder,
        cgDataOrder,
        myMtnSmeDataPlans,
        myMtnSme1DataPlans,
        myMtnSme2DataPlans,
        myMtnCoupDataPlans
    } = useSelector((state) => state);

    const { gloDataPlans } = myGloDataPlans;
    const { mtnDataPlans } = myMtnDataPlans;
    const { mtnSmeDataPlans } = myMtnSmeDataPlans;
    const { mtnSme1DataPlans } = myMtnSme1DataPlans;
    const { mtnSme2DataPlans } = myMtnSme2DataPlans;
    const { mtnCoupDataPlans } = myMtnCoupDataPlans;
    const { airtelDataPlans } = myAirtelDataPlans;
    const { gloCgDataPlans } = getgloCgDataPlans;
    const { airtelCgDataPlans } = getairtelCgDataPlans;

    const { loading, data, error } = dataOrder;
    const { dataGiftloading, dataGiftData, dataGiftError } = dataGiftingOrder;
    const { Cgdataloading, CgData, CgdataError } = cgDataOrder;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);

    const pinRef = useRef('');

    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
        dispatch(getGloData());
        dispatch(getMtnData());
        dispatch(getMtnSmeData());
        dispatch(getMtnSmeOneData());
        dispatch(getMtnSmeTwoData());
        dispatch(getMtnSmeCoupData());
        dispatch(getAirtelData());
        dispatch(getAirtelCgData());
        dispatch(getGloCgData());
    }, [dispatch, navigate]);

    const INITIAL_FORM_VALUES = {
        beneficiaryNum: '',
        amount: '',
        plan: '',
        network: '',
        pin: ''
    };
    const VALIDATIONS = yup.object().shape({
        beneficiaryNum: yup
            .string()
            .matches(/^\d+$/, 'Only numbers are allowed')
            .max(11, 'Maximum 11 characters allowed')
            .min(11, 'number is not complete')
            .required('Please enter beneficiary number'),
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number'),

        plan: yup.object().required('Please select data plan'),
        network: yup.string().required('Please select data plan')
    });

    const returnPlan = ({ network, sme, cg, sme_1, sme_2, coup }) => {
        switch (network) {
            case 'Glo':
                return cg ? gloCgDataPlans : gloDataPlans;

            case 'Mtn':
                if (sme) return mtnSmeDataPlans;
                if (sme_1) return mtnSme1DataPlans;
                if (sme_2) return mtnSme2DataPlans;
                if (coup) return mtnCoupDataPlans;
                return mtnDataPlans;
            case 'Airtel':
                return cg ? airtelCgDataPlans : airtelDataPlans;

            default:
                return [];
        }
    };

    const sendCgdata = (values) => {
        if (!pinRef.current.values) {
            enqueueSnackbar('provide transaction pin to proceed', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        const body = {
            beneficiary: values.beneficiaryNum,
            amount: values.amount,
            network_id: values.plan.network_id,
            plan: values.plan.plan,
            plan_id: values.plan.plan_id,
            network: network,
            request_Id: generateRequestId(),
            pin: pinRef.current.values.join('')
        };

        dispatch(
            buyCgData({
                orderDetails: {
                    data: { ...body }
                },
                enqueueSnackbar,
                setshowAlert,
                setErrorAlert: setshowErrorAlert
            })
        );
    };
    const sendGiftData = (values) => {
        if (!pinRef.current.values) {
            enqueueSnackbar('provide transaction pin to proceed', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        const body = {
            beneficiary: values.beneficiaryNum,
            amount: values.amount,
            plan: values.plan.Plan,
            plan_id: values.plan.plan_id,
            network: network,
            network_id: values.plan.network_id,
            request_id: generateRequestId(),
            pin: pinRef.current.values.join('')
        };

        dispatch(
            giftData({
                orderDetails: {
                    data: { ...body }
                },
                enqueueSnackbar,
                setshowAlert,
                setErrorAlert: setshowErrorAlert
            })
        );
    };
    const handleSubmit = (values) => {
        if (!pinRef.current.values) {
            alert('provide transaction pin to proceed');
            return;
        }
        const body = {
            beneficiary: values.beneficiaryNum,
            amount: values.amount,
            plan: values.plan,
            network: values.network,
            pin: pinRef.current.values.join('')
        };

        dispatch(
            buyData({
                path: sme ? 'sme-data-orders' : sme_1 ? 'mtn-sme-1-data-orders' : coup ? 'mtn-coupon-data-orders' : 'mtn-sme-2-data-orders',
                orderDetails: {
                    data: { ...body }
                },
                enqueueSnackbar,
                setshowAlert,
                setErrorAlert: setshowErrorAlert
            })
        );
        pinRef.current = '';
    };
    return (
        <MainCard>
            <FixedNotification />
            <Card>
                <CardHeader title={title} />
                <Formik
                    initialValues={{ ...INITIAL_FORM_VALUES }}
                    enableReinitialize={true}
                    onSubmit={
                        sme
                            ? handleSubmit
                            : sme_1
                            ? handleSubmit
                            : sme_2
                            ? handleSubmit
                            : coup
                            ? handleSubmit
                            : cg
                            ? sendCgdata
                            : sendGiftData
                    }
                    validationSchema={VALIDATIONS}
                >
                    {({ values, setFieldValue }) => (
                        <Form>
                            <Box sx={{ maxWidth: 500, height: '100vh' }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomSelect
                                            name="plan"
                                            options={returnPlan({ network, sme, sme_1, sme_2, coup, cg })}
                                            label="Select Plan"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomTextField
                                            name="amount"
                                            disabled
                                            value={(values.amount = values.plan.Price || values.plan.price)}
                                            placeholder="Amount"
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'none' }}>
                                        <CustomTextField name="network" disabled value={(values.network = network)} placeholder="Amount" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Enter Transaction Pin</Typography>
                                        <PinInput
                                            style={{
                                                margin: 'auto'
                                            }}
                                            length={4}
                                            initialValue=""
                                            ref={(n) => (pinRef.current = n)}
                                            secret
                                            // onChange={(value, index) => {
                                            //     settpin(value);
                                            // }}
                                            type="numeric"
                                            inputMode="number"
                                            inputStyle={{ borderColor: 'black' }}
                                            inputFocusStyle={{ borderColor: 'blue' }}
                                            onComplete={(value, index) => {}}
                                            autoSelect={true}
                                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomButton disabled={loading || Cgdataloading || dataGiftloading ? true : false}>
                                            Submit
                                        </CustomButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Card>
            {
                <FeedBack
                    setshowAlert={setshowAlert}
                    showAlert={showAlert}
                    message={data?.data?.message || dataGiftData?.data?.message || CgData?.data?.message}
                    variant="success"
                />
            }
            {
                <FeedBack
                    setshowErrorAlert={setshowErrorAlert}
                    showErrorAlert={showErrorAlert}
                    message={error || dataGiftError || CgdataError}
                    variant="error"
                />
            }
        </MainCard>
    );
};

export default BuyData;
