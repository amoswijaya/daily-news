require('dotenv').config()
var CronJob = require('cron').CronJob;
const nodemailer = require("nodemailer");
const moment = require('moment')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
const ejs = require('ejs')
let timeParsed = `44 21 * * * `
var job = new CronJob(timeParsed, function () {

    newsapi.v2.topHeadlines({
        country: 'id'
    }).then(response => {
        let mailTransporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })
        const news = response.articles.filter(news => news.urlToImage !== null)
        ejs.renderFile(__dirname + "/email.ejs", { data: news.slice(0, 10), time :moment().format('MMMM Do, YYYY') }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const email = ['amos.jay09@gmail.com', "amoswijaya728@gmail.com", "stanleywib20@gmail.com"]
                email.map(mail => {
                    let mailDetails = {
                        from: 'mailnews728@gmail.com',
                        to: mail,
                        subject: 'Daily News',
                        html: data
                    };

                    mailTransporter.sendMail(mailDetails, function (err, data) {
                        if (err) {
                            console.log('Error Occurs', err);
                        } else {
                            console.log('Email sent successfully');
                        }
                    });
                })
            }
        })
    });
}, null, true, 'Asia/Jakarta');
// job.start()
module.exports = job