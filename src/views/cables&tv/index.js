// material-ui
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyTvCables, getVariants, userAction, verifyData } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import { cablesCategory } from '_mocks_/tv&cables';
import FeedBack from '../feedBack';

// ==============================|| SAMPLE PAGE ||============================== //

const SubTv = ({ title }) => {
    const { vtuVariations, tvCablesOrder, verifyDetailsData } = useSelector((state) => state);

    const { variations } = vtuVariations;
    const { verifyDetails, verifyLoading } = verifyDetailsData;

    const { error, loading, data } = tvCablesOrder;
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [value, setvalue] = useState(null);
    const dispatch = useDispatch();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);
    const [decoderNumber, setdecoderNumber] = useState('');
    const [code, setcode] = useState('');

    const pinRef = useRef();

    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    useEffect(() => {
        value && dispatch(getVariants({ provider: value }));
    }, [value, dispatch]);

    useEffect(() => {
        if (code === 'dstv' && decoderNumber.length === 10) {
            console.log('fecthing');
            dispatch(
                verifyData({
                    body: {
                        billersCode: decoderNumber,
                        serviceID: code
                    },
                    enqueueSnackbar
                })
            );
        }
        if (code === 'startimes' && decoderNumber.length === 11) {
            dispatch(
                verifyData({
                    body: {
                        billersCode: decoderNumber,
                        serviceID: code
                    },
                    enqueueSnackbar
                })
            );
        }
        if (code === 'gotv' && decoderNumber.length === 10) {
            console.log('fecthing');
            dispatch(
                verifyData({
                    body: {
                        billersCode: decoderNumber,
                        serviceID: code
                    },
                    enqueueSnackbar
                })
            );
        }
    }, [decoderNumber, code, dispatch, enqueueSnackbar]);

    const INITIAL_FORM_VALUES = {
        provider: '',
        plan: '',
        price: '',
        cardNumber: '',
        beneficiaryNum: '',
        pin: ''
    };
    const VALIDATIONS = yup.object().shape({
        provider: yup.string(),
        plan: yup.object(),
        price: yup.number().integer().typeError('amount must be a number'),

        cardNumber: yup.string().required('Please enter card number'),
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number')
    });

    const handleDecoderNumber = (e, code, cardnum) => {
        // console.log(cardRef.current);
        setdecoderNumber(e.target.value);
        setcode(code);

        // if (code === 'showmax' && decoderNumber.length === 11) {
        //     console.log('fecthing');
        //     dispatch(
        //         verifyData({
        //             body: {
        //                 billersCode: decoderNumber,
        //                 serviceID: code
        //             }
        //         })
        //     );
        // }
    };
    const handleSubmit = (values) => {
        if (!pinRef.current.values) {
            enqueueSnackbar('provide transaction pin to proceed', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        const body = {
            serviceID: values.provider,
            request_id: generateRequestId(),
            billersCode: values.cardNumber,
            amount: values.price,
            phone: values.beneficiaryNum,
            variation_code: values.plan.variation_code,
            subscription_type: 'renew',
            pin: pinRef.current.values.join('')
        };

        dispatch(
            buyTvCables({
                reqBody: {
                    data: body
                },
                setshowAlert,
                setErrorAlert: setshowErrorAlert
            })
        );
    };

    return (
        <MainCard
            sx={{
                overflowY: 'scroll'
            }}
            title={title}
        >
            <Formik
                initialValues={{ ...INITIAL_FORM_VALUES }}
                validateOnChange={true}
                onSubmit={handleSubmit}
                validationSchema={VALIDATIONS}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '100vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomSelect
                                        name="provider"
                                        label="Select Provider"
                                        makeNetCall={true}
                                        setvalue={setvalue}
                                        options={cablesCategory}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomSelect
                                        vtplan={true}
                                        disabled={variations.length === 0 ? true : false}
                                        name="plan"
                                        label="Select Plan"
                                        options={variations}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        disabled={variations.length === 0 ? true : false}
                                        name="price"
                                        value={(values.price = values.plan.variation_amount)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        value={(values.cardNumber = decoderNumber)}
                                        disabled={verifyLoading}
                                        onChange={(e) => handleDecoderNumber(e, values.provider)}
                                        name="cardNumber"
                                        label="Card Number/ Phone number for showmax"
                                    />
                                </Grid>
                                {verifyDetails && (
                                    <Grid item xs={12}>
                                        <Paper
                                            sx={{
                                                padding: '25px'
                                            }}
                                            elevation={4}
                                        >
                                            <Typography
                                                sx={{
                                                    marginBottom: '15px'
                                                }}
                                                variant="h4"
                                            >
                                                Customer Name: {verifyDetails.Customer_Name}
                                            </Typography>
                                            {verifyDetails.Current_Bouquet && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Current Bouquet: {verifyDetails.Current_Bouquet}
                                                </Typography>
                                            )}

                                            {verifyDetails.Customer_Type && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Customer Type: {verifyDetails.Customer_Type}
                                                </Typography>
                                            )}

                                            {verifyDetails.Customer_Number && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Customer Number: {verifyDetails.Customer_Number}
                                                </Typography>
                                            )}

                                            {verifyDetails.Due_Date && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Due Date: {verifyDetails.Due_Date}
                                                </Typography>
                                            )}

                                            {verifyDetails.Renewal_Amount && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Renewal Amount: {verifyDetails.Renewal_Amount}
                                                </Typography>
                                            )}

                                            {verifyDetails.Balance && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Balance: {verifyDetails.Balance}
                                                </Typography>
                                            )}
                                            {verifyDetails.Smartcard_Number && (
                                                <Typography
                                                    sx={{
                                                        marginBottom: '15px'
                                                    }}
                                                    variant="h4"
                                                >
                                                    Smartcard Number: {verifyDetails.Smartcard_Number}
                                                </Typography>
                                            )}

                                            {verifyDetails.Status && <Typography variant="h4">Status: {verifyDetails.Status}</Typography>}
                                        </Paper>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Enter Transaction Pin</Typography>
                                    <PinInput
                                        style={{
                                            margin: 'auto'
                                        }}
                                        length={4}
                                        initialValue=""
                                        secret
                                        ref={(n) => (pinRef.current = n)}
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
                                    <CustomButton fullWidth={true} disabled={loading ? true : false}>
                                        Submit
                                    </CustomButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>

            {<FeedBack setshowAlert={setshowAlert} showAlert={showAlert} message={data?.message} variant="success" />}
            {
                <FeedBack
                    setshowErrorAlert={setshowErrorAlert}
                    showErrorAlert={showErrorAlert}
                    message={error}
                    variant="error"
                    disableTopup={false}
                />
            }
        </MainCard>
    );
};

export default SubTv;
