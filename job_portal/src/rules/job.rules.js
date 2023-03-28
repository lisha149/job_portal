const { check } = require("express-validator");
const jobRules = () => {
  return [
    check("title")
      .notEmpty()
      .withMessage("job title shouldn't be empty")
      .bail()
      .isString()
      .withMessage("job should be character")
      .bail()
      .isLength({
        min: 3,
      })
      .withMessage("job title should be minimum 3 characters"),
    check("vacancyNumber")
      .isNumeric()
      .withMessage("no. of vacancy should be numeric"),
  ];
};

module.exports = jobRules;
