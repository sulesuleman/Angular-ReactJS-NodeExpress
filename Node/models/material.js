var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var materialSchema = new Schema({
   file: {
        type: String,
        required: true
    },
    });

module.exports = mongoose.model('Material', materialSchema);