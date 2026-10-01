import useTheme from '../../Hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle icon-btn"
      onClick={toggleTheme}
      title={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}