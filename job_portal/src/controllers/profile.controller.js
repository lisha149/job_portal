const profileServices = require("../services/profile.services");

const editProfile = async (req, res) => {
  const { id } = req.params;
  const result = await profileServices.editProfile(req.body, req.files, id);
  return res.status(result.status).send(result);
};

const getProfileById = async (req, res) => {
  const { id } = req.params;
  const result = await profileServices.getProfileById(id);
  return res.status(result.status).send(result);
};

module.exports = { editProfile, getProfileById };
