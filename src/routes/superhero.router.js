const express = require('express');
const Boom = require('@hapi/boom');
const superheroRoute = express.Router();
const superheroSchema = require('../models/superhero.model');
const SuperheroService = require('../services/superhero.service');
/* Crear una instancia de la clase superhero service */
const service = new SuperheroService();

/* http://localhost:5000/api/v1/superheroes/superhero */
superheroRoute.post('/superhero', async(req,res)=>{
  try {
    const superheroBody = superheroSchema(req.body);
    const data = await service.createSuperhero(superheroBody);
      res.status(201).json(data);
  } catch (error){
    res.status(404).json({ message: error });
  }
});

/* http://localhost:5000/api/v1/superheroes/superhero */
superheroRoute.get('/superhero', async(req,res)=>{
  try {
    const data = await service.findAllSuperheroes();
      res.status(200).json(data);
  } catch (error){
    next(error);
  }
});

/* http://localhost:5000/api/v1/superheroes/superheroId */
superheroRoute.get('/:superheroId', async(req,res)=>{
  try {
    const {superheroId} = req.params;
    const data = await service.findOneSuperheroe(superheroId);
      res.status(302).json(data);
  } catch (error){
    res.status(404).json({ message: error });
  }
});

/* http://localhost:5000/api/v1/superheroes/superheroId */
superheroRoute.put('/:superheroId', async(req,res) => {
  try {
    const {superheroId} = req.params;
    const {superhero_name, realname, superpower, universe} = req.body;
    const data = await service.updateSuperheroe(superheroId, superhero_name, realname, superpower, universe)
      res.status(200).json(data);
  } catch (error){
    next(error);
  }
});

/* http://localhost:5000/api/v1/superheroes/superheroId */
superheroRoute.delete('/:superheroId', async(req,res)=>{
  
  try {
    const {superheroId} = req.params;
    const data = await service.deleteSuperheroe(superheroId);
      res.status(200).json(data);
  } catch (error){
    next(error);
  }
});

module.exports = superheroRoute;