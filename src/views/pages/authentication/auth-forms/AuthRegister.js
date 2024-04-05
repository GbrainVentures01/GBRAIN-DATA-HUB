// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
    useMediaQuery
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
// project imports
import { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerAction } from 'store/actions';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
// third party
import * as Yup from 'yup';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const { register } = useSelector((state) => state);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);

    const { enqueueSnackbar } = useSnackbar();
    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();
    const [tpin, settpin] = useState('');

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        if (tpin === '') {
            alert('please set your transaction pin');
            return;
        }
        dispatch(
            registerAction({
                user: {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    password: values.confirm_password,
                    phone_number: values.phone_number,
                    username: values.username,
                    pin: tpin
                },
                navigate,
                enqueueSnackbar
            })
        );
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        {/* <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button> */}
                        <Grid item xs={12} container alignItems="center" justifyContent="center">
                            <Box>
                                <Typography variant="caption" fontSize="16px">
                                    OR
                                </Typography>
                            </Box>
                        </Grid>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography style={{ textTransform: 'uppercase' }} variant="caption" fontSize="16px">
                            Sign in with Email address
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    phone_number: '',
                    password: '',
                    confirm_password: '',
                    pin: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required'),
                    confirm_password: Yup.string()
                        .required('Please re-enter password')
                        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                    username: Yup.string().required('Username is required'),
                    first_name: Yup.string().required('First name is required'),
                    last_name: Yup.string().required('Last name  is required'),
                    phone_number: Yup.string().required('Phone number  is required'),
                    pin: Yup.number('Pin must be a number').required('Please set your transaction pin')
                })}
                onSubmit={handleSubmit}
            >
                {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
                    <Form>
                        <container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.first_name && errors.first_name)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-first_name-register">First Name </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-first_name-register"
                                        type="text"
                                        value={values.first_name}
                                        name="first_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                    {touched.first_name && errors.first_name && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.first_name}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.first_name && errors.first_name)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-last_name-register">Last Name </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-last_name-register"
                                        type="text"
                                        value={values.last_name}
                                        name="last_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                    {touched.last_name && errors.last_name && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.last_name}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.email && errors.email)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-email-register"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.phone_number && errors.phone_number)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-phone_number-register">Phone Number </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-phone_number-register"
                                        type="number"
                                        value={values.phone_number}
                                        name="phone_number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                    {touched.phone_number && errors.phone_number && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.phone_number}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.username && errors.username)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-username-register">Username </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-username-register"
                                        type="text"
                                        value={values.username}
                                        name="username"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                    {touched.username && errors.username && (
                                        <FormHelperText error id="standard-weight-helper-text--register">
                                            {errors.username}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.password && errors.password)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password-register"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        label="Password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        inputProps={{}}
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-register">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.confirm_password && errors.confirm_password)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-confirm_password-register">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-confirm_password-register"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.confirm_password}
                                        name="confirm_password"
                                        label="Confirm Password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        inputProps={{}}
                                    />
                                    {touched.confirm_password && errors.confirm_password && (
                                        <FormHelperText error id="standard-weight-helper-text-confirm_password                  -register">
                                            {errors.confirm_password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                {strength !== 0 && (
                                    <FormControl fullWidth>
                                        <Box sx={{ mb: 2 }}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Box
                                                        style={{ backgroundColor: level?.color }}
                                                        sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" fontSize="0.75rem">
                                                        {level?.label}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </FormControl>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <>
                                    <Typography>Set Transaction Pin</Typography>
                                    <PinInput
                                        style={{
                                            margin: 'auto'
                                        }}
                                        length={4}
                                        initialValue=""
                                        secret
                                        onChange={(value, index) => {
                                            settpin(value);
                                        }}
                                        type="numeric"
                                        inputMode="number"
                                        inputStyle={{ borderColor: 'black' }}
                                        inputFocusStyle={{ borderColor: 'blue' }}
                                        onComplete={(value, index) => {}}
                                        autoSelect={true}
                                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                    />
                                </>
                            </Grid>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) => setChecked(event.target.checked)}
                                                name="checked"
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <Typography variant="subtitle1">
                                                Agree with &nbsp;
                                                <Typography variant="subtitle1" component={Link} to="#">
                                                    Terms & Condition.
                                                </Typography>
                                            </Typography>
                                        }
                                    />
                                </Grid>
                            </Grid>
                            {errors.submit && (
                                <Box sx={{ mt: 3 }}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Box>
                            )}

                            <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                    <Button
                                        sx={{
                                            borderRadius: '30px',
                                            backgroundColor: {
                                                backgroundColor: '#83529f',
                                                ':hover': {
                                                    backgroundColor: '#83529f'
                                                }
                                            },
                                            textTransform: 'uppercase'
                                        }}
                                        disabled={register.loading ? true : false}
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        onClick={() => handleSubmit(values)}
                                    >
                                        &#9660; register
                                    </Button>
                                    {/* <Button
                                        disabled={register.loading ? true : false}
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleSubmit(values)}
                                    >
                                        Sign up
                                    </Button> */}
                                </AnimateButton>
                            </Box>
                        </container>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseRegister;
