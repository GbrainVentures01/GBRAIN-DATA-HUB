import { Paper, Typography } from '@mui/material';

const StatisticCard = ({ title, value, icon }) => {
    return (
        <Paper
            variant="elevation"
            elevation={5}
            sx={{
                backgroundColor: 'white',
                maxWidth: '220px',
                p: 1.5,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            {icon}
            <div>
                <Typography variant="body1" sx={{ fontSize: '.7rem', mb: 2, fontWeight: 500, textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '.7rem', fontWeight: 500, textAlign: 'center' }}>
                    {value}
                </Typography>
            </div>
        </Paper>
    );
};

export default StatisticCard;
