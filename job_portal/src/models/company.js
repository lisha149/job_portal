"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Job}) {
      this.hasMany(Job,{
        foreignKey:"companyId"
      }); 
  }
  }
  company.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      contactNumber: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
      tableName: "companies",
    }
  );
  return company;
};
