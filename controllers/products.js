const Product = require('../models/product')



exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{pageTitle: 'افزودن محصول'})
}

exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getShopData = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('shop' , {pageTitle : 'فروشگاه', products : products})
    })
}

