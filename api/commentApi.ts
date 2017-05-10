import * as express from 'express';
import Comments from '../models/comments';

let router = express.Router();


router.get('/', (req, res) => {
  Comments.find().then((foundComment) =>
  res.json(foundComment));
});

router.get('/:id', (req, res) => {
  Comments.findById(req.params.id)
  .then((foundComment) => res.json(foundComment));
});

router.get('/answers/:id/comment', (req, res) => {
  Comments.find({answerId: req.params.id})
  .then((foundComment) => res.json(foundComment));
});

router.post('/', (req, res) => {
  let newComment = new Comments();
  newComment.cDate = req.body.cDate;
  newComment.answerId = req.body.answerId;
  newComment.aContent = req.body.aContent;
  newComment.userId = req.body.userId;
  newComment.likeCount = req.body.likeCount;
  newComment.save().then((createComment) => res.json(createComment));
});

router.post('/:id', (req, res) => {
  Comments.findById(req.params.id).then((foundComment) => {
    foundComment.cDate = req.body.cDate;
    foundComment.answerId = req.body.answerId;
    foundComment.aContent = req.body.aContent;
    foundComment.userId = req.body.userId;
    foundComment.likeCount = req.body.likeCount;
    foundComment.save().then((saveComment) => res.json(saveComment));
  });
});

router.delete('/:id', (req, res) => {
  let commentId = req.params.id;
  Comments.remove({_id: commentId})
  .then(() => {
  res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
    });
  });


export default router;
