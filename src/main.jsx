import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ThemeContextProvider } from './Context/ThemeContext.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import { ContactContextProvider } from './Context/ContactContext.jsx'
import App from './App.jsx'
import './global.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <AuthContextProvider>
        <ContactContextProvider>
          <App />
        </ContactContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
)