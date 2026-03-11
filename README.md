# API CRUD Node.js + Express

API REST para gestión de tareas desarrollada con **Node.js**, **Express** y **PostgreSQL**.
El proyecto implementa operaciones CRUD completas, validación de datos, paginación, manejo centralizado de errores y documentación automática con Swagger.

---

## 🚀 Deploy

La API está desplegada en Railway.

📄 Documentación Swagger
https://api-crud-nodejs-express-production.up.railway.app

---

## 🧰 Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* express-validator
* Swagger (OpenAPI)
* Helmet
* Dotenv
* Railway (deploy y base de datos en la nube)

---

## 📂 Estructura del proyecto

```
src
│
├── config
│   ├── db.js
│   └── swagger.js
│
├── controllers
│   └── taskControllers.js
│
├── middleware
│   ├── errorHandler.js
│   ├── notFoundHandler.js
│   └── validationHandler.js
│
├── models
│   └── taskModels.js
│
├── routers
│   └── taskRouters.js
│
├── validations
│   └── taskValidation.js
│
└── app.js
```

---

## 📌 Endpoints principales

| Método | Endpoint          | Descripción                               |
| ------ | ----------------- | ----------------------------------------- |
| GET    | /api/v1/tasks     | Obtener todas las tareas (con paginación) |
| GET    | /api/v1/tasks/:id | Obtener una tarea por ID                  |
| POST   | /api/v1/tasks     | Crear una nueva tarea                     |
| PUT    | /api/v1/tasks/:id | Actualizar una tarea                      |
| DELETE | /api/v1/tasks/:id | Eliminar una tarea                        |

---

## 📥 Ejemplo de request

### Crear tarea

```
POST /api/v1/tasks
```

Body:

```json
{
  "numero": 1,
  "descripcion": "Aprender Node.js"
}
```

Respuesta:

```json
{
  "success": true,
  "message": "Tarea creada con exito",
  "data": {
    "id": 1,
    "numero": 1,
    "descripcion": "Aprender Node.js"
  }
}
```

---

## 📄 Ejemplo de respuesta con paginación

```json
{
  "success": true,
  "message": "Lista de tareas",
  "data": {
    "tasks": [
      {
        "id": 1,
        "numero": 1,
        "descripcion": "Aprender Node.js"
      }
    ],
    "pagination": {
      "total": 10,
      "page": 1,
      "limit": 5,
      "totalPages": 2
    }
  }
}
```

---

## ⚙️ Instalación local

Clonar repositorio:

```
git clone https://github.com/TU-USUARIO/api-crud-nodejs-express.git
```

Entrar al proyecto:

```
cd api-crud-nodejs-express
```

Instalar dependencias:

```
npm install
```

Ejecutar proyecto:

```
npm run dev
```

---

## 🔑 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```
PGUSER=usuario
PGPASSWORD=password
PGHOST=localhost
PGPORT=5432
PGDATABASE=nombre_db

BASE_URL=http://localhost:3000
```

---

## 🛡️ Características del proyecto

* CRUD completo de tareas
* Paginación en el listado de tareas
* Validación de datos con express-validator
* Sanitización de inputs
* Manejo centralizado de errores
* Documentación automática con Swagger
* Seguridad básica con Helmet
* Base de datos PostgreSQL
* Deploy en Railway

---

## 📄 Licencia

Proyecto de práctica para aprendizaje de backend con Node.js.

