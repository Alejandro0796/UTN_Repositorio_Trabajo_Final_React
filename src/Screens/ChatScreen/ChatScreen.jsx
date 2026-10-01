import { useParams } from 'react-router'
import useContacts from '../../Hooks/useContacts'
import useChat from '../../Hooks/useChat'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatHeader from '../../Components/ChatHeader/ChatHeader'
import MessagesList from '../../Components/MessagesList/MessagesList'
import ChatForm from '../../Components/ChatForm/ChatForm'

function ChatInterno({ contacto }) {
  const { mensajes, enviarMensaje } = useChat(contacto.mensajes)

  return (
    <>
      <ChatHeader contacto={contacto} />
      <MessagesList mensajes={mensajes} />
      <ChatForm onEnviar={enviarMensaje} />
    </>
  )
}

export default function ChatScreen() {
  const { contact_id } = useParams()
  const { obtenerContactoPorId } = useContacts()

  const contacto = obtenerContactoPorId(contact_id)

  if (!contacto) {
    return <p>Contacto no encontrado</p>
  }

  return (
    <div className="app-layout app-layout--chat">
      <Sidebar />
      <main className="panel-chat">
        <ChatInterno key={contacto.id} contacto={contacto} />
      </main>
    </div>
  )
}