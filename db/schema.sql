CREATE TABLE favorites (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    food_type VARCHAR(30) NOT NULL,
    dish_name VARCHAR(30) NOT NULL,
    cook_time BOOLEAN NOT NULL
);