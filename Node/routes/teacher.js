var express = require('express');
var router = express.Router();
var Quiz = require('../models/quiz')
var AttemptQuiz= require('../models/attemptquiz');
var Assignment = require('../models/assign');
var Student = require('../models/student');
var SubmitAssignment = require('../models/subassign')
var Marks = require('../models/marks')
var Material = require('../models/material')
const cors = require('./cors');
/* GET teacher listing. */
router.get('/', function(req, res, next) {
  res.send('This is a teacher router');
});
router.get('/viewattquiz', function(req, res, next) {
  AttemptQuiz.find({}).populate('question').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get('/quiz/:id', function(req, res, next) {
  AttemptQuiz.find({ _id: req.params.id }).populate('question').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});

router.get('/viewattassign', function(req, res, next) {
  SubmitAssignment.find({}).populate('question').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get('/viewassign',cors.cors, function(req, res, next) {
  Assignment.find({}).exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get('/assign/:id',cors.cors, function(req, res, next) {
  Assignment.find({_id: req.params.id }).exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});

router.get('/materials', function(req, res, next) {
  Material.find({}).exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});

/* POST Requests */

router.post('/addquiz', function(req, res, next) {
  Quiz.create(req.body)
        .then((quiz) => {
            console.log('Quiz has been Added ', quiz);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
        }, (err) => next(err))
        .catch((err) => next(err));
});


router.post('/addassign',cors.cors, function(req, res, next) {
  Assignment.create(req.body)
  .then((assign) => {
      console.log('Assignment has been Added ', assign);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(assign);
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.post('/addmat', function(req, res, next) {
  Material.create(req.body)
  .then((mat) => {
      console.log('Material path has been Added  ', mat);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(mat);
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.post('/addmarks', function(req, res, next) {
  Marks.create(req.body)
        .then((marks) => {
            console.log('Marks has been Added ', marks);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(marks);
        }, (err) => next(err))
        .catch((err) => next(err));
});

// PUT opertaions
router.put('/marks/:id/:number', function(req, res, next) {
  Marks.findOneAndUpdate({ _id: req.params.id }, { marks: req.params.number }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

router.put('/attquiz/:aid/question/:qid', function(req, res, next) {
  AttemptQuiz.findOneAndUpdate({ _id: req.params.aid }, { question: req.params.qid }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

router.put('/attassign/:subid/question/:qid', function(req, res, next) {
  SubmitAssignment.findOneAndUpdate({ _id: req.params.subid }, { question: req.params.qid }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
router.put('/attassign',cors.cors, function(req, res, next) {
  Assignment.findOneAndUpdate({ _id: req.body.id }, { title: req.body.title },{ question: req.body.question }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

router.put('/marks/:mid/marks/:id', function(req, res, next) {
  Student.findOneAndUpdate({_id: req.params.mid }, { marks: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
// DELETE opertaions

router.delete('/delquiz/:id', function(req, res, next) {
  Quiz.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});

router.delete('/delassign/:id',cors.cors, function(req, res, next) {
  Assignment.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});

router.delete('/delmetrial/:id', function(req, res, next) {
  Material.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});

router.delete('/delmarks/:id', function(req, res, next) {
  Marks.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});
module.exports = router;
