var mongoose = require('mongoose');

var schema = mongoose.Schema;

var attquizSchema = new schema({
    question: {
        type: mongoose.Types.ObjectId,
        ref: 'Quiz'
    },
    answers: {
        type: Array,
        required: true,
    },
   
   
});
module.exports = mongoose.model('AttemptQuiz', attquizSchema);