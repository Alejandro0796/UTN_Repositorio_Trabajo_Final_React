import Message from '../Message/Message'

export default function MessagesList({ mensajes }) {
  return (
    <div className="messages-list">
      {mensajes.map((msg) => (
        <Message
          key={msg.id}
          contenido={msg.contenido}
          fecha={msg.fecha}
          esMio={msg.esMio}
        />
      ))}
    </div>
  )
}