#Simulacion de Whasapp. Trabajo Practico

#Este trabajo busca simular un chat de Whassap. Con funciones basicas. En el maximo contiene una pantalla de usuario y contraseña. Asi como la posibilidad de mandar Chat aunque no se actualice la mensajeria como tal. Tambien existen elementos como el boston de "se busca" (que seria representava con una lupa) es mas que nada como un decorado visual. 

#COMPLICACIONES

#He tenido algunos problemas. Que se resumiria en la distribución de la sintaxis en distintas carpetas y subcarpetas. Asi como tambien, las mayusculas y minusculas.  Probocando asi que a veces no funcionaran. Pero por suerte, solo fueron de este tipo de errores. 

##Como ingresar a la simulación

#Usuario: admin
#Contraseña: 1234


## Estructura del proyecto

**src/main.jsx**
Punto de entrada. Envuelve la app con los providers (Theme, Auth, Contact) y el BrowserRouter.

**src/App.jsx**
Define las rutas. Muestra el login si no hay usuario, o las rutas del chat si ya inició sesión.

**src/global.css**
Todos los estilos: temas, layout, sidebar, chat, mensajes y responsive.

**Components/**
Cada componente en su carpeta:
- LoginForm: formulario de login.
- Sidebar: panel lateral con contactos.
- SearchBar: barra de búsqueda (visual).
- ContactFilters: botones de filtro (visual).
- ContactList: lista de contactos.
- ContactOption: cada contacto individual.
- UserProfile: perfil del usuario logueado.
- ChatHeader: encabezado del chat.
- MessagesList: contenedor de mensajes.
- Message: burbuja individual.
- ChatForm: formulario para enviar mensajes.
- NoChatSelected: pantalla de bienvenida.
- ThemeToggle: botón de tema claro/oscuro.

**Context/**
- AuthContext: usuario logueado.
- ContactContext: lista de contactos.
- ThemeContext: tema actual.

**Hooks/**
- useAuth, useTheme, useContacts: acceden a los contextos.
- useLogin: lógica del formulario de login.
- useChat: lógica de los mensajes.

**Screens/**
- LoginScreen, HomeScreen, ChatScreen, NotFoundScreen.

**data/contact-data-mock.js**
Datos simulados de contactos y sus mensajes.
