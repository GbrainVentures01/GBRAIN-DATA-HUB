import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { UpdateUserAction, userAction } from 'store/actions';
import { CustomButton, CustomTextField } from 'ui-component/basic-inputs';
import MainCard from 'ui-component/cards/MainCard';
import * as yup from 'yup';

const EditProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');

        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    const { loggedInUser, updateUser } = useSelector((state) => state);
    const { user, loading } = loggedInUser;
    const { Update_user_loading } = updateUser;
    const matches = useMediaQuery('(min-width:600px)');
    const pinRef = useRef();
    const confirmPinRef = useRef();

    const INITIAL_UPADATE_FORM_VALUES = {
        first_name: user?.first_name,
        last_name: user?.last_name,
        username: user?.username,
        email: user?.email,
        phone_number: user?.phone_number
    };

    const UPDATE_VALIDATIONS = yup.object().shape({
        first_name: yup.string().typeError('First name must be a strinig'),
        last_name: yup.string().typeError('First name must be a strinig'),
        username: yup.string().typeError('Usrname name must be a strinig'),
        email: yup.string().email('Must be a valid email').max(255),
        phone_number: yup.string()
    });

    const handleUpdate = (values) => {
        dispatch(UpdateUserAction({ user: values, enqueueSnackbar }));
    };
    const handlePinChange = () => {
        if (!pinRef.current.values || !confirmPinRef.current.values) {
            enqueueSnackbar('provide transaction pin to proceed', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        if (pinRef.current.values.join('') !== confirmPinRef.current.values.join('')) {
            enqueueSnackbar('pin and confirm pin must match ', {
                variant: 'error',
                autoHideDuration: 2000
            });
            return;
        }
        dispatch(UpdateUserAction({ user: { pin: confirmPinRef.current.values.join('') }, enqueueSnackbar }));
    };
    return (
        <MainCard
            title=" Edit Your Profile"
            sx={{
                width: matches ? '50%' : '100%'
            }}
        >
            <Formik initialValues={{ ...INITIAL_UPADATE_FORM_VALUES }} onSubmit={handleUpdate} validationSchema={UPDATE_VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="first_name" label="First Name" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="last_name" label="First Name" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="username" label="Username" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="email" label="Email" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                <CustomTextField name="phone_number" label="Phone Number" />
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
                                <CustomButton disabled={loading || Update_user_loading ? true : false}>Submit</CustomButton>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
            <br />

            <Grid container spacing={4}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Typography variant="h4">Transaction Pin Reset</Typography>
                </Grid>

                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                    <Typography variant="h5">Enter New Transaction Pin</Typography>
                    <br />
                    <PinInput
                        style={{
                            margin: 'auto'
                        }}
                        length={4}
                        initialValue=""
                        secret={false}
                        ref={(n) => (pinRef.current = n)}
                        type="numeric"
                        inputMode="number"
                        inputStyle={{ borderColor: 'black' }}
                        inputFocusStyle={{ borderColor: 'blue' }}
                        onComplete={(value, index) => {}}
                        autoSelect={false}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                    <Typography variant="h5">Confirm New Transaction Pin</Typography>
                    <br />
                    <PinInput
                        style={{
                            margin: 'auto'
                        }}
                        length={4}
                        initialValue=""
                        secret
                        ref={(n) => (confirmPinRef.current = n)}
                        type="numeric"
                        inputMode="number"
                        inputStyle={{ borderColor: 'black' }}
                        inputFocusStyle={{ borderColor: 'blue' }}
                        onComplete={(value, index) => {}}
                        autoSelect={false}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="secondary"
                        onClick={handlePinChange}
                        disabled={loading || Update_user_loading ? true : false}
                    >
                        Change Pin
                    </Button>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default EditProfile;
