const { generateToken, validateToken } = require("../utils/auth.utils");

const generateUserToken = async (refreshToken) => {
  try {
    const decoded = validateToken(refreshToken, process.env.REFRESH_SECRET_2);
    if (decoded) {
      return {
        data: {
          token: generateToken(decoded.id),
        },
        status: 200,
        error: false,
        message: "Succcess",
      };
    } else {
      return {
        status: 400,
        error: true,
        message: "Please Login again to continue",
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
    };
  }
};

module.exports = { generateUserToken };
