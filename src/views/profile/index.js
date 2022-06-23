import { Button, Grid, Paper, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userAction } from 'store/actions';
import MainCard from 'ui-component/cards/MainCard';

const Profile = () => {
    const { loggedInUser } = useSelector((state) => state);
    const { user } = loggedInUser;
    console.log(user);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
        dispatch(userAction({ navigate }));
    }, [navigate, dispatch]);
    const matches = useMediaQuery('(min-width:600px)');
    const handleClick = () => {
        navigate('/edit-profile');
    };
    return (
        <MainCard
            title="View And Edit Your Profile"
            sx={{
                width: matches ? '50%' : '100%'
            }}
        >
            <Paper>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Typography variant="button">First Name:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">{user?.first_name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="button">Last Name:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">{user?.last_name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="button">Username:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">{user?.username}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="button">Email:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">{user?.email}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="button">Phone Number:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">{user?.phone_number}</Typography>
                    </Grid>
                    <Button
                        sx={{
                            margin: 'auto',
                            marginTop: '35px',
                            padding: '15px',
                            borderRadius: '10px'
                        }}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        Edit Profile
                    </Button>
                </Grid>
            </Paper>
        </MainCard>
    );
};

export default Profile;
