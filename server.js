const express = require('express');
const mysql = require('mysql2');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    }));

app.use(express.static('public'))
// var template = Handlebars.compile("./views/layouts/homepage.handlebars")
// console.log(template)


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