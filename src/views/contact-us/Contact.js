// material-ui
// project imports
import { Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Contact = ({ title }) => {
    return (
        <MainCard title={'Contact US'}>
            <Typography
                sx={{
                    marginBottom: '20px'
                }}
                variant="h3"
            >
                Send us a message via any of our customer support channel
            </Typography>
            <ul>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://wa.me/+2348106361767"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">Whatsaap </Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="tel: +2347039039384"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">+2348106361767</Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="tel: +2348106361767"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">+2348106361767</Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="mailto: gbrainventures@gmail.com"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">gbrainventures@gmail.com </Typography>
                    </a>
                </li>
            </ul>
        </MainCard>
    );
};

export default Contact;
