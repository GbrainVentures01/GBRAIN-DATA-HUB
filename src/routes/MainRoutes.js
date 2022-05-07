import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BuyAirtime from 'views/airtime';
import { Glo_data } from '_mocks_/glo_data_plan';
import BuyData from 'views/data';
import { Mtn_plans } from '_mocks_/mtn_data_plan';
import Login from 'views/pages/authentication/authentication3/Login3';
import Funding from 'views/payments/Funding';
import { SuccessPAyment } from 'views/payments/ConfirmPayment';
import ForgetPswdWrapper from 'views/pages/authentication/authentication3/ForgetPswd';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/airtime')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/pages/login/login3',
            element: <Login />
        },
         {
            path: '/pages/auth/forget-pswd',
            element: <ForgetPswdWrapper />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/buy-mtn-airtime',
            element: <BuyAirtime network="Mtn" title="MTN Airtime" />
        },
        {
            path: '/buy-airtel-airtime',
            element: <BuyAirtime network="Airtel" title="Airtel Airtime" />
        },
        {
            path: '/buy-glo-airtime',
            element: <BuyAirtime network="Glo" title="Glo Airtime" />
        },
        {
            path: '/buy-glo-data',
            element: <BuyData title="Glo Data" network="Glo" product={Glo_data} />
        },
        {
            path: '/buy-mtn-data',
            element: <BuyData title="Mtn Data" network="Mtn" product={Mtn_plans} />
        },
        {
            path: '/buy-airtel-data',
            element: <BuyData title="Airtel Data" network="Airtel" product={[]} />
        },
         {
            path: '/fund-wallet',
            element: <Funding  />
        },
         {
            path: '/confirm-payment',
            element: <SuccessPAyment  />
        }
    ]
};

export default MainRoutes;
