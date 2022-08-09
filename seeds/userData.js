const { User } = require('../models');

const userdata =
  [
    {
      "username": "Matt",
      "password": "password"
    },
    {
      "username": "Jon",
      "password": "password"
    },
    {
      "username": "Carlos",
      "password": "password"
    }
  ];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;