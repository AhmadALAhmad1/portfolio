import Hero from './components/Hero';
import Container from './components/Container';
import Projects from './components/Projects';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
    </Container>
  );
}
