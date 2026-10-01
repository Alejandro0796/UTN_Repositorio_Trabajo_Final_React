import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function useAuth() {
  const { usuario, login, logout } = useContext(AuthContext)
  return { usuario, login, logout }
}