const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    sucess: false,
    message: "Demasiadas solicitudes, intenta mas tarde",
  },
});

module.exports = rateLimiter;
