import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

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
    const { loggedInUser } = useSelector((state) => state);
    const { user } = loggedInUser;

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
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
                                                            <Typography sx={{ fontSize: '1.0rem', fontWeight: 500, mb: 1.75, mt: 1.75 }}>
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
            )}
        </>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
