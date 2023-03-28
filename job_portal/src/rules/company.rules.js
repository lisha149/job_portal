const { check } = require("express-validator");

const companyRules = () => {
  return [
    check("name")
      .notEmpty()
      .withMessage("Company name shouldn't be empty")
      .bail()
      .isString()
      .withMessage("Company should be character")
      .bail()
      .isLength({
        min: 3,
      })
      .withMessage("Company name length should be minimum 3 characters"),
    check("email")
      .notEmpty()
      .withMessage("Email shouldn't be empty")
      .bail()
      .isEmail()
      .withMessage("Invalid Email"),
    check("website")
      .notEmpty()
      .withMessage("Website shouldn't be empty")
      .bail()
      .isString()
      .withMessage("Website should be character"),
    check("contactNumber")
      .notEmpty()
      .withMessage("Contact Number name shouldn't be empty")
      .bail()
      .isNumeric()
      .withMessage("Contact Number should be number")
      .bail()
      .isLength({
        min: 10,
      })
      .withMessage("Company number length should be minimum 10 number"),
    check("location")
      .notEmpty()
      .withMessage("Company Location shouldn't be empty")
      .bail()
      .isString()
      .withMessage("Company Location should be character")
      .bail()
      .isLength({
        min: 3,
      })
      .withMessage("Company Location length should be minimum 3 characters"),
  ];
};

module.exports = companyRules;
