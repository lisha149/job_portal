const { User, Applicant } = require("../models");
const {
  generateToken,
  refreshUserToken,
  refreshAdminToken,
  generateTokenForForgetPassword,
  validateToken,
} = require("../utils/auth.utils");
const bcrypt = require("bcryptjs");
const {
  registrationEmail,
  forgotPasswordEmailToApplicant,
  forgotPasswordEmailToAdmin,
} = require("../config/email.config");

const userLogin = async ({ email, password }) => {
  try {
    const userExists = await Applicant.findOne({ where: { email: email } });
    if (userExists) {
      const hashedPassword = userExists.password;

      const password_valid = await bcrypt.compare(password, hashedPassword);
      if (password_valid) {
        return {
          data: {
            id: userExists.id,
            token: generateToken(userExists.id),
            refresh_token: refreshUserToken(userExists.id),
          },
          status: 200,
          error: false,
          message: "Login Successful",
        };
      } else {
        return {
          status: 400,
          error: true,
          message: "Incorrect Password",
          data: null,
        };
      }
    } else {
      return {
        status: 404,
        error: true,
        message: "User Not Found ",
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

const register = async ({ name, email, password, gender }) => {
  const userExists = await Applicant.findOne({
    where: { email: email },
  });

  try {
    if (userExists) {
      return {
        status: 400,
        error: true,
        message: "User Already Exists ",
        data: null,
      };
    }

    const salt = await bcrypt.genSalt(10);
    var user = {
      name,
      email,
      password: await bcrypt.hash(password, salt),
      gender,
    };
    if (user) {
      const createdUser = await Applicant.create(user);
      const userExists = await Applicant.findOne({
        where: { email: email },
      });
      if (createdUser) {
        registrationEmail({ email });
        if(userExists){return {
          data: {
            id: userExists.id,
            token: generateToken(userExists.id),
            refresh_token: refreshUserToken(userExists.id),
          },
          status: 200,
          error: false,
          message: "Login Successful",
        }}
          }       
    } else {
      return {
        status: 400,
        error: true,
        message: "Register UnSuccessful ",
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
const adminLogin = async ({ email, password }) => {
  try {
    const userExists = await User.findOne({ where: { email: email } });
    if (userExists) {
      const hashedPassword = userExists.password;

      const password_valid = await bcrypt.compare(password, hashedPassword);
      if (password_valid) {
        return {
          data: {
            id: userExists.id,
            email: email,
            isAdmin: userExists.isAdmin,
            token: generateToken(userExists.id),
            refresh_token: refreshAdminToken(userExists.id),
          },
          status: 200,
          error: false,
          message: "Login Successful",
        };
      } else {
        return {
          status: 400,
          error: true,
          message: "Incorrect Password",
          data: null,
        };
      }
    } else {
      return {
        status: 404,
        error: true,
        message: "Something Went Wrong",
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

const forgotPasswordAdmin = async ({ email }) => {
  try {
    const userExists = await User.findOne({ where: { email: email } });
    if (userExists) {
      const token = generateTokenForForgetPassword(userExists.id);
      forgotPasswordEmailToAdmin({
        email,
        token,
      });
      return {
        data: token,
        status: 200,
        error: false,
        message: "Please check your email",
      };
    } else {
      return {
        status: 404,
        error: true,
        message: "Something Went Wrong",
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

const resetPasswordAdmin = async ({ newPassword, confirmPassword }, token) => {
  try {
    const decoded = validateToken(
      token,
      process.env.JWT_FORGET_PASSWORD_SECRET
    );
    if (decoded) {
      const userExists = await User.findOne({ where: { id: decoded.id } });
      if (userExists) {
        const salt = await bcrypt.genSalt(10);
        userExists.password = await bcrypt.hash(newPassword, salt);
        if (newPassword != confirmPassword) {
          return {
            message: "Password donot match",
            error: true,
            status: 401,
          };
        }

        const updatedUserPw = await userExists.save();
        return {
          message: "Password Reset Successfully",
          status: 200,
          error: true,
        };
      }
    } else {
      return {
        status: 404,
        error: true,
        message: "Token Invalid",
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

const forgotPasswordApplicant = async ({ email }) => {
  try {
    const userExists = await Applicant.findOne({ where: { email: email } });
    if (userExists) {
      const token = generateTokenForForgetPassword(userExists.id);
      forgotPasswordEmailToApplicant({
        email,
        token,
      });
      return {
        data: token,
        status: 200,
        error: false,
        message: "Please check your email",
      };
    } else {
      return {
        status: 404,
        error: true,
        message: "Something Went Wrong",
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

const resetPasswordApplicant = async (
  { newPassword, confirmPassword },
  token
) => {
  try {
    const decoded = validateToken(
      token,
      process.env.JWT_FORGET_PASSWORD_SECRET
    );
    if (decoded) {
      const userExists = await Applicant.findOne({ where: { id: decoded.id } });
      if (userExists) {
        const salt = await bcrypt.genSalt(10);
        userExists.password = await bcrypt.hash(newPassword, salt);
        if (newPassword != confirmPassword) {
          return {
            message: "Password donot match",
            error: true,
            status: 401,
          };
        }
        const updatedUserPw = await userExists.save();
        return {
          message: "Password Reset Successfully",
          status: 200,
          error: true,
        };
      }
    } else {
      return {
        status: 404,
        error: true,
        message: "Token Invalid",
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

module.exports = {
  userLogin,
  adminLogin,
  register,
  forgotPasswordAdmin,
  resetPasswordAdmin,
  forgotPasswordApplicant,
  resetPasswordApplicant,
};
