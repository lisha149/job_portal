require("dotenv").config();
const dbConfig = {
  development: {
    username: process.env.DATABASE_USERNAME_DEVELOPMENT,
    password: process.env.DATABASE_PASSWORD_DEVELOPMENT,
    database: process.env.DATABASE_NAME_DEVELOPMENT,
    host: process.env.DATABASE_HOST_DEVELOPMENT,
    port: process.env.DATABASE_PORT_DEVELOPMENT,
    dialect: process.env.DATABASE_DIALECT_DEVELOPMENT,
    log: true,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    log: true,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    log: true,
  },
  staging: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    log: true,
  },
  local: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    log: true,
  },
};
module.exports = dbConfig;
