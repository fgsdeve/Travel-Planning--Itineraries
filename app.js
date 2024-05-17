const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

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

// Static routes first
app.get('/about-us', (req, res) => {
  res.render('main', {
    layout: 'main',
    title: 'About Us',
    content: `
      Welcome to our travel planning and itineraries platform! We are dedicated to helping you plan the perfect trip. 
      Whether you are looking for a weekend getaway or a long vacation, our platform offers comprehensive tools and resources 
      to make your travel planning seamless and enjoyable.

      Our mission is to provide travelers with reliable, up-to-date information on destinations worldwide. From the best attractions 
      to visit, to top-rated hotels and must-see places, we have it all covered. Our team of travel experts works tirelessly to 
      gather and curate the best travel content to ensure you have an unforgettable travel experience.

      Join us on this journey and start planning your dream trip today!
    `
  });
});

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/create', (req, res) => {
  res.render('create');
});

app.get('/edit', (req, res) => {
  res.render('edit');
});

// Add routes for Handlebars views
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
