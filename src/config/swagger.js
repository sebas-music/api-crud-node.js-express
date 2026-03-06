const { types } = require("pg");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Tareas - CRUD nodeJS",
      version: "1.0.0",
      description: "API con node.js y PostgreSQL",
    },
    servers: [
      {
        url: "https://api-crud-nodejs-express-production.up.railway.app/task",
      },
    ],
    components: {
      schemas: {
        tarea: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1
            },
            numero: {
              type: "integer",
              example: 101
            },
            descripcion: {
              type: "string",
              example: "Descripcion de la tarea"
            },
          }
        },
        crearTarea: {
          type: "object",
          properties: {
            numero: {
              type: "integer",
              example: 101
            },
            descripcion: {
              type: "string",
              example: "nueva tarea"
            },
          }
        },
        actualizarTarea: {
          type: "object",
          properties: {
            numero: {
              type: "integer",
              example: 101
            },
            descripcion: {
              type: "string",
              example: "tarea actualizada"
            },
          }
        },
      }
    }
  },
  apis: ["./src/routers/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

module.exports = swaggerDocs;
