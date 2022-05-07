import CallIcon from '@mui/icons-material/Call';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TvIcon from '@mui/icons-material/Tv';
export const products = [
    {
        id: 1,
        name: 'Airtime',
        icon: <CallIcon />,
        url: '/buy-glo-airtime'
    },
    {
        id: 2,
        name: 'SME Data',
        icon: <NetworkCheckIcon />,
        url: '/buy-glo-data'
    },
    {
        id: 3,
        name: 'Electricity',
        icon: <EmojiObjectsIcon />,
        url: '#'
    },
    {
        id: 4,
        name: 'Tv/Cable',
        icon: <TvIcon />,
        url: 'sub-dstv'
    }
];
