import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import headshotImg from './assets/Senger_Headshot.jpg'
import { fetchProjects } from './features/projects/projectsSlice'
import { fetchInfo } from './features/personalInfo/personalInfoSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects.items)
  const projectsStatus = useSelector((state) => state.projects.status)
  const projectsError = useSelector((state) => state.projects.error)
  const projectsLoading = projectsStatus === 'idle' || projectsStatus === 'loading'

  const dispatchInfo = useDispatch()
  const personalInfo = useSelector((state) => state.personalInfo.items)
  const personalInfoStatus = useSelector((state) => state.personalInfo.status)
  const personalInfoError = useSelector((state) => state.personalInfo.error)
  const personalInfoLoading = personalInfoStatus === 'idle' || personalInfoStatus === 'loading'

  useEffect(() => {
    dispatch(fetchProjects()),
      dispatchInfo(fetchInfo())
  }, [dispatch, dispatchInfo])

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

          {personalInfoLoading && <p>Loading contacts…</p>}
          {personalInfoError && (
            <p className="error">Couldn't load contacts: {personalInfoError}</p>
          )}
          {!personalInfoLoading && !personalInfoError && (
            <ul className="contact-list">
              {personalInfo.titles.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          )}
        </ul>
        <p className="tagline">
          {personalInfoLoading && <p>Loading tagline…</p>}
          {personalInfoError && (
            <p className="error">Couldn't load tagline: {personalInfoError}</p>
          )}
          {!personalInfoLoading && !personalInfoError && (
            <ul className="contact-list">
              {personalInfo.tagline}
            </ul>
          )}
        </p>
      </section>

      <div className="ticks"></div>

      <section id="about">
        <h2>About</h2>
        <p>
          {personalInfoLoading && <p>Loading hero…</p>}
          {personalInfoError && (
            <p className="error">Couldn't load hero: {personalInfoError}</p>
          )}
          {!personalInfoLoading && !personalInfoError && (
            <ul className="contact-list">
              {personalInfo.hero.split('\n\n').map((paragraph, index) => (
                <li key={index}>{paragraph.trim()}</li>
              ))}
            </ul>
          )}
        </p>
      </section>

      <section id="about">
        <h2>Technical Skills</h2>
        <p>
          {personalInfoLoading && <p>Loading technical skills…</p>}
          {personalInfoError && (
            <p className="error">Couldn't load technical skills: {personalInfoError}</p>
          )}
          {!personalInfoLoading && !personalInfoError && (
            <ul className="contact-list">
              {personalInfo.technical_skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          )}
        </p>
      </section>

      <section id="about">
        <h2>Professional Skills</h2>
        <p>
          {personalInfoLoading && <p>Loading professional skills…</p>}
          {personalInfoError && (
            <p className="error">Couldn't load professional skills: {personalInfoError}</p>
          )}
          {!personalInfoLoading && !personalInfoError && (
            <ul className="contact-list">
              {personalInfo.professional_skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          )}
        </p>
      </section>

      <section id="about">
        <h2>Tooling</h2>
        <p>
          {personalInfoLoading && <p>Loading tooling…</p>}
          {personalInfoError && (
            <p className="error">Couldn't load tooling: {personalInfoError}</p>
          )}
          {!personalInfoLoading && !personalInfoError && (
            <ul className="contact-list">
              {personalInfo.tooling.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          )}
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

        {personalInfoLoading && <p>Loading personal info…</p>}
        {personalInfoError && (
          <p className="error">Couldn't load personal info: {personalInfoError}</p>
        )}
        {!personalInfoLoading && !personalInfoError && (
          <ul className="contact-list">
            {personalInfo.contact_links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App
