const { Applicant } = require("../models");
const bcrypt = require("bcryptjs");

const updateUserPassword = async ({
  oldPassword,
  password,
  confirmPassword,
}) => {
  try {
    const user = await Applicant.findOne({ where: { id: decoded.id } });
    if (!user) {
      return {
        message: "Invalid User",
        error: true,
        status: 404,
      };
    }
    // validate old password
    const isValidPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isValidPassword) {
      return {
        message: "Please enter correct old password.",
        error: true,
        status: 400,
      };
    }
    const salt = await bcrypt.genSalt(10);

    if (password) {
      user.password = await bcrypt.hash(password, salt);
    } else {
      return {
        message: "Password Required",
        status: 401,
        error: true,
      };
    }

    if (password != confirmPassword) {
      return {
        message: "Password donot match",
        error: true,
        status: 401,
      };
    }

    const updatedUserPw = await user.save();
    return {
      message: "Password Changed Successfully",
      status: 200,
      error: true,
    };
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
    };
  }
};

module.exports = { updateUserPassword };
