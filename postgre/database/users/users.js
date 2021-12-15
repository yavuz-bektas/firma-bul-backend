const client = require("../database");

const usersAll = (request, response) => {
  client.query("SELECT * FROM users", (err, res) => {
    if (!err) {
      response.status(200).json(res.rows);
    } else {
      console.log(err);
    }
  });
};

const createUser = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const { name, surname, age } = req.body;
  const { rows } = await client.query(
    "INSERT INTO users (name, surname, age) VALUES ($1, $2, $3)",
    [name, surname, age]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      user: { name, surname, age },
    },
  });
};

const findUserById = async (req, res) => {
  if (req.params.id === []) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const userId = parseInt(req.params.id);

  await client.query(
    "SELECT * FROM users WHERE userid = $1",
    [userId],
    (error, response) => {
      if (error) {
        throw error;
      }
      res.status(200).send(response.rows);
    }
  );
};

module.exports = {
  usersAll,
  createUser,
  findUserById,
};
