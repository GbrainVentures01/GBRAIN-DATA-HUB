// material-ui
import { Divider, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// project imports
import { LogoutRounded } from '@mui/icons-material';
import menuItem from 'menu-items';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from 'store/actions';
import NavGroup from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const { loggedInUser, customization } = useSelector((state) => state);

    const { user } = loggedInUser;
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(LogoutAction());
    };
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return (
                    <>
                        <NavGroup key={item.id} item={item} />
                    </>
                );
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            {navItems}

            {user.username && (
                <ListItemButton
                    sx={{
                        borderRadius: `${customization.borderRadius}px`,
                        mb: 0.5,
                        alignItems: 'flex-start',
                        backgroundColor: 'inherit',
                        py: 1,
                        pl: ` 25px`
                    }}
                    onClick={Logout}
                >
                    <ListItemIcon sx={{ my: 'auto', minWidth: 36 }}>
                        <LogoutRounded></LogoutRounded>
                    </ListItemIcon>
                    {/* <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon> */}
                    <ListItemText
                        primary={
                            <Typography variant="h5" color="inherit">
                                Logout
                            </Typography>
                        }
                    />
                </ListItemButton>
            )}

            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

export default MenuList;
