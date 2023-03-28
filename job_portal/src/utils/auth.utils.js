const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};
const generateTokenForForgetPassword = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_FORGET_PASSWORD_SECRET, {
    expiresIn: "1m",
  });
};
const validateToken = (token, secret) => {
  return jwt.verify(token, secret);
};

const refreshAdminToken = (id) => {
  return jwt.sign({ id: id }, process.env.REFRESH_SECRET_1, {
    expiresIn: "3d",
  });
};

const refreshUserToken = (id) => {
  return jwt.sign({ id: id }, process.env.REFRESH_SECRET_2, {
    expiresIn: "1d",
  });
};

module.exports = {
  generateToken,
  validateToken,
  refreshAdminToken,
  refreshUserToken,
  generateTokenForForgetPassword,
};
