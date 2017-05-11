import * as express from 'express';
import Question from '../models/questions';

let router = express.Router();

router.get('/', (req, res) => {
  Question.find().then((questions) => res.json(questions));
});

router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
  .then((foundquestion) => res.json(foundquestion));
});

router.get('/lessons/:id/questions', (req, res) => {
  Question.find({lessionID: req.params.id})
  .then((matches) => res.json(matches));
});

router.post('/', (req, res) => {
  let newQuestion = new Question();
  newQuestion.qTitle = req.body.qTitle;
  newQuestion.qContent = req.body.qContent;
  newQuestion.qDate = req.body.qDate;
  newQuestion.userID = req.body.userID;
  newQuestion.lessionID = req.body.lessionID;
  newQuestion.clickCount = req.body.clickCount;
  newQuestion.save().then((createdquestion) => res.json(createdquestion));
});

router.post('/:id', (req, res) => {
  Question.findById(req.params.id).then((foundquestion) => {
    foundquestion.qTitle = req.body.qTitle;
    foundquestion.qContent = req.body.qContent;
    foundquestion.qDate = req.body.qDate;
    foundquestion.userID = req.body.userID;
    foundquestion.lessionID = req.body.lessionID;
    foundquestion.clickCount = req.body.clickCount;
    foundquestion.save().then((savedquestion) => res.json(savedquestion));
  });
});

router.delete('/:id', (req, res) => {
  Question.remove({_id: req.params.id})
  .then((deletedQuestion) => res.json(deletedQuestion))
  .catch((err) => res.json(err));
});

router.get('/search/:search', (req, res) => {
  Question.find({$or: [{qContent: {"$regex": req.params.search, "$options": "i"}},
  {qTitle: {"$regex": req.params.search, "$options": "i"}}]})
  .then((matches) => res.json(matches))
  .catch((err) => res.json(err));
});

export default router;
