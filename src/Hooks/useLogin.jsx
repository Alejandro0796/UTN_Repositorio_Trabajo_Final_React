import { useState } from 'react'
import useAuth from './useAuth'

export default function useLogin() {
  const { login } = useAuth()
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(evento) {
    evento.preventDefault()
    const exito = login(usuario, password)
    if (!exito) {
      setError("Usuario o contraseña incorrectos")
    } else {
      setError("")
    }
  }

  return {
    usuario,
    password,
    error,
    setUsuario,
    setPassword,
    handleSubmit
  }
}