module.exports = (app) => {
    const banner = require("../controllers/admin/banner.controller.js");
    const category = require("../controllers/admin/category.controller.js");
    const productImage = require("../controllers/admin/productImage.controller.js");
    const testimonials = require("../controllers/admin/testimonials.controllers");
  
    const router = require("express").Router();
  
    router.post("/addBanner", banner.create);
    router.get("/getBanner", banner.findAll);
  
    router.post("/addCategory", category.create);
    router.get("/getCategory", category.findAll);
  
    router.post("/addProductImage", productImage.create);
    router.get("/getProductImage", productImage.findAll);
  
    router.post("/addTestimonials", testimonials.create);
    router.get("/getTestimonials", testimonials.findAll);
  
    app.use("/api/aparra", router);
  };
  