var mongoose = require('mongoose');

var schema = mongoose.Schema;

var quizSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    questions: {
        type: Array,
        required: true,
    },
   
});
module.exports = mongoose.model('Quiz', quizSchema);