INSERT INTO Cliente ( nome, email, senha, cpf, sexo, data_nascimento) VALUES 
    ('Ana Clara Dias', 'emailbacana01@gmail.com', 'senhabacana01', 12345678910, 'f', '1981-01-01'),
    ('Beatriz Jordão', 'emailbacana02@gmail.com', 'senhabacana02', 12345678910, 'f', '1982-01-01'),
    ('Cecília Montes', 'emailbacana03@hotmail.com', 'senhabacana03', 12345678910, 'f', '1983-01-01'),
    ('Diana Carvalho', 'emailbacana04@ymail.com', 'senhabacana04', 12345678910, 'f', '1984-01-01'),
    ('Emilly Fernandes', 'emailbacana05@bol.com', 'senhabacana05', 12345678910, 'f', '1985-01-01'),
    ('Fernanda Oliveira', 'emailbacana06@udr66.com', 'senhabacana06', 12345678910, 'f', '1986-01-01'),
    ('Gabrielle Costa', 'emailbacana07@uol.com', 'senhabacana07', 12345678910, 'f', '1987-01-01'),
    ('Hermione Granger', 'emailbacana08@gmail.com', 'senhabacana08', 12345678910, 'f', '1988-01-01'),
    ('Isnara Moutinho', 'emailbacana09@outlook.com', 'senhabacana09', 12345678910, 'f', '1989-01-01'),
    ('Joana Darc', 'emailbacana10@email.com', 'senhabacana10', 12345678910, 'f', '1990-01-01'),
    ('Kátia Amaral', 'emailbacana11@email.com', 'senhabacana11', 12345678910, 'f', '1991-01-01'),
    ('Lara Silva', 'emailbacana12@buscape.com.br', 'senhabacana12', 12345678910, 'f', '1992-01-01'),
    ('Maria Eduarda Cordeiro', 'emailbacana13@gmail.com', 'senhabacana13', 12345678910, 'f', '1993-01-01'),
    ('Natália Pacífico', 'emailbacana14@filosofia.com.br', 'senhabacana14', 12345678910, 'f', '1994-01-01'),
    ('Olívia Campos', 'emailbacana15@gmail.com', 'senhabacana15', 12345678910, 'f', '1995-01-01'),
    ('Patrícia Ribeiro', 'emailbacana16@outlook.com', 'senhabacana16', 12345678910, 'f', '1996-01-01'),
    ('Quésia Gomes', 'emailbacana17@email.com', 'senhabacana17', 12345678910, 'f', '1997-01-01'),
    ('Rosair Fernandes', 'emailbacana18@hotmail.com', 'senhabacana18', 12345678910, 'f', '1998-01-01'),
    ('Sônia Abrão', 'emailbacana19@inversor.com', 'senhabacana19', 12345678910, 'f', '1999-01-01'),
    ('Tatiana Schettinib', 'emailbacana20@gmail.com', 'senhabacana20', 12345678910, 'f', '2000-01-01');


INSERT INTO Livro (codigo, titulo, num_paginas, preco, formato, quantidade, categoria, descricao, editora, disponivel) VALUES
    (1, 'Harry Potter e a Pedra Filosofal', 208, 23.90, 'físico', 0, 'Fantasia', 'Bom demais!', 'Rocco', false),
    (2, 'Harry Potter e a Câmara Secreta', 224, 23.50, 'físico', 1, 'Fantasia', 'Bom demais!', 'Rocco', true),
    (3, 'Harry Potter e o Prisioneiro de Azkaban', 288, 31.90, 'físico', 12, 'Fantasia', 'Bom demais!', 'Rocco', true),
    (4, 'Harry Potter e o Cálice de Fogo', 480, 33.90, 'físico', 12, 'Fantasia', 'Bom demais!', 'Rocco', true),
    (5, 'Harry Potter e a Ordem da Fênix', 640, 45.90, 'físico', 12, 'Fantasia', 'Bom demais!', 'Rocco', true),
    (6, 'Harry Potter e o Enigma do Príncipe', 432, 30.90, 'físico', 12, 'Fantasia', 'Bom demais!', 'Rocco', true),
    (7, 'Harry Potter e as Relíquias da Morte', 512, 35.69, 'físico', 12, 'Fantasia', 'Bom demais!', 'Rocco', true),
    (8, 'O Senhor dos Aneis: A Sociedade do Anel', 576, 44.91, 'ebook', 23, 'Aventura', 'Muito interessante!', 'Harper Collins', true),
    (9, 'O Senhor dos Aneis: As Duas Torres', 464, 44.91, 'ebook', 34, 'Aventura', 'Muito interessante!', 'Harper Collins', true),
    (10, 'O Senhor dos Aneis: O Retorno do Rei', 528, 44.91, 'ebook', 45, 'Aventura', 'Muito interessante!', 'Harper Collins', true),
    (11, 'O Ladrão de Raios', 400, 25,83, 'ebook', 56, 'Fantasia', 'Muito legal!', 'Intrínseca', true),
    (12, 'O Mar de Monstros', 304, 17.09, 'ebook', 67, 'Fantasia', 'Muito legal!', 'Intrínseca', true),
    (13, 'A Maldição do Titã', 336, 14.00, 'ebook', 78, 'Fantasia', 'Muito legal!', 'Intrínseca', true),
    (14, 'A Batalha do Labirinto', 361, 27.47, 'ebook', 65, 'Fantasia', 'Incrível!', 'Intrínseca', true),
    (15, 'O Último Olimpiano', 384, 18.09, 'ebook', 54, 'Fantasia', 'Espetacular!', 'Intrínseca', true),
    (16, 'O Herói Perdido', 440, 38.85, 'físico', 43, 'Fantasia', 'Espetacular!', 'Intrínseca', true),
    (17, 'O Filho de Netuno', 432, 29.87, 'físico', 32, 'Fantasia', 'Espetacular!', 'Intrínseca', true),
    (18, 'A Marca de Atena', 480, 50.70, 'físico', 21, 'Fantasia', 'Espetacular!', 'Intrínseca', true),
    (19, 'A Casa de Hades', 496, 29.85, 'físico', 1, 'Fantasia', 'Espetacular!', 'Intrínseca', true),
    (20, 'O Sangue do Olimpo', 432, 29.86, 'físico', 0, 'Fantasia', 'Espetacular!', 'Intrínseca', false);

SELECT * FROM Livro WHERE editora = 'Harper Collins';
SELECT * FROM Livro WHERE descricao = 'Muito interessante!';
SELECT * FROM Livro WHERE formato = 'ebook';
SELECT * FROM Cliente WHERE nome LIKE 'Beatriz%';
SELECT * FROM Cliente WHERE email LIKE 'emailbacana0%';

DELETE FROM Livro WHERE id = 20;

UPDATE Livro SET descricao = 'Melhor de todos' WHERE codigo = 5;

SELECT quantidade, SUM(quantidade) FROM Livro GROUP BY Livro.id;
SELECT quantidade, SUM(quantidade) FROM Livro GROUP BY Livro.titulo, Livro.id HAVING quantidade > 30;

    