const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controller/userController');
router.route('/').get(getUsers).post(createUser);
router.route('/:id').put(updateUser).get(getSingleUser).delete(deleteUser);
router.route('/:id/friend/:friendID').put(addFriend).delete(removeFriend);

module.exports = router;