// material-ui
import { Grid, Typography, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { CustomButton, CustomTextField } from 'ui-component/basic-inputs';

// ==============================|| SAMPLE PAGE ||============================== //

const BuyAirtime = ({ title }) => {
    const INITIAL_FORM_VALUES = {
        beneficiaryNum: '',
        amount: ''
    };
    const VALIDATIONS = yup.object().shape({
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number'),
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number')
    });

    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <MainCard title={title}>
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                <Form>
                    <Box sx={{ maxWidth: 500, height: '60vh' }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField name="amount" label="Airtime Amount" />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButton>Submit</CustomButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Form>
            </Formik>
        </MainCard>
    );
};

export default BuyAirtime;
