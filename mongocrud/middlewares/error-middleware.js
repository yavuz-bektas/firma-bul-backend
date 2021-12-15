const express = require("express");

const catchError = (err, req, res, next) => {
  res.json({
      message:err.message
  })
};

module.exports = {
  catchError,
};
