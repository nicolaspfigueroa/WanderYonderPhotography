const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/solo-project', { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose;