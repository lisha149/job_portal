const jobServices = require("../services/job.services");

const getAllJobs = async (req, res) => {
  const result = await jobServices.getAllJobs(req.query);
  return res.status(result.status).send(result);
};

const getJobById = async (req, res) => {
  const { id } = req.params;
  const result = await jobServices.getJobById(id);
  return res.status(result.status).send(result);
};

const getJobByCategoryId = async (req, res) => {
  const { id } = req.params;
  const result = await jobServices.getJobByCategoryId(id);
  return res.status(result.status).send(result);
};

const getJobByCompanyId = async (req, res) => {
  const { id } = req.params;
  const result = await jobServices.getJobByCompanyId(id);
  return res.status(result.status).send(result);
};

const createJob = async (req, res) => {
  const result = await jobServices.createJob(req.body);
  return res.status(result.status).send(result);
};

const editJob = async (req, res) => {
  const { id } = req.params;
  const result = await jobServices.editJob(req.body, id);
  return res.status(result.status).send(result);
};

const destroyJob = async (req, res) => {
  const { id } = req.params;
  const result = await jobServices.destroyJob(id);
  return res.status(result.status).send(result);
};
const searchJob = async (req, res) => {
  const { job } = req.query;
  const result = await jobServices.searchJob(job);
  return res.status(result.status).send(result);
};


module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  editJob,
  destroyJob,
  getJobByCompanyId,
  getJobByCategoryId,
  searchJob
};
