import * as express from 'express';
import Email from '../models/emails';


let router = express.Router();

router.get('/:id', (req, res) => {
  Email.findById(req.params.id).then((foundToken) =>
  res.json(foundToken));

});

router.post('/', (req, res) => {
  Email.findOne({email: req.body.email}).then((foundEmail) =>
  res.json({token: foundEmail})).catch((err) =>
  res.json(err));
});












export default router;
