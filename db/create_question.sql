INSERT INTO S_Questions (type, name, description, survey_id, previous_question_id, next_question_id)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *