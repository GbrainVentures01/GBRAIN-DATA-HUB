import { Button, Typography } from '@mui/material';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router';
const FeedBack = ({ message, variant, disableTopup, showAlert, setshowAlert, showErrorAlert, setshowErrorAlert }) => {
    const navigate = useNavigate();
    const onClickSuccess = () => {
        setshowAlert(false);
    };
    const onClickFailure = () => {
        setshowErrorAlert(false);
    };

    const SuccessFullAlert = ({ message }) => {
        return (
            <SweetAlert
                success
                title="Successful!"
                show={showAlert}
                onConfirm={onClickSuccess}
                onCancel={onClickSuccess}
                customButtons={
                    <>
                        <Button fullWidth onClick={onClickSuccess} variant="contained" color="primary">
                            Ok
                        </Button>
                    </>
                }
            >
                <Typography variant="subtitle1">{message}</Typography>
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
                        {!disableTopup && (
                            <Button onClick={() => navigate('/fund-wallet')} variant="contained" color="primary">
                                Top up now
                            </Button>
                        )}
                    </>
                }
            >
                {message}
            </SweetAlert>
        );
    };

    if (showAlert) {
        return <SuccessFullAlert message={message} />;
    } else if (showErrorAlert) {
        return <FailureAlert message={message} />;
    } else {
        return '';
    }
};

export default FeedBack;
