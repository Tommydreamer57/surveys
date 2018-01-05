CREATE TABLE S_Questions (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    name VARCHAR(100),
    description VARCHAR(500),
    survey_id INTEGER,
    previous_question_id INTEGER,
    next_question_id INTEGER,
    FOREIGN KEY (survey_id) REFERENCES s_surveys(id),
    FOREIGN KEY (previous_question_id) REFERENCES s_questions(id),
    FOREIGN KEY (next_question_id) REFERENCES s_questions(id)
)