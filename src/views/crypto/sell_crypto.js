// material-ui
import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSellBTCDetails } from 'store/actions';
import { CustomSelect, CustomTextField } from 'ui-component/basic-inputs';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import * as yup from 'yup';

// ==============================|| SAMPLE PAGE ||============================== //

const SellCrypto = () => {
    const { sellAirtimeDetails } = useSelector((state) => state);

    const { loading } = sellAirtimeDetails;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(getSellBTCDetails({ enqueueSnackbar }));
    }, [dispatch, navigate, enqueueSnackbar]);

    const INITIAL_FORM_VALUES = {
        amount: '',
        coin_name: ''
    };
    const VALIDATIONS = yup.object().shape({
        amount: yup.number().integer().typeError('Amount Value must be a number'),
        coin_name: yup.string().required('Please select Coin')
    });

    const coinList = [
        {
            name: 'BTC',
            value: 'BTC'
        },
        {
            name: 'ETH',
            value: 'ETH'
        },
        {
            name: 'USDT',
            value: 'USDT'
        }
    ];

    const handleSubmit = (values) => {};
    return (
        <MainCard title="Sell your crypto coins">
            <Formik
                initialValues={{ ...INITIAL_FORM_VALUES }}
                enableReinitialize={true}
                onSubmit={handleSubmit}
                validationSchema={VALIDATIONS}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box sx={{ maxWidth: 500, height: '100vh' }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <CustomSelect name="coin_name" options={coinList} label="Select Coin" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField name="amount" label="Enter coin amount" />
                                </Grid>

                                <Grid item xs={12}>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://wa.me/+23400000000"
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <Button
                                            disabled={loading ? true : false}
                                            variant="contained"
                                            type="submit"
                                            color="secondary"
                                            fullWidth
                                        >
                                            Sell Now
                                        </Button>
                                    </a>

                                    {/* <CustomButton disabled={loading ? true : false}>Sell Now</CustomButton> */}
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>
        </MainCard>
    );
};

export default SellCrypto;
