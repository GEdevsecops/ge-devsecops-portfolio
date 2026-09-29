import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DashboardCardProps {
  id: string;
  title: string;
  status: string;
  color: string;
  direction: string;
}

export default function DashboardCard({ id }: Readonly<DashboardCardProps>) {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/solutions/${id}`)}
      sx={{ 
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-10px)',
          borderColor: '#2563eb',
          boxShadow: '0 20px 40px -20px rgba(37, 99, 235, 0.5)',
          '& .glow': { opacity: 1 }
        }
      }}
    >
      {/* ... rest of your CardContent code remains the same ... */}
    </Card>
  );
}