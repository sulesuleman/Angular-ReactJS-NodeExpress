var mongoose = require('mongoose');

var schema = mongoose.Schema;

var subassignSchema = new schema({
    question: {
        type: mongoose.Types.ObjectId,
        ref: 'Assignment'
    },
    answers: {
        type: Array,
        required: true,
    },
   
});
module.exports = mongoose.model('SubmitAssignment', subassignSchema);