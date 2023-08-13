const mongoose = require("mongoose")

//define categories table schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category required'],
        unique: [true, 'Category must be unique'],
        minlength: [3, 'Too short category name'],
        maxlength: [32, 'Too long category name'],
    },
    slug: {
        type: String,
        unique: [true, 'Category slug must be unique'],
        lowercase: true,
    },
    state: {
        type: Boolean,
    },
    image: String,
}, {timestamps: true})

//define table name and assign the schema to the model
const categoryModel = mongoose.model("categories", categorySchema)
module.exports = categoryModel