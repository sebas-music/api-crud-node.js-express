const taskModel = require("../models/taskModels");

//consultar datos
const getTasks = async (req, res, next) => {
  try {
    const task = await taskModel.getTasks();
    res.json(task);
  } catch (error) {
    next(error);
  }
};

//crear datos
const createTask = async (req, res, next) => {
  try {
    const { numero, descripcion } = req.body;
    const newTask = await taskModel.createTask(numero, descripcion);
    res.status(201).json({message: "Tarea creada con exito", newTask});
  } catch (error) {
    next(error);
  }
};

//actualizar datos
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { numero, descripcion } = req.body;
    const task = await taskModel.updateTask(id, numero, descripcion);
     if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.status(200).json({message: "Tarea actualizada con exito", task});
  } catch (error) {
    next(error);
  }
};

//eliminar datos
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskModel.deleteTask(id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea eliminada con exito!", task });
  } catch (error) {
    next(error);
  }
};

//consultar datos
const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskModel.getTaskById(id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea encontrada con exito!", task });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
