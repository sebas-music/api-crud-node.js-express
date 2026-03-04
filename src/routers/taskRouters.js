const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const { validationBody, validationId } = require("../validations/taskValidation");

router.get("/", taskControllers.getTasks);
router.post("/", validationBody, taskControllers.createTask,);
router.put("/:id",[validationId,validationBody], taskControllers.updateTask);
router.delete("/:id",validationId, taskControllers.deleteTask);
router.get("/:id",validationId, taskControllers.getTaskById);

module.exports = router;
