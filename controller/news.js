const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
class News {
    static getNews(req, res) {
        newsapi.v2.topHeadlines({
            country: 'id'
          }).then(response => {
            res.send(response)
          });
    }
}

module.exports = News