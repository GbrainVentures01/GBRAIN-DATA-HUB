// material-ui
// project imports
import { Box, Card, CardHeader, CircularProgress, Divider, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Cookies from 'js-cookie';
import moment from 'moment';

import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getHistories, userAction } from 'store/actions';
import theme from 'themes';
import { SeverityPill } from 'ui-component/severity-pill';

// import Scrollbar from 'ui-component/Scrollbar';

// ==============================|| SAMPLE PAGE ============================== //
const styles = {
    link: {
        textDecoration: 'none',
        color: theme().palette.error
    },
    img: {
        height: '100px',
        width: '100px',
        borderRadius: '50%'
    }
};
const statusMap = {
    pending: 'warning',
    success: 'success',
    successful: 'success',
    delivered: 'success',
    failed: 'error'
};
const Histories = () => {
    const { transactionHistory } = useSelector((state) => state);
    const { loading, histories } = transactionHistory;

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login');
        dispatch(userAction({ navigate }));
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
            name: 'status',
            label: 'Status',
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
                sort: true
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
            name: 'plan',
            label: 'Plan',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'previous_balance',
            label: 'Previous Balance',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'current_balance',
            label: 'Current Balance',
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
            name: 'network',
            label: 'Network',
            options: {
                filter: true,
                sort: false
            }
        },

        {
            name: 'exam_pin',
            label: 'Serial No / Pin',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'electricity',
            label: 'Token',
            options: {
                filter: true,
                sort: false
            }
        },

        {
            name: 'ref',
            label: 'Refrence',
            options: {
                filter: true,
                sort: false
            }
        }
    ];

    histories.histories?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const data = histories.histories?.map((serv, i) => {
        // const strDate = new Date(serv?.createdAt);
        const formattedDate = moment(serv?.createdAt).format('LLLL');
        // function convert(strDate) {
        //     var date = new Date(strDate),
        //         mnth = ('0' + (date.getMonth() + 1)).slice(-2),
        //         day = ('0' + date.getDate()).slice(-2);
        //     // Get hours, minutes, and seconds with leading zeros
        //     const hours = ('0' + date.getHours()).slice(-2);
        //     const minutes = ('0' + date.getMinutes()).slice(-2);
        //     const seconds = ('0' + date.getSeconds()).slice(-2);
        //     return [
        //         date.getFullYear(),
        //         '-',
        //         mnth,
        //         '-',
        //         day,

        //         ' ', // Space between date and time
        //         hours,
        //         ':',
        //         minutes,
        //         ':',
        //         seconds
        //     ].join('');
        // }
        return {
            id: `${serv.id}`,
            name: `${serv.TRX_Name ? serv?.TRX_Name : serv?.plan || '-'}`,
            ref: `${serv.request_id || serv?.ref || serv?.tx_ref || serv?.request_Id || serv?.request_id || '-'}`,
            amount: `${serv.amount}`,
            previous_balance: `${serv?.previous_balance}`,
            current_balance: `${serv?.current_balance}`,
            network: `${serv.network ? serv.network : '-'}`,
            beneficiary: `${serv.beneficiary ? serv?.beneficiary : serv?.phone_number || serv?.phone || '-'}`,
            status: `${serv.status}`,
            exam_pin: `${serv.purchased_pin || '-'}`,
            electricity: `${serv.purchased_token || '-'}`,
            date: formattedDate,
            plan: `${serv?.plan || serv?.Plan || '-'}`,
            billersCode: `${serv?.billersCode || '-'}`
        };
    });

    return (
        <Card sx={{ height: '100%', marginTop: 5, width: '100%' }}>
            <CardHeader title={'Transactions History'} />
            <ScrollBar sx={{ flexGrow: 1 }}>
                {/* <Box sx={{ minWidth: 800, overflowX: 'auto' }}> */}
                {loading ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ref</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>TRX Type</TableCell>
                                <TableCell>Network</TableCell>
                                <TableCell>Plan</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Beneficiary</TableCell>
                                <TableCell>Balance Before</TableCell>
                                <TableCell>Balance After</TableCell>
                                <TableCell>Electricity Token</TableCell>
                                <TableCell>Billers Code</TableCell>
                                <TableCell>Exam Pin</TableCell>
                                <TableCell>Status</TableCell>

                                {/* <TableCell>Api Response</TableCell> */}

                                <TableCell>Reciept</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((order) => {
                                const createdAt = moment(order?.date).format('LLLL');

                                return (
                                    <TableRow hover key={order?.id}>
                                        <TableCell>{order.ref}</TableCell>
                                        <TableCell>{createdAt}</TableCell>
                                        <TableCell>{order?.name}</TableCell>
                                        <TableCell>{order.network}</TableCell>
                                        <TableCell>{order?.plan || '-'}</TableCell>
                                        <TableCell>N{order?.amount}</TableCell>
                                        <TableCell>{order.beneficiary}</TableCell>
                                        <TableCell>N{order?.previous_balance}</TableCell>
                                        <TableCell>N{order?.current_balance}</TableCell>
                                        <TableCell>{order.electricity}</TableCell>
                                        <TableCell>{order.billersCode}</TableCell>
                                        <TableCell>{order.exam_pin}</TableCell>

                                        <TableCell>
                                            <SeverityPill color={statusMap[order?.status?.toLowerCase()]}>
                                                {order?.status?.toLowerCase()}
                                            </SeverityPill>
                                        </TableCell>
                                        {/* <TableCell>{order?.api_response}</TableCell> */}
                                        <TableCell>
                                            <button
                                                onClick={() => navigate(`/history/order`, { state: { order: order } })}
                                                className="!w-[150px] bg-purple-700 hover:bg-purple-950 text-white font-semibold px-4 rounded my-6 py-3"
                                            >
                                                View Reciept
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                )}
                {/* </Box> */}
            </ScrollBar>
            {/* {display !== "all" && (
        <CardActions disableSpacing={true} sx={{ justifyContent: "flex-end" }}>
          <Button
            color="inherit"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            size="small"
            variant="text"
          >
            <Link to="/histories" style={styles.link}>
              View all
            </Link>
          </Button>
        </CardActions>
      )} */}
            <Divider />
        </Card>
    );
};

export default Histories;
