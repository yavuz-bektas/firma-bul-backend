const { body } = require("express-validator");

const validateNewUser = () => {
  return [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please write correct mail adress"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("pwd must be at least 6 characters"),
    body("username")
      .trim()
      .isLength({ min: 8 })
      .withMessage("usname must be at least 8 characters")
      .matches(/[a-z]/gi)
      .withMessage("must contain a string"),
  ];
};

module.exports = {
  validateNewUser,
};
