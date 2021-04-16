require('dotenv').config()
const express = require('express');
const job = require('./backgroundJob/cron');
const route = require('./routes/routes');
const app = express()
const PORT = 3000


app.use(route)
job.start()

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))