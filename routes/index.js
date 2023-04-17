const express = require('express');
const router = express.Router();
const mainController = require("../controllers/main_controller");

router.post('/products/create',mainController.createProduct);
router.get('/products',mainController.getProducts);
router.get("/products/:id/update_quantity",mainController.updateProduct);
router.get('/products/:id',mainController.deleteProduct)



module.exports = router;