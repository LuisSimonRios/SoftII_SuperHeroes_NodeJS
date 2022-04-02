const express = require('express');
const superheroRoute = express.Router();
const superheroSchema = require('../models/superhero.model');
const SuperheroService = require('../services/superhero.service');
/* Crear una instancia de la clase superhero service */
const service = new SuperheroService();

/* http://localhost:5000/api/v1/superheroes/superhero */
superheroRoute.post('/superhero', async(req,res)=>{
  const superheroBody = superheroSchema(req.body);
  await service
    .createSuperhero(superheroBody)
    .then((superheroBody) => res.status(201).json({message: superheroBody}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* http://localhost:5000/api/v1/superheroes/superhero */
superheroRoute.get('/superhero', async(req,res)=>{
  const superheroBody = await service
    .findAllSuperheroes()
    .then((superheroBody) => res.status(200).json({message:superheroBody}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* http://localhost:5000/api/v1/superheroes/superheroId */
superheroRoute.get('/:superheroId', async(req,res)=>{
  const {superheroId} = req.params;
  const superheroes = await service
    .findOneSuperheroe(superheroId)
    .then((superheroes) => res.status(200).json({superheroes}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* http://localhost:5000/api/v1/superheroes/superheroId */
superheroRoute.put('/:superheroId', async(req,res) => {
  const {superheroId} = req.params;
  const {superhero_name, realname, superpower, universe} = req.body;
  await service
    .updateSuperheroe(superheroId, superhero_name, realname, superpower, universe)
    .then((superheroes) => res.status(200).json(superheroes))
    .catch((err) => res.status(404).json({ message: err}));
});

/* http://localhost:5000/api/v1/superheroes/superheroId */
superheroRoute.delete('/:superheroId', async(req,res)=>{
  const {superheroId} = req.params;
  await service.deleteSuperheroe(superheroId)
  .then((data) => res.status(200).json(data))
  .catch((err) => res.status(404).json({ message: err}));
});

module.exports = superheroRoute;