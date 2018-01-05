CREATE TABLE S_Responses (
    id SERIAL PRIMARY KEY,
    username VARCHAR(200),
    survey_id INTEGER,
    FOREIGN KEY (survey_id) REFERENCES s_surveys(id)
)