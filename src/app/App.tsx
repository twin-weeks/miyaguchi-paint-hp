import Header from './components/Header';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Reasons from './components/Reasons';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Greeting />
        <section id="stats-banner" data-todo="FV" style={{ minHeight: 200, backgroundColor: 'var(--color-primary-light)' }} />
        <Reasons />
        <Works />
        <About />
      </main>
      <Contact />
    </>
  );
}
