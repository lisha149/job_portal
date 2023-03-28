const tokenServices = require("../services/token.admin.services");

const generateAdminToken = async (req, res) => {
  const result = await tokenServices.generateAdminToken(req.body.refreshToken);
  return res.status(result.status).send(result);
};

module.exports = { generateAdminToken };
