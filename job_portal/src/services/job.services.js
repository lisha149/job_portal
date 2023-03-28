const { Op } = require("sequelize");
const { Job ,Company} = require("../models");
const Pagination = require("../utils/pagination.utils");

const getJobs = async () => {
  try {
    const jobs = await Job.findAll({
      attributes: [
        "id",
        "title",
        "vacancyNumber",
        "experience",
        "categoryId",
        "companyId",
        "status",
        "salary",
        "description",
        "postDate",
        "deadlineDate",
      ],
      include:Company,
      raw: true,
    });
    return {
      data: jobs,
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
const getAllJobs = async (queryString) => {
  try {
    const resultPerPage = 9;
    const jobCount = await Job.count();
    const jobs = await Job.findAll({
      attributes: [
        "id",
        "title",
        "vacancyNumber",
        "experience",
        "categoryId",
        "companyId",
        "status",
        "salary",
        "description",
        "postDate",
        "deadlineDate",
      ],
      include:Company,
      ...Pagination(resultPerPage, queryString),
    });
    return {
      data: jobs,
      status: 200,
      error: false,
      message: "Success",
      jobCount,
      resultPerPage,
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

const getJobById = async (id) => {
  try {
    const job = await Job.findOne({ where: { id: id }, include:Company, });
    if (job) {
      return {
        data: job,
        status: 200,
        error: false,
        message: "Success",
      };
    } else {
      return {
        message: "Job Not found",
        status: 404,
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

const getJobByCompanyId = async (id) => {
  try {
    const job = await Job.findAll({ where: { companyId: id }});
    if (job) {
      return {
        data: job,
        status: 200,
        error: false,
        message: "Success",
      };
    } else {
      return {
        message: "Job Not found",
        status: 404,
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

const getJobByCategoryId = async (id) => {
  try {
    const job = await Job.findAll({
      where: { categoryId: id },
      attributes: [
        "id",
        "title",
        "vacancyNumber",
        "experience",
        "categoryId",
        "companyId",
        "status",
        "salary",
        "description",
        "postDate",
        "deadlineDate",
      ],
      include:Company,
    });
    if (job) {
      return {
        data: job,
        status: 200,
        error: false,
        message: "Success",
      };
    } else {
      return {
        message: "Job Not found",
        status: 404,
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

const createJob = async ({
  title,
  vacancyNumber,
  experience,
  companyId,
  salary,
  description,
  deadlineDate,
  categoryId,
}) => {
  try {
    const job = await Job.create({
      title,
      vacancyNumber,
      experience,
      companyId,
      salary,
      description,
      deadlineDate,
      categoryId,
    });
    return {
      data: job,
      message: "Job Created Successfully",
      status: 201,
      error: false,
    };
  } catch (error) {
    if (error.name === "SequelizeForeignKeyConstraintError") {
      return {
        status: 400,
        error: true,
        message: "Enter valid company id or category id ",
        data: null,
      };
    } else {
      return {
        status: 400,
        error: true,
        message: "Bad Request ",
        data: null,
      };
    }
  }
};

const editJob = async (
  {
    title,
    vacancyNumber,
    experience,
    companyId,
    salary,
    status,
    description,
    deadlineDate,
    categoryId,
  },
  id
) => {
  try {
    const job = await Job.findOne({ where: { id: id } });
    if (job) {
      job.title = title || job.title;
      job.vacancyNumber = vacancyNumber || job.vacancyNumber;
      job.experience = experience || job.experience;
      job.categoryId = categoryId || job.categoryId;
      job.companyId = companyId || job.companyId;
      job.status = status || job.status;
      job.salary = salary || job.salary;
      job.description = description || job.description;
      job.deadlineDate = deadlineDate || job.deadlineDate;
      await job.save();
      return {
        data: job,
        message: "Job Updated Successfully",
        status: 201,
        error: false,
      };
    } else {
      return {
        status: 404,
        data: null,
        message: "Job Not found",
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

const destroyJob = async (id) => {
  try {
    const job = await Job.findOne({ where: { id: id } });
    if (job) {
      await Job.destroy({ where: { id: id } });

      return {
        data: job,
        message: "Job Deleted Successfully",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Job Not found",
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
const searchJob = async (job) => {
  try {
    const getJob= job.toLowerCase();
    const allJob = await Job.findAll({ where: { title: {[Op.like]:"%"+getJob+ "%"} } });
    if (allJob) {
      return {
        data: allJob,
        message: "Success",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Job Not Found",
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
  getAllJobs,
  getJobById,
  createJob,
  editJob,
  destroyJob,
  getJobByCategoryId,
  getJobByCompanyId,
  getJobs,
  searchJob
};
