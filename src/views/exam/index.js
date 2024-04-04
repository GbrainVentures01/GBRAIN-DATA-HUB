// material-ui
import { Box, Grid, Typography, CardHeader, Card } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyExamPin, getVariants, userAction } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import { examVariations } from '_mocks_/exam';
import FeedBack from '../feedBack';
import FixedNotification from 'ui-component/fixed-notification';

// ==============================|| SAMPLE PAGE ||============================== //

const ExamPin = ({ title }) => {
    const { examPinOrder, vtuVariations } = useSelector((state) => state);
    const { variations } = vtuVariations;
    const { loading, data, error } = examPinOrder;
    const { enqueueSnackbar } = useSnackbar();
    const [showAlert, setshowAlert] = useState(false);
    const [showErrorAlert, setshowErrorAlert] = useState(false);
    const [value, setvalue] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pinRef = useRef();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
        value && dispatch(getVariants({ provider: value }));
    }, [navigate, value, dispatch]);

    const INITIAL_FORM_VALUES = {
        examType: '',
        plan: '',
        price: '',
        beneficiaryNum: '',
        pin: ''
    };
    const VALIDATIONS = yup.object().shape({
        examType: yup.string(),
        plan: yup.object(),
        price: yup.number().integer().typeError('price must be a number'),
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number')
    });

    const handleSubmit = (values) => {
        if (!pinRef.current.values) {
            enqueueSnackbar('provide transaction pin to proceed', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        const body = {
            serviceID: values.examType,
            request_id: generateRequestId(),
            amount: values.price,
            phone: values.beneficiaryNum,
            variation_code: values.plan.variation_code,
            pin: pinRef.current.values.join('')
        };
        console.log(body);
        dispatch(
            buyExamPin({
                reqBody: {
                    data: body
                },
                setshowAlert,
                setErrorAlert: setshowErrorAlert
            })
        );
    };

    return (
        <MainCard>
            <FixedNotification />
            <Card>
                <CardHeader title={title} />
                <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                    {({ values, setFieldValue }) => (
                        <Form>
                            <Box sx={{ maxWidth: 500, height: '100vh' }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <CustomSelect
                                            name="examType"
                                            label="Choose Exam Type"
                                            options={examVariations}
                                            makeNetCall={true}
                                            setvalue={setvalue}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomSelect
                                            name="plan"
                                            vtplan={true}
                                            label="Choose Plan"
                                            disabled={variations.length === 0 ? true : false}
                                            options={variations}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <CustomTextField
                                            name="price"
                                            placeholder="Amount"
                                            value={(values.price = values.plan.variation_amount)}
                                        />
                                    </Grid>

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
                                        <CustomButton disabled={loading ? true : false}>Submit</CustomButton>
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
                    purchasePin={data?.data}
                    message={data?.message}
                    variant="success"
                />
            }
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

export default ExamPin;
