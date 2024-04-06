
CREATE TABLE users(
    id INTEGER SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INTEGER
);
-- 1 TO 1 RELATIONSHIP
-- 1 TO MANY RELATIONSHIP
-- MANY TO MANY RELATIONSHIP

CREATE TABLE todos(
    id INTEGER SERIAL PRIMARY KEY,
    description VARCHAR(200) NOT NULL,
    status VARCHAR(20) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE projects(
    id INTEGER SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL
)

CREATE TABLE users_with_projects(
    user_id INTEGER,
    project_id INTEGER,
    PRIMARY KEY (user_id, project_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREGIN KEY (project_id) REFERENCES projects(id)
)