lab_recap-from-vanilla-to-react

LAB | De Vanilla JS a React
🎯 Objetivos de aprendizaje

Después de este ejercicio, serás capaz de:

Construir una interfaz desde cero usando HTML y CSS.
Manipular el DOM para mostrar datos dinámicamente obtenidos desde una API.
Usar async/await para manejar operaciones asíncronas en JavaScript.
Refactorizar una aplicación en JavaScript puro a un componente moderno de React.
Gestionar el estado de la aplicación y eventos de usuario en React usando hooks como useState y useEffect.
📋 Requisitos
Haz un fork de este repositorio.
Clona el repositorio.
📤 Entrega

Cuando termines, ejecuta los siguientes comandos:

$ git add .
$ git commit -m "Solved lab"
$ git push origin master
Crea una Pull Request para que tus TAs puedan revisar tu trabajo.
🧪 Prueba tu código

En este lab, ¡tu navegador será tu entorno de pruebas! No hay tests automáticos.

Vas a comprobar que todo funciona:

Abriendo tu archivo index.html con la extensión Live Server de VSCode.
Revisando en el navegador si los perfiles de usuario se muestran correctamente.
Abriendo la Consola de herramientas de desarrollador para detectar errores.

👉 Este proceso de validación visual + consola es una habilidad clave como desarrollador web.

🧠 Instrucciones

En este laboratorio vamos a construir una pequeña app que obtiene datos de usuarios desde una API externa y los muestra.

Primero lo haremos con HTML, CSS y JavaScript puro, y luego lo pasaremos a React para hacerlo más potente y mantenible.

🔁 Iteración 0 – Configuración del proyecto

Crea esta estructura básica dentro del proyecto:

/
|-- index.html
|-- style.css
|-- app.js

Con esto es suficiente para empezar.

🎨 Iteración 1 – Base estática (HTML & CSS)

Vamos a crear la estructura base.

Necesitas:

Un título
Un contenedor para los usuarios
Un botón de "Cargar más"
En index.html

Copia este código:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Profiles</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>User Profiles</h1>
    </header>
    <main>
      <div id="user-list-container">
        <!-- Aquí se añadirán los usuarios con JavaScript -->
      </div>
      <button id="load-more-btn">Load More</button>
    </main>
    <script src="app.js"></script>
  </body>
</html>
En style.css
body {
  font-family: sans-serif;
  background-color: #f4f4f9;
  text-align: center;
}

#user-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
}

.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:disabled {
  background-color: #aaa;
}

👉 Aquí verás el título y el botón, pero aún no hay usuarios (tranqui, ahora viene lo interesante).

⚙️ Iteración 2 – Obtener y mostrar usuarios con JS

Ahora toca darle vida a la app 💥

Trabaja en app.js:

Tareas:
Seleccionar los elementos del DOM (user-list-container y load-more-btn).
Crear una función async que obtenga datos de https://dummyjson.com/users.
Crear una tarjeta (div.user-card) por cada usuario.
Añadir imagen y nombre.
Insertar las tarjetas en el contenedor.
Añadir evento click al botón.

💡 Tip:

Desactiva el botón mientras carga.
Usa try...catch...finally para controlar errores.
⚛️ Iteración 3 – Refactorizar a React

El JS puro funciona… pero no escala bien 😅

Vamos a pasarlo a React.

Crear proyecto con Vite:
npm create vite@latest my-react-app --template react

Luego:

cd my-react-app
npm install
npm run dev
Tareas en React:
Copia el CSS a App.css.
Crea un componente UserList.
Usa useState para:
usuarios
loading
skip
Usa useEffect para cargar datos al inicio.
Crea fetchUsers con async/await.
Renderiza usuarios con .map().
Botón para cargar más.

⚠️ Importante:
Añade key en cada elemento:

<div key={user.id}>
🚀 Recursos extra
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://react.dev/learn
https://vitejs.dev/guide/
https://dummyjson.com/docs/users
💛 ¡A programar!