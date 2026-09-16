import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { Hero } from './components/hero/Hero';
import { Leadership } from './components/leadership/Leadership';
import { Nav } from './components/nav/Nav';
import { Projects } from './components/projects/Projects';
import { SideRails } from './components/rails/SideRails';
import { Skills } from './components/skills/Skills';
import { NAV_ITEMS, PROFILE } from './data/profile';
import { useScrollBackdrop } from './hooks/useScrollBackdrop';
import { useScrollSpy } from './hooks/useScrollSpy';
import './app.css';

const SECTION_IDS = ['hero', ...NAV_ITEMS.map((item) => item.id)];

export default function App() {
  useScrollBackdrop();
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav activeId={activeId} />
      <SideRails />

      <main className="main" id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <p>Built by {PROFILE.name}</p>
      </footer>
    </>
  );
}
