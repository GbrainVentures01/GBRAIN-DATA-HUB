// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import BuyAirtime from 'views/airtime';
import SelectAirtimeView from 'views/airtime/airtimeSelectionView';
import SubTv from 'views/cables&tv';
import Contact from 'views/contact-us/Contact';
import BuyData from 'views/data';
import SelectDataView from 'views/data/dataSelectionView';
import Electricity from 'views/electricity';
import ExamPin from 'views/exam';
import Histories from 'views/histories/Transaction_History';
import ForgetPswdWrapper from 'views/pages/authentication/authentication3/ForgetPswd';
import Login from 'views/pages/authentication/authentication3/Login3';
import ResetPswdWrapper from 'views/pages/authentication/authentication3/ResetPswd';
import { SuccessPAyment } from 'views/payments/ConfirmPayment';
import Funding from 'views/payments/Funding';
import PinResetEmail from 'views/pin_reset/pin_reset_email';
import PinReset from 'views/pin_reset/pin_reset_page';
import Profile from 'views/profile';
import EditProfile from 'views/profile/edit_profile';
import SellAirtime from 'views/sell-airtime/sell-airtime';
import { airtimeProducts, dataProducts } from '../_mocks_/products';
import SellAirtimeOtp from 'views/sell-airtime/sell-airtime-otp';
import FinalizeSellAirtime from 'views/sell-airtime/finalize-sell-airtime';
import FundingSelection from 'views/payments/funding_selection';
import VerifyAccount from 'views/verify_account';

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
            path: '/reset-pwd',
            element: <ResetPswdWrapper />
        },
        {
            path: '/reset-pin',
            element: <PinReset />
        },
        {
            path: '/forget-pin',
            element: <PinResetEmail />
        },
        {
            path: '/pages/login',
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
            path: '/sell-airtime-otp',
            element: <SellAirtimeOtp title="Enter The Otp That Was Sent To  " />
        },
        {
            path: '/finalize-sell-airtime',
            element: <FinalizeSellAirtime title="Transfer Airtime From  " />
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
            path: '/buy-glo-cg-data',
            element: <BuyData title="Glo CG Data" cg={true} network="Glo" />
        },
        {
            path: '/buy-mtn-data',
            element: <BuyData title="Mtn Data" sme={true} network="Mtn" />
        },
        {
            path: '/buy-mtn-data-sme-1',
            element: <BuyData title="Mtn Sme 1 Data" sme_1={true} network="Mtn" />
        },
        {
            path: '/buy-mtn-data-sme-2',
            element: <BuyData title="Mtn Sme 2 Data" sme_2={true} network="Mtn" />
        },
        {
            path: '/buy-mtn-data-coup',
            element: <BuyData title="Mtn Coupon Data" coup={true} network="Mtn" />
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
            path: '/buy-airtel-cg-data',
            element: <BuyData title="Airtel CG Data" cg={true} network="Airtel" />
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
            element: <FundingSelection />
        },
        {
            path: '/fund',
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
            path: '/verify-account',
            element: <VerifyAccount />
        }
    ]
};

export default MainRoutes;
