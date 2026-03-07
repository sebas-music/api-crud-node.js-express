const { body, param } = require("express-validator");

const validationBody = [
  body("numero")
    .exists()
    .withMessage("El campo numero es obligatorio")
    .isInt({ min: 1 })
    .withMessage("Error debe ser un numero entero y mayor que 0")
    .toInt(),
  body("descripcion")
    .optional()
    .isLength({ min: 3 })
    .withMessage("La descripción debe tener al menos 3 caracteres")
    .trim()
    .escape(),
];

const validationId = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("El ID debe ser un numero entero")
    .toInt(),
];

module.exports = { validationBody, validationId };
