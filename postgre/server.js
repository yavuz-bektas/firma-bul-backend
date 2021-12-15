const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const database = require("./database/main");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.json({ info: "inital route" });
});

app.post("/addfactory", database.Factories.factoryCreate);

app.get("/getallfactory", database.Factories.getAllFactory);

app.post("/findfactoriesbyid", database.Factories.findFactoriesByID);

app.put("/updatefactory", database.Factories.updateFactoryById);

app.post("/deletebyfactoryid", database.Factories.deleteFactoryById);

app.post("/addfactoryattr", database.FactoriesNames.createFactoriesNames);

app.post("/findfactoriesbyname", database.FactoriesNames.findFactoriesByName);

app.post("/findfactoriesbywithid", database.FactoriesNames.findFactoriesByID);

app.put("/updateByName", database.FactoriesNames.updateFactoriesByNameID);

app.post(
  "/deletefactoriesattr",
  database.FactoriesNames.deleteFactoriesDetatilsById
);

app.listen(3060, () => {
  console.log("port 3060 listening ...");
});
