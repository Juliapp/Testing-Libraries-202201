CREATE TABLE IF NOT EXISTS  Pessoa(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  idade INT
);

INSERT INTO Pessoa(nome, idade)
VALUES
  ('Maria', 70)
  ('João', 30),
  ('Pedro', 20),
  ('Joana', 15);

