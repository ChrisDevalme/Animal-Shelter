const { model, Schema } = require('mongoose')


const animalSchema = new Schema ({
    name: String,
    species: String,
    image: String,
    reservedForAdoption: Boolean
    }, {
    timestamps: true
})

const Animal = model('Animal', animalSchema)

module.exports = Animal