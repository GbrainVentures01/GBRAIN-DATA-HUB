import { Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
// project imports
import logo from 'assets/images/GBRAIN LOGO NEW.png';
import AuthWrapper1 from '../AuthWrapper1';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const navigate = useNavigate();
    const theme = useTheme();
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
                                                    <Typography
                                                        style={{ textTransform: 'uppercase' }}
                                                        // color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            textTransform: 'uppercase'
                                                        }}
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        Enter your details to sign in
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Button
                                                onClick={() => {
                                                    navigate('/pages/register');
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
                                                register here !!
                                            </Button>
                                            {/* <Typography
                                                component={Link}
                                                to="/pages/register"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            ></Typography> */}
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

export default Login;
