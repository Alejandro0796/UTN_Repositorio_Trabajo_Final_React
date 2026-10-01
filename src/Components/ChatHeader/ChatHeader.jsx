import { Link } from 'react-router'

export default function ChatHeader({ contacto }) {
  return (
    <header className="chat-header">
      <Link to="/" className="btn-volver icon-btn">←</Link>
      <img src={contacto.imagen} alt={contacto.nombre} className="contact-avatar" />
      <div className="chat-header-info">
        <span className="chat-header-nombre">{contacto.nombre}</span>
        <span className="chat-header-estado">en línea</span>
      </div>
      <div className="chat-header-acciones">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">⋮</button>
      </div>
    </header>
  )
}