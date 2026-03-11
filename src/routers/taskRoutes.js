const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const {validationBody,validationId} = require("../validations/taskValidation");
const validationHandler = require("../middleware/validationHandler");

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     tags: [Tareas]
 *     summary: Obtener todas las tareas
 *     description: Retorna las tareas de la base de datos con paginacion
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: Numero de pagina
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Cantidad de registros
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Lista de tareas obtenidas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/respuestaListaTareas'
 *       404:
 *         description: Ruta no encontrada
 *       500:
 *         description: Error en el servidor
 */

router.get("/", taskControllers.getTasks);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   get:
 *     tags: [Tareas]
 *     summary: Obtener tarea registrada por ID
 *     description: Retorna una tarea especifica segun el ID proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarea encontrada con exito
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/tareaId'
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error en el servidor
 */

router.get(
  "/:id",
  validationId,
  validationHandler,
  taskControllers.getTaskById,
);

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     tags: [Tareas]
 *     summary: Crear nueva tarea
 *     description: Se crea una nueva tarea con los datos ingresados correctamente
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/crearTarea'
 *     responses:
 *       201:
 *         description: Tarea creada con exito
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/tareaCreada'
 *       400:
 *         description: Datos invalidos
 *       500:
 *         description: Error en el servidor
 */

router.post("/", validationBody, validationHandler, taskControllers.createTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     tags: [Tareas]
 *     summary: Actualizar tarea existente
 *     description: Actualizar tarea si el ID corresponde a una tarea registrada
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea
 *         schema:
 *           type: integer
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/modificarTarea'
 *     responses:
 *       200:
 *         description: Tarea actualizada con exito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/actualizarTarea'
 *       400:
 *         description: Datos invalidos
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error en el servidor
 */

router.put(
  "/:id",
  [validationId, validationBody],
  validationHandler,
  taskControllers.updateTask,
);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     tags: [Tareas]
 *     summary: Eliminar tarea por ID
 *     description: Se elimina una tarea segun el ID registrado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tarea eliminada con exito
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error en el servidor
 */

router.delete(
  "/:id",
  validationId,
  validationHandler,
  taskControllers.deleteTask,
);

module.exports = router;
