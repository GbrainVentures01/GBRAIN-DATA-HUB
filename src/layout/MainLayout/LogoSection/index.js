// material-ui
import { ButtonBase } from '@mui/material';
// project imports
import config from 'config';
import { Link } from 'react-router-dom';
import Logo from 'ui-component/Logo';



// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <>
        <ButtonBase disableRipple component={Link} to={config.defaultPath}>
            {/* <Typography variant="h3">GBrain Ventures</Typography> */}
            <Logo />
        </ButtonBase>
    </>
);

export default LogoSection;
