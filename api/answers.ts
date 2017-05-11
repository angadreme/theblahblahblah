import * as express from 'express';
import Answer from '../models/answers';

let router = express.Router();

router.get('/', (req, res) => {
  Answer.find().then((answers) => res.json(answers));
});

router.get('/:id', (req, res) => {
  Answer.findById(req.params.id)
  .then((foundanswer) => res.json(foundanswer));
});

router.get('/question/:id/answers', (req, res) => {
  Answer.find({lessionID: req.params.id})
  .then((matches) => res.json(matches));
});

router.post('/', (req, res) => {
  let newAnswer = new Answer();
  newAnswer.aDate = req.body.aDate;
  newAnswer.questionId = req.body.questionId;
  newAnswer.aContent = req.body.aContent;
  newAnswer.userId = req.body.userId;
  newAnswer.usefulCount = req.body.usefulCount;
  newAnswer.bestAnswer = req.body.bestAnswer;
  newAnswer.save().then((createdanswer) => res.json(createdanswer));
});

router.post('/:id', (req, res) => {
  Answer.findById(req.params.id).then((foundanswer) => {
    foundanswer.aDate = req.body.aDate;
    foundanswer.questionId = req.body.questionId;
    foundanswer.aContent = req.body.aContent;
    foundanswer.userId = req.body.userId;
    foundanswer.usefulCount = req.body.usefulCount;
    foundanswer.bestAnswer = req.body.bestAnswer;
    foundanswer.save().then((savedanswer) => res.json(savedanswer));
  });
});

router.delete('/:id', (req, res) => {
  Answer.remove({_id: req.params.id})
  .then((deletedanswer) => res.json(deletedanswer))
  .catch((err) => res.json(err));
});

router.get('/search/:search', (req, res) => {
  Answer.find({aContent: {"$regex": req.params.search, "$options": "i"}})
  .then((matches) => res.json(matches));
});

export default router;
