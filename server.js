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

// Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Passport
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    }));



app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('homepage', {layout : 'main'});
    });

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});