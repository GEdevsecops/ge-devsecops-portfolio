import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For dynamic routing

interface DashboardCardProps {
  id: string; // Used for routing
  title: string;
  status: string;
  color: string;
  onView: () => void;
}

export default function DashboardCard({ id, title, status, color }: DashboardCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className="h-full bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all cursor-pointer group"
      onClick={() => navigate(`/solutions/${id}`)} // Redirect logic
    >
      <CardContent className="p-8">
        <Box className="w-12 h-1 w-12 rounded-full mb-6" style={{ backgroundColor: color }} />
        <Typography variant="h5" className="font-bold text-white mb-2 group-hover:text-indigo-400">
          {title}
        </Typography>
        <Typography variant="body2" className="text-slate-400 mb-6">
          {status}
        </Typography>
        <Button className="text-indigo-400 p-0 normal-case font-bold hover:bg-transparent">
          View Solution →
        </Button>
      </CardContent>
    </Card>
  );
}