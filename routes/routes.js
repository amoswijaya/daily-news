const News = require('../controller/news')

const route = require('express').Router()

route.get('/newsdaily', News.getNews)

module.exports = route