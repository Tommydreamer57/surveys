CREATE OR REPLACE FUNCTION public.get_survey(n integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$
DECLARE
Survey JSON;
Questions JSON;
BEGIN
SELECT * FROM S_Surveys into Survey
WHERE S_Surveys.id = n;
-- SELECT * FROM S_Questions into Questions
-- WHERE S_Questions.survey_id = id;
RETURN Survey;
END
$function$
;