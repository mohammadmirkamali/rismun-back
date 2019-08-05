const auth = require("../middleware/auth");
const { Actor, validate } = require("../models/actor");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const actors = await Actor.find().sort("name");
  res.send(actors);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let actor = new Actor({
    name: req.body.name
  });
  actor = await actor.save();

  res.send(actor);
});

module.exports = router;
