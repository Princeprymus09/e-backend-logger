"use strict";

const router = require("express").Router();
const prefix = "/logs";

const middleware = require('../middleware');
const controller = require("../controllers/main.controller");
const JoiValidator = require('../validator/validation');
const rules = require('../validator/rules');

router.get(`${prefix}/`, middleware.auth.authenticateUser(), controller.all);
router.post(`${prefix}/`, JoiValidator(rules.postApi), middleware.auth.authenticateUser(), controller.create);
router.get(`${prefix}/:id`, middleware.auth.authenticateUser(), controller.info);
router.put(`${prefix}/:id`, JoiValidator(rules.postApi), middleware.auth.authenticateUser(), controller.update);
router.delete(`${prefix}/:id`, JoiValidator(rules.deleteApi), middleware.auth.authenticateUser(), controller.delete);

module.exports = router;
