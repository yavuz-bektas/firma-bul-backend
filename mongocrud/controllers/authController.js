const { json } = require("express");
const User = require("../models/userSchema");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const meAboutDetails = (req, res, next) => {
  res.send("sa");
};

const registerPost = async (req, res, next) => {
  const ErrorsGet = validationResult(req);

  if (!ErrorsGet.isEmpty()) {
    return res.status(400).json({
      msg: ErrorsGet.array(),
    });
  } else {
    try {
      const _userMail = await User.findOne({ email: req.body.email });

      if (_userMail) {
        return res
          .status(400)
          .json({ msg: [{ msg: "this mail already using" }] });
      } else {
        let bodyData = req.body;
        const hashedPwd = await bcrypt.hash(bodyData.password, 10);
        const user = new User({
          email: bodyData.email,
          username: bodyData.username,
          password: hashedPwd,
          isActive: false,
        });
        await user.save();
        res.json({
          created: "user has been created successfuly",
          user: bodyData.email,
        });
      }
    } catch (e) {
      next(e);
    }
  }
};

const findUser = async (req, res, next) => {
  const getUserId = req.veri;
  try {
    res.status(201).json({ getUserId });
  } catch (e) {
    next(e);
  }
};

const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: [{ msg: "there is no mail" }] });
    } else {
      const pwdCheck = await bcrypt.compare(req.body.password, user.password);
      if (!pwdCheck) {
        return res.status(401).json({ msg: [{ msg: "pwd is not true" }] });
      } else {
        const token = await jwt.sign(
          {
            _id: user._id,
            email: user.email,
            userActive: user.isActive,
            username: user.username,
          },
          "secretkey",
          { expiresIn: "1h" }
        );
        return res.status(200).json({
          user: user.username,
          token: token,
        });
      }
    }
  } catch (e) {
    next(e);
  }
};

const getallusers = async (req, res, next) => {
  try {
    const usersFind = await User.find({}).select(["-password", "-__v"]);

    res.send(usersFind);
  } catch (e) {
    next(e);
  }
};

const updateUser = async (req, res, next) => {
  const userId = req.body.userId;
  try {
    const userFind = await User.findByIdAndUpdate(userId, {
      $set: {
        isActive: true,
      },
    });
    return res.status(200).json({ msg: "user has been updated"});
  } catch (e) {
    next(e);
  }
};

module.exports = {
  meAboutDetails,
  registerPost,
  findUser,
  signIn,
  getallusers,
  updateUser,
};
