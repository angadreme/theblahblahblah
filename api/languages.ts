import * as express from 'express';
import Language from '../models/language';

let router = express.Router();

router.get('/course/:id/languages', (req, res) => {
  Language.find({courseId: req.params.id})
  .then((matches) => res.json(matches));
});

router.get('/', (req, res) => {
  Language.find().then((lessons) => res.json(lessons));
});

router.post('/', (req, res) => {
  let newLanguage = new Language();
  newLanguage = req.body.courseId;
  newLanguage.lName = req.body.lName;
  newLanguage.icon = req.body.icon;
  newLanguage.save().then((createdLanguage) => res.json(createdLanguage));
});

router.get('/:id', (req, res) => {
  Language.findById(req.params.id)
  .then((foundLanguages) => res.json(foundLanguages));
});

router.post('/:id', (req, res) => {
  Language.findById(req.body.id).then((foundLanguage) => {
    foundLanguage.courseId = req.body.courseId;
    foundLanguage.lName = req.body.lName;
    foundLanguage.icon = req.body.icon;
    foundLanguage.save().then((savedLanguage) => res.json(savedLanguage));
  });
});

export default router;
