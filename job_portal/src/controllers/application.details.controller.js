const applicationServices = require("../services/application.details.services");

const getAllApplication = async (req, res) => {
  const result = await applicationServices.getAllApplication();
  return res.status(result.status).send(result);
};

const getApplicationById = async (req, res) => {
  const { id } = req.params;
  const result = await applicationServices.getApplicationById(id);
  return res.status(result.status).send(result);
};

const getApplicationByJobId = async (req, res) => {
  const { id } = req.params;
  const result = await applicationServices.getApplicationByJobId(id);
  return res.status(result.status).send(result);
};

const createApplication = async (req, res) => {
  const result = await applicationServices.createApplication(
    req.body,
    req.files
  );
  return res.status(result.status).send(result);
};

const editApplication = async (req, res) => {
  const { id } = req.params;
  const result = await applicationServices.editApplication(req.body, id);
  return res.status(result.status).send(result);
};

const destroyApplication = async (req, res) => {
  const { id } = req.params;
  const result = await applicationServices.destroyApplication(id);
  return res.status(result.status).send(result);
};

const getApplicantJob = async (req, res) => {
  const { id } = req.params;
  const result = await applicationServices.getApplicantJob(id);
  return res.status(result.status).send(result);
};

module.exports = {
  getAllApplication,
  getApplicationById,
  createApplication,
  editApplication,
  destroyApplication,
  getApplicantJob,
  getApplicationByJobId,
};
