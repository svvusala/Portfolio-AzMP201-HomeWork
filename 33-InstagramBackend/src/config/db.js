const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vusalasalimova78:vusala12345@cluster1.aouf9f8.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("db connect");
  })
  .catch((error) => console.log(error));
