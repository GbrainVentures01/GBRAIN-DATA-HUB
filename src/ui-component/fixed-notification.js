import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getNotificationDetails } from 'store/actions';
import { useSnackbar } from 'notistack';

const FixedNotification = () => {
    const { notificationDetails } = useSelector((state) => state);
    const [_, setshowAlert] = useState(false);
    const { notification } = notificationDetails;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        dispatch(getNotificationDetails({ enqueueSnackbar, setshowAlert }));
    }, [dispatch, navigate, enqueueSnackbar]);
    return notification?.message ? (
        <div style={{ backgroundColor: '#83529f', padding: '15px', borderRadius: '5px', marginBottom: '10px', marginTop: '10px' }}>
            <Typography sx={{ color: 'white' }}>{notification.message}</Typography>
        </div>
    ) : (
        <></>
    );
};

export default FixedNotification;
