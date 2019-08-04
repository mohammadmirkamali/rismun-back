const Joi = require("joi");
const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  img: String,
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  actors: Array
});

const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    rate: Joi.number()
      .min(0)
      .max(100)
      .required(),
    img: Joi.string(),
    actors: Joi.array()
  };

  return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
