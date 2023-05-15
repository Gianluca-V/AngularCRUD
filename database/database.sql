CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies(
    id INT(11) not null AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(128),
    description VARCHAR(300),
    image VARCHAR(2048),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
