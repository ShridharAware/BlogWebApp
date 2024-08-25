const express = require("express");

const blogsRoute = require("./blogs.route");
const categoriesRoute = require("./categories.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/blogs",
    route: blogsRoute,
  },
  {
    path: "/categories",
    route: categoriesRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
