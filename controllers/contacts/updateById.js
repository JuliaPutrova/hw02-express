const contactOperations = require("../../model/index");
const { NotFound } = require("http-errors");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactOperations.updateById(contactId, req.body);
    if (!result) {
      throw new NotFound("missing fields");
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
