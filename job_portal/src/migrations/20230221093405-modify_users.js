"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users", // table name
      "isAdmin", // new field name
      {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "isAdmin");
  },
};
