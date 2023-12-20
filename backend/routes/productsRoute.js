const router = require("express").Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.getAllProducts);

router.get("/:_id", productsController.getProductById);

router.post("/", productsController.createProducts);

router.put("/:_id", productsController.updateProduct);

router.delete("/:_id", productsController.deleteProductById);

module.exports = router;
