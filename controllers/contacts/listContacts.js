const contactOperations = require("../../model/index");

const listContact = async (req, res, next) => {
  try {
    const result = await contactOperations.listContacts();
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

module.exports = listContact;
