CREATE DATABASE form;

CREATE TABLE usuario(
    idcliente serial PRIMARY KEY,
    nombre varchar(50),
    email varchar(60),
    asunto varchar(60),
    mensaje text
);