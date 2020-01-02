const express = require('express');
const fakeTags = require('../data/tags');
const fakePosts = require('../data/posts');

const router = express.Router({mergeParams: true})


// Get a list of tags
router.get('/', (req, res) => {
  res.json(fakeTags);
});

// Get a single tag
router.get('/:tid', (req, res) => {
  const tagId = Number(req.params.tid);
  const foundTag = fakeTags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

// GET /tags/12/post
router.get('/:tid/posts', function (req, res, next) {
  const tagId = Number(req.params.tid);
  const foundPost = fakePosts
    .filter((post) => 
      post.tag_ids.includes(tagId)
    )
  if (!foundPost) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundPost);
});

module.exports = router;
