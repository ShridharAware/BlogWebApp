const express = require("express");

const { blogsController } = require("../controllers");

const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    await blogsController.createBlog(req, res);
  })
  .get(async (req, res) => {
    await blogsController.getBlogs(req, res);
  });

module.exports = router;
