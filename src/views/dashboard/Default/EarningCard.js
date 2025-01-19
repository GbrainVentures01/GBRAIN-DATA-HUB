import { CopyAll, LinkOutlined } from '@mui/icons-material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Alert, Avatar, Box, Button, Card, Grid, Menu, MenuItem, Paper, Snackbar, Typography } from '@mui/material';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { generatePalmPayAccount } from 'store/actions';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

const useStyles = makeStyles((theme) => ({
    card: {
        background: 'linear-gradient(45deg, #ef4444 30%, #b91c1c 90%)',
        color: theme.palette.common.white,
        maxWidth: '450px'
    },

    balance: {
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    referer: {
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    acc_num: {
        fontWeight: 'bold',
        fontSize: '.8rem'
    },
    account: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '5px 0',
        fontSize: '.6rem'
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer'
    }
}));

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading, message }) => {
    const { loggedInUser, updateUser } = useSelector((state) => state);
    const { Update_user_loading } = updateUser;
    const [display, setdisplay] = useState(0);
    const { user } = loggedInUser;
    // console.log({ user });
    const theme = useTheme();
    const bankDetails = user?.monnify_bank_details;
    const hasPalmpayAcc = bankDetails?.some((a) => a.bank_name === 'PalmPay');
    console.log({ hasPalmpayAcc });
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCopy = ({ d }) => {
        setOpen(true);
        navigator.clipboard.writeText(d.account_number);
    };

    const handleGeneratePalmPayAcc = (values) => {
        dispatch(
            generatePalmPayAccount({
                navigate,

                enqueueSnackbar
            })
        );
    };
    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <div>
                    {user?.updateBvn && bankDetails.length > 0 && user?.hasAccountNum && (
                        <>
                            {/* {!hasPalmpayAcc && (
                                <Card
                                    onClick={handleGeneratePalmPayAcc}
                                    sx={{
                                        backgroundColor: theme.palette.secondary[800],
                                        padding: theme.spacing(2),
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: theme.spacing(1),
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: theme.shape.borderRadiusMd,
                                        marginBottom: theme.spacing(2),
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img src="/palmpay.png" width={50} height={50} />
                                    <Typography variant="body2" color="white">
                                        {Update_user_loading ? 'Generating...' : 'Generate PalmPay Account'}
                                    </Typography>
                                </Card>
                            )} */}
                            <div
                                style={{
                                    // maxWidth: "560px",
                                    display: 'flex',
                                    gap: '5px',

                                    // justifyContent: "space-between",
                                    alignItems: 'center',
                                    marginBottom: '15px',
                                    flexWrap: 'wrap'
                                }}
                            >
                                {bankDetails?.map((a, i) => (
                                    <Paper
                                        key={i}
                                        onClick={() => setdisplay(i)}
                                        variant="elevation"
                                        elevation={display === i ? 3 : 0}
                                        sx={{
                                            cursor: 'pointer',
                                            backgroundColor: display === i ? 'purple' : 'white'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: display === i ? 'white' : 'inherit',
                                                padding: 1,
                                                fontSize: '.74rem'
                                            }}
                                            variant="body2"
                                        >
                                            {a?.bank_name}
                                        </Typography>
                                    </Paper>
                                ))}
                            </div>
                        </>
                    )}

                    <CardWrapper border={false} content={false}>
                        <Box sx={{ p: 2.25 }}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container justifyContent="space-between">
                                        <Grid item>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    ...theme.typography.commonAvatar,
                                                    ...theme.typography.largeAvatar,
                                                    backgroundColor: theme.palette.secondary[800],
                                                    mt: 1
                                                }}
                                            >
                                                <img src={EarningIcon} alt="Notification" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    ...theme.typography.commonAvatar,
                                                    ...theme.typography.mediumAvatar,
                                                    backgroundColor: theme.palette.secondary.dark,
                                                    color: theme.palette.secondary[200],
                                                    zIndex: 1
                                                }}
                                                aria-controls="menu-earning-card"
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                            >
                                                <MoreHorizIcon fontSize="inherit" />
                                            </Avatar>
                                            <Menu
                                                id="menu-earning-card"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                                variant="selectedMenu"
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right'
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right'
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Account Number
                                                </MenuItem>
                                            </Menu>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <Grid item>
                                            {Cookies.get('user') && (
                                                <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                    {`Welcome Back, ${user?.username}`}
                                                </Typography>
                                            )}
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <Typography sx={{ fontSize: '1.0rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                    {Cookies.get('user')
                                                        ? `Wallet Balance:₦${user?.AccountBalance} `
                                                        : 'Welcome To Gbrain Ventures'}
                                                </Typography>
                                            </div>
                                            {user && (!user?.updateBvn || !user?.hasAccountNum || bankDetails.length === 0) && (
                                                <Link to="/verify-account" className="text-white font-[1rem] text-sm">
                                                    Click here to generate your personal Accounts
                                                    {/* <span>
                                                        <LinkOutlined />
                                                    </span> */}
                                                </Link>
                                            )}
                                            {user && user?.updateBvn && bankDetails?.length > 0 && user?.hasAccountNum && (
                                                <div className={classes.account}>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontSize: '1.0rem',
                                                            fontWeight: 500,
                                                            mr: 1,
                                                            mt: 1.75,
                                                            mb: 0.75
                                                        }}
                                                    >
                                                        {bankDetails[display]?.bank_name}
                                                    </Typography>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center'
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    fontSize: '1.0rem',
                                                                    fontWeight: 500,
                                                                    mr: 1,
                                                                    mt: 1.75,
                                                                    mb: 0.75
                                                                }}
                                                                className={classes.acc_num}
                                                            >
                                                                {bankDetails[display]?.account_number}
                                                            </Typography>
                                                            <CopyAll
                                                                onClick={() => handleCopy({ d: bankDetails[display] })}
                                                                sx={{ ml: 1 }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {Cookies.get('user') ? (
                                                <>
                                                    <Link
                                                        to={'/fund-wallet'}
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: 'white',
                                                            position: 'relative',
                                                            top: 6,
                                                            bottom: 0
                                                        }}
                                                    >
                                                        <Grid container columnSpacing={-11}>
                                                            <Grid item xs={6}>
                                                                <Typography
                                                                    sx={{ fontSize: '1.0rem', fontWeight: 500, mb: 1.75, mt: 1.75 }}
                                                                >
                                                                    Fund Wallet
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Avatar
                                                                    sx={{
                                                                        mb: 1.75,
                                                                        mt: 1.75,
                                                                        // position: 'relative',
                                                                        // top: 6,
                                                                        // bottom: 0,
                                                                        cursor: 'pointer',
                                                                        ...theme.typography.smallAvatar,
                                                                        backgroundColor: theme.palette.secondary[200],
                                                                        color: theme.palette.secondary.dark
                                                                    }}
                                                                >
                                                                    <ArrowUpwardIcon
                                                                        fontSize="inherit"
                                                                        sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }}
                                                                    />
                                                                </Avatar>
                                                            </Grid>
                                                        </Grid>
                                                    </Link>

                                                    <marquee
                                                        style={{
                                                            backgroundColor: 'red',
                                                            marginTop: 1.7,
                                                            marginBottom: 0.25,
                                                            padding: '5px 0',
                                                            borderRadius: '5px'
                                                        }}
                                                    >
                                                        <Typography sx={{ fontSize: '1.0rem' }}>{message ? message : ''}</Typography>
                                                    </marquee>
                                                </>
                                            ) : (
                                                <Link to={'/pages/login'}>
                                                    <Typography variant="subtitle1" color={'white'}>
                                                        Please Login To Your Account
                                                    </Typography>
                                                </Link>
                                            )}
                                        </Grid>
                                        {/* <Grid item>
                                  
                                    </Grid> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardWrapper>
                </div>
            )}
            <Snackbar
                open={open}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                // message="Account number copied to clickboard"
                // action={action}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Account number copied to clickboard
                </Alert>
            </Snackbar>
        </>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
