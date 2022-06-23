// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
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
            type: 'collapse',
            icon: icons.IconKey,

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
            icon: icons.IconKey,

            children: [
                {
                    id: 'mtn',
                    title: 'Mtn SME Data',
                    type: 'item',
                    url: '/buy-mtn-data',
                    target: false
                },
                {
                    id: 'mtn',
                    title: 'Mtn Data (Gifting)',
                    type: 'item',
                    url: '/buy-mtn-gift-data',
                    target: false
                },
                {
                    id: 'glo',
                    title: 'Glo Data (Gifting)',
                    type: 'item',
                    url: '/buy-glo-data',
                    target: false
                },

                {
                    id: 'airtel',
                    title: 'Airtel Data (Gifting)',
                    type: 'item',
                    url: '/buy-airtel-data',
                    target: false
                }
            ]
        },
        {
            id: 'Sell airtime',
            title: 'Convert Airtime To Cash',
            type: 'item',
            url: '/sell-airtime',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'cable&tv',
            title: 'Cable And Tv Subscription',
            type: 'item',
            url: '/cable-tv-sub',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'Electricity',
            title: 'Electricity and Power Subscription ',
            type: 'item',
            url: '/electricity-sub',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'Exam Pin',
            title: 'Examination Scratch Card and pins',
            type: 'item',
            url: '/exam-pin',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'fund wallet',
            title: 'Fund Wallet',
            type: 'item',
            url: '/fund-wallet',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'Transaction History',
            title: 'Transaction History',
            type: 'item',
            url: '/#',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'Profile',
            title: 'Profile',
            type: 'item',
            url: '/profile',
            target: false,
            icon: icons.IconKey
        },
        {
            id: 'Contact',
            title: 'Contact Us',
            type: 'item',
            url: '/#',
            target: false,
            icon: icons.IconKey
        }
    ]
};

export default pages;
