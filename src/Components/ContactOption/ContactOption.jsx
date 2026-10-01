export default function ContactOption({ imagen, nombre, ultimo_mensaje, fecha_ultimo_mensaje, mensajes_sin_leer }) {
  return (
    <div className="contact-option">
      <img src={imagen} alt={nombre} className="contact-avatar" />

      <div className="contact-info">
        <div className="contact-row">
          <span className="contact-nombre">{nombre}</span>
          <span className="contact-fecha">{fecha_ultimo_mensaje}</span>
        </div>
        <div className="contact-row">
          <span className="contact-mensaje">{ultimo_mensaje}</span>
          {mensajes_sin_leer > 0 && (
            <span className="contact-badge">{mensajes_sin_leer}</span>
          )}
        </div>
      </div>
    </div>
  )
}