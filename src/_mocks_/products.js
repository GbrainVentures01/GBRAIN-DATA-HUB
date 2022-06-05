import CallIcon from '@mui/icons-material/Call';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TvIcon from '@mui/icons-material/Tv';
import SchoolIcon from '@mui/icons-material/School';

export const products = [
    {
        id: 1,
        name: 'Airtime',
        icon: <CallIcon style={{ color: 'green', fontSize: '35px' }} />,
        url: '/buy-glo-airtime'
    },
    {
        id: 2,
        name: 'SME Data',
        icon: <NetworkCheckIcon style={{ color: 'blue', fontSize: '35px' }} />,
        url: '/buy-glo-data'
    },
    {
        id: 3,
        name: 'Electricity',
        icon: <EmojiObjectsIcon style={{ color: 'orange', fontSize: '35px' }} />,
        url: 'electricity-sub'
    },
    {
        id: 4,
        name: 'Tv/Cable',
        icon: <TvIcon style={{ color: 'brown', fontSize: '35px' }} />,
        url: 'cable-tv-sub'
    },
    {
        id: 5,
        name: 'Exam Pin',
        icon: <SchoolIcon style={{ color: 'teal', fontSize: '35px' }} />,
        url: 'exam-pin'
    },
    {
        id: 6,
        name: 'Crypto Exchange',
        icon: <TvIcon style={{ color: 'grey', fontSize: '35px' }} />,
        url: '#'
    }
];
