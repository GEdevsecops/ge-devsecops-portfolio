import { useState } from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material'; // Standard stable Grid
import DashboardCard from './components/DashboardCard';
import DetailModal from './components/DetailModal';
import solutionsData from './data/solutions.json';

// Define the interface to satisfy the linter
interface Solution {
  id: number;
  title: string;
  status: string;
  color: string;
}

export default function App() {
  const [selected, setSelected] = useState<Solution | null>(null);

  return (
    <Box className="bg-white min-h-screen">
      <Container maxWidth="lg" className="py-20">
        {/* Use the standard 'container' and 'item' props */}
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" className="font-black text-slate-900 mb-4">
              Building Systems That Scale.
            </Typography>
            <Box className="flex gap-4">
              <Button variant="contained" size="large" className="bg-slate-900 px-8 py-3 rounded-lg">
                Work With Me
              </Button>
              <Button variant="outlined" size="large" className="border-slate-300 text-slate-700 px-8 py-3 rounded-lg">
                Connect With Me
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="bg-slate-100 p-12 rounded-3xl border border-dashed border-slate-300 text-center text-slate-400">
              Profile Card Area
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="pb-20">
        <Typography variant="h4" className="font-bold mb-10 text-slate-800">Key Solutions</Typography>
        <Grid container spacing={4}>
          {solutionsData.map((s: Solution) => (
            <Grid size={{ xs: 12, md: 4 }} key={s.id}>
              <DashboardCard 
                title={s.title}
                status={s.status}
                color={s.color}
                onView={() => setSelected(s)} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <DetailModal 
        isOpen={!!selected} 
        handleClose={() => setSelected(null)} 
        data={selected} 
      />
    </Box>
  );
}