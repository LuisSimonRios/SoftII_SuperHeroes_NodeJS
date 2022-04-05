/* express -> libreria */
const express = require('express');
const mongoose = require('mongoose');
const { logErrors, errorHandler,boomErrorHandler} = require('./src/middlewares/error.handler');
const routerApi = require('./src/routes')
const my_app = express();
/* Accede al archivo .env */
require('dotenv').config();
const port = process.env.PORT;



my_app.listen(port, () => console.log('Port active', port));


mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Succes connection'))
  .catch((error) => console.error(error));

my_app.use(express.json());
my_app.use(logErrors)
my_app.use(errorHandler)
my_app.use(boomErrorHandler)

routerApi(my_app);

