const mongoose = require('mongoose');
// require('dotenv').config()
const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_DB_URI)
        .then((res) => {
            console.log(`Database Connected: ${res.connection.host}`);
        })
        .catch((err) => {
            console.error(`Database Error: ${err}`);
        })
}

module.exports = dbConnection