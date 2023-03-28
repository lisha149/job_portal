const categoryServices = require("../services/category.services");

const getAllCategories = async (req, res) => {
  const result = await categoryServices.getAllCategories();
  return res.status(result.status).send(result);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getCategoryById(id);
  return res.status(result.status).send(result);
};

const createCategory = async (req, res) => {
  const result = await categoryServices.createCategory(req.body);
  return res.status(result.status).send(result);
};

const editCategory = async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.editCategory(req.body, id);
  return res.status(result.status).send(result);
};

const destroyCategory = async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.destroyCategory(id);
  return res.status(result.status).send(result);
};
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  editCategory,
  destroyCategory,
};
