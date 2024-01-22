// material-ui
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateBvn, userAction } from 'store/actions';
import { CustomButton, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import * as yup from 'yup';

// ==============================|| SAMPLE PAGE ||============================== //

const VerifyAccount = () => {
    const { updateUser } = useSelector((state) => state);
    const { Update_user_loading } = updateUser;
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);

    const INITIAL_FORM_VALUES = {
        bvn: ''
    };
    const VALIDATIONS = yup.object().shape({
        bvn: yup.string().required('please enter your bvn number')
    });

    const handleSubmit = (values) => {
        dispatch(
            UpdateBvn({
                user: {
                    data: {
                        bvn: values.bvn
                    }
                },
                enqueueSnackbar
            })
        );
    };

    return (
        <MainCard title={'Verify Account'}>
            <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '100vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomTextField name="bvn" label="BVN  Number" />
                                </Grid>

                                <Grid item xs={12}>
                                    <CustomButton color="primary" disabled={Update_user_loading ? true : false}>
                                        Submit
                                    </CustomButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>
        </MainCard>
    );
};

export default VerifyAccount;
