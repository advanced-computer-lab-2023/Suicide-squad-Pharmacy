const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    //ingredients (array), Price number, quantity number
  Name : {
    type: String,
    required: true,
    unique: true
  },
  ActiveIngredients: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true
  },
  Quantity: {
    type: Number,
    required: true,
    default: 0
  },
  Picture: {
    type: String,
    required: true
  },
  QuantitySold: {
    type: Number,
    required: true,
    default: 0
  },
  MedicalUse: {
    type: String,
    required: true,
    default: 0
  }
}, { timestamps: true });

const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;