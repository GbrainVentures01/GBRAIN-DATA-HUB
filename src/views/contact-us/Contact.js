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
                        href="https://wa.me/+23400000000"
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
                        href="tel: +23400000000"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">+2340000000 </Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="mailto: abc@gmail.com"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">abc@gmail.com </Typography>
                    </a>
                </li>
            </ul>
        </MainCard>
    );
};

export default Contact;
