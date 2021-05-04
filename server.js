const express = require('express');
const mysql = require('mysql2');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({});
const passport = require('passport');

// Server port
const PORT = process.env.PORT || 3001;

// App creation
const app = express();

// App parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// App passport
app.use(passport.initialize());
app.use(passport.session());

// App handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});