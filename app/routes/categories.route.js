const express = require("express");
const router = express.Router()

//import controllers
const categoryController = require("../controllers/categories.controller")

//CRUD Routes

router.get("/", categoryController.getAll)
router.get("/:id", categoryController.getById)
router.post("/", categoryController.store);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);


module.exports = router