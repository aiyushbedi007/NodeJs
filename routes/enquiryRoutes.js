const express = require('express');
const enquiryController = require('../controllers/enquiryController');

const router = express.Router();

router.get('/create', enquiryController.enquiry_create_get);
router.get('/', enquiryController.enquiry_index);
router.get('/:date', enquiryController.enquiry_index_bydate);
router.post('/', enquiryController.enquiry_create_post);
router.delete('/:id', enquiryController.enquiry_delete);
router.get('/edit/:id/', enquiryController.enquiry_edit_get );
router.patch('/:id', enquiryController.enquiry_update);


module.exports = router;