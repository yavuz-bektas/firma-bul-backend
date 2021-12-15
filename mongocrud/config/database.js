const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection done"))
  .catch((err) => console.log("DB connection error" + err));
