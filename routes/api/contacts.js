const express = require("express");
const router = express.Router();
const contactShema = require("../../schemas");

const validation = require("../../middlewares");

const { json } = require("express");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactShema);

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateMiddleware, ctrl.addContact);

router.put("/:contactId", validateMiddleware, ctrl.updateById);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
