// assets
import { IconKey } from '@tabler/icons';
import { FaMobile } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaUserSecret } from 'react-icons/fa';

// constant
const icons = {
    IconKey,
    FaMobile,
    FaPhone,
    FaTv,
    FaLightbulb,
    FaWallet,
    FaGraduationCap,
    FaClock,
    FaUser,
    FaMoneyBill,
    FaFacebookMessenger,

    FaUserSecret
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'services',
    title: 'Our Service',
    caption: 'data and cable subscription',
    type: 'group',
    children: [
        {
            id: 'airtime',
            title: 'Airtime',
            color: 'blue',
            type: 'collapse',
            icon: icons.FaPhone,

            children: [
                {
                    id: 'mtn',
                    title: 'Mtn Airtime',
                    type: 'item',
                    url: '/buy-mtn-airtime',
                    target: false
                },
                {
                    id: 'glo',
                    title: 'Glo Airtime',
                    type: 'item',
                    url: '/buy-glo-airtime',
                    target: false
                },

                {
                    id: 'airtel',
                    title: 'Airtel Airtime',
                    type: 'item',
                    url: '/buy-airtel-airtime',
                    target: false
                }
            ]
        },

        {
            id: 'data',
            title: 'Data Subscription',
            type: 'collapse',
            color: 'teal',
            icon: icons.FaMobile,

            children: [
                {
                    id: 'mtn1',
                    title: 'Mtn SME Data',
                    type: 'item',
                    url: '/buy-mtn-data',
                    target: false
                },
                {
                    id: 'mtn2',
                    title: 'Mtn SME 1 Data ',
                    type: 'item',
                    url: '/buy-mtn-data-sme-1',
                    target: false
                },
                {
                    id: 'mtn3',
                    title: 'Mtn SME 2 Data ',
                    type: 'item',
                    url: '/buy-mtn-data-sme-2',
                    target: false
                },
                {
                    id: 'mtn4',
                    title: 'Mtn COUPON Data ',
                    type: 'item',
                    url: '/buy-mtn-data-coup',
                    target: false
                },
                {
                    id: 'mtn5',
                    title: 'Mtn Data (Gifting)',
                    type: 'item',
                    url: '/buy-mtn-gift-data',
                    target: false
                },

                {
                    id: 'glo',
                    title: 'Glo Data ',
                    type: 'item',
                    url: '/buy-glo-data',
                    target: false
                },
                {
                    id: 'glo-cg',
                    title: 'Glo Corporate Gifting ',
                    type: 'item',
                    url: '/buy-glo-cg-data',
                    target: false
                },
                {
                    id: 'airtel',
                    title: 'Airtel Data',
                    type: 'item',
                    url: '/buy-airtel-data',
                    target: false
                },
                {
                    id: 'airtel-cg',
                    title: 'Airtel Corporate Gifting ',
                    type: 'item',
                    url: '/buy-airtel-cg-data',
                    target: false
                }
            ]
        },
        {
            id: 'Sell airtime',
            title: 'Convert Airtime To Cash',
            type: 'item',
            url: '/sell-airtime',
            color: 'teal',
            target: false,
            icon: icons.FaMoneyBill
        },
        {
            id: 'cable&tv',
            title: 'Cable And Tv Subscription',
            type: 'item',
            color: 'brown',
            url: '/cable-tv-sub',
            target: false,
            icon: icons.FaTv
        },
        {
            id: 'Electricity',
            title: 'Electricity and Power Subscription ',
            type: 'item',
            color: 'teal',
            url: '/electricity-sub',
            target: false,
            icon: icons.FaLightbulb
        },
        {
            id: 'Exam Pin',
            title: 'Examination Scratch Card and pins',
            type: 'item',
            color: 'purple',
            url: '/exam-pin',
            target: false,
            icon: icons.FaGraduationCap
        },
        {
            id: 'fund wallet',
            title: 'Fund Wallet',
            type: 'item',
            color: 'green',
            url: '/fund-wallet',
            target: false,
            icon: icons.FaWallet
        },
        {
            id: 'Transaction History',
            title: 'Transaction History',
            type: 'item',
            color: 'brown',
            url: '/trx-histories',
            target: false,
            icon: icons.FaClock
        },
        {
            id: 'Profile',
            title: 'Profile',
            color: 'blue',
            type: 'item',
            url: '/profile',
            target: false,
            icon: icons.FaUser
        },
        {
            id: 'Contact',
            title: 'Contact Us',
            color: 'gold',
            type: 'item',
            url: '/contact-us',
            target: false,
            icon: icons.FaFacebookMessenger
        },
        {
            id: 'pin_reset',
            title: 'Reset Transaction Pin',
            type: 'item',
            url: '/forget-pin',
            color: 'red',
            target: false,
            icon: icons.FaUserSecret
        }
    ]
};

export default pages;
