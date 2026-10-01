import { createContext, useState } from 'react'
import contact_list_server from '../data/contact-data-mock'

export const ContactContext = createContext()

export function ContactContextProvider({ children }) {
  const [contacts, setContacts] = useState(contact_list_server)

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  )
}