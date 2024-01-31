import Hero from './components/Hero';
import Container from './components/Container';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
      <Skills />
      <Resume />
    </Container>
  );
}
