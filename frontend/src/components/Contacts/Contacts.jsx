import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContactsInfo } from '../../features/contacts/contactsSlice'
import '../../App.css'

function Contacts() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.items)
  const contactsStatus = useSelector((state) => state.contacts.status)
  const contactsError = useSelector((state) => state.contacts.error)
  const contactsLoading = contactsStatus === 'idle' || contactsStatus === 'loading'

  useEffect(() => {
    dispatch(fetchContactsInfo())
  }, [dispatch])

  return (
    <>
      <section id="contact">
        <h2>Contact</h2>

        {contactsLoading && <p>Loading contacts…</p>}
        {contactsError && (
          <p className="error">Couldn't load contacts: {contactsError}</p>
        )}
        {!contactsLoading && !contactsError && (
          <ul className="contact-list">
            {contacts.contact_links.map((link) => (
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

export default Contacts
