const newsRouter = require("./news.route.js")
const siteRouter = require("./site.route.js")
const productsRouter = require("./products.route.js")

function route(app) {

    app.use('/news', newsRouter)

    app.use('/products', productsRouter)
    
    app.use('/', siteRouter)
}

module.exports = route
