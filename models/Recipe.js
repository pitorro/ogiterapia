const mongoose = require('mongoose');

// Esquema de receta
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    steps: { type: String, required: true },
    tags: { type: [String], required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);
