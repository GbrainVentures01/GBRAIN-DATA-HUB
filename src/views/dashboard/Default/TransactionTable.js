import { Button, Paper, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import CustomizedTables from './MainTransactionTable';

const TransactionTable = () => {
    return (
        <></>
        // <div style={{ margin: '20px 0' }}>
        //     <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2, fontWeight: 500, textAlign: 'center' }}>
        //         FETCH STATISTICS
        //     </Typography>
        //     <Paper variant="elevation" elevation={3} sx={{ mt: 2, padding: '10px' }}>
        //         <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2, fontWeight: 500, textAlign: 'center' }}>
        //             Enter Date Format
        //         </Typography>
        //         <div style={{ textAlign: 'center' }}>
        //             <DatePicker value={value} onChange={(newValue) => setValue(newValue)} label="Controlled picker" sx={{ mb: 2 }} />
        //             <Button variant="contained" color="secondary" onClick={handleClick}>
        //                 Fetch
        //             </Button>
        //         </div>
        //         <CustomizedTables />
        //     </Paper>
        // </div>
    );
};

export default TransactionTable;
