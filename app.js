const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
/* const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const itineraryController = require('./controllers/itineraryController'); */

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });


// app.use(session(sess));

 app.engine('handlebars', hbs.engine);
 app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

// Add routes for Handlebars views
app.use(routes);
 app.get('/', (req, res) => {
 res.render('main');
 });

// app.get('/login', (req, res) => {
//   res.render('login');
// });

// app.get('/register', (req, res) => {
//   res.render('register');
// });

// app.get('/create', (req, res) => {
//   res.render('create');
// });

// app.get('/edit', (req, res) => {
//   res.render('edit');
// });


/* // Use controllers for routes
app.use('/auth', authController);
app.use('/user', userController);
app.use('/itinerary', itineraryController); */

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
