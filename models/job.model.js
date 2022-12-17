const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company: { type: 'string', required: true },
    postedAt: { type: 'string', required: true },
    city: { type: 'string', required: true },
    location: { type: 'string', required: true },
    role: { type: 'string', required: true },
    level: { type: 'string', required: true },
    contract: { type: 'string', required: true },
    position: { type: 'string', required: true },
    language: { type: Array, required: true }
}, { timestamps: true })

const JobModel = mongoose.model("job", jobSchema)

module.exports = { JobModel }