import { Container } from '@mui/material';
import Hero from '../components/Hero';
import KeySolutions from '../components/KeySolutions';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <KeySolutions />
    </Container>
  );
}