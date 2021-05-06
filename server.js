const express = require('express');
const mysql = require('mysql2');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({});
const passport = require('passport');
//const sequelize = require('./config/connection');

// Server port
const PORT = process.env.PORT || 3001;

// App creation
const app = express();

// Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
// app.engine('handlebars', hbs.engine);
=======
app.use(express.static("public"));
>>>>>>> af0c3abd6c48189166b623627779d0d661c2d98e


// Passport
//app.use(require('serve-static')(__dirname + 'public'));
//app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    }));

//app.use(express.static('public'))
// var template = Handlebars.compile("./views/layouts/homepage.handlebars")
// console.log(template)
app.get('/recipe', (req, res) => {
    const payload = {body: req.params.recipe}
     res.render('recipes')
    // console.log("hello")
    // res.send(payload)
    });

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('homepage', {layout : 'main'});
    });

// app.use((req, res) => {
//     res.status(404).end();
// });

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});