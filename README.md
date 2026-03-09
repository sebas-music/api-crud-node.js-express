# API CRUD Node.js + Express

API REST para gestión de tareas desarrollada con **Node.js**, **Express** y **PostgreSQL**.
El proyecto implementa operaciones CRUD completas, validación de datos, manejo centralizado de errores y documentación automática con Swagger.

## 🚀 Deploy

La API está desplegada en la nube usando Railway.

📄 Documentación Swagger
https://api-crud-nodejs-express-production.up.railway.app/api-docs/

## 🧰 Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* express-validator
* Swagger (OpenAPI)
* Helmet
* Dotenv
* Railway (deploy y base de datos en la nube)

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

## 📌 Endpoints principales

| Método | Endpoint   | Descripción              |
| ------ | ---------- | ------------------------ |
| GET    | /tasks     | Obtener todas las tareas |
| GET    | /tasks/:id | Obtener una tarea por ID |
| POST   | /tasks     | Crear una nueva tarea    |
| PUT    | /tasks/:id | Actualizar una tarea     |
| DELETE | /tasks/:id | Eliminar una tarea       |

## 📥 Ejemplo de request

### Crear tarea

```
POST /tasks
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
  "message": "Tarea creada con exito",
  "newTask": {
    "id": 1,
    "numero": 1,
    "descripcion": "Aprender Node.js"
  }
}
```

## ⚙️ Instalación local

Clonar repositorio:

```
git clone https://github.com/TU-USUARIO/api-crud-node.js-express.git
```

Entrar al proyecto:

```
cd api-crud-node.js-express
```

Instalar dependencias:

```
npm install
```

Ejecutar proyecto:

```
npm run dev
```

## 🔑 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```
PGUSER=usuario
PGPASSWORD=password
PGHOST=localhost
PGPORT=5432
PGDATABASE=nombre_db
PORT=3000
```

## 🛡️ Características del proyecto

* CRUD completo de tareas
* Validación de datos con express-validator
* Sanitización de inputs
* Manejo centralizado de errores
* Documentación automática con Swagger
* Seguridad básica con Helmet
* Base de datos PostgreSQL
* Deploy en Railway

## 📄 Licencia

Proyecto de práctica para aprendizaje de backend con Node.js.
