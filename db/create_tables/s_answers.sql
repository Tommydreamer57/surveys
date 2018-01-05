CREATE TABLE S_Answers (
    id SERIAL PRIMARY KEY,
    answer TEXT,
    question_id INTEGER,
    response_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES s_questions(id),
    FOREIGN KEY (response_id) REFERENCES s_responses(id)
)