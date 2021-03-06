var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cheerupSchema = new Schema({
  userId: String,
  visualmedia: String,
  body: { type: String, maxlength: 139 },
  createdat: { type: Date, required: true, default: Date.now },
  cheers: {type: Number, default: 0},
  keywords: [String]
});

var Cheerup = mongoose.model('Cheerup', cheerupSchema);

module.exports = Cheerup;
