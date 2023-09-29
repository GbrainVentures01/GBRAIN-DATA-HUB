import { Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import AuthRegister from '../auth-forms/AuthRegister';
import AuthCardWrapper from '../AuthCardWrapper';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import logo from 'assets/images/GBRAIN LOGO NEW.png';
// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '150px',
                                        width: '150px',
                                        borderRadius: '50%',
                                        backgroundColor: '#f1f0f5',
                                        position: 'relative',
                                        top: 100,
                                        // right: 100,
                                        // left: 100,

                                        zIndex: 1000
                                    }}
                                >
                                    <img
                                        src={logo}
                                        style={{
                                            height: '100px',
                                            width: '100px',
                                            margin: 'auto'
                                        }}
                                        alt="Gbrain"
                                    />
                                </div>
                            </div>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3, mt: 10 }}>
                                        <Link
                                            to="#"
                                            style={{
                                                textDecoration: 'none'
                                            }}
                                        >
                                            <Typography
                                                variant="h2"
                                                sx={{
                                                    textAlign: 'center',
                                                    textAlignLast: 'center',
                                                    color: '#83529f'
                                                }}
                                            >
                                                GBRAIN CORPORATE BUSINESS VENTURES
                                            </Typography>
                                            {/* <Logo /> */}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    {/* <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Sign up
                                                    </Typography> */}
                                                    <Typography
                                                        style={{
                                                            textTransform: 'uppercase'
                                                        }}
                                                        variant="caption"
                                                        fontSize="16px"
                                                        s
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        Enter your details to register
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthRegister />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Button
                                                onClick={() => {
                                                    navigate('/pages/login');
                                                }}
                                                sx={{
                                                    textTransform: 'uppercase',
                                                    borderRadius: '30px',
                                                    backgroundColor: {
                                                        backgroundColor: '#83529f',
                                                        ':hover': {
                                                            backgroundColor: '#83529f'
                                                        }
                                                    }
                                                }}
                                                disableElevation
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                            >
                                                Sign in here !!.
                                            </Button>
                                            {/* <Typography
                                                component={Link}
                                                to="/pages/login"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Already have an account? Sign in now.
                                            </Typography> */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div
                                    style={{
                                        backgroundColor: '#000000',
                                        width: '120px',
                                        height: '2px',
                                        position: 'relative',
                                        bottom: 25
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    {/* <AuthFooter /> */}
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Register;
