// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import BuyAirtime from 'views/airtime';
import SelectAirtimeView from 'views/airtime/airtimeSelectionView';
import SubTv from 'views/cables&tv';
import Contact from 'views/contact-us/Contact';
import SellCrypto from 'views/crypto/sell_crypto';
import BuyData from 'views/data';
import SelectDataView from 'views/data/dataSelectionView';
import Electricity from 'views/electricity';
import ExamPin from 'views/exam';
import Histories from 'views/histories/Transaction_History';
import ForgetPswdWrapper from 'views/pages/authentication/authentication3/ForgetPswd';
import Login from 'views/pages/authentication/authentication3/Login3';
import { SuccessPAyment } from 'views/payments/ConfirmPayment';
import Funding from 'views/payments/Funding';
import Profile from 'views/profile';
import EditProfile from 'views/profile/edit_profile';
import SellAirtime from 'views/sell-airtime/sell-airtime';
import { airtimeProducts, dataProducts } from '../_mocks_/products';

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
            path: '/buy-airtime',
            element: <SelectAirtimeView airtimeProv={airtimeProducts} />
        },
        {
            path: '/sell-airtime',
            element: <SellAirtime title="Convert Excess Airtime To Cash" />
        },
        {
            path: '/buy-data',
            element: <SelectDataView dataplans={dataProducts} />
        },
        {
            path: '/buy-mtn-airtime',
            element: <BuyAirtime network="mtn" title="MTN Airtime" />
        },
        {
            path: '/buy-airtel-airtime',
            element: <BuyAirtime network="airtel" title="Airtel Airtime" />
        },
        {
            path: '/buy-glo-airtime',
            element: <BuyAirtime network="glo" title="Glo Airtime" />
        },
        {
            path: '/buy-glo-data',
            element: <BuyData title="Glo Data" sme={false} network="Glo" />
        },
        {
            path: '/buy-mtn-data',
            element: <BuyData title="Mtn Data" sme={true} network="Mtn" />
        },
        {
            path: '/buy-mtn-gift-data',
            element: <BuyData title="Mtn Data Gifting" sme={false} network="Mtn" />
        },
        {
            path: '/buy-airtel-data',
            element: <BuyData title="Airtel Data" sme={false} network="Airtel" />
        },
        {
            path: '/cable-tv-sub',
            element: <SubTv title="Buy Cable TV " />
        },
        {
            path: '/electricity-sub',
            element: <Electricity title="Buy Electricity (PREPAID)" />
        },
        {
            path: '/exam-pin',
            element: <ExamPin title="Buy Exam Pin" />
        },
        {
            path: '/fund-wallet',
            element: <Funding />
        },
        {
            path: '/confirm-payment',
            element: <SuccessPAyment />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/edit-profile',
            element: <EditProfile />
        },
        {
            path: '/trx-histories',
            element: <Histories />
        },
        {
            path: '/contact-us',
            element: <Contact />
        },
        {
            path: '/sell-crypto',
            element: <SellCrypto />
        }
    ]
};

export default MainRoutes;
