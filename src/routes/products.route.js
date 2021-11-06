const express = require('express')
const router = express.Router()

const productsController = require('../app/controllers/ProductsController.js')

router.post('/store', productsController.store)
router.get('/create', productsController.create)
router.get('/:slug', productsController.show)
router.get('/', productsController.index)

module.exports = router