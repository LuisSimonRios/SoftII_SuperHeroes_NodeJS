const superheroModel = require('../models/superhero.model');
const Boom = require('@hapi/boom');

class SuperheroService{

  async createSuperhero(superheroBody){
    superheroBody.save(superheroBody);
    return superheroBody;
  }

  async findAllSuperheroes() {
    return superheroModel.find();
  }

  async findOneSuperheroe(superheroId) {
    return superheroModel.findOne({ _id: superheroId }). then(
      (superheroFind) => {
        if (!superheroFind) throw Boom.notFound('No se encontro el superheroe');
        return superheroFind;
      }
    );
  }

  async updateSuperheroe(superheroId, superhero_name, realname, superpower, universe) {
    return superheroModel.findById({ _id: superheroId }).then((superhero) => {
      if (!superhero) throw Boom.notFound('No se encontro el superheroe');
      return superheroModel.updateOne(
        {superheroId},
        {superhero_name, realname, superpower, universe}
      );
    });

  }

  async deleteSuperheroe(superheroId) {
    return superheroModel.findById({ _id: superheroId }).then (
      (superheroFind) => {
        if (!superheroFind) throw Boom.notFound('No se encontro el superheroe');
        return superheroModel.deleteOne(superheroFind);
      }
    );
  }
}
module.exports = SuperheroService;