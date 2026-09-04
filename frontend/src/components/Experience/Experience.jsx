import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from '../../features/experienceInfo/experienceInfoSlice'
import '../../App.css'

function Experience() {
  const dispatch = useDispatch()

  const experienceInfo = useSelector((state) => state.experienceInfo.items)
  const experienceInfoStatus = useSelector((state) => state.experienceInfo.status)
  const experienceInfoError = useSelector((state) => state.experienceInfo.error)
  const experienceInfoLoading = experienceInfoStatus === 'idle' || experienceInfoStatus === 'loading'

  useEffect(() => {
    dispatch(fetchInfo())
  }, [dispatch])

  return (
    <>
      <section id="contact">
        <h2>{experienceInfo.name}</h2>

        {experienceInfoLoading && <p>Loading experience info…</p>}
        {experienceInfoError && (
          <p className="error">Couldn't load experience info: {experienceInfoError}</p>
        )}
        {!experienceInfoLoading && !experienceInfoError && (
          <ul className="contact-list">
              {experienceInfo.experience_items.map((paragraph, index) => (
                <li key={index}>{paragraph.trim()}</li>
              ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Experience
