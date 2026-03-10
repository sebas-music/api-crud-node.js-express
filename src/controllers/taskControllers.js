const taskModel = require("../models/taskModels");
const {successResponse, errorResponse} = require("../utils/response");


//consultar datos
const getTasks = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const {tasks, total} = await taskModel.getTasks(limit,offset);

    const totalPages = Math.ceil(total/limit)

    successResponse(res,{
      tasks,
      pagination : {
        total,
        page,
        limit,
        totalPages
      }
    },"Lista de tareas")

  } catch (error) {
    next(error);
  }
};

//crear datos
const createTask = async (req, res, next) => {
  try {
    const { numero, descripcion } = req.body;
    const newTask = await taskModel.createTask(numero, descripcion);
    successResponse(res,newTask,"Tarea creada con exito", 201);
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
     return errorResponse(res,"Tarea no encontrada", 404);
    }
    successResponse(res,task,"Tarea actualizada con exito");
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
      return errorResponse(res,"Tarea no encontrada", 404);
    }
    successResponse(res,task,"Tarea eliminada con exito");
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
      return errorResponse(res,"Tarea no encontrada", 404);
    }
    successResponse(res,task,"Tarea encontrada con exito");
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
