import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHeroInfo } from '../../features/hero/heroSlice'
import '../../App.css'

function Hero() {
  const dispatch = useDispatch()
  const hero = useSelector((state) => state.hero.items)
  const heroStatus = useSelector((state) => state.hero.status)
  const heroError = useSelector((state) => state.hero.error)
  const heroLoading = heroStatus === 'idle' || heroStatus === 'loading'

  useEffect(() => {
    dispatch(fetchHeroInfo())
  }, [dispatch])

  return (
    <>

      <section id="hero">
    <h2>{hero.name}</h2>
        <ul className="titles">

          {heroLoading && <p>Loading contacts…</p>}
          {heroError && (
            <p className="error">Couldn't load contacts: {heroError}</p>
          )}
          {!heroLoading && !heroError && (
            <ul className="contact-list">
              {hero.heroDetails.split('\n\n').map((paragraph, index) => (
                <li key={index}>{paragraph.trim()}</li>
              ))}
            </ul>
          )}
        </ul>
      </section>
      <div className="ticks"></div>
    </>
  )
}

export default Hero