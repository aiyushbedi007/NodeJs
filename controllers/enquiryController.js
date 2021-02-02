const Enquiry = require('../models/enquiry');

const enquiry_index = (req, res) => {
  Enquiry.find().sort({ createdAt: -1 })
    .then(result => {
      // res.render('index', { enquirys: result, title: 'All enquirys' });
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const enquiry_index_bydate = (req, res) => {
  const date = req.params.date;
  timestamp = date+'T00:00:00Z'
  Enquiry.find({
    "createdAt" : { "$gte" : new Date(timestamp) }
  }).sort({ createdAt: -1 })
    .then(result => {
      // res.render('index', { enquirys: result, title: 'All enquirys' });
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const enquiry_create_get = (req, res) => {
  res.render('create', { title: 'Create a new enquiry' });
}

const enquiry_edit_get = (req, res) => {
  const id = req.params.id;
  Enquiry.findById(id)
    .then(result => {
      // res.render('edit', { enquiry: result, title: 'Edit Enquiry' });
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({ redirect: '/404', title: 'Enquiry not found' });
    });
}

const enquiry_create_post = (req, res) => {
  const enquiry = new Enquiry(req.body);
  console.log(req.body);
  enquiry.save()
    .then(result => {
      res.redirect('/enquirys');
    })
    .catch(err => {
      console.log(err);
    });
}

const enquiry_delete = (req, res) => {
  const id = req.params.id;
  Enquiry.findByIdAndDelete(id)
    .then(result => {
      //res.json({ redirect: '/enquirys' });
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const enquiry_update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  Enquiry.findByIdAndUpdate(id,{$set:req.body}) 
    .then(result => {
      //res.redirect('/enquirys');
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });  
}


module.exports = {
  enquiry_index, 
  enquiry_create_get, 
  enquiry_create_post, 
  enquiry_delete,
  enquiry_edit_get,
  enquiry_update,
  enquiry_index_bydate, 
}