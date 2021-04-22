const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
class News {
  static getNews(req, res) {
    newsapi.v2.topHeadlines({
      country: 'id'
    }).then(response => {
      const news = response.articles.filter(news => news.urlToImage !== null).slice(0, 10)
      res.send(news)
    });
  }
}

module.exports = News