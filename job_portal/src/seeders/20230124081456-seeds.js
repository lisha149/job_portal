"use strict";

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcryptjs");
const { DATE } = require("sequelize");

const salt = bcrypt.genSaltSync(10);

require("dotenv").config();
const password = bcrypt.hashSync(process.env.ADMIN_PW, salt);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Palisha Shakya",
          email: "palishashakya@mailinator.com",
          password: `${password}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
