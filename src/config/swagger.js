const { types } = require("pg");
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
        url: process.env.BASE_URL || "http://localhost:3000",
        description: "Servidor API",
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
        tareaId: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Tarea encontrada con exito",
            },
            data: {
              $ref: "#/components/schemas/tarea",
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
        tareaCreada: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Tarea creada con exito",
            },
            data: {
              $ref: "#/components/schemas/tarea",
            },
          },
        },
        modificarTarea: {
          type: "object",
          properties: {
            numero: {
              type: "integer",
              example: 102,
            },
            message: {
              type: "string",
              example: "Tarea modificada",
            },
          },
        },
        actualizarTarea: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Tarea actualizada con exito",
            },
            data: {
              $ref: "#/components/schemas/tarea",
            },
          },
        },
        pagination: {
          type: "object",
          properties: {
            total: {
              type: "integer",
              description: "Total de registros en la base de datos",
              example: 10,
            },
            page: {
              type: "integer",
              description: "Página actual",
              example: 1,
            },
            limit: {
              type: "integer",
              description: "Cantidad de registros por pagina",
              example: 5,
            },
            totalPages: {
              type: "integer",
              description: "Total de paginas disponibles",
              example: 2,
            },
          },
        },
        respuestaListaTareas: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "lista de tareas",
            },
            data: {
              type: "object",
              properties: {
                tasks: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/tarea",
                  },
                },
                pagination: {
                  $ref: "#/components/schemas/pagination",
                },
              },
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
