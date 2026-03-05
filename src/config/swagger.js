const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Tareas",
      version: "1.0.0",
      description: "Documentación de mi API con Swagger",
    },
    servers: [
      {
        url: "https://api-crud-nodejs-express-production.up.railway.app/task", // cambia a tu URL en Railway cuando despliegues
      },
    ],
  },
  apis: ["./src/routers/*.js"], // aquí apuntas a tus archivos de rutas
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

module.exports = swaggerDocs;
