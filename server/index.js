const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 3010
const CONNECTION_STRING = process.env.CONNECTION_STRING

app.use(bodyParser.json())
app.use(cors())

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
    console.log(req.params.id)
    const db = req.app.get('db')
    db.get_survey_by_id([req.params.id])
        .then(survey => {
            survey = survey[0]
            db.get_questions([req.params.id])
                .then(questions => {
                    survey.questions = questions
                    // console.log(survey)
                    // console.log(questions)
                    let counter = questions.length
                    questions.map(question => {
                        db.get_options([question.id])
                            .then(options => {
                                // console.log('OPTIONS')
                                // console.log(options)
                                question.options = options
                                survey.questions = questions
                                counter--
                                if (!counter) {
                                    survey.questions = questions
                                    console.log(survey)
                                    res.status(200).send(survey)
                                }
                            })
                            .catch(() => res.status(200).send(survey))
                    })
                })
                .catch(() => res.status(500).send(`survey ${survey.id} broke`))
        })
        .catch(() => res.status(500).send(`survey broke`))
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
