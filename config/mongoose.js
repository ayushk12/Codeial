const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/$(env.db)`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to Mongodb"));

db.once("open", function() {
  console.log("connected to database:MongoDB");
});
module.exports = db;
