const mongoose = require('./index');

const Schema = mongoose.Schema;
const imageSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
  versionKey: false,
});

const Image = mongoose.model('images', imageSchema);

module.exports = Image;