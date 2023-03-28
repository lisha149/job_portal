const { check } = require("express-validator");

const applicationRules = () => {
  return [
    check("jobId").notEmpty().withMessage("id shouldn't be empty"),
    check("applicantId").notEmpty().withMessage("id shouldn't be empty"),
    check("cv").notEmpty().withMessage("cv shouldn't be empty"),
    check("coverLetter")
      .notEmpty()
      .withMessage("cover letter shouldn't be empty"),
  ];
};

module.exports = applicationRules;
