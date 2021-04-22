require('dotenv').config()
const cors = require('cors');
const express = require('express');
const job = require('./backgroundJob/cron');
const route = require('./routes/routes');
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(route)
job.start()

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))