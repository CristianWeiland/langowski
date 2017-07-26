CREATE TABLE users (
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username char(255),
	password char(255)
);

INSERT INTO users (username, password) VALUES ('Langowski', 'ae3784314f375645157903c0ce188a2b0bef88b5e9476f4c72513c1015f0b875');

CREATE TABLE employees(
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name char(128),
	gender char(1),
	age int,
	job char(64),
	phone char(16),
	salary char(16)
);

INSERT INTO employees (name, gender, age, job, phone, salary) VALUES ('Johnny Bravo', 'M', 32, 'Manager', '(41) 9999-9999', 'R$2.000,00');
INSERT INTO employees (name, gender, age, job, phone, salary) VALUES ('Lauren Holt', 'F', 37, 'Developer', '(41) 1234-5678', 'R$3.000,00');
INSERT INTO employees (name, gender, age, job, phone, salary) VALUES ('William King', 'M', 22, 'Developer', '(25) 99999-9999', 'R$2.250,00');
INSERT INTO employees (name, gender, age, job, phone, salary) VALUES ('Sarah Parker', 'F', 25, 'Analyst', '(41) 3333-3333', 'R$2.500,00');
INSERT INTO employees (name, gender, age, job, phone, salary) VALUES ('Paul Thompson', 'M', 28, 'Analyst', '(41) 98765-4321', 'R$2.500,00');
