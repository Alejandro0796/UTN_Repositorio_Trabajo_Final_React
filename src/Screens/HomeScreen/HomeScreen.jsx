import Sidebar from '../../Components/Sidebar/Sidebar'
import NoChatSelected from '../../Components/NoChatSelected/NoChatSelected'

export default function HomeScreen() {
  return (
    <div className="app-layout app-layout--home">
      <Sidebar />
      <main className="panel-derecho">
        <NoChatSelected />
      </main>
    </div>
  )
}