const { JobModel } = require('../models/job.model')

const getJob = async (req, res) => {

    const job = await JobModel.find(req.query)
    res.send(job)
}


const postJob = async (req, res) => {
    const date = new Date().toLocaleDateString()
    const job = new JobModel({ ...req.body, postedAt: date })
    job.save()
    res.send({ message: 'Job saved successfully', job })
}

const JobController = { postJob, getJob }
module.exports = { JobController }