import { Typography } from '@mui/material';
import whatsapp from '../../../assets/images/whatsapp.png';

const HelpLine = () => {
    return (
        <div
            style={{
                padding: '10px ',
                backgroundColor: '#83529f',
                height: '150px',
                width: '250px',
                alignSelf: 'center',
                color: 'white',
                textAlign: 'center',
                margin: '20px auto'
            }}
        >
            <Typography variant="body1" sx={{ fontSize: '1rem', mb: 1, fontWeight: 500, textAlign: 'center' }}>
                Help Center:
            </Typography>
            <Typography
                variant="body2"
                sx={{ color: 'white', fontSize: '.8rem', lineHeight: '1.2rem', fontWeight: 300, textAlign: 'center' }}
            >
                Need any help? Please contact our customer care center to resolve any issue:
            </Typography>

            <a
                href="#"
                style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10px'
                }}
            >
                <img src={whatsapp} height="30px" width="30px" />
                <Typography variant="subtitle1" color="white" sx={{ ml: 1, fontSize: '.8rem' }}>
                    WhatsApp Us
                </Typography>
            </a>
        </div>
    );
};

export default HelpLine;
