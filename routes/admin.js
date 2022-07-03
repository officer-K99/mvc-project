const express = require('express')
const product = require('../controllers/products')

const router = express.Router()



router.get('/add-product' , product.getAddProduct )

router.post('/add-product' , product.postAddProduct)

module.exports = router
