const express = require("express");

//require routes
const categoriesRoute = require('./routes/categories.route')

const app = express();

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello World")
})

//routes sections
app.use("/api/v1/categories", categoriesRoute)
module.exports = app
