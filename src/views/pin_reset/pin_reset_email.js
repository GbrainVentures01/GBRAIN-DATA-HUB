import { Grid, useMediaQuery } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ForgetPinAction, userAction } from 'store/actions';
import { CustomButton, CustomTextField } from 'ui-component/basic-inputs';
import MainCard from 'ui-component/cards/MainCard';
import * as yup from 'yup';

const PinResetEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');

        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    const { loggedInUser, forgetPin } = useSelector((state) => state);
    const { user } = loggedInUser;
    const { pin_reset_loading } = forgetPin;

    const matches = useMediaQuery('(min-width:600px)');

    const INITIAL_UPADATE_FORM_VALUES = {
        email: user?.email
    };

    const UPDATE_VALIDATIONS = yup.object().shape({
        email: yup.string().email('Must be a valid email').max(255)
    });

    const handleUpdate = (values) => {
        const email = { email: values.email };
        dispatch(ForgetPinAction({ email, enqueueSnackbar }));
    };

    return (
        <MainCard
            title=" Enter Your Email To Reset Your Pin "
            sx={{
                width: matches ? '50%' : '100%'
            }}
        >
            <Formik initialValues={{ ...INITIAL_UPADATE_FORM_VALUES }} onSubmit={handleUpdate} validationSchema={UPDATE_VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="email" label="Email" />
                            </Grid>

                            {/* <Grid item xs={12} sx={{ mt: 2 }}>
                                <Typography variant="h4">Transaction Pin Reset</Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="prev_pin" label="Previous Pin" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="pin" label="New Pin" />
                            </Grid> */}

                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <CustomButton disabled={pin_reset_loading ? true : false}>Submit</CustomButton>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MainCard>
    );
};

export default PinResetEmail;
