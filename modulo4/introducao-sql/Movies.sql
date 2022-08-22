CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    avaliation FLOAT NOT NULL
);

INSERT INTO Movies (id, name, synopsis, release_date, avaliation)
VALUES(
	'001',
	'Se Eu Fosse Você',
	'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
	'2006-01-06',
	7
);

INSERT INTO Movies (id, name, synopsis, release_date, avaliation)
VALUES(
	'002',
    'Doce de mãe',
    'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
    '2012-12-27',
    10
);

INSERT INTO Movies (id, name, synopsis, release_date, avaliation)
VALUES(
	'003',
    'Dona Flor e Seus Dois Maridos',
    'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
    '2012-12-27',
    8
);

INSERT INTO Movies (id, name, synopsis, release_date, avaliation)
VALUES(
	'004',
	'Deus é Brasileiro',
	'Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.',
	'2003-01-31',
	9
);

SELECT id, name, avaliation FROM Movies
WHERE id = 004;

SELECT * FROM Movies
WHERE name = 'Deus é Brasileiro';

SELECT id, name, avaliation FROM Movies
WHERE avaliation >= 7;

SELECT * FROM Movies 
WHERE name LIKE '%vida%';

SELECT * FROM Movies
WHERE name or  synopsis LIKE '%vida%';

SELECT * FROM Movies 
WHERE release_date < CURDATE();

SELECT * FROM Movies
WHERE (synopsis or name LIKE '%Dona%') AND avaliation > 7;