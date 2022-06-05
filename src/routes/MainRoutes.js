// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import BuyAirtime from 'views/airtime';
import SubTv from 'views/cables&tv';
import BuyData from 'views/data';
import Electricity from 'views/electricity';
import ExamPin from 'views/exam';
import ForgetPswdWrapper from 'views/pages/authentication/authentication3/ForgetPswd';
import Login from 'views/pages/authentication/authentication3/Login3';
import { SuccessPAyment } from 'views/payments/ConfirmPayment';
import Funding from 'views/payments/Funding';
import Profile from 'views/profile';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/airtime')));

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
            element: <BuyData title="Glo Data" network="Glo"  />
        },
        {
            path: '/buy-mtn-data',
            element: <BuyData title="Mtn Data" network="Mtn"  />
        },
        {
            path: '/buy-airtel-data',
            element: <BuyData title="Airtel Data" network="Airtel"  />
        },
         {
            path: '/cable-tv-sub',
            element: <SubTv title="Buy Cable TV "   />
        },
         {
            path: '/electricity-sub',
            element: <Electricity title="Buy Electricity (PREPAID)"   />
        },
         {
            path: '/exam-pin',
            element: <ExamPin title="Buy Exam Pin"   />
        },
         {
            path: '/fund-wallet',
            element: <Funding  />
        },
         {
            path: '/confirm-payment',
            element: <SuccessPAyment  />
        },
        {
            path: '/profile',
            element: <Profile  />
        },
        
    ]
};

export default MainRoutes;
