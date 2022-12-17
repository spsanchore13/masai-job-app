const express = require('express');
const { connection } = require('./config/db')
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const { routeJob } = require('./routes/job.route')

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome To Home")
})

app.use("/job", routeJob)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to db successfully")
    }
    catch (err) {
        console.log(err);
    }

    console.log(`listining on ${PORT}`);
})
