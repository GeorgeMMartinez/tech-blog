const router = require('express').Router();
const { Post } = require('../../models/');
const admin = require('../../utils/admin.js');

// new post
router.post('/', admin, async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    console.log("New post created: ", newPost);
    res.json(newPost);
  } catch (err) {
    console.log('Failed to create post.', err);
    res.status(500).json(err);
  }
});

// update
router.put('/:id', admin, async (req, res) => {
  try {
    console.log('Here is the update: ', req.body);
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
router.delete('/:id', admin, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;