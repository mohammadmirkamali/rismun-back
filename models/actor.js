const Joi = require("joi");
const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25
  }
});

const Actor = mongoose.model("Actor", actorSchema);

function validateActor(actor) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(25)
      .required()
  };

  return Joi.validate(actor, schema);
}

exports.Actor = Actor;
exports.validate = validateActor;
