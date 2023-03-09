const connection = require('../config/connection');
const { User, Thought } = require('../models');
const userData = [
  {
    "username": "liz",
    "email": "liz@gmail.com",
    "thoughts": [],
    "friends": []
  },
  {
    "username": "gina",
    "email": "gina@gmail.com",
    "thoughts": [],
    "friends": []
  },
  {
  "username": "rob",
  "email": "rob@gmail.com",
  "thoughts": [],
  "friends": []
  }
];
const thoughtData = [
  {
    thoughtText: "here is a thought",
    username: "liz",
    reactions: [
      {
        reactionBody: "that's deep",
        username: "rob",
      },
      {
      reactionBody: "I like that",
      username: "gina",
      },
    ],
  },
]


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  

  // Add courses to the collection and await the results
  await User.collection.insertMany(userData);
  console.log(userData);
  
  await Thought.collection.insertMany(thoughtData);
  console.log(thoughtData)
  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
