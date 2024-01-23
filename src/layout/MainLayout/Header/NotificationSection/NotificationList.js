// material-ui
import { Avatar, Chip, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// assets
import User1 from 'assets/images/users/user-round.svg';
import { Link } from 'react-router-dom';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = ({ notification, bvnverified }) => {
    const theme = useTheme();

    const chipSX = {
        height: 24,
        padding: '0 6px'
    };
    const chipErrorSX = {
        ...chipSX,
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        marginRight: '5px'
    };

    // const chipWarningSX = {
    //     ...chipSX,
    //     color: theme.palette.warning.dark,
    //     backgroundColor: theme.palette.warning.light
    // };

    // const chipSuccessSX = {
    //     ...chipSX,
    //     color: theme.palette.success.dark,
    //     backgroundColor: theme.palette.success.light,
    //     height: 28
    // };

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                },
                '& .list-container': {
                    pl: 7
                }
            }}
        >
            {!bvnverified && (
                <>
                    <ListItemWrapper>
                        <ListItem alignItems="center">
                            <ListItemAvatar>
                                <Avatar alt="John Doe" src={User1} />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Account Verification </Typography>} />
                            {/* <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction> */}
                        </ListItem>
                        <Grid container direction="column" className="list-container">
                            <Grid item xs={12} sx={{ pb: 2 }}>
                                <Typography variant="subtitle2">Your account is not yet verified as directed by the CBN.</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item>
                                        <Link to="/verify-account" style={{ cursor: 'pointer' }}>
                                            <Chip label="Verify now" sx={chipErrorSX} />
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItemWrapper>
                    <Divider />
                </>
            )}
            {notification && (
                <ListItemWrapper>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="John Doe" src={User1} />
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="subtitle1">Service Update </Typography>} />
                        {/* <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction> */}
                    </ListItem>
                    <Grid container direction="column" className="list-container">
                        <Grid item xs={12} sx={{ pb: 2 }}>
                            <Typography variant="subtitle2">{notification?.message}</Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Link to="/verify-account" style={{ cursor: 'pointer' }}>
                                        <Chip label="Verify now" sx={chipErrorSX} />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </ListItemWrapper>
            )}
        </List>
    );
};

export default NotificationList;
