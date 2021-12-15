const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error-middleware");
const jwt = require("jsonwebtoken");

//call db
require("./config/database");

//call router
const authRouter = require("./routes/authRouter");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", authRouter);

app.use(errorMiddleware.catchError);



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
