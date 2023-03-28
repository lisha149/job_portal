const userServices = require("../services/user.services");

const updateUserPassword = async (req, res) => {
  const result = await userServices.updateUserPassword(req.body, req.user.id);
  return res.status(result.status).send(result);
};

module.exports = { updateUserPassword };
