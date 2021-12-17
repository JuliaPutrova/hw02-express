const contactOperations = require("../../model/index");
const { NotFound } = require("http-errors");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactOperations.removeContact(contactId);
    if (!result) {
      throw new NotFound("Not found");
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
