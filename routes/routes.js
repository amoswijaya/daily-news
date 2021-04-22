const News = require('../controller/news')
const SubcriberControllers = require('../controller/subsciber')

const route = require('express').Router()

route.get('/newsdaily', News.getNews)
route.get('/subscriber', SubcriberControllers.checkEmail)
route.post('/subscriber', SubcriberControllers.addSubscriber)
route.delete('/subscriber', SubcriberControllers.unSubs)

module.exports = route