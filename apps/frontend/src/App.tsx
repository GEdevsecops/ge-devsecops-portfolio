import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import SolutionDetail from './pages/SolutionDetail'; 
import Connect from './pages/Connect';

export default function App() {
  return (
    <Box className="bg-slate-950 min-h-screen text-slate-100">
      {/* Navigation stays visible on all pages */}
      <Navigation />

      <Routes>
        {/* Main Home Page (March 2026 Milestone) */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Solutions Routing */}
        <Route path="/solutions/:solutionId" element={<SolutionDetail />} />

        {/* Connect Page */}
        <Route path="/connect" element={<Connect />} />
      </Routes>

      {/* Footer can go here later */}
    </Box>
  );
}