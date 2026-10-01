import { useState } from 'react'

export default function useChat(mensajesIniciales) {
  const [mensajes, setMensajes] = useState(mensajesIniciales || [])

  function enviarMensaje(texto) {
    const nuevo = {
      id: mensajes.length + 1,
      contenido: texto,
      fecha: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      esMio: true
    }
    setMensajes([...mensajes, nuevo])
  }

  return { mensajes, enviarMensaje }
}