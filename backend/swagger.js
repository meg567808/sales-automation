const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sales Insight Automator API",
      version: "1.0.0",
      description: "Upload CSV, generate AI insights, and send email"
    }
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };