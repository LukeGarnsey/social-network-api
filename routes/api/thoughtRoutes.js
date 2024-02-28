const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
}= require('../../controller/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').put(updateThought).get(getSingleThought).delete(deleteThought);

module.exports = router;