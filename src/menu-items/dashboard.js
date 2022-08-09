// assets
import { FaHome } from 'react-icons/fa';

// constant
const icons = { FaHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.FaHome,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
