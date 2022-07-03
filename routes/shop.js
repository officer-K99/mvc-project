const product = require('../controllers/products')

const express = require('express')

const shop = express.Router()


shop.get('/' , product.getShopData)


module.exports = shop