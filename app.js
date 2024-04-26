const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');



const middlewares = require('./middlewares');
const routes = require('./routes');

const dotenv = require('dotenv');
dotenv.config();





middlewares.setupAPP(app);
routes.setup(app);




const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });