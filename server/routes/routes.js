module.exports = (app) => {
    const banner = require("../controllers/admin/banner.controller.js");
    const category = require("../controllers/admin/category.controller.js");
    const trustedPartner = require("../controllers/admin/trustedPartner.controller.js");
    const productImage = require("../controllers/admin/productImage.controller.js");
    const testimonials = require("../controllers/admin/testimonials.controllers");
    const crockeryUnit = require("../controllers/admin/productImage/CrockeryUnit.controller");
    const doors = require("../controllers/admin/productImage/Doors.controller");
    const kidsBedroom = require("../controllers/admin/productImage/KidsBedroom.controller");
    const poojaUnit = require("../controllers/admin/productImage/PoojaUnit.controller");
    const storageWardrobe = require("../controllers/admin/productImage/StorageWardrobe.controller");
    const studyTable = require("../controllers/admin/productImage/StudyTable.controller");
    const tVUnit = require("../controllers/admin/productImage/TVUnit.controller");
    const vanityVan = require("../controllers/admin/productImage/VanityVan.controller");    
  
    const router = require("express").Router();
  
    router.post("/addBanner", banner.create);
    router.get("/getBanner", banner.findAll);
  
    router.post("/addCategory", category.create);
    router.get("/getCategory", category.findAll);

    router.post("/addTrustedPartner", trustedPartner.create);
    router.get("/getTrustedPartner", trustedPartner.findAll);
  
    router.post("/addModularKitchen", productImage.create);
    router.get("/getModularKitchens", productImage.findAll);
  
    router.post("/addTestimonials", testimonials.create);
    router.get("/getTestimonials", testimonials.findAll);

    router.post("/addCrockeryUnit", crockeryUnit.create);
    router.get("/getCrockeryUnit", crockeryUnit.findAll);

    router.post("/addDoors", doors.create);
    router.get("/getDoors", doors.findAll);

    router.post("/addKidsBedroom", kidsBedroom.create);
    router.get("/getKidsBedroom", kidsBedroom.findAll);

    router.post("/addPoojaUnit", poojaUnit.create);
    router.get("/getPoojaUnit", poojaUnit.findAll);

    router.post("/addStorageWardrobe", storageWardrobe.create);
    router.get("/getStorageWardrobe", storageWardrobe.findAll);

    router.post("/addStudyTable", studyTable.create);
    router.get("/getStudyTable", studyTable.findAll);

    router.post("/addTVUnit", tVUnit.create);
    router.get("/getTVUnit", tVUnit.findAll);

    router.post("/addVanityVan", vanityVan.create);
    router.get("/getVanityVan", vanityVan.findAll);
  
    app.use("/api/aparra", router);
  };
  