const express = require("express");
const cors = require("cors");
const path = require("path");
const options = require("../config/swagger.config");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mainRoutes = require("../routes/main.routes");
require("../schedular/job.schedular");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "/../", "/../", "public")));
app.use("/uploads", express.static(path.join(__dirname, "/../", "uploads")));
app.use("/api/v1", mainRoutes);

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

module.exports = app;
