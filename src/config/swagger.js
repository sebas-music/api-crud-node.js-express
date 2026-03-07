const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Tareas - CRUD nodeJS",
      version: "1.0.0",
      description: `
API RESTful desarrollada con **Node.js** y **Express**, conectada a **PostgreSQL** en la nube (Railway).

- Endpoints CRUD para gestión de tareas
- Conexión segura mediante variables de entorno
- Despliegue en Railway
- Documentación interactiva con Swagger

Este proyecto demuestra buenas prácticas de backend:
- Configuración modular
- Manejo de errores
- Uso de dotenv para credenciales
- Documentación clara para facilitar la integración con cualquier frontend o cliente externo
      `,
    },
    servers: [
      {
        url: "https://api-crud-nodejs-express-production.up.railway.app",
      },
    ],
    tags: [
      {
        name: "Tareas",
        description: "Gestion para tareas",
      },
    ],
    components: {
      schemas: {
        tarea: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            numero: {
              type: "integer",
              example: 101,
            },
            descripcion: {
              type: "string",
              example: "Descripcion de la tarea",
            },
          },
        },
        crearTarea: {
          type: "object",
          required: ["numero", "descripcion"],
          properties: {
            numero: {
              type: "integer",
              example: 101,
            },
            descripcion: {
              type: "string",
              example: "nueva tarea",
            },
          },
        },
        actualizarTarea: {
          type: "object",
          properties: {
            numero: {
              type: "integer",
              example: 101,
            },
            descripcion: {
              type: "string",
              example: "tarea actualizada",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routers/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

module.exports = swaggerDocs;
