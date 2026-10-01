import SearchBar from '../SearchBar/SearchBar'
import ContactFilters from '../ContactFilters/ContactFilters'
import ContactList from '../ContactList/ContactList'
import UserProfile from '../UserProfile/UserProfile'
import useAuth from '../../Hooks/useAuth'

export default function Sidebar() {
  const { usuario } = useAuth()

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h2>Mensajes</h2>
        <button className="icon-btn">✏️</button>
      </header>

      <SearchBar />
      <ContactFilters />
      <ContactList />
      <UserProfile usuario={usuario} />
    </aside>
  )
}