const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const { validationBody, validationId } = require("../validations/taskValidation");

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 required:
 *                   - id
 *                   - numero
 *                   - descripcion
 *                 properties:
 *                   id:
 *                     type: integer
 *                     format: int32
 *                     example: 1
 *                   numero:
 *                     type: integer
 *                     example: 1
 *                   descripcion:
 *                     type: string
 *                     example: tarea 1
 */

router.get("/", taskControllers.getTasks);
router.post("/", validationBody, taskControllers.createTask,);
router.put("/:id",[validationId,validationBody], taskControllers.updateTask);
router.delete("/:id",validationId, taskControllers.deleteTask);
router.get("/:id",validationId, taskControllers.getTaskById);

module.exports = router;
