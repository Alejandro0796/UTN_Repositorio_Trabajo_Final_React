import { useState } from 'react'

export default function ChatForm({ onEnviar }) {
  const [texto, setTexto] = useState("")

  function handleSubmit(evento) {
    evento.preventDefault()
    if (texto.trim() === "") return
    onEnviar(texto)
    setTexto("")
  }

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribí un mensaje aquí"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">➤</button>
    </form>
  )
}