// material-ui
import { Grid, Typography, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { CustomButton, CustomTextField } from 'ui-component/basic-inputs';
import { useDispatch, useSelector } from 'react-redux';
import { buyAirtime } from 'store/actions';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from "js-cookie"

// ==============================|| SAMPLE PAGE ||============================== //

const BuyAirtime = ({ title, network }) => {
    const { airtimeOrder } = useSelector((state) => state);
    const { airtime, error, loading } = airtimeOrder;
    
    const navigate = useNavigate();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
    }, []);

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
        dispatch(
            buyAirtime({
                orderDetails: {
                    data: { ...values }
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
                                    <CustomTextField name="beneficiary" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="amount" label="Airtime Amount" />
                                </Grid>
                                <Grid item xs={12} style={{ display: 'none' }}>
                                    <CustomTextField name="network" label="Network" value={(values.network = network)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton>Submit</CustomButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                   
                )}
            </Formik>
             {console.log(error)}
        </MainCard>
    );
};

export default BuyAirtime;
