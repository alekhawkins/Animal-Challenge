var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Animal = sequelize.import('../models/animal');

router.post('/', validateSession, (req, res) => {
    const animalFromRequest = {
        numberOfLegs: req.body.numberOfLegs,
        predator: req.body.predator,
        name: req.body.name,
    }

    Animal.create(animalFromRequest)
        .then(animal => res.status(200).json(animal))
        .catch(err => res.json(req.errors));
})

router.delete('/:id', validateSession, (req, res) => {
    Animal.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(animal => res.status(200).json(animal))
    .catch (err => res.json ({
        error: err
    }))
})
router.put('/:id',validateSession, (req, res) => {
    Animal.update(req.body, { where: { id: req.params.id }})
      .then(animal => res.status(200).json(animal))
      .catch(err => res.json({ error: err}))
  })


module.exports = router;