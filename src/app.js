const pool = require("./config/db");
const express = require("express");
const taskRouters = require("./routers/taskRouters");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");
const swaggerDocs = require("./config/swagger");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

//configuracion global globales
app.use(helmet());
app.use(express.json());
swaggerDocs(app);

//rutas iniciales
app.use("/tasks", taskRouters);
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

//manejador de rutas no existentes
app.use(notFoundHandler);

//errores internos de servidor
app.use(errorHandler);

//conexion a la base de datos y servidor
pool.connect()
  .then(() => {
    console.log("✅ Conexión a la base de datos exitosa");

    app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
  });
  })
  .catch((err) => {
    console.error("❌ Error en la conexión a la base de datos:", err.message);
    console.error(err.stack);
  });
