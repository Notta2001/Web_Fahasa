const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Product = new Schema({
    image: String,
    link: String,
    name: String,
    origin: String, 
    price: String,
    supplier: String,
    trademark: String, 
    slug: {type: String, slug: 'name', unique: true},
})

module.exports = mongoose.model('Production', Product)