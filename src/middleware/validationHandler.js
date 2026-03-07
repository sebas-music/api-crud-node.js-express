const { validationResult } = require("express-validator");

const validationHandler = (req, res, netx) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      succes: false,
      errors: errors.array(),
    });
  }

  netx();
};

module.exports = validationHandler;
