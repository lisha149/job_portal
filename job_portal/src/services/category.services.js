const { Category, Job } = require("../models");

const getAllCategories = async () => {
  try {
    const categories = await Category.findAll({
      attributes: ["name", "id"],
      include: Job,
    });
    return {
      data: categories,
      status: 200,
      message: "Success",
      error: false,
    };
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};

const getCategoryById = async (id) => {
  try {
    const category = await Category.findOne({
      attributes: ["name", "id"],
      where: { id: id },
    });
    if (category) {
      return {
        data: category,
        status: 200,
        message: "Success",
        error: false,
      };
    } else {
      return {
        status: 404,
        message: "Category Not found",
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};

const createCategory = async ({ name }) => {
  console.log("services");
  try {
    const category = await Category.create({ name });
    return {
      data: category,
      status: 201,
      message: "Category Created Successfully",
      error: false,
    };
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};

const editCategory = async ({ name }, id) => {
  try {
    const category = await Category.findOne({ where: { id: id } });
    if (category) {
      category.name = name;
      await category.save();
      return {
        data: category,
        message: "Category Updated Successfully",
        status: 201,
        error: false,
      };
    } else {
      return {
        status: 404,
        message: "Category Not found",
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};

const destroyCategory = async (id) => {
  try {
    const category = await Category.findOne({ where: { id: id } });
    if (category) {
      await category.destroy({ where: { id: id } });
      const title = category.name;
      return {
        data: title,
        message: "Category Deleted Successfully",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Category Not found",
        error: true,
        status: 404,
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
      data: null,
    };
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  editCategory,
  destroyCategory,
};
