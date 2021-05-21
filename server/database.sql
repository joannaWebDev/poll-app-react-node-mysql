DROP TABLE if exists voting_app;

CREATE TABLE voting_app (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
votes INT NOT NULL
);

SELECT * FROM voting_app;

INSERT INTO `voting_app` (name, votes)
VALUES 
('Gift One', 0 ),
('Gift Two', 0 );

SELECT * FROM voting_app;


UPDATE voting_app SET votes = votes + 1 WHERE id = ?;

    

SELECT 
    SUM(votes) 
FROM
    voting_app;


/*👇 new table*/

DROP TABLE if exists votes;

CREATE TABLE votes(
id SERIAL PRIMARY KEY,
optionName VARCHAR(50) NOT NULL
);

INSERT INTO votes (optionName) 
VALUES('Gift One');

SELECT COUNT(*) AS total from votes;

SELECT COUNT(*) AS opc1 from votes
WHERE optionName = 'Gift One';

SELECT COUNT(*) AS opc1 from votes
WHERE optionName = 'Gift Two';


DROP TABLE if exists voting_app;

CREATE TABLE voting_app(
id SERIAL PRIMARY KEY,
optionName VARCHAR(50) NOT NULL,
votes INT
);

INSERT INTO voting_app (optionName, votes) 
VALUES
('Gift One', 0),
('Gift Two', 0 );

SELECT 
    SUM(votes) 
FROM voting_app;

UPDATE voting_app 
SET 
    votes = votes + 1
WHERE
optionName = 'Gift One';



SELECT  SUM(votes)  
FROM voting_app 
WHERE optionName='Gift Two';

INSERT INTO voting_app (votes)  VALUES (0,1);
