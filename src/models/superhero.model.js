const mongoose = require('mongoose')
const superheroSchema = mongoose.Schema({
  superhero_name: {
    type : String,
    require : true
  },
  realname : {
    type : String,
    require : true
  },
  superpower : {
    type :  Array,
    require : true
  },
  universe : {
    type : String,
    require : true
  },
  villian : {
    type : Object,
    require : true,
    villian_name : {type: String, require: true},
    powers : {type: Array, require: true}

  }
});

const superheroCollection = mongoose.model('superheroCollection', superheroSchema)

module.exports = superheroCollection;