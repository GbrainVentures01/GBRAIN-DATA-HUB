import CallIcon from '@mui/icons-material/Call';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TvIcon from '@mui/icons-material/Tv';


export const products = [
    {
        id: 1,
        name: 'Airtime',
        icon: <CallIcon color='success'/>,
        url: '/buy-glo-airtime'
    },
    {
        id: 2,
        name: 'SME Data',
        icon: <NetworkCheckIcon color='orange'/>,
        url: '/buy-glo-data'
    },
    {
        id: 3,
        name: 'Electricity',
        icon: <EmojiObjectsIcon color="info"/>,
        url: '#'
    },
    {
        id: 4,
        name: 'Tv/Cable',
        icon: <TvIcon color='error' />,
        url: 'sub-dstv'
    },
    {
        id: 5,
        name: 'Crypto Exchange',
        icon: <TvIcon color='disabled' />,
        url: '#',
        
    }
];
