const { applicationDetails, Job, Applicant,Company} = require("../models");
const { applicantEmail,confirmationEmail } = require("../config/email.config");
const getAllApplication = async () => {
  try {
    const applications = await applicationDetails.findAll({
      attributes: [
        "id",
        "jobId",
        "applicantId",
        "cv",
        "coverLetter",
        "createdAt",
      ],
      include: Job,
    });
    console.log(applications);
    return {
      data: applications,
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

const getApplicationById = async (id) => {
  try {
    const application = await applicationDetails.findOne({
      where: { id: id },
      attributes: [
        "id",
        "jobId",
        "applicantId",
        "cv",
        "coverLetter",
        "createdAt",
      ],
      include: Job,
    });
    if (application) {
      return {
        data: application,
        message: "Success",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Application Not found",
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

const getApplicationByJobId = async (id) => {
  try {
    const application = await applicationDetails.findAll({
      where: { jobId: id },
      attributes: [
        "id",
        "jobId",
        "applicantId",
        "cv",
        "coverLetter",
        "createdAt",
      ],
      include: Job,
    });
    if (application) {
      return {
        data: application,
        message: "Success",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Application Not found",
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

const createApplication = async (
  { jobId, applicantId },
  { cv, coverLetter }
) => {
  try {
    const application = await applicationDetails.create({
      jobId: jobId,
      applicantId: applicantId,
      cv: "cv/" + cv[0].filename,
      coverLetter: "coverLetter/" + coverLetter[0].filename,
    });
    if (application) {
      const applicant = await Applicant.findOne({ where: { id: applicantId } });
      const job = await Job.findOne({ where: { id: jobId } ,include:Company});
      const jobTitle = job.title;
      const companyName=job.Company.name
      const applicantName = applicant.name;
      const email=applicant.email;
      applicantEmail({ jobTitle, applicantName });
      confirmationEmail({email,jobTitle,companyName})
      return {
        data: application,
        message: "Applications Created Successfully",
        status: 201,
        error: false,
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

const editApplication = async () => {
  try {
    const application = await applicationDetails.findOne({ where: { id: id } });
    if (application) {
      application.jobId = jobId || application.jobId;
      application.applicantId = applicantId || application.applicantId;
      application.cv = cv || application.cv;
      application.coverLetter = coverLetter || application.coverLetter;
      await applicationDetails.save();
      return {
        data: application,
        message: "Application Updated Successfully",
        status: 201,
        error: false,
      };
    } else {
      return {
        status: 404,
        data: null,
        message: "Application Not found",
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

const destroyApplication = async (id) => {
  try {
    const application = await applicationDetails.findOne({ where: { id: id } });
    if (application) {
      await applicationDetails.destroy({ where: { id: id } });

      return {
        data: application,
        message: "Application Deleted Successfully",
        status: 200,
        error: false,
      };
    } else {
      return {
        data: null,
        message: "Application Not found",
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
  getAllApplication,
  getApplicationById,
  createApplication,
  editApplication,
  destroyApplication,
  getApplicationByJobId,
};
