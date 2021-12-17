const contactOperations = require("../../model/index");
const { NotFound } = require("http-errors");

const addContact = async (req, res, next) => {
  try {
    const result = await contactOperations.addContact(req.body);
    if (!result) {
      throw new NotFound("Not found");
    }
    res.json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
