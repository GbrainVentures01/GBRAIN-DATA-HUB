// material-ui
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyElectricity, getElectricProviders, userAction } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import { electricityVariations } from '_mocks_/electricity';
import FeedBack from '../feedBack';

// ==============================|| SAMPLE PAGE ||============================== //

const Electricity = ({ title }) => {
    const { electricityOrder, electricityProviders } = useSelector((state) => state);

    const { providers } = electricityProviders;
    const { loading, data, error } = electricityOrder;
    // const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
        dispatch(getElectricProviders());
    }, [navigate, dispatch]);

    const INITIAL_FORM_VALUES = {
        discoName: '',
        amount: '',
        meterNumber: '',
        beneficiaryNum: '',
        variation_code: '',
        pin: ''
    };
    const VALIDATIONS = yup.object().shape({
        discoName: yup.string(),
        variation_code: yup.string(),
        amount: yup.number().integer().typeError('amount must be a number').required('Please enter amount'),
        pin: yup.number().integer().typeError('pin must be a number').required('Please enter transaction pin'),
        meterNumber: yup.string().required('Please enter card number'),
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number')
    });

    const handleSubmit = (values) => {
        const body = {
            serviceID: values.discoName,
            request_id: generateRequestId(),
            billersCode: values.meterNumber,
            amount: values.amount,
            phone: values.beneficiaryNum,
            variation_code: values.variation_code,
            pin: values.pin
        };
        dispatch(
            buyElectricity({
                reqBody: {
                    data: body
                },
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
                        <Box sx={{ maxWidth: 500, height: '100vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomSelect name="discoName" label="Select Disco Name" options={providers} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomSelect name="variation_code" label="Choose Variations" options={electricityVariations} />
                                </Grid>

                                <Grid item xs={12}>
                                    <CustomTextField name="amount" label="Price" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="meterNumber" label="Meter Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField type="password" name="pin" label="Transaction Pin" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton disabled={loading ? true : false}>Submit</CustomButton>
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
                    disableTopup={true}
                />
            }
        </MainCard>
    );
};

export default Electricity;
