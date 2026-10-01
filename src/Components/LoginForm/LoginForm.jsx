import useLogin from '../../Hooks/useLogin'

export default function LoginForm() {
  const {
    usuario,
    password,
    error,
    setUsuario,
    setPassword,
    handleSubmit
  } = useLogin()

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Iniciar sesión</h1>

      <div className="campo">
        <label htmlFor="usuario_id">Usuario</label>
        <input
          type="text"
          id="usuario_id"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Ingresá tu usuario"
        />
      </div>

      <div className="campo">
        <label htmlFor="password_id">Contraseña</label>
        <input
          type="password"
          id="password_id"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresá tu contraseña"
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <button type="submit">Ingresar</button>
    </form>
  )
}