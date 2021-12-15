const client = require("../database");

const createFactoriesNames = async (req, res) => {
  // Validate request
  if (!req.body.factoryname) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const {
    factoryname,
    fromdate,
    todate,
    usingkw,
    usingsalary,
    discountedprice,
  } = req.body;

  const { rows } = await client.query(
    "INSERT INTO factoryname (factoryname, fromdate, todate,usingkw,usingsalary,discountedprice) VALUES ($1, $2, $3,$4,$5,$6)",
    [factoryname, fromdate, todate, usingkw, usingsalary, discountedprice]
  );

  res.status(201).send({
    message: "Factory attributes created successfully!",
    body: {
      product: {
        factoryname,
        fromdate,
        todate,
        usingkw,
        usingsalary,
        discountedprice,
      },
    },
  });
};

const findFactoriesByName = async (req, res) => {
  const factoryname = req.body.factoryname;

  const response = await client.query(
    "SELECT * FROM factoryname WHERE factoryname = $1 ORDER BY factorynameid ASC",
    [factoryname]
  );
  res.status(200).send(response.rows);
};

const findFactoriesByID = async (req, res) => {
  const factorynameid = req.body.id;

  const response = await client.query(
    "SELECT * FROM factoryname WHERE factorynameid = $1",
    [factorynameid]
  );
  res.status(200).send(response.rows);
};

const updateFactoriesByNameID = async (req, res) => {
  const factorynameid = parseInt(req.body.id);

  const {
    factoryname,
    fromdate,
    todate,
    usingkw,
    usingsalary,
    discountedprice,
  } = req.body;

  const response = await client.query(
    "UPDATE factoryname SET factoryname = $1, fromdate = $2, todate = $3, usingkw = $4,usingsalary = $5, discountedprice = $6 WHERE factorynameid = $7",
    [
      factoryname,
      fromdate,
      todate,
      usingkw,
      usingsalary,
      discountedprice,
      factorynameid,
    ]
  );

  res.status(200).send({ message: "Attr Updated Successfully!" });
};

const deleteFactoriesDetatilsById = async (req, res) => {
  const factoryid = parseInt(req.body.id);
  await client.query("DELETE FROM factoryname WHERE factorynameid = $1", [
    factoryid,
  ]);

  res
    .status(200)
    .send({ message: "Factory attr deleted successfully!", factoryid });
};

module.exports = {
  createFactoriesNames,
  findFactoriesByName,
  updateFactoriesByNameID,
  deleteFactoriesDetatilsById,
  findFactoriesByID,
};
