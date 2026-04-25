import { Container, Typography, Button, } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function SolutionDetail() {
  const { solutionId } = useParams();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" className="py-20 text-center">
      <Typography variant="overline" className="text-indigo-400 font-bold">
        Solution Overview
      </Typography>
      <Typography variant="h2" className="text-white font-black mb-6 capitalize">
        {solutionId?.replace('-', ' ')}
      </Typography>
      <Typography variant="body1" className="text-slate-400 mb-12 max-w-2xl mx-auto">
        Detailed breakdown, plans (Starter, Pro, Accelerator), and case studies for this solution are coming in the next sprint.
      </Typography>
      <Button 
        variant="outlined" 
        className="border-slate-700 text-white rounded-full px-8"
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </Button>
    </Container>
  );
}