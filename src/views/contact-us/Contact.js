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
                        href="https://wa.me/+2347042500308"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">Whatsaap or Call</Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="tel: +2347042500308"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">+234 704 250 0308</Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="tel: +2348123210297"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">+234 812 321 0297</Typography>
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
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="https://chat.whatsapp.com/I1W2va6Zt26BDizKm98Ddu"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4">Join Gbrain Reseller's whatsapp Group</Typography>
                    </a>
                </li>
                <li
                    style={{
                        marginBottom: '10px'
                    }}
                >
                    <a
                        href="https://chat.whatsapp.com/COXwAY0D4MSAV6sa17MOqP"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography variant="h4"> Gbrain Website Update</Typography>
                    </a>
                </li>
            </ul>
        </MainCard>
    );
};

export default Contact;
