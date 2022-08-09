// material-ui
// project imports
import { Box, CircularProgress } from '@mui/material';
import Cookies from 'js-cookie';
import MUIDataTable from 'mui-datatables';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getHistories } from 'store/actions';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Histories = () => {
    const { transactionHistory } = useSelector((state) => state);
    const { loading, histories } = transactionHistory;
    console.log(histories);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
        dispatch(getHistories({ enqueueSnackbar }));
    }, [dispatch, enqueueSnackbar, navigate]);

    const columns = [
        {
            name: 'name',
            label: 'Transaction Name',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'ref',
            label: 'Refrence',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'date',
            label: 'Date',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'amount',
            label: 'Amount',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'beneficiary',
            label: 'Beneficiary',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'status',
            label: 'Status',
            options: {
                filter: true,
                sort: false
            }
        }
    ];
    const data = histories.histories?.map((serv, i) => {
        const strDate = new Date(serv?.createdAt);
        function convert(strDate) {
            var date = new Date(strDate),
                mnth = ('0' + (date.getMonth() + 1)).slice(-2),
                day = ('0' + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join('-');
        }
        return {
            id: `${serv._id}`,
            name: `${serv.plan ? serv?.plan : serv?.TRX_Name || '-'}`,
            ref: `${serv.request_id || serv?.ref || '-'}`,
            amount: `${serv.amount}`,
            beneficiary: `${serv.beneficiary ? serv?.beneficiary : serv?.phone_number || '-'}`,
            status: `${serv.status}`,
            date: convert(strDate)
        };
    });

    const options = {
        filterType: 'checkbox',
        selectableRows: 'none'
    };
    return (
        <MainCard title={'Transactions Hidtories'}>
            {loading ? (
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <MUIDataTable title={'Histories'} data={data} columns={columns} options={options} />
            )}
        </MainCard>
    );
};

export default Histories;
