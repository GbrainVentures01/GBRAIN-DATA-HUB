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
                    id: 'glo',
                    title: 'Glo Airtime',
                    type: 'item',
                    url: '/buy-glo-airtime',
                    target: false
                },
                {
                    id: 'mtn',
                    title: 'Mtn Airtime',
                    type: 'item',
                    url: '/buy-mtn-airtime',
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
                    id: 'glo',
                    title: 'Glo Data',
                    type: 'item',
                    url: '/buy-glo-data',
                    target: false
                },
                {
                    id: 'mtn',
                    title: 'Mtn Data',
                    type: 'item',
                    url: '/buy-mtn-data',
                    target: false
                },
                {
                    id: 'airtel',
                    title: 'Airtel Data',
                    type: 'item',
                    url: '/buy-airtel-data',
                    target: false
                }
            ]
        },
        {
            id: 'cable&tv',
            title: 'Cable And Tv Subscription',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'dstv',
                    title: 'DSTV Subscription',
                    type: 'item',
                    url: '/sub-dstv',
                    target: false
                },
                {
                    id: 'gotv',
                    title: 'GOTV Subscription',
                    type: 'item',
                    url: '/sub-gotv',
                    target: false
                },
                {
                    id: 'startimes',
                    title: 'StarTimes Subscription',
                    type: 'item',
                    url: '/sub-startimes',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
