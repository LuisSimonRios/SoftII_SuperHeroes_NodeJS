const express = require('express');
const departamentsRouter = require('./departaments.router')
const superheroRouter = require('./superhero.router');

function rouerApi(my_app){
  const router = express.Router();
  /* Endpoint estatico: http://localhost:4000/api/v1 */
  my_app.use('/api/v1', router);
  /* Endpoint estatico: http://localhost:4000/api/v1/departaments */
  router.use('/departaments', departamentsRouter);
  router.use('/superheroes', superheroRouter);
}

module.exports = rouerApi