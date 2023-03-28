const companyServices = require("../services/company.services");

const getAllCompanies = async (req, res) => {
  const result = await companyServices.getAllCompanies();
  return res.status(result.status).send(result);
};

const getCompanyById = async (req, res) => {
  const { id } = req.params;
  const result = await companyServices.getCompanyById(id);
  return res.status(result.status).send(result);
};

const createCompany = async (req, res) => {
  const result = await companyServices.createCompany(req.body);
  return res.status(result.status).send(result);
};

const editCompany = async (req, res) => {
  const { id } = req.params;
  const result = await companyServices.editCompany(req.body, id);
  return res.status(result.status).send(result);
};

const destroyCompany = async (req, res) => {
  const { id } = req.params;
  console.log("i am here");
  const result = await companyServices.destroyCompany(id);

  return res.status(result.status).send(result);
};
module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  editCompany,
  destroyCompany,
};
