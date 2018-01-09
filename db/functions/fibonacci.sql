CREATE OR REPLACE FUNCTION public.fibonacci(n integer)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
DECLARE
   counter INTEGER := 0 ; 
   i INTEGER := 0 ; 
   j INTEGER := 1 ;
BEGIN
 
 IF (n < 1) THEN
 RETURN 0 ;
 END IF; 
 
 LOOP 
 EXIT WHEN counter = n ; 
 counter := counter + 1 ; 
 SELECT j, i + j INTO i, j ;
 END LOOP ; 
 
 RETURN i ;
END ; 
$function$
;


CREATE OR REPLACE FUNCTION fibs (n INTEGER)
RETURNS INTEGER as $$
DECLARE
counter INTEGER := 0;
BEGIN
LOOP
EXIT WHEN counter = n;
counter := counter + 1;
INSERT INTO numbers (number)
VALUES (fibonacci(counter));
END LOOP;
RETURN n;
END
$$ LANGUAGE plpgsql;