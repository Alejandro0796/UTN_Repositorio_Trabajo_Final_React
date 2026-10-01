import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [usuario, setUsuario] = useState(null)

    function login(nombreUsuario, password) {
        if (nombreUsuario === "admin" && password === "1234") {
            setUsuario(nombreUsuario)
            return true
        }
        return false
    }

    function logout() {
        setUsuario(null)
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}