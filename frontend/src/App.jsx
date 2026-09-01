import { useEffect, useState } from 'react'
import headshotImg from './assets/Senger_Headshot.jpg'
import './App.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'

const TITLES = [
  'Solutions Architect',
  'Product Owner',
  'Engineering Manager',
  'Full Stack Software Engineer',
]

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:saesha.rutledge.dev@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/saesharutledgedev-beep' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saesha-rutledge-profile-link/',
  },
]

function App() {
  const [projects, setProjects] = useState([])
  const [projectsError, setProjectsError] = useState(null)
  const [projectsLoading, setProjectsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetch(`${API_BASE}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setProjects(data)
      })
      .catch((err) => {
        if (!cancelled) setProjectsError(err.message)
      })
      .finally(() => {
        if (!cancelled) setProjectsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <section id="hero">
        <img
          src={headshotImg}
          className="headshot"
          width="160"
          height="160"
          alt="Saesha Rutledge"
        />
        <h1>Saesha Rutledge</h1>
        <ul className="titles">
          {TITLES.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
        <p className="tagline">
          I turn ambiguity into buildable plans — and plans into shipped
          systems.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="about">
        <h2>About</h2>
        <p>
          AI-forward full-stack engineer, technical product manager, and
          solutions architect who owns workflow-driven web experiences
          end-to-end. I design and deliver systems where correctness
          matters, requirements are messy, and the environment is regulated
          enough that tradeoffs must be explicit.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="projects">
        <h2>Projects</h2>
        {projectsLoading && <p>Loading projects…</p>}
        {projectsError && (
          <p className="error">Couldn't load projects: {projectsError}</p>
        )}
        {!projectsLoading && !projectsError && (
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="ticks"></div>

      <section id="contact">
        <h2>Contact</h2>
        <ul className="contact-list">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
