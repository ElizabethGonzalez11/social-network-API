const router = require('express').Router();
const {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/friend/:Id/friend
router.route('/:userId/friend').post(addFriend);

// /api/user/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').delete(removeFriend);

module.exports = router;