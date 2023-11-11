import { Grid, Typography } from '@mui/material';
import { FaDollarSign, FaLink, FaSalesforce, FaUpload, FaWallet } from 'react-icons/fa';
import StatisticCard from './StatisticCard';

const TransactionStat = ({ stat }) => {
    console.log('Stat: ', stat);
    const date = new Date();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    return (
        <div>
            <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2, mt: 2, fontWeight: 500, textAlign: 'center' }}>
                TRANSACTION STATISTICS
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <StatisticCard title={' WALLET BALANCE'} value={`₦ ${stat?.walletBal}`} icon={<FaWallet size={30} color="#83529f" />} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StatisticCard
                        title={`TODAY'S PURCHASE (${days[date.getDay()].toUpperCase()})`}
                        value={`₦ ${stat?.todaysPurchase}`}
                        icon={<FaLink size={30} color="#83529f" />}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StatisticCard
                        title={`TOTAL SALES NO (${months[date.getMonth()].toUpperCase()})`}
                        value={stat?.monthlySales}
                        icon={<FaSalesforce size={30} color="#83529f" />}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StatisticCard
                        title={`TOTAL MONTHLY FUND (${months[date.getMonth()].toUpperCase()})`}
                        value={`₦ ${stat?.totalMonthFundings}`}
                        icon={<FaDollarSign size={30} color="#83529f" />}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StatisticCard
                        title={`TOTAL MONTHLY USED (${months[date.getMonth()].toUpperCase()})`}
                        value={`₦ ${stat?.totalMonthlyTransactions}`}
                        icon={<FaUpload size={30} color="#83529f" />}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default TransactionStat;
