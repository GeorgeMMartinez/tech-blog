const { Post } = require('../models');

const postdata =
  [
    {
      "postTitle": "Safari Dying?",
      "postContent": "Been seeing articles how Safari should follow IE but i still like it",
      "userId": 1
    },
    {
      "postTitle": "Mac vs PC",
      "postContent": "Starting a Coding Bootcamp and wondering if i should stick to Mac",
      "userId": 2
    },
    {
      "postTitle": "How to Download RAM?",
      "postContent": "Need more RAM on my macbook pro and someone said to just download more?",
      "userId": 3
    }
  ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;