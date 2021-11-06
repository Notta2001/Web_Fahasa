const Product = require('../models/Product.js')
const { multipleMongooseToObject, mongooseToObject} = require('../../utils/mongoose.js')
const { response } = require('express')
class NewsController {

    // [GET] /news
    index(req, res, next) {
        //res.json({
            //name: 'test'
        //})
        Product.find({})
            .then(products => {
                //res.json(products)
                res.render('products', {products: multipleMongooseToObject(products)})
            })
            .catch(next)
        //res.render('news')
    }

    // [GET] /news/:slug
    show(req, res, next) {
        //res.send(req.params.slug)
        //console.log(req.params.slug)
        Product.findOne({slug: req.params.slug})
            .then(product => {
                res.render('product_detail', {product: mongooseToObject(product)})
            })
            .catch(next)
    }

    create(req, res, next) {
        res.render('product_create')
    }

    // [POST] products/store
    store(req, res, next) {
        //res.send(req.body)
        const formData = req.body
        const product = new Product(formData)
        product.save()
            .then(() => res.redirect('/products'))
            .catch(error => {
            })
        
    }
}

module.exports = new NewsController