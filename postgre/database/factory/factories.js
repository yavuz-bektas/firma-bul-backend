const client = require("../database");

const factoryCreate = async (req, res) => {
  // Validate request
  if (!req.body.factoryname) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const {
    factoryname,
    factorydate,
    factoryenddate,
    factoryworker,
    factoryspecial,
  } = req.body;
  const { rows } = await client.query(
    "INSERT INTO factorylist (factoryname, factorydate, factoryenddate,factoryworker,factoryspecial) VALUES ($1, $2, $3,$4,$5)",
    [factoryname, factorydate, factoryenddate, factoryworker, factoryspecial]
  );

  res.status(201).send({
    message: "Factory created successfully!",
    body: {
      product: {
        factoryname,
        factorydate,
        factoryenddate,
        factoryworker,
        factoryspecial,
      },
    },
  });
};

const getAllFactory = async (req, res) => {


  await client.query(
    "SELECT * FROM factorylist ORDER BY factorytid ASC;",
    (error, response) => {
      if (error) {
        throw error;
      }
      res.status(200).send(response.rows);
    }
  );
};

const updateFactoryById = async (req, res) => {
  const factorytid = parseInt(req.body.id);
  console.log(factorytid);
  const {
    factoryname,
    factorydate,
    factoryenddate,
    factoryworker,
    factoryspecial,
  } = req.body;

  const response = await client.query(
    "UPDATE factorylist SET factoryname = $1, factorydate = $2, factoryenddate = $3, factoryworker = $4,factoryspecial = $5 WHERE factorytid = $6",
    [
      factoryname,
      factorydate,
      factoryenddate,
      factoryworker,
      factoryspecial,
      factorytid,
    ]
  );

  res.status(200).send({ message: "Factory Updated Successfully!" });
};

const deleteFactoryById = async (req, res) => {
  const factoryid = parseInt(req.body.id);
  await client.query("DELETE FROM factorylist WHERE factorytid = $1", [
    factoryid,
  ]);

  res.status(200).send({ message: "Factory deleted successfully!", factoryid });
};

const findFactoriesByID = async (req, res) => {
  const factoryid = req.body.id;

  const response = await client.query(
    "SELECT * FROM factorylist WHERE factorytid = $1",
    [factoryid]
  );
  res.status(200).send(response.rows);
};

module.exports = {
  factoryCreate,
  getAllFactory,
  updateFactoryById,
  deleteFactoryById,
  findFactoriesByID,
};
