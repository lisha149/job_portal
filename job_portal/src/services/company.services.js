const { Company } = require("../models");

const getAllCompanies = async () => {
  try {
    const companies = await Company.findAll({
      attributes: [
        "id",
        "name",
        "website",
        "contactNumber",
        "location",
        "email",
      ],
    });
    return {
      data: companies,
      status: 200,
      error: false,
      message: "Success",
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

const getCompanyById = async (id) => {
  try {
    const company = await Company.findOne({ where: { id: id } });

    if (company) {
      return {
        data: company,
        status: 200,
        error: false,
        message: "Success",
      };
    } else {
      return {
        message: "Company Not found",
        error: true,
        status: 404,
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

const createCompany = async ({
  name,
  email,
  website,
  contactNumber,
  location,
}) => {
  try {
    const company = await Company.create({
      name,
      email,
      website,
      contactNumber,
      location,
    });
    return {
      data: company,
      status: 201,
      message: "Company Created Successfully",
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

const editCompany = async (
  { name, email, website, contactNumber, location },
  id
) => {
  try {
    const company = await Company.findOne({ where: { id: id } });
    if (company) {
      company.name = name || company.name;
      company.email = email || company.email;
      company.website = website || company.website;
      company.contactNumber = contactNumber || company.contactNumber;
      company.location = location || company.location;

      await company.save();
      return {
        data: company,
        message: "Company Updated Successfully",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Company Not found",
        status: 404,
        error: true,
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

const destroyCompany = async (id) => {
  try {
    const company = await Company.findOne({ where: { id: id } });
    if (company) {
      await company.destroy();
      return {
        data: company,
        message: "Company Deleted Successfully",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Company Not found",
        status: 404,
        error: true,
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
  getAllCompanies,
  getCompanyById,
  createCompany,
  editCompany,
  destroyCompany,
};
