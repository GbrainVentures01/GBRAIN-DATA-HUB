import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useSelector } from 'react-redux';
// routing
import Routes from 'routes';
// defaultTheme
import themes from 'themes';
// third party packages 
import { SnackbarProvider } from 'notistack';





// ==============================|| APP ||============================== //

const App = () => {
    const { customization } = useSelector((state) => state);

    return (
        <SnackbarProvider maxSnack={2} anchorOrigin={{vertical:"top", horizontal:"right"}}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
        </SnackbarProvider>
    );
};

export default App;
