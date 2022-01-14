// material-ui
import { Grid, Typography, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { CustomButton, CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
import { Glo_data } from '_mocks_/glo_data_plan';

// ==============================|| SAMPLE PAGE ||============================== //

const BuyData = ({ title, product }) => {
    const INITIAL_FORM_VALUES = {
        beneficiaryNum: '',
        amount: '',
        plan: ''
    };
    const VALIDATIONS = yup.object().shape({
        beneficiaryNum: yup.number().integer().required('Please enter beneficiary number').typeError('beneficairy must be a number'),
        amount: yup.number().integer().typeError('Amount Value must be a number'),
        plan: yup.object().required('Please select data plan')
    });

    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <MainCard title={title}>
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '60vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomTextField name="beneficiaryNum" label="Beneficiary Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomSelect name="plan" options={product} label="Select Plan" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        name="amount"
                                        disabled
                                        value={(values.amount = values.plan.price)}
                                        placeholder="Amount"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton>Submit</CustomButton>
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
