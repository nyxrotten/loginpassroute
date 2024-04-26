// Snippets de código para poder componer el programa

//Usado?: X
  const middlewares = require('./middlewares');
//--- Explicación: Traer la información de la página de middleware

// -------------------------------------------------------------------------------------

//Usado?: X
const bodyParser = require('body-parser');
//--- Explicación: Requiere la función para parsear el texto del input

// -------------------------------------------------------------------------------------

//Usado?: X
const session = require('express-session');
//--- Explicación: Requiere el módulo de Express Session

// -------------------------------------------------------------------------------------

//Usado?: x
const express = require('express');
//--- Explicación:
//Requerir el módulo express
// -------------------------------------------------------------------------------------

//Usado?: X
const bodyParser = require('body-parser');
//--- Explicación: Requiere la función para parsear el texto del input

// -------------------------------------------------------------------------------------

//Usado?: X
const session = require('express-session');
//--- Explicación:
//Requiere el módulo de Express Session
// -------------------------------------------------------------------------------------

//Usado?: X
const dotenv = require('dotenv');
//--- Explicación: Requiere el módulo que carga la variable de .env

// -------------------------------------------------------------------------------------

//Usado?: X
const middlewares = require('./middlewares');
//--- Explicación: Traer la información de la página de middleware

// -------------------------------------------------------------------------------------

//Usado?: X
const routes = require('./routes');
//--- Explicación: Traer la información de la página de routes

// -------------------------------------------------------------------------------------

//Usado?: X
dotenv.config();
//--- Explicación:
// Función que configura el dotenv
// -------------------------------------------------------------------------------------

//Usado?: X
const app = express();
//--- Explicación:
// Mete en una variable la llamada a express
// -------------------------------------------------------------------------------------

//Usado?: X
const PORT = 4000;
//--- Explicación:
// Declara una constante para asignar el puerto del servidor
// -------------------------------------------------------------------------------------

//Usado?: X
const dotenv = require('dotenv');
//--- Explicación: Requiere el módulo que carga la variable de .env

// -------------------------------------------------------------------------------------

//Usado?: X
dotenv.config();
//--- Explicación:
// Función que configura el dotenv
// -------------------------------------------------------------------------------------

//Usado?: X
middlewares.setupApp(app);
//--- Explicación: 
// FUNCION MAL ESCRITA Ejecuta la función setupApp de middlewares.js
// -------------------------------------------------------------------------------------

//Usado?: X
routes.setup(app);
//--- Explicación: Ejecuta la función setup de routes

// -------------------------------------------------------------------------------------

//Usado?: X
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: Si la palabra del input coincide con la palabra secreta, continúa


// -------------------------------------------------------------------------------------


//Usado?: X
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: Declaración de la ruta ppal


// -------------------------------------------------------------------------------------


//Usado?: X
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: Html del la ruta ppal


// -------------------------------------------------------------------------------------

//Usado?: X
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: Función que corrige el formato del input de la palabra secreta declara la session

//Usado?: X
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: Entrada a la ruta profile
//
// -------------------------------------------------------------------------------------

//Usado?: X
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: Corrige formato

// -------------------------------------------------------------------------------------

//Usado?: 
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: Declara session

// -------------------------------------------------------------------------------------

//Usado?: X
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: Función que abre el servidor en el puerto indicado

// -------------------------------------------------------------------------------------

//Usado?: X
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Middleware que verifica si se puede entrar en la sesión

// -------------------------------------------------------------------------------------


//Usado?: x
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: Declaración de la ruta profile

// -------------------------------------------------------------------------------------


//Usado?: x
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: Cierra sesión

// -------------------------------------------------------------------------------------

//Usado?: x
module.exports = {
  setup,
};
//--- Explicación: Exporta la función setup

// -------------------------------------------------------------------------------------

//Usado?: X
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: Exporta las funciones validarPalabraMiddleware, verificarSesionMiddleware, setupAPP,

// -------------------------------------------------------------------------------------

