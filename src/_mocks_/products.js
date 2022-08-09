import CallIcon from '@mui/icons-material/Call';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TvIcon from '@mui/icons-material/Tv';
import SchoolIcon from '@mui/icons-material/School';
import mtnLogo from '../assets/images/network/mtn-logo.png';
import gloLogo from '../assets/images/network/glo-log.png';
import airtelLogo from '../assets/images/network/airtel-logo.png';
// import etisalat from '../assets/images/network/9mobile-logo.jpg';

export const products = [
    {
        id: 1,
        name: 'Buy Airtime',
        icon: <CallIcon style={{ color: 'green', fontSize: '35px' }} />,
        url: '/buy-airtime'
    },
    {
        id: 2,
        name: 'Data Bundle',
        icon: <NetworkCheckIcon style={{ color: 'blue', fontSize: '35px' }} />,
        url: '/buy-data'
    },
    {
        id: 3,
        name: 'Pay Electricity Bills',
        icon: <EmojiObjectsIcon style={{ color: 'orange', fontSize: '35px' }} />,
        url: '/electricity-sub'
    },
    {
        id: 4,
        name: 'Cable Tv Subscription',
        icon: <TvIcon style={{ color: 'brown', fontSize: '35px' }} />,
        url: '/cable-tv-sub'
    },
    {
        id: 5,
        name: 'Education/Card Pin',
        icon: <SchoolIcon style={{ color: 'teal', fontSize: '35px' }} />,
        url: '/exam-pin'
    },
    {
        id: 6,
        name: 'Crypto Exchange',
        icon: <TvIcon style={{ color: 'grey', fontSize: '35px' }} />,
        url: '/sell-crypto'
    }
];

export const dataProducts = [
    {
        id: 1,
        name: 'MTN SME Data',
        image: mtnLogo,
        url: '/buy-mtn-data'
    },
    {
        id: 2,
        name: 'MTN Data (Gifting)',
        image: mtnLogo,
        url: '/buy-mtn-gift-data'
    },
    {
        id: 3,
        name: 'Glo Data (Gifting)',
        image: gloLogo,
        url: '/buy-glo-data'
    },
    {
        id: 4,
        name: 'Airtel Data (Gifting)',
        image: airtelLogo,
        url: '/buy-airtel-data'
    }
];

export const airtimeProducts = [
    {
        id: 1,
        name: 'MTN Airtime',
        image: mtnLogo,
        url: '/buy-mtn-airtime'
    },
    {
        id: 2,
        name: 'Glo Airtime',
        image: gloLogo,
        url: '/buy-glo-airtime'
    },
    {
        id: 3,
        name: 'Airtel Airtime',
        image: airtelLogo,
        url: '/buy-airtel-airtime'
    }
];
