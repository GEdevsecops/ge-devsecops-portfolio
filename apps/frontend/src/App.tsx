import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import DashboardCard from './components/DashboardCard';
import DetailModal from './components/DetailModal';
// 1. Importing data from JSON (Config-Driven Rendering)
import solutionsData from './data/solutions.json';

export default function App() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <Box className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <Container maxWidth="lg" className="py-20">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
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
          <Grid item xs={12} md={5}>
            <Box className="bg-slate-100 p-12 rounded-3xl border border-dashed border-slate-300 text-center">
              Profile Card Area
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* KEY SOLUTIONS - Mapping from JSON */}
      <Container maxWidth="lg" className="pb-20">
        <Typography variant="h4" className="font-bold mb-10">Key Solutions</Typography>
        <Grid container spacing={4}>
          {solutionsData.map((s: any) => (
            <Grid item xs={12} md={4} key={s.id}>
              <DashboardCard {...s} onView={() => setSelected(s)} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Single Modal Architecture */}
      <DetailModal 
        isOpen={!!selected} 
        handleClose={() => setSelected(null)} 
        data={selected} 
      />
    </Box>
  );
}