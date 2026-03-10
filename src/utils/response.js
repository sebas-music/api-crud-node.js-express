const successResponse = (res, data, message = "Operacion con exito", status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, message = "Error", status = 500) => {
  return res.status(status).json({
    success: false,
    message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
