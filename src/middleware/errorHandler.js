const {errorResponse} = require("../utils/response");

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  errorResponse(res,"Error en el servidor",500)
}

module.exports = errorHandler;
