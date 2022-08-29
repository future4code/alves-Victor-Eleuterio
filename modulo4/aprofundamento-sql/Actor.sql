CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001", 
	"Tony Ramos",
	400000,
	"1948-08-25", 
	"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
	"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João Gomes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Algum ator aleatório",
    65415.33,
    "1899-05-12",
    "other"
);

SELECT * FROM Actor
WHERE gender = "female";

SELECT salary FROM Actor
WHERE name = "Tony Ramos";

SELECT * FROM Actor
WHERE gender = "invalid";

SELECT id, name, salary FROM Actor
WHERE salary >= 500000;

SELECT id, name FROM Actor
WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "a%") AND salary > 350000;

SELECT * FROM Actor 
WHERE name LIKE "%g%";

SELECT * FROM Actor 
WHERE name LIKE "%a%" or name LIKE "%g%" AND salary BETWEEN 350000 AND 900000; 

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- 1.d;
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2.a;
UPDATE Actor SET name = "Moacyr Rogerio", birth_date = "1958-06-20"
WHERE id = "003";

-- 2.b;
UPDATE Actor SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

-- 2.c;
UPDATE Actor SET 
name = "Juninho da Silva",
salary = 2500000,
birth_date = "1975-08-14" ,
gender = "male"
WHERE id = "005";


-- 2.d;
UPDATE Actor SET 
name = "Pedrinho"
WHERE id = jasd;

-- 3.a;
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";

-- 3.b;
DELETE FROM Actor 
WHERE gender = "male";

-- 4.a;
SELECT MAX(salary) FROM Actor;

-- 4.b; 
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

-- 4.c;
SELECT COUNT(*) FROM Actor 
WHERE gender = "female";

-- 4.d;
SELECT SUM(salary) FROM Actor;

-- 5.a;
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- 5.b;
SELECT id FROM Actor ORDER BY id DESC;

-- 5.c;
SELECT * FROM Actor ORDER BY salary ASC;

-- 5.d;
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; 

-- 5.e;
SELECT AVG(salary), gender
FROM Actor 
GROUP BY gender;
