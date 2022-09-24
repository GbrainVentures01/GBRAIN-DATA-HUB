import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResetPasswordAction } from 'store/actions';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
// third party
import queryString from 'query-string';
import * as Yup from 'yup';

// ============================|| FIREBASE - LOGIN ||============================ //

const ResetPassword = ({ ...others }) => {
    const theme = useTheme();
    const { resetPassword } = useSelector((state) => state);
    const { loading } = resetPassword;
    const queryParams = queryString.parse(window.location.search);

    const code = queryParams.code;

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = (values) => {
        const body = { password: values.password, passwordConfirmation: values.confirm_password, code: code };
        dispatch(ResetPasswordAction({ body, enqueueSnackbar }));
    };
    const [showPassword, setShowPassword] = useState(false);

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

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

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    password: '',
                    confirm_password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().max(255).required('Password is required'),
                    confirm_password: Yup.string()
                        .required('Please re-enter password')
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                })}
                onSubmit={handleSubmit}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <Form>
                        <Grid item xs={12} sm={12}>
                            <FormControl
                                fullWidth
                                error={Boolean(touched.password && errors.password)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="outlined-adornment-password-register">New Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password-register"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name="password"
                                    label="New Password"
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
                                <InputLabel htmlFor="outlined-adornment-confirm_password-register">Confirm New Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-confirm_password-register"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.confirm_password}
                                    name="confirm_password"
                                    label="Confirm New Password"
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
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disabled={loading ? true : false}
                                    disableElevation
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Submit
                                </Button>
                            </AnimateButton>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ResetPassword;
