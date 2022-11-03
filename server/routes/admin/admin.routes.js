module.exports = (app) => {
  const banner = require("../controllers/banner.controller.js");
  const category = require("../controllers/category.controller.js");
  const productImage = require("../controllers/productImage.controller.js");
  const testimonials = require("../controllers/testimonials.controller.js");

  const router = require("express").Router();

  router.post("/banner", banner.create);
  router.get("/banner", banner.findAll);

  router.post("/category", category.create);
  router.get("/category", category.findAll);

  router.post("/productImage", productImage.create);
  router.get("/productImage", productImage.findAll);

  router.post("/testimonials", testimonials.create);
  router.get("/testimonials", testimonials.findAll);

  app.use("/api/ias", router);
};
