import Hero from './components/Hero';
import Container from './utils/Container';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects2 from './components/Projects2';

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <Projects /> */}
      <Projects2 />
      <Skills />
      <Resume />
    </Container>
  );
}
