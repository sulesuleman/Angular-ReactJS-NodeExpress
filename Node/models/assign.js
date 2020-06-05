var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var assignSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    question: {
        type: Array,
        required: true
    },
    });

module.exports = mongoose.model('Assignment', assignSchema);