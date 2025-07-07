const express = require("express");
const insight6Router = express.Router();
const insight6Controller = require("../controller/insight6");

insight6Router.get("/getById/:id", insight6Controller.getById);

module.exports = insight6Router;