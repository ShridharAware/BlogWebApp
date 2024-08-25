const express = require("express");
const { categoriesController } = require("../controllers");
const router = express.Router();

router
  .route("/")
  .post((req, res) => {
    categoriesController.createCategory(req, res);
  })
  .get((req, res) => {
    categoriesController.getCategories(req, res);
  });

module.exports = router;
