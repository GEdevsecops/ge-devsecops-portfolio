import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Components
import Navigation from './components/Navigation';
import HeroSection from './components/Hero'; 
import Experience from './pages/Experience';
import Building from './pages/Building';
import Skills from './pages/Skills';
import FooterContainer from './containers/FooterContainer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb', 
    },
    background: {
      default: '#020617', 
      paper: '#0f172a',   
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  }
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary'
      }}>
        
        <Navigation />

        <Box component="main" sx={{ flexGrow: 1,
          // 64px is standard for mobile, 80px for desktop Navbars
           pt: { xs: '80px', md: '100px' }
          }}>
          {/* Now 'HeroSection' matches the import name above */}
          <HeroSection /> 
          <Experience />
          <Building />
          <Skills />    
        </Box>

        <FooterContainer />

      </Box>
    </ThemeProvider>
  );
}