const express = require('express')
const router = express.Router()
const animalCtrl = require('../../controllers/api/animal')


// Index complete
router.get('/', animalCtrl.index, animalCtrl.jsonAnimals)
// Delete
router.delete('/:id', animalCtrl.destroy, animalCtrl.jsonAnimal)
// Update
router.put('/:id', animalCtrl.update, animalCtrl.jsonAnimal)
// Create
router.post('/', animalCtrl.create, animalCtrl.jsonAnimal)
// Show
router.get('/:id', animalCtrl.show, animalCtrl.jsonAnimal)

module.exports = router