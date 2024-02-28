const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controller/userController');
router.route('/').get(getUsers).post(createUser);
router.route('/:id').put(updateUser).get(getSingleUser).delete(deleteUser);

module.exports = router;