const superheroModel = require('../models/superhero.model');

class SuperheroService{

  async createSuperhero(superheroBody){
    superheroBody.save(superheroBody);
    return superheroBody;
  }

  async findAllSuperheroes() {
    return superheroModel.find();
  }

  async findOneSuperheroe(superheroId) {
    return superheroModel.findOne({ _id: superheroId });
  }

  async updateSuperheroe(superheroId, superhero_name, realname, superpower, universe) {
    return superheroModel.findById({ _id: superheroId }).then((superhero) => {
      if (!superhero) throw Error('No se encontro el superheroe');
      return superheroModel.updateOne(
        {superheroId},
        {superhero_name, realname, superpower, universe}
      );
    });

  }

  async deleteSuperheroe(superheroId) {
    const superhero = superheroModel.findById({ _id: superheroId });
    return superheroModel.deleteOne(superhero);
  }
}
module.exports = SuperheroService;