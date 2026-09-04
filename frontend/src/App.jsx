import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <>
      <About />
      <div className="ticks"></div>
      <Hero />
      <div className="ticks"></div>
      <Skills />
      <div className="ticks"></div>
      <Education />
      <div className="ticks"></div>
      <Experience />
      <div className="ticks"></div>
      <Projects />
      <div className="ticks"></div>
      <Contacts />
    </>
  )
}

export default App
