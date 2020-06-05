var mongoose = require('mongoose');

var schema = mongoose.Schema;

var headSchema = new schema({
    marks: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Marks', headSchema);