import { Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CustomTextField } from 'ui-component/basic-inputs';
import MainCard from 'ui-component/cards/MainCard';
import * as yup from 'yup';

const Profile = () => {
    const { loggedInUser } = useSelector((state) => state);
    const { user } = loggedInUser;
    console.log(user);
    const navigate = useNavigate();
    //  const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
    }, [navigate]);
    const INITIAL_FORM_VALUES = {
        amount: ''
    };
    const VALIDATIONS = yup.object().shape({
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number')
    });
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <MainCard title="View And Edit Your Profile">
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="first_name" label="First Name" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="email" label="Email" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="username" label="Username" />
                            </Grid>
                        </Grid>

                        <Button onClick={() => handleSubmit(values)} variant="contained" color="primary" sx={{ mt: 2 }}>
                            Pay Now
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainCard>
    );
};

export default Profile;
