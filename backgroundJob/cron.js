require('dotenv').config()
var CronJob = require('cron').CronJob;
const nodemailer = require("nodemailer");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
let timeParsed = `11 2 * * * `
var job = new CronJob(timeParsed, function() {
  
    newsapi.v2.topHeadlines({
        country: 'id'
      }).then(response => {
        let mailTransporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', 
            secure: false, 
            requireTLS: true,
            auth: {
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        })
        const email = ['amoswijaya728@gmail.com', 'amos.jay09@gmail.com']
        email.map(mail => {
            let mailDetails = {
                from: 'mailnews728@gmail.com',
                to: mail,
                subject: 'Daily News',
                text: JSON.stringify(response),
            };
    
            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log('Error Occurs', err);
                } else {
                    console.log('Email sent successfully');
                }
            });
        })
      });


}, null, true, 'Asia/Jakarta');
// job.start()
module.exports = job