require("dotenv").config();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal",
      version: "0.1.0",
      description: "Documentation of Job Portal API",
      contact: {
        name: "Palisha Shakya",
        email: "palishashakya@gmail.com",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          description:
            "JWT Authorization header using bearer schema (Example:'Bearer asdflkjasdf')",
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
    servers: [
      {
        url: `${process.env.APP_URL}/api/v1`,
      },
    ],
  },
  apis: [
    `${__dirname}/../routes/*.routes.js`,
    `${__dirname}/../routes/subRoutes/*.routes.js`,
  ],
};
module.exports = options;
