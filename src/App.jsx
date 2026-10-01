import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import useTheme from './Hooks/useTheme'
import useAuth from './Hooks/useAuth'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'

export default function App() {
  const { theme } = useTheme()
  const { usuario } = useAuth()

  useEffect(() => {
    document.body.className = theme === "dark" ? "tema-oscuro" : "tema-claro"
  }, [theme])

  if (!usuario) {
    return <LoginScreen />
  }

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/chat/:contact_id" element={<ChatScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}