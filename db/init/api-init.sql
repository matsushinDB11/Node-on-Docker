-- CREATE DATABASE sample1;
-- USE sample1;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT,
  PRIMARY KEY (id)
);

INSERT INTO items (name) VALUES
     ( 'Mercedes' ), ('Redbull'), ('Maclaren'),
     ('RacingPoint'), ('Renault'), ('Ferrari'),
     ('AlphaTauri'), ('AlfaRomeo'), ('Hass'), ('Williams');