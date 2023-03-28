const { check } = require("express-validator");

const categoryRules = () => {
  return [
    check("name")
      .notEmpty()
      .withMessage("Category name shouldn't be empty")
      .bail()
      .isString()
      .withMessage("Category should be character")
      .bail()
      .isLength({
        min: 3,
      })
      .withMessage("Category name length should be minimum 3 characters"),
  ];
};

module.exports = categoryRules;
