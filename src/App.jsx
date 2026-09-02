import React, { useEffect, useState } from "react";
import {
  profile,
  skillGroups,
  projects,
  otherProjects,
  education,
  certifications,
  achievements,
} from "./data.js";
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowIcon,
  DownloadIcon,
  MapIcon,
} from "./icons.jsx";

const NAV = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "background", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);
  return [open, setOpen];
}

function Header() {
  const [open, setOpen] = useMenu();
  return (
    <header className="site-header">
      <div className="site-header-row">
        <a href="#top" className="mark" aria-label="Partha Sarathi K, home">
          PS<span className="mark-dot">.</span>
        </a>
        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-quiet" href={profile.resume} download>
            Resume <DownloadIcon width={15} height={15} />
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero reveal">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-kicker">{profile.greeting}</p>
          <h1 className="hero-headline">{profile.headline}</h1>
          <p className="hero-sub">{profile.subhead}</p>

          <div className="role-row" aria-label="Roles I'm looking for">
            {profile.roles.map((r) => (
              <span className="role-chip" key={r}>
                {r}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View projects <ArrowIcon width={16} height={16} />
            </a>
            <a className="btn btn-quiet" href={profile.resume} download>
              Download resume <DownloadIcon width={15} height={15} />
            </a>
            <a className="btn btn-quiet" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon width={15} height={15} /> GitHub
            </a>
            <a className="btn btn-quiet" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <img src="/photo.jpg" alt="Portrait of Partha Sarathi K" width="640" height="797" loading="eager" />
        </figure>
      </div>

      <div className="hero-contact">
        <a href={`mailto:${profile.email}`}>
          <MailIcon /> {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          <PhoneIcon /> {profile.phone}
        </a>
        <span className="hero-location">
          <MapIcon /> {profile.location}
        </span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section reveal">
      <SectionHead index="01" title="About" />
      <div className="about-body">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ index, title }) {
  return (
    <div className="section-head">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <SectionHead index="02" title="Skills" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skills-row" key={group.label}>
            <span className="skills-label">{group.label}</span>
            <span className="skills-items">{group.items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectEntry({ project, number }) {
  return (
    <article className="entry">
      <div className="entry-meta">
        <span className="entry-number">{number}</span>
        {project.period && <span className="entry-period">{project.period}</span>}
      </div>
      <div className="entry-body">
        <div className="entry-heading">
          <h3>{project.title}</h3>
          <span className="entry-type">{project.type}</span>
        </div>
        <p className="entry-summary">{project.problem}</p>
        <ul className="entry-bullets">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="entry-footer">
          <div className="entry-stack">
            {project.stack.map((s) => (
              <span className="stack-tag" key={s}>
                {s}
              </span>
            ))}
          </div>
          {project.github && (
            <a className="entry-link" href={project.github} target="_blank" rel="noreferrer">
              View repository <ArrowIcon width={14} height={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function OtherProjects() {
  return (
    <div className="other-projects">
      <h3 className="background-heading">More on GitHub</h3>
      <ul className="other-projects-list">
        {otherProjects.map((p) => (
          <li key={p.title}>
            <a href={p.github} target="_blank" rel="noreferrer">
              {p.title} <ArrowIcon width={13} height={13} />
            </a>
            <span>{p.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="section reveal">
      <SectionHead index="03" title="Projects" />
      <p className="section-lede">
        The three I'd point a recruiter to first — backend-first, in the order that best shows
        where my strengths are.
      </p>
      <div className="entries">
        {projects.map((p, i) => (
          <ProjectEntry project={p} number={String(i + 1).padStart(2, "0")} key={p.id} />
        ))}
      </div>
      <OtherProjects />
    </section>
  );
}

function Background() {
  return (
    <section id="background" className="section reveal">
      <SectionHead index="04" title="Education" />
      <div className="background-grid">
        <div>
          <h3 className="background-heading">Education</h3>
          {education.map((e) => (
            <div className="edu-row" key={e.school}>
              <div className="edu-top">
                <span className="edu-degree">{e.degree}</span>
                <span className="edu-period">{e.period}</span>
              </div>
              <p className="edu-school">{e.school}</p>
              <p className="edu-detail">{e.detail}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="background-heading">Certifications</h3>
          <ul className="plain-list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="background-heading">Achievements</h3>
          <ul className="plain-list">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ResumeCTA() {
  return (
    <section className="section resume-cta reveal">
      <SectionHead index="05" title="Resume" />
      <div className="resume-cta-row">
        <p>Want the full detail on what I've built and studied?</p>
        <div className="resume-cta-actions">
          <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
            View resume <ArrowIcon width={16} height={16} />
          </a>
          <a className="btn btn-quiet" href={profile.resume} download>
            Download resume <DownloadIcon width={15} height={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section reveal">
      <SectionHead index="06" title="Contact" />
      <div className="contact-grid">
        <div>
          <p className="contact-lede">
            Looking for a Java Backend, Spring Boot, Backend or Full-Stack Developer role. Based
            in Coimbatore, {profile.relocate.toLowerCase()}.
          </p>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me <ArrowIcon width={16} height={16} />
          </a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <PhoneIcon /> {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon /> github.com/partha-21
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> partha-sarathi-k
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>{profile.name}</span>
      <span>Built with React and Vite.</span>
    </footer>
  );
}

function useRevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Background />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
