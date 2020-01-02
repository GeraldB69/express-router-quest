// routes/comments.js
const express = require('express');
const fakeComments = require('../data/comments');

const router = express.Router({mergeParams: true});


// GET /post/12/comments
router.get('/', function (req, res, next) {
  const postId = Number(req.params.number);
  const foundComment = fakeComments.filter((comment) => 
    comment.post_id === postId
  );
  if (!foundComment) {
    return res.status(404).json({
      error: 'Comment not found',
    });
  }
  return res.json(foundComment);
})

// GET /post/12/comments/123
router.get('/:cid', function (req, res, next) {
  const postId = Number(req.params.number);
  const commentId = Number(req.params.cid);
  const foundComment = fakeComments
    .filter((comment) => comment.post_id === postId)
    .find((comment) => comment.id === commentId);
  if (!foundComment) {
    return res.status(404).json({
      error: 'Comment not found',
    });
  }
  return res.json(foundComment);
})

module.exports = router;
