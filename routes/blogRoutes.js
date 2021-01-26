const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.get('/:date', blogController.blog_index_bydate);
router.post('/', blogController.blog_create_post);
router.delete('/:id', blogController.blog_delete);
router.get('/edit/:id/', blogController.blog_edit_get );
router.patch('/:id', blogController.blog_update);


module.exports = router;