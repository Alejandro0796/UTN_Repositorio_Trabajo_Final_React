import { Link } from 'react-router'

export default function NotFoundScreen() {
  return (
    <div className="not-found">
      <h1>404 - Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}