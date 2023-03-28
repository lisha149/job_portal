const { validateToken } = require("../utils/auth.utils");
const { User, Applicant } = require("../models");
require("dotenv").config();

//protect our api
const isAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = validateToken(token, process.env.JWT_SECRET);
      req.user = decoded;

      next();
    } catch (error) {
      res.status(401).send({
        mesage: "Not authorized, token failed",
        status: 401,
        error: true,
      });
    }
  }

  if (!token) {
    res
      .status(401)
      .send({ mesage: "Not authorized, no token", status: 401, error: true });
  }
};

//isadmin
const isAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decodes token id
      decoded = validateToken(token, process.env.JWT_SECRET);
      if (decoded) {
        req.user = await User.findOne({
          where: { id: decoded.id },
        });
        // console.log(req.user);
        if (!req.user) {
          return res
            .status(401)
            .send({ message: "You are not authorize to perform this action" });
        }
        next();
      }
    } catch (error) {
      res.status(401);
      res.status(401).send({
        mesage: "Not authorized, token failed",
        status: 401,
        error: true,
      });
    }
  } else {
    {
      res
        .status(401)
        .send({ mesage: "Not authorized, no token", status: 401, error: true });
    }
  }
};
//isApplicant
const isApplicant = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decodes token id
      decoded = validateToken(token, process.env.JWT_SECRET);
      if (decoded) {
        req.user = await Applicant.findOne({
          where: { id: decoded.id },
        });

        if (!req.user) {
          return res.status(403).send({
            message: " You are not authorize to perform this action",
            status: 403,
            error: true,
          });
        }
        next();
      }
    } catch (error) {
      res.status(401).send({
        mesage: "Not authorized, token failed",
        status: 401,
        error: true,
      });
    }
  }

  if (!token) {
    res
      .status(401)
      .send({ mesage: "Not authorized, no token", status: 401, error: true });
  }
};

module.exports = { isAuth, isAdmin, isApplicant };
