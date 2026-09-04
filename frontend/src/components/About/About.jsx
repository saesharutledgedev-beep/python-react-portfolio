import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAboutInfo } from '../../features/about/aboutSlice'
import '../../App.css'
import headshotImg from '../../assets/Senger_Headshot.jpg'

function About() {
  const dispatch = useDispatch()
  const about = useSelector((state) => state.about.items)
  const aboutStatus = useSelector((state) => state.about.status)
  const aboutError = useSelector((state) => state.about.error)
  const aboutLoading = aboutStatus === 'idle' || aboutStatus === 'loading'

  useEffect(() => {
    dispatch(fetchAboutInfo())
  }, [dispatch])

  return (
    <>
      <section id="about">
        <img
          src={headshotImg}
          className="headshot"
          width="160"
          height="160"
          alt="Saesha Rutledge"
        />
        <h1>Saesha Rutledge</h1>
        <ul className="titles">

          {aboutLoading && <p>Loading contacts…</p>}
          {aboutError && (
            <p className="error">Couldn't load contacts: {aboutError}</p>
          )}
          {!aboutLoading && !aboutError && (
            <ul className="contact-list">
              {about.titles.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          )}
        </ul>
        <p className="tagline">
          {aboutLoading && <p>Loading tagline…</p>}
          {aboutError && (
            <p className="error">Couldn't load tagline: {aboutError}</p>
          )}
          {!aboutLoading && !aboutError && (
            <ul className="contact-list">
              {about.tagline}
            </ul>
          )}
        </p>
      </section>
    </>
  )
}

export default About
