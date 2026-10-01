import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function UserProfile({ usuario }) {
  return (
    <div className="user-profile">
      <div className="user-info">
        <img src="https://i.pravatar.cc/150?img=10" alt="Perfil" className="contact-avatar" />
        <span>{usuario}</span>
      </div>
      <div className="user-acciones">
        <ThemeToggle />
      </div>
    </div>
  )
}