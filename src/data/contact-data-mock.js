const contact_list_server = [
  {
    id: 1,
    nombre: 'Chat IA',
    ultimo_mensaje: '¡Claro! Puedo ayudarte con eso',
    imagen: 'https://api.dicebear.com/7.x/bottts/svg?seed=ChatGPT&backgroundColor=00a884',
    mensajes_sin_leer: 0,
    fecha_ultimo_mensaje: '14:30',
    mensajes: [
      { id: 1, contenido: '¡Hola! ¿Cómo estás?', fecha: '14:28', esMio: false },
      { id: 2, contenido: 'Bien, ¿me ayudás con algo?', fecha: '14:29', esMio: true },
      { id: 3, contenido: '¡Claro! Puedo ayudarte con eso', fecha: '14:30', esMio: false }
    ]
  },
  {
    id: 2,
    nombre: 'Juan Pérez',
    ultimo_mensaje: 'Avísame',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    mensajes_sin_leer: 3,
    fecha_ultimo_mensaje: '13:45',
    mensajes: [
      { id: 1, contenido: '¿Vas a venir mañana?', fecha: '13:40', esMio: false },
      { id: 2, contenido: 'Sí, calculo que sí', fecha: '13:42', esMio: true },
      { id: 3, contenido: 'Dale, avisame', fecha: '13:45', esMio: false }
    ]
  },
  {
    id: 3,
    nombre: 'María Gómez UX',
    ultimo_mensaje: 'Me encanta la paleta de colores. Ya empecé...',
    imagen: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Maria&backgroundColor=ffd5dc',
    mensajes_sin_leer: 0,
    fecha_ultimo_mensaje: '12:15',
    mensajes: [
      { id: 1, contenido: '¿Viste el nuevo diseño?', fecha: '12:10', esMio: true },
      { id: 2, contenido: 'Sí, quedó genial', fecha: '12:13', esMio: false },
      { id: 3, contenido: 'Me encanta la paleta de colores. Ya empecé...', fecha: '12:15', esMio: false }
    ]
  },
  {
    id: 4,
    nombre: 'Equipo de Diseño',
    ultimo_mensaje: 'Yo me conecto 5 minutitos tarde, después...',
    imagen: 'https://api.dicebear.com/7.x/initials/svg?seed=ED&backgroundColor=00a884',
    mensajes_sin_leer: 1,
    fecha_ultimo_mensaje: '11:50',
    mensajes: [
      { id: 1, contenido: '¿Reunión a las 12?', fecha: '11:45', esMio: true },
      { id: 2, contenido: 'Sí, dale', fecha: '11:47', esMio: false },
      { id: 3, contenido: 'Yo me conecto 5 minutitos tarde, después...', fecha: '11:50', esMio: false }
    ]
  },
  {
    id: 5,
    nombre: 'Soporte Técnico',
    ultimo_mensaje: 'Entendido. Un error 500 indica un problema...',
    imagen: 'https://api.dicebear.com/7.x/bottts/svg?seed=Soporte&backgroundColor=607d8b',
    mensajes_sin_leer: 0,
    fecha_ultimo_mensaje: '10:20',
    mensajes: [
      { id: 1, contenido: 'Tengo un error en el servidor', fecha: '10:15', esMio: true },
      { id: 2, contenido: '¿Qué código te aparece?', fecha: '10:18', esMio: false },
      { id: 3, contenido: 'Entendido. Un error 500 indica un problema...', fecha: '10:20', esMio: false }
    ]
  },
  {
    id: 6,
    nombre: 'Carlos Dev',
    ultimo_mensaje: 'Sí, un problema con las variables de entorno...',
    imagen: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Carlos&backgroundColor=c0aede',
    mensajes_sin_leer: 0,
    fecha_ultimo_mensaje: 'Ayer',
    mensajes: [
      { id: 1, contenido: '¿Pudiste deployar?', fecha: 'Ayer', esMio: true },
      { id: 2, contenido: 'No, tuve un problema', fecha: 'Ayer', esMio: false },
      { id: 3, contenido: 'Sí, un problema con las variables de entorno...', fecha: 'Ayer', esMio: false }
    ]
  }
]

export default contact_list_server