const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const tasks = require("./routes/tasks");
dotenv.config({ path: "./config/config.env" });

let PORT = process.env.PORT || 8080;

// setting up middleware
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

// to setup a middleware just use app.use(function to implement);

// start up function
function startUpFunction() {
  console.log("Express server running on port:" + PORT);
}

// syncing function
const start = async () => {
  try {
    // connection to MongoDb
    mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, startUpFunction);
  } catch (error) {
    console.log(error);
  }
};

start();
