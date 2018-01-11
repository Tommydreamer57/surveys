CREATE TABLE S_Options (
    id SERIAL PRIMARY KEY,
    label TEXT,
    value INTEGER,
    question_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES s_questions(id)
)