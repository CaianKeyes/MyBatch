const mongoose = require("mongoose");

function letConnect() {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/mybatch",
    console.log("Connected to MongoDB")
  );
}

letConnect();

module.exports = mongoose;
