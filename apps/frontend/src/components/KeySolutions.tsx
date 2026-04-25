import { Grid, Typography, Box } from '@mui/material';
import DashboardCard from './DashboardCard';
import solutionsData from '../data/solutions.json';

export default function KeySolutions() {
  return (
    <Box id="solutions" className="py-20">
      <Typography variant="h4" className="font-bold mb-10 text-white tracking-tight">
        Key Solutions
      </Typography>
      
      <Grid container spacing={4}>
        {solutionsData.map((s) => (
          <Grid key={s.id} size={{ xs: 12, md: 4 }}>
            <DashboardCard 
              id={s.id.toString()}
              title={s.title}
              status={s.status}
              color={s.color}
              onView={() => {}} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
