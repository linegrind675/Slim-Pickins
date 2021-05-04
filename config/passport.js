const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
    function(user_name, password, done){
        user_name.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
        });
    }
));