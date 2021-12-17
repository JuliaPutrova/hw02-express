const contactShema = require("../schemas/contactsValidate");

const validation = (schema) => {
  return async (req, res, next) => {
    const { error } = contactShema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
    }
    next();
  };
};

module.exports = validation;
