import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import SolutionDetail from './pages/SolutionDetail'; 
import Connect from './pages/Connect';

// Create a dark theme instance to ensure MUI components match your slate-950 background
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#248993', // Adjust this to match your brand blue
    },
    background: {
      default: '#020617 ', // slate-950 hex equivalent
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline kicks out browser default margins that cause alignment issues */}
      <CssBaseline />
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        bgcolor: 'background.default' 
      }}>
        
        {/* Navigation stays at the top. */}
        <Navigation />

        {/* 
            Main Content Area 
            Added paddingTop to prevent Navigation from covering the Hero text 
        */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            pt: { xs: '64px', md: '80px' } // Offsets the height of the fixed Navbar
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </Box>

      </Box>
    </ThemeProvider>
  );
}