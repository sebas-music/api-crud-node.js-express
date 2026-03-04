const pg = require("../config/db");

//consultar datos
const getTasks = async () => {
  try {
    const res = await pg.query("SELECT * FROM tareas");
    return res.rows;
  } catch (error) {
    throw error;
  }
};

//crear datos
const createTask = async (numero, descripcion) => {
  try {
    const res = await pg.query(
      "INSERT INTO tareas (numero, descripcion) VALUES ($1, $2) RETURNING *",
      [numero, descripcion],
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  }
};

//actualizar datos
const updateTask = async (id, numero, descripcion) => {
  try {
    const res = await pg.query(
      "UPDATE tareas SET numero = $2, descripcion = $3 WHERE id = $1 RETURNING *",
      [id, numero, descripcion],
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  }
};

//eliminar datos
const deleteTask = async (id) => {
  try {
    const res = await pg.query("DELETE FROM tareas WHERE id = $1 RETURNING *", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  }
};

//consultar datos
const getTaskById = async (id) => {
  try {
    const res = await pg.query("SELECT * FROM tareas WHERE id = $1", [id]);
    return res.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
};
