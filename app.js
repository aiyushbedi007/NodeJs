const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const enquiryRoutes = require('./routes/enquiryRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// routes
app.get('/', (req, res) => {
  res.render('home', { title: 'About' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Enquiry routes
app.use('/enquirys', enquiryRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
