const Joi = require("joi");

const contactShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "gmail", "ru"] },
    })
    .required(),
  phone: Joi.string().required(),
});

module.exports = contactShema;
