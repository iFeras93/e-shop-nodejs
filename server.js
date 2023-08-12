const nodeApp = require("./app")
require('dotenv').config()

const dbConnection = require('./app/config/database.init')
const PORT = process.env.SERVE_PORT || 3434
const HOST = process.env.SERVE_URI || "http:localhost"

dbConnection();

nodeApp.listen(PORT, () => {
    console.log(`Your app serving on ${HOST}:${PORT}`)
});
