const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const _ = require("lodash");

const auth = async (req, res, next) => {
  try {
    const token = req.body.Authorization.replace("Bearer ", "");
    const tokenResult = jwt.verify(token, "secretkey");

    req.user = tokenResult;

    const getUserId = req.user._id;
    const userFind = await User.findById(getUserId).lean();
    const editedData = _.omit(userFind, [
      "password",
      "username",
      "created",
      "__v",
    ]);

    req.veri = editedData;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
