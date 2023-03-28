"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class application_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Job }) {
      this.hasMany(Job, {
        foreignKey: "id",
      });
      // define association here
    }
  }
  application_details.init(
    {
      jobId: DataTypes.INTEGER,
      applicantId: DataTypes.INTEGER,
      cv: DataTypes.STRING,
      coverLetter: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "applicationDetails",
      tableName: "application_details",
    }
  );
  return application_details;
};
