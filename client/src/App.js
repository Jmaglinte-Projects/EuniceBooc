import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing

// defaultTheme
import themes from 'themes';

// project imports
import Resume from 'views/Resume';
import Color from 'views/utilities/Color';
import Typography from 'views/utilities/Typography';
import Shadow from 'views/utilities/Shadow';
import TablerIcons from 'views/utilities/TablerIcons';
import MaterialIcons from 'views/utilities/MaterialIcons';

import Error from 'views/404';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />

                <Routes>
                    <Route path="/" element={<Resume />} />

                    {/* UTILITIES */}
                    <Route path="/colors" element={<Color />} />
                    <Route path="/typography" element={<Typography />} />
                    <Route path="/Shadow" element={<Shadow />} />
                    <Route path="/TablerIcons" element={<TablerIcons />} />
                    <Route path="/MaterialIcons" element={<MaterialIcons />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
