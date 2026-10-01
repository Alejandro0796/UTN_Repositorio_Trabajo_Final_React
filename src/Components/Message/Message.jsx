export default function Message({ contenido, fecha, esMio }) {
  return (
    <div className={`message-row ${esMio ? 'message-row--propio' : 'message-row--recibido'}`}>
      <div className={`message ${esMio ? 'message--propio' : 'message--recibido'}`}>
        <p>{contenido}</p>
        <span className="message-fecha">{fecha}</span>
      </div>
    </div>
  )
}