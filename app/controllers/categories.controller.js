const CategoryModel = require("../models/category.model")
const slugify = require('slugify')

function getAll(req, res) {
    res.send("Show All Categories")
}

function getById(req, res) {
}

async function store(req, res) {
    let categoryName = req.body.name
    console.log(categoryName)
    // return false;
    const newCategory = await CategoryModel.create({
        name: categoryName,
        slug: slugify(categoryName)
    })

    res.status(200).json(newCategory)

}

function update(req, res) {
}

function destroy(req, res) {
}

module.exports = {
    getAll,
    getById,
    store,
    update,
    destroy,
}