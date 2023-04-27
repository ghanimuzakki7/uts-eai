const UserModel = require("../models/user");
const jsonwebtoken = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY;

const register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const [user] = await UserModel.lihatUser(email);
  if (user.length === 1) {
    res.status(400).json({
      status: 400,
      message: "Email exist",
    });
  } else {
    try {
      await UserModel.buatUserBaru(email, password);
      res.status(201).json({
        status: 201,
        timestamp: new Date().toLocaleTimeString(),
        message: "Register success",
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }
};

const login = async (req, res) => {
  try {
    let [user] = await UserModel.lihatUser(req.body.email);
    if (user.length === 1) {
      user = user[0];
      if (user.password == req.body.password) {
        jsonwebtoken.sign(
          {
            email: user.email,
          },
          TOKEN_KEY,
          (err, token) => {
            res.status(200).json({
              status: 200,
              timestamp: new Date().toLocaleTimeString(),
              message: "Login success",
              token,
            });
          }
        );
      } else {
        res.status(401).json({
          status: 401,
          message: "Wrong password",
        });
      }
    } else {
      res.status(401).json({
        status: 401,
        message: "Login failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

module.exports = {
  register,
  login,
};
