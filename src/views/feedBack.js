import { Button, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
// import { useSnackbar } from 'notistack';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { generateMonnifyAccount } from 'store/actions';
const FeedBack = ({
    title,
    type,
    message,
    from,
    disableTopup,
    purchasePin,
    goHome,
    showAlert,
    setshowAlert,
    showErrorAlert,
    setshowErrorAlert
}) => {
    const navigate = useNavigate();
    const onClickSuccess = (setshowAlert, goHome) => {
        setshowAlert((prevAlert) => !prevAlert);
        if (goHome) {
            navigate('/');
        }
    };
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { monnifyAccountGeneration } = useSelector((state) => state);
    const { loading } = monnifyAccountGeneration;

    const generateAccount = async (setshowAlert) => {
        await dispatch(generateMonnifyAccount({ enqueueSnackbar, navigate }));
        setshowAlert((prevAlert) => !prevAlert);
    };
    const onClickFailure = () => {
        setshowErrorAlert(false);
    };

    const SuccessFullAlert = ({ title, message }) => {
        return (
            <SweetAlert
                type={type ? 'info' : 'success'}
                title={title || 'Successful!'}
                show={showAlert}
                onConfirm={() => (from === 'fund' ? generateAccount(setshowAlert) : onClickSuccess(setshowAlert, goHome))}
                onCancel={() => setshowAlert(false)}
                customButtons={
                    <>
                        <Button
                            fullWidth
                            onClick={() => (from === 'fund' ? generateAccount(setshowAlert) : onClickSuccess(setshowAlert, goHome))}
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            {from === 'fund' ? 'Generate now' : 'Ok'}
                        </Button>
                    </>
                }
            >
                <br />
                <Typography variant="subtitle1">{message}</Typography>
                {purchasePin && <Typography variant="subtitle1">{purchasePin}</Typography>}
            </SweetAlert>
        );
    };
    const FailureAlert = ({ message }) => {
        return (
            <SweetAlert
                danger
                show={showErrorAlert}
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Failed"
                onConfirm={onClickFailure}
                onCancel={onClickFailure}
                focusCancelBtn
                customButtons={
                    <>
                        <Button onClick={onClickFailure} sx={{ mr: 2 }} variant="contained" color="primary">
                            Ok
                        </Button>
                        {/* {!disableTopup && (
                            <Button onClick={() => navigate('/fund-wallet')} variant="contained" color="primary">
                                Top up now
                            </Button>
                        )} */}
                    </>
                }
            >
                {message}
            </SweetAlert>
        );
    };

    if (showAlert) {
        return <SuccessFullAlert title={title} message={message} />;
    } else if (showErrorAlert) {
        return <FailureAlert message={message} />;
    } else {
        return '';
    }
};

export default FeedBack;
