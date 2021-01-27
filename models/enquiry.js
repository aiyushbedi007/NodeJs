const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enquirySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
  raisedby: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Enquiry = mongoose.model('Enquiry', enquirySchema);
module.exports = Enquiry;