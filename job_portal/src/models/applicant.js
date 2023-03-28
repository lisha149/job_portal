"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ applicationDetails, Job }) {
      this.belongsToMany(Job, {
        through: applicationDetails,
        foreignKey: "jobId",
        as: "appliedJobs",
      });
    }
  }
  applicant.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      profilePic: DataTypes.STRING,
      linkedinLink: DataTypes.STRING,
      address: DataTypes.STRING,
      contactNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Applicant",
      tableName: "applicants",
    }
  );
  return applicant;
};
