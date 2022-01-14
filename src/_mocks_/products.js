import CallIcon from '@material-ui/icons/Call';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TvIcon from '@material-ui/icons/Tv';
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
