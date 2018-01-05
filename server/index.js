const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 3010
const CONNECTION_STRING = process.env.CONNECTION_STRING

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => app.set('db', db))


// GET ALL SURVEYS
app.get(`/api/surveys`, (req, res) => {
    const db = req.app.get('db')
    db.get_surveys().then(surveys => {
        res.status(200).send(surveys)
    })
})
// GET ONE SURVEY
app.get(`/api/surveys/:id`, (req, res) => {
    const db = req.app.get('db')
    db.get_survey_by_id().then(survey => {
        res.status(200).send(survey[0])
    })
})
// CREATE SURVEY
app.post(`/api/create`, (req, res) => {
    const db = req.app.get('db')
    // db.create_survey(req.body).then(surveys => {
    //     res.status(200).send(surveys)
    // })
})
// RESPOND TO SURVEY
app.post(`/api/response/:id`, (req, res) => {
    const db = req.app.get('db')
    // db.create_survey(req.body).then(surveys => {
    //     res.status(200).send(surveys)
    // })
})
// GET SURVEY RESULTS
app.get(`/results/:id`, (req, res) => {
    const db = req.app.get('db')
    // db.create_survey(req.body).then(surveys => {
    //     res.status(200).send(surveys)
    // })
})


app.listen(PORT, () => console.log(`Surveys listening on port ${PORT}`))
