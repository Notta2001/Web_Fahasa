const Product = require('../models/Product.js')

class NewsController {

    // [GET] /news
    index(req, res, next) {
        //res.json({
            //name: 'test'
        //})

        Product.find({})
            .then(products => res.json(products))
            .catch(next)
        //res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send("NEWS DETAIL!!!")
    }
}

module.exports = new NewsController