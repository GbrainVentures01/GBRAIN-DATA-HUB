import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
// project imports
import MainCard from 'ui-component/cards/MainCard';


// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// ============================|| MATERIAL ICONS ||============================ //

const MaterialIcons = () => (
    <MainCard title="Material Icons" secondary={<SecondaryAction link="https://next.material-ui.com/components/material-icons/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            <IFrameWrapper title="Material Icon" width="100%" src="https://material-ui.com/components/material-icons/" />
        </Card>
    </MainCard>
);

export default MaterialIcons;
