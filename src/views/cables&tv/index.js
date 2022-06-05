// material-ui
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyTvCables, getVariants } from 'store/actions';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { generateRequestId } from 'utils/generateRequestId';
import * as yup from 'yup';
import { cablesCategory } from '_mocks_/tv&cables';
import FeedBack from '../feedBack';

// ==============================|| SAMPLE PAGE ||============================== //

const SubTv = ({ title }) => {
    const { vtuVariations, tvCablesOrder } = useSelector((state) => state);

    const { variations } = vtuVariations;

    const { error, loading, data } = tvCablesOrder;
    // const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [value, setvalue] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
    }, [navigate, dispatch]);
    useEffect(() => {
        value && dispatch(getVariants({ provider: value }));
    }, [value, dispatch]);

    const INITIAL_FORM_VALUES = {
        provider: '',
        plan: '',
        price: '',
        cardNumber: '',
        beneficiaryNum: ''
    };
    const VALIDATIONS = yup.object().shape({
        provider: yup.string(),
        plan: yup.object(),
        price: yup.number().integer().typeError('amount must be a number'),
        cardNumber: yup.string().required('Please enter card number'),
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number')
    });

    const handleSubmit = (values) => {
        const body = {
            serviceID: values.provider,
            request_id: generateRequestId(),
            billersCode: values.cardNumber,
            amount: values.price,
            phone: values.beneficiaryNum,
            subscription_type: 'renew'
        };
        dispatch(
            buyTvCables({
                reqBody: {
                    data: body
                }
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
                                    <CustomTextField name="cardNumber" label="Card Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton disabled={loading ? true : false}>Submit</CustomButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>

            {data.message && <FeedBack message={data?.message} variant="success" />}
            {error && <FeedBack message={error} variant="error" disableTopup={true} />}
        </MainCard>
    );
};

export default SubTv;
