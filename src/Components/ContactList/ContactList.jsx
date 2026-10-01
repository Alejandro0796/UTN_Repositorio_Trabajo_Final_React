import { Link } from 'react-router'
import ContactOption from '../ContactOption/ContactOption'
import useContacts from '../../Hooks/useContacts'

export default function ContactList() {
  const { contacts } = useContacts()

  if (contacts.length === 0) {
    return <p className="sin-contactos">No tenés contactos registrados</p>
  }

  return (
    <div className="contact-list">
      {contacts.map((contacto) => (
        <Link
          to={`/chat/${contacto.id}`}
          key={contacto.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ContactOption
            imagen={contacto.imagen}
            nombre={contacto.nombre}
            ultimo_mensaje={contacto.ultimo_mensaje}
            fecha_ultimo_mensaje={contacto.fecha_ultimo_mensaje}
            mensajes_sin_leer={contacto.mensajes_sin_leer}
          />
        </Link>
      ))}
    </div>
  )
}