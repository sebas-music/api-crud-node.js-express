const pool = require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const taskRouters = require("./routers/taskRouters");
const errorHandler = require("./middleware/errorHandler");
const swaggerDocs = require("./config/swagger")
const { default: helmet } = require("helmet");
const app = express();
// Puerto dinámico: Railway asigna uno automáticamente
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(bodyParser.json());
swaggerDocs(app)
app.use("/task", taskRouters);
app.use(errorHandler);
app.get("/", (req,res) =>{
  res.redirect("/api-docs")
})
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});

pool.connect()
  .then(() => {
    console.log("✅ Conexión a la base de datos exitosa");
  })
  .catch((err) => {
    console.error("❌ Error en la conexión a la base de datos:", err.message);
    console.error(err.stack);
  });