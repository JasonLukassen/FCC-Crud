const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

// get all products
router.get('/', getProducts);
// get a single product by id
router.get('/:id', getProduct);
// create a new product
router.post('/', createProduct);
// update a product
router.put('/:id', updateProduct);
// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;