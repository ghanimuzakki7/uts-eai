require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY;

const key = (req, res, next) => {
  const headers = req.headers.authorization;
  if (headers) {
    const token = headers.split(" ")[1];
    jsonwebtoken.verify(token, TOKEN_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: 403,
          message: "Token invalid",
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      status: 401,
      message: "Login first to get token",
    });
  }
};

module.exports = key;
