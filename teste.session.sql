CREATE TABLE IF NOT EXISTS  pessoa(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  idade INT
);

INSERT INTO pessoa(nome, idade)
VALUES
  ('Maria', 70)
  ('João', 30),
  ('Pedro', 20),
  ('Joana', 15);

