const authServices = require("../services/auth.services");
const userLogin = async (req, res) => {
  const result = await authServices.userLogin(req.body);
  return res.status(result.status).send(result);
};
const adminLogin = async (req, res) => {
  const result = await authServices.adminLogin(req.body);
  return res.status(result.status).send(result);
};
const register = async (req, res) => {
  const result = await authServices.register(req.body);
  return res.status(result.status).json(result);
};

const forgotPasswordAdmin = async (req, res) => {
  const result = await authServices.forgotPasswordAdmin(req.body);
  return res.status(result.status).json(result);
};

const forgotPasswordApplicant = async (req, res) => {
  const result = await authServices.forgotPasswordApplicant(req.body);
  return res.status(result.status).json(result);
};

const resetPasswordAdmin = async (req, res) => {
  const { token } = req.params;
  const result = await authServices.resetPasswordAdmin(req.body, token);
  return res.status(result.status).json(result);
};
const resetPasswordApplicant = async (req, res) => {
  const { token } = req.params;
  const result = await authServices.resetPasswordApplicant(req.body, token);
  return res.status(result.status).json(result);
};
module.exports = {
  userLogin,
  adminLogin,
  register,
  forgotPasswordAdmin,
  forgotPasswordApplicant,
  resetPasswordApplicant,
  resetPasswordAdmin,
};
