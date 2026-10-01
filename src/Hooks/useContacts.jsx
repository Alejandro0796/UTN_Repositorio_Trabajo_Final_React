import { useContext } from 'react'
import { ContactContext } from '../Context/ContactContext'

export default function useContacts() {
  const { contacts, setContacts } = useContext(ContactContext)

  function obtenerContactoPorId(id) {
    return contacts.find((c) => c.id === Number(id))
  }

  return { contacts, setContacts, obtenerContactoPorId }
}