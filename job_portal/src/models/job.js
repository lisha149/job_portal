"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Applicant, applicationDetails,Company,Category}) {
      this.belongsToMany(Applicant, {
        through: applicationDetails,
        foreignKey: "jobId",
        as: "applicants",
      }); 
      this.belongsTo(Company)
      this.belongsTo(Category)
    }
  }
  job.init(
    {
      title: DataTypes.STRING,
      vacancyNumber: DataTypes.INTEGER,
      experience: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      salary: DataTypes.STRING,
      description: DataTypes.TEXT,
      postDate: DataTypes.STRING,
      deadlineDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "jobs",
    }
  );
  return job;
};
