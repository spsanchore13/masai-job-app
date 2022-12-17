const { Router } = require('express');
const { JobController } = require('../Controllers/job.controller')
const routeJob = Router()

routeJob.get("/", JobController.getJob)
routeJob.post("/", JobController.postJob)



module.exports = { routeJob }