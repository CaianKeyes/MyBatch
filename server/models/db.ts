import mongoose, { Connection } from "mongoose";

function letConnect(): Connection {
  mongoose
    .connect(
      "mongodb+srv://kevinstrange:test123@cluster.si3hflc.mongodb.net/MyBatch?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    });

  return mongoose.connection;
}

letConnect();

module.exports = mongoose;
