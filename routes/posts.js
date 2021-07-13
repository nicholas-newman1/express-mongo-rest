const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find().then((posts) => res.json(posts));
});

router.post('/', (req, res) => {
  new Post({
    title: req.body.title,
    description: req.body.description,
  })
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get('/:postId', (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
});

router.delete('/:postId', (req, res) => {
  Post.delete({ _id: req.params.postId })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

router.patch('/:postId', (req, res) => {
  Post.updateOne({ _id: req.params.postId }, { $set: req.body })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

module.exports = router;
