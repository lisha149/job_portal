const tokenServices = require("../services/token.user.services");

const generateUserToken = async (req, res) => {
  const result = await tokenServices.generateUserToken(req.body.refreshToken);
  return res.status(result.status).send(result);
};

module.exports = { generateUserToken };
