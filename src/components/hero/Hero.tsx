import { PROFILE } from '../../data/profile';
import { Icon } from '../ui/Icon';
import { RichText } from '../ui/RichText';
import './hero.css';

export function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="hero-greeting">{PROFILE.greeting}</p>
        <h1 className="hero-name" id="hero-heading">
          {PROFILE.name}.
        </h1>
        <p className="hero-subtitle">{PROFILE.tagline}</p>
        <p className="hero-description">
          <RichText text={PROFILE.intro} />
        </p>
        <div className="hero-actions">
          <a className="ghost-btn" href="#projects">
            Check out my work!
          </a>
          <a
            className="hero-resume"
            href={PROFILE.resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="filePdf" size={16} />
            <span>Résumé</span>
          </a>
        </div>
      </div>
    </section>
  );
}
