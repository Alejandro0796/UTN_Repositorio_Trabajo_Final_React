import useAuth from '../../Hooks/useAuth'

export default function NoChatSelected() {
  const { usuario } = useAuth()

  return (
    <div className="no-chat-selected">
      <h1>Bienvenido <span className="nombre-destacado">{usuario}</span></h1>
      <p>¿Qué vamos a hacer hoy?</p>
    </div>
  )
}