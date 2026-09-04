import '../../App.css'

function Nav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="site-nav">
      <button type="button" onClick={scrollToTop}>
        Home
      </button>
      <a
        href="/Saesha_Rutledge_Resume_THD_EngineeringManager09012026.pdf"
        download="Saesha_Rutledge_Resume.pdf"
      >
        Download
      </a>
    </nav>
  )
}

export default Nav
