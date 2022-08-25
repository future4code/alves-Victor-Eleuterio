CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie (id)
);

-- 1.a) FOREIGN KEY é utilizado para fazer uma conexão com outra tabela;
 
INSERT INTO Rating (id, comment, rate, movie_id)
 VALUES (
	'002',
    'Muito bom!',
    7,
    '004'
 );
 
INSERT INTO Rating (id, comment, rate, movies_id)
 VALUES (
	'003',
    'A história é legal, mas não gostei dos atores...',
    8,
    '003'
 );
 
INSERT INTO Rating (id, comment, rate, movies_id)
 VALUES (
	'006',
    'Belo filme, ótimo roteiro.',
    9,
    '004'
 );
 
 -- 1.d);
 
 ALTER TABLE Movie DROP COLUMN avaliation;
 
 -- 1.e) Não é possível excluir, pois o filme está vinculado a uma avaliação em outra tabela.;
 
 CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
 
 -- 2.a) A tabela contém duas inforamções, um id de filme e um id de atore e conecta com a referência Movie(id) e Actor(id);
 
 -- 2.b);
 
 INSERT INTO MovieCast (movies_id, actor_id)
 VALUES(
	'002',
    '002'
 );
  INSERT INTO MovieCast (movies_id, actor_id)
 VALUES(
	'003',
    '003'
 );
  INSERT INTO MovieCast (movies_id, actor_id)
 VALUES(
	'004',
    '006'
 );
  INSERT INTO MovieCast (movies_id, actor_id)
 VALUES(
	'002',
    '006'
 );
  INSERT INTO MovieCast (movies_id, actor_id)
 VALUES(
	'004',
    '003'
 );
  INSERT INTO MovieCast (movies_id, actor_id)
 VALUES(
	'003',
    '002'
 );
 
 -- 2.c) Retorna um erro, pois não foi encontrado nenhum id nas referencias;
 
 -- 2.d);
 DELETE FROM Actor
 WHERE name = 'Glória Pires';
 
-- Retorna um erro, pois o ator está vinculado a um filme em outra tabela;

-- 3.a);
SELECT * FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- ON serve para corresponder uma colua de duas tabelas diferentes;

-- 3.b);
SELECT Movies.id, name, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- 4.a);
SELECT Movies.id, name, rate, comment FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id;

-- 4.b);
SELECT m.id as movies_id, m.name, mc.actor_id FROM Movies m
LEFT JOIN MovieCast mc ON mc.movies_id = m.id;

-- 4.c);
SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id);