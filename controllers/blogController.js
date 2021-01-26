const Blog = require('../models/blog');

const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_index_bydate = (req, res) => {
  const date = req.params.date;
  timestamp = date+'T00:00:00Z'
  Blog.find({
    "createdAt" : { "$gte" : new Date(timestamp) }
  }).sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
}

const blog_edit_get = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('edit', { blog: result, title: 'Edit Enquiry' });
    })
    .catch(err => {
      console.log(err);
      res.json({ redirect: '/404', title: 'Enquiry not found' });
    });
}

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  console.log(req.body);
  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  Blog.findByIdAndUpdate(id,{$set:req.body}) 
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });  
}


module.exports = {
  blog_index, 
  blog_create_get, 
  blog_create_post, 
  blog_delete,
  blog_edit_get,
  blog_update,
  blog_index_bydate, 
}